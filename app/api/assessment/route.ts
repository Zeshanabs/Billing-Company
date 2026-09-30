import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { assessmentSchema } from '@/lib/validation';
import { sendLeadNotification } from '@/lib/email';

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (record.count >= 5) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'local';

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const body = await request.json();
  const parse = assessmentSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json({
      message: 'Please correct the highlighted fields.',
      errors: parse.error.flatten().fieldErrors,
    }, { status: 400 });
  }

  const payload = parse.data;

  const created = await prisma.assessmentRequest.create({
    data: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      practiceName: payload.practiceName || null,
      email: payload.email,
      phone: payload.phone || null,
      specialty: payload.specialty || null,
      providerCount: payload.providerCount || null,
      ehr: payload.ehr || null,
      challenge: payload.challenge || null,
      message: payload.message || null,
      status: 'new',
    },
  });

  try {
    await sendLeadNotification({
      subject: 'New RCM assessment request',
      text: `Assessment request from ${payload.firstName} ${payload.lastName}. Practice: ${payload.practiceName || 'N/A'}. Email: ${payload.email}`,
      html: `<p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p><p><strong>Practice:</strong> ${payload.practiceName || 'N/A'}</p><p><strong>Email:</strong> ${payload.email}</p>`,
    });
  } catch (error) {
    console.warn('Assessment form saved successfully but admin email notification failed.', error);
  }

  return NextResponse.json({
    success: true,
    id: created.id,
    message: 'Thank you. Your request has been received. A member of the Nexovia Health team will follow up with you.',
  });
}
