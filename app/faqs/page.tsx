import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/faq-accordion';
import { faqs } from '@/data/site';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about medical billing, coding, RCM, denials, A/R, and onboarding.',
  alternates: { canonical: '/faqs' },
};

export default function FAQPage() {
  return (
    <div className="container-shell section-pad">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Frequently asked questions</h1>
      <div className="mt-10"><FAQAccordion items={faqs} /></div>
    </div>
  );
}
