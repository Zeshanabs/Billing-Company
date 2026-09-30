import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { contactSchema } from '@/lib/validation';
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
  const parse = contactSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json({
      message: 'Please correct the highlighted fields.',
      errors: parse.error.flatten().fieldErrors,
    }, { status: 400 });
  }

  const payload = parse.data;

  const created = await prisma.contactRequest.create({
    data: {
      name: payload.name,
      email: payload.email,
      phone: payload.phone || null,
      company: payload.company || null,
      specialty: payload.specialty || null,
      message: payload.message,
      status: 'new',
    },
  });

  try {
    await sendLeadNotification({
      subject: 'New contact form submission',
      text: `New contact inquiry from ${payload.name}. Email: ${payload.email}. Company: ${payload.company || 'N/A'}`,
      html: `<p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Company:</strong> ${payload.company || 'N/A'}</p>`,
    });
  } catch (error) {
    console.warn('Contact form saved successfully but admin email notification failed.', error);
  }

  return NextResponse.json({
    success: true,
    id: created.id,
    message: 'Thank you. Your request has been received. A member of the Nexovia Health team will follow up with you.',
  });
}
