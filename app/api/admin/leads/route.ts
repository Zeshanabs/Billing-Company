import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const cookieStore = await cookies();
  if (cookieStore.get('nexovia_admin_session')?.value !== 'authenticated') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const [contact, assessments] = await Promise.all([
    prisma.contactRequest.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.assessmentRequest.findMany({ orderBy: { createdAt: 'desc' } }),
  ]);

  return NextResponse.json({
    contactRequests: contact,
    assessmentRequests: assessments,
  });
}

export async function PATCH(request: Request) {
  const cookieStore = await cookies();
  if (cookieStore.get('nexovia_admin_session')?.value !== 'authenticated') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { table, id, status } = body;

  if (!table || !id || !status) {
    return NextResponse.json({ message: 'Missing table, id, or status.' }, { status: 400 });
  }

  if (table === 'contact') {
    await prisma.contactRequest.update({ where: { id: Number(id) }, data: { status } });
  }

  if (table === 'assessment') {
    await prisma.assessmentRequest.update({ where: { id: Number(id) }, data: { status } });
  }

  return NextResponse.json({ success: true });
}
