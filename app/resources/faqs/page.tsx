import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/faq-accordion';
import { faqs } from '@/data/site';

export const metadata: Metadata = {
  title: 'Billing FAQs',
  description: 'Review common questions about medical billing, coding, denials, credentialing, and revenue cycle management.',
  alternates: { canonical: '/resources/faqs' },
};

export default function ResourcesFAQsPage() {
  return (
    <div className="container-shell section-pad">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Frequently asked questions</h1>
      <div className="mt-10"><FAQAccordion items={faqs} /></div>
    </div>
  );
}
