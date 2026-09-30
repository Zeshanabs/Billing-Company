import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/site';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="container-shell section-pad">
      <div className="mb-8 text-sm text-slate-500">
        <Link href="/services" className="font-medium text-slate-600 hover:text-slate-900">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{service.title}</span>
      </div>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">Service</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">{service.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{service.description}</p>
        </div>
        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)]">
          <h2 className="text-xl font-semibold text-slate-900">What this service addresses</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Claim preparation and submission support</li>
            <li>• Billing workflow visibility</li>
            <li>• Denial reduction and follow-up</li>
            <li>• Operational consistency and reporting</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Problem statement</h2>
          <p className="mt-4 text-slate-600 leading-8">When claim workflows are inconsistent, provider teams often experience reimbursement delays, coding friction, payer follow-up backlog, and limited visibility across the revenue cycle.</p>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Service explanation</h2>
          <p className="mt-4 text-slate-600 leading-8">Nexovia supports practices with structured, consistent revenue-cycle operations that clarify the system behind claim creation, adjudication, denial management, and reporting.</p>
        </div>
      </section>

      <section className="mt-16 grid gap-8 xl:grid-cols-2">
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">What we handle</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>• Workflow review and support</li>
            <li>• Claims intake and prep</li>
            <li>• Follow-up tracking and issue prioritization</li>
            <li>• Reporting and operational visibility</li>
          </ul>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Workflow / process</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>• Assess current billing structure</li>
            <li>• Identify friction points</li>
            <li>• Standardize follow-up and documentation</li>
            <li>• Monitor claims status and reporting</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="card-surface p-8">
          <h2 className="text-xl font-semibold text-slate-900">Benefits</h2>
          <p className="mt-4 text-slate-600 leading-7">Better visibility, tighter workflow discipline, and less administrative confusion around claim movement and reimbursement.</p>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-xl font-semibold text-slate-900">Common challenges</h2>
          <p className="mt-4 text-slate-600 leading-7">Delayed claims, payer friction, coding gaps, authorization issues, and weak documentation handoff between teams.</p>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-xl font-semibold text-slate-900">Why it matters</h2>
          <p className="mt-4 text-slate-600 leading-7">A consistent revenue cycle helps protect provider cash flow and keep operational attention on patient care rather than claim backlog.</p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900">Related services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className="card-surface block p-6">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[30px] border border-slate-200 bg-slate-100 p-8">
        <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-6 space-y-4 text-slate-700">
          <div><strong>When is this service valuable?</strong><p className="mt-2">When a practice has too many claims moving without a clear process or needs stronger visibility into follow-up and reimbursement status.</p></div>
          <div><strong>Who does it help?</strong><p className="mt-2">Independent practices, specialty clinics, and provider groups looking for more consistency across claim and reimbursement operations.</p></div>
        </div>
      </section>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link href="/rcm-assessment" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Request a Free RCM Assessment</Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">Talk to an RCM Expert</Link>
      </div>
    </div>
  );
}
