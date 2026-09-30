import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Placeholder guides for healthcare revenue cycle education and readiness.',
  alternates: { canonical: '/resources/guides' },
};

export default function GuidesPage() {
  return (
    <div className="container-shell section-pad">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Guides</h1>
      <p className="mt-4 max-w-2xl text-slate-600">This section is reserved for future healthcare practice guides, onboarding resources, and operational reference briefs.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {['What Is Revenue Cycle Management?', 'Medical Billing Denials', 'Eligibility Verification', 'Credentialing Basics', 'Coding Workflow Review', 'Understanding A/R Aging'].map((guide) => (
          <div key={guide} className="card-surface p-6">
            <h2 className="text-xl font-semibold text-slate-900">{guide}</h2>
            <Link href="/resources" className="mt-5 block text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">Back to resources</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
