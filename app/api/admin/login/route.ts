import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? '').trim();
  const password = String(body.password ?? '');

  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: 'Admin credentials are not configured.' }, { status: 500 });
  }

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('nexovia_admin_session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({ success: true });
}
