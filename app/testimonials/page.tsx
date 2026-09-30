import type { Metadata } from 'next';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Placeholder testimonials for Nexovia Health. Replace with approved client feedback when available.',
  alternates: { canonical: '/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <div className="container-shell section-pad">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Testimonials</h1>
      <p className="mt-4 max-w-2xl text-slate-600">This page is intentionally prepared to accept verified client feedback when approved by the company. No fictional testimonials are used.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {['Approved testimonial placeholder', 'Client quote placeholder', 'Practice feedback placeholder'].map((quote) => (
          <div key={quote} className="card-surface p-6">
            <p className="text-slate-700 leading-8">“{quote}”</p>
            <p className="mt-5 text-sm font-medium text-slate-500">— Placeholder</p>
          </div>
        ))}
      </div>
      <div className="mt-12"><CTASection /></div>
    </div>
  );
}
