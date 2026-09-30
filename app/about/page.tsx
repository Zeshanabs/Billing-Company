import type { Metadata } from 'next';
import { CTASection } from '@/components/cta-section';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'About Nexovia Health',
  description: 'Learn about Nexovia Health, our approach to revenue cycle management, and how we support healthcare providers with clearer, more efficient billing operations.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div>
      <section className="container-shell section-pad">
        <SectionHeading eyebrow="About" title="A healthcare-first revenue cycle partner." description="Nexovia Health was created to support practices that need stronger visibility, cleaner workflows, and more time focused on patient care." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Who Nexovia Health is</h2>
            <p className="mt-4 text-slate-600 leading-8">Nexovia Health is a healthcare operations partner dedicated to helping providers manage the administrative side of revenue cycle performance. This includes claim readiness, denial follow-up, coding oversight, payment coordination, and reporting clarity.</p>
          </div>
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Our approach</h2>
            <p className="mt-4 text-slate-600 leading-8">We work to reduce friction in the revenue cycle by aligning billing workflows, operational visibility, and team communication around the practice’s real needs.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-shell">
          <SectionHeading title="How we work" description="Our process is built for provider clarity: review the current workflow, identify gaps, standardize billing process ownership, and improve reporting over time." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {['Workflow review', 'Operational alignment', 'Reporting and optimization'].map((item) => (
              <div key={item} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell section-pad">
        <SectionHeading title="Technology & workflow" description="Nexovia brings together process architecture, claim visibility, and practical billing operations to support better financial performance." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {['Claim tracking', 'Denial review', 'Payment posting', 'Operational reporting'].map((item) => (
            <div key={item} className="card-surface p-6 text-center text-lg font-medium text-slate-900">{item}</div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container-shell">
          <SectionHeading title="Why practices choose an RCM partner" description="Practices often need more consistent billing support, clearer accountability, and less manual overload in the day-to-day claims process." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {['Reduce administrative load', 'Improve billing visibility', 'Focus more on patient care'].map((item) => (
              <div key={item} className="rounded-[26px] border border-slate-700 bg-slate-800/60 p-6 text-lg font-medium">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
