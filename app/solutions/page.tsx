import Link from 'next/link';
import type { Metadata } from 'next';
import { solutions } from '@/data/site';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Practice Solutions',
  description: 'Learn how Nexovia Health supports independent practices, specialty clinics, multi-provider groups, and practices working through aging A/R and denial challenges.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <div className="container-shell section-pad">
      <SectionHeading
        eyebrow="Solutions"
        title="Flexible support for healthcare organizations managing the financial side of care."
        description="The solutions below are built to help practices improve operational consistency, visibility, and billing follow-through."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {solutions.map((solution) => (
          <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="card-surface block p-6 transition hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-slate-900">{solution.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{solution.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
