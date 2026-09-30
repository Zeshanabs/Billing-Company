import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { specialties } from '@/data/site';

export async function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialties.find((item) => item.slug === slug);

  if (!specialty) {
    return { title: 'Specialty Not Found' };
  }

  return {
    title: specialty.title,
    description: specialty.shortDescription,
    alternates: { canonical: `/specialties/${specialty.slug}` },
  };
}

export default async function SpecialtyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const specialty = specialties.find((item) => item.slug === slug);

  if (!specialty) {
    notFound();
  }

  return (
    <div className="container-shell section-pad">
      <div className="mb-8 text-sm text-slate-500">
        <Link href="/specialties" className="font-medium text-slate-600 hover:text-slate-900">Specialties</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{specialty.title}</span>
      </div>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">Specialty support</p>
          <h1 className="text-4xl font-bold text-slate-900">{specialty.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{specialty.shortDescription}</p>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Billing challenges</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>• Documentation alignment</li>
            <li>• Coding complexity</li>
            <li>• Claim issues and follow-up</li>
            <li>• Payer-specific requirements</li>
          </ul>
        </div>
      </section>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Coding considerations</h2>
          <p className="mt-4 text-slate-600 leading-8">Procedure-heavy or documentation-intensive specialties can create workflow friction when claims are not built with payer expectations, coding consistency, and follow-up visibility in mind.</p>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Claim and denial issues</h2>
          <p className="mt-4 text-slate-600 leading-8">Routine issues can include claim edits, payer rejections, documentation mismatches, and insufficient follow-up on outstanding balances.</p>
        </div>
      </div>

      <div className="mt-16 rounded-[30px] border border-slate-200 bg-slate-100 p-8">
        <h2 className="text-3xl font-bold text-slate-900">How Nexovia can help</h2>
        <p className="mt-4 text-slate-600 leading-8">Nexovia supports revenue cycle operational consistency by improving workflow structure, documentation alignment, claim readiness, and denial follow-up processes for practices in a specialty environment.</p>
      </div>

      <div className="mt-12 flex gap-4 flex-wrap">
        <Link href="/rcm-assessment" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Request a Free RCM Assessment</Link>
        <Link href="/specialties" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">View all specialties</Link>
      </div>
    </div>
  );
}
