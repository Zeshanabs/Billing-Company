import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Nexovia Health',
  description: 'Contact Nexovia Health to discuss billing support, revenue cycle management, and practice operations support.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="container-shell section-pad">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Let’s talk about what your practice needs.</h1>
          <div className="mt-8 space-y-5 text-slate-600">
            <p>Phone: [COMPANY PHONE]</p>
            <p>Email: [COMPANY EMAIL]</p>
            <p>Address: [OFFICE ADDRESS]</p>
            <p>Business hours: [BUSINESS HOURS]</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
