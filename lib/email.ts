import nodemailer from 'nodemailer';

function isPlaceholderValue(value?: string) {
  if (!value) return true;
  const normalized = value.trim().toLowerCase();
  return (
    normalized.includes('example.com') ||
    normalized.includes('your-smtp-password') ||
    normalized.includes('change-me') ||
    normalized.includes('placeholder') ||
    normalized.includes('tbd')
  );
}

export async function sendLeadNotification({
  subject,
  html,
  text,
}: {
  subject: string;
  html: string;
  text: string;
}) {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPassword = process.env.SMTP_PASSWORD?.trim();
  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const fromEmail = process.env.FROM_EMAIL?.trim() ?? 'noreply@example.com';

  if (
    !smtpHost ||
    !smtpUser ||
    !smtpPassword ||
    !adminEmail ||
    isPlaceholderValue(smtpHost) ||
    isPlaceholderValue(smtpUser) ||
    isPlaceholderValue(smtpPassword) ||
    isPlaceholderValue(adminEmail)
  ) {
    return { ok: true, skipped: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT ?? '587'),
      secure: Number(process.env.SMTP_PORT ?? '587') === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      subject,
      text,
      html,
    });

    return { ok: true, skipped: false };
  } catch (error) {
    console.warn('Lead notification email could not be sent. Form submission was still accepted.', error);
    return { ok: false, skipped: true, error };
  }
}
