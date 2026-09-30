import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { solutions } from '@/data/site';

export async function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return { title: 'Solution Not Found' };
  }

  return {
    title: solution.title,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="container-shell section-pad">
      <div className="mb-8 text-sm text-slate-500">
        <Link href="/solutions" className="font-medium text-slate-600 hover:text-slate-900">Solutions</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{solution.title}</span>
      </div>

      <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{solution.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{solution.description}</p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Common challenges</h2>
          <p className="mt-4 text-slate-600 leading-8">Growing practices often need more consistent billing visibility, stronger claim follow-up, and better operational coordination between administration and providers.</p>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">How Nexovia helps</h2>
          <p className="mt-4 text-slate-600 leading-8">Nexovia supports the internal process by coordinating billing operations, claim flow, and reporting so practice leaders can make better decisions about revenue performance.</p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/rcm-assessment" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Request a Free RCM Assessment</Link>
        <Link href="/solutions" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">View all solutions</Link>
      </div>
    </div>
  );
}
