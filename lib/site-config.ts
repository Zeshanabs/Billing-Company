export const siteConfig = {
  name: 'Nexovia Health',
  description:
    'Nexovia Health helps healthcare providers simplify medical billing, strengthen revenue cycle performance, and improve visibility across billing and reimbursement workflows.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@your-practice-domain.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '(TBD)',
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? 'TBD',
    hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? 'Mon-Fri, 8:00 AM - 6:00 PM ET',
  },
  legal: {
    footerNote: 'Placeholder content for review.',
  },
};
