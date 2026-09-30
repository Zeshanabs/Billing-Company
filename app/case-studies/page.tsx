import type { Metadata } from 'next';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Placeholder case study archive for Nexovia Health as real client work is published.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <div className="container-shell section-pad">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Case studies</h1>
      <p className="mt-4 max-w-2xl text-slate-600">No verified client case studies are currently available. This section is intentionally structured as a placeholder until approved company results are ready to publish.</p>
      <div className="mt-12 rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.3)]">
        <h2 className="text-2xl font-semibold text-slate-900">Case studies coming soon</h2>
        <p className="mt-4 text-slate-600 leading-8">When real case studies are approved, this page can feature practice-specific examples, operational context, and outcome discussion without inventing performance numbers.</p>
      </div>
      <div className="mt-12"><CTASection /></div>
    </div>
  );
}
