import type { Metadata } from 'next';
import { CTASection } from '@/components/cta-section';
import { SectionHeading } from '@/components/section-heading';
import { processSteps } from '@/data/site';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See how Nexovia Health helps practices move from an initial conversation through onboarding, billing operations, denial follow-up, and reporting.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorksPage() {
  return (
    <div className="container-shell section-pad">
      <SectionHeading
        eyebrow="How it works"
        title="A practical path from conversation to optimized billing operations."
        description="The client journey is designed to be transparent and efficient, with clear milestones and operational alignment throughout the process."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step} className="card-surface p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{index + 1}</div>
            <h2 className="text-xl font-semibold text-slate-900">{step}</h2>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
