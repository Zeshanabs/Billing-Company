import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/data/site';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Medical Billing Services',
  description: 'Explore Nexovia Health medical billing, coding, RCM, denial management, A/R support, and consulting services for healthcare practices.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="container-shell section-pad">
      <SectionHeading
        eyebrow="Services"
        title="Healthcare revenue support that fits how your practice actually operates."
        description="From claim preparation to A/R follow-up and reporting, Nexovia supports the operations that keep providers paid and practices focused on patient care."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="card-surface block p-6 transition hover:-translate-y-1 hover:shadow-[0_35px_75px_-35px_rgba(15,23,42,0.3)]">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-teal-50" />
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.shortDescription}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
