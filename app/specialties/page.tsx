import Link from 'next/link';
import type { Metadata } from 'next';
import { specialties } from '@/data/site';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Specialty Billing Support',
  description: 'Explore specialty-focused healthcare billing and RCM support for orthopedics, cardiology, dermatology, pediatrics, and other practice types.',
  alternates: { canonical: '/specialties' },
};

export default function SpecialtiesPage() {
  return (
    <div className="container-shell section-pad">
      <SectionHeading
        eyebrow="Specialties"
        title="Billing requirements differ by specialty."
        description="The following specialty examples are provided as placeholder content and can be replaced with Nexovia’s confirmed specialty list when available."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {specialties.map((specialty) => (
          <Link key={specialty.slug} href={`/specialties/${specialty.slug}`} className="card-surface block p-6 transition hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-slate-900">{specialty.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{specialty.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
