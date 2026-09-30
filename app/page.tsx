import Link from 'next/link';
import { CTASection } from '@/components/cta-section';
import { HeroDashboard } from '@/components/hero-dashboard';
import { SectionHeading } from '@/components/section-heading';
import { blogPosts, faqs, problemCards, services, specialties, solutions, trustBenefits, processSteps } from '@/data/site';
import { FAQAccordion } from '@/components/faq-accordion';

export default function HomePage() {
  return (
    <>
      <section className="container-shell section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Revenue Cycle Management
            </div>
            <h1 className="max-w-xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Turn Your Revenue Cycle Into a Growth Engine.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Nexovia Health helps healthcare providers simplify medical billing, strengthen revenue cycle performance, reduce administrative burden, and improve visibility across the claims and reimbursement process.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/rcm-assessment" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Request a Free RCM Assessment
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                Explore Our Services
              </Link>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </section>

      <section className="bg-slate-900 py-8 text-slate-200">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {trustBenefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-slate-800 bg-slate-800/50 px-4 py-4 text-center text-sm font-medium text-slate-100">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Provider pain points"
            title="Your Practice Shouldn't Have to Chase Its Revenue."
            description="Operational friction can cause denials, delays, and poor cash flow. Nexovia helps providers reduce those issues with clear process ownership and stronger billing oversight."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {problemCards.map((card) => (
              <div key={card} className="card-surface p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-lg text-teal-700">•</div>
                <p className="text-lg font-semibold text-slate-900">{card}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="One partner across the revenue cycle"
            title="One Partner Across the Revenue Cycle."
            description="Our approach brings the pieces of the revenue cycle together so your team can focus more on patient care and less on admin bottlenecks."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Eligibility',
              'Coding',
              'Billing',
              'Claims',
              'Denials',
              'A/R',
              'Payment Posting',
              'Reporting',
            ].map((step, index) => (
              <div key={step} className="relative rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.35)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">0{index + 1}</div>
                <h3 className="text-lg font-semibold text-slate-900">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Support designed for your billing and reimbursement workflow."
            description="Nexovia helps practices and care teams manage the operational side of claims, payment flow, denials, and reporting."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="card-surface p-6">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-teal-50" />
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-flex text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-100">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How Nexovia works"
            title="A structured path from assessment to optimized operations."
            description="The best revenue-cycle systems are built on clarity, consistency, and visible follow-up."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="card-surface p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Step {index + 1}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Specialties"
            title="Billing requirements differ across specialties."
            description="From orthopedics to behavioral health and surgical practices, each specialty carries different billing and documentation demands."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {specialties.slice(0, 8).map((specialty) => (
              <Link key={specialty.slug} href={`/specialties/${specialty.slug}`} className="card-surface block p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)]">
                <h3 className="text-lg font-semibold text-slate-900">{specialty.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{specialty.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-900 text-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Solutions"
            title="Support for practices at every stage."
            description="Whether you’re a growing independent practice or a multi-provider group, Nexovia helps simplify the operational side of revenue management."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.slug} className="rounded-[28px] border border-slate-700 bg-slate-800/60 p-6">
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Nexovia"
            title="Clear operations. Better visibility. More time for patient care."
            description="Nexovia is built around transparent workflows, practical oversight, and a healthcare-first mindset."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Healthcare-focused approach', text: 'Operational support designed around provider workflows and the realities of reimbursement.' },
              { title: 'Transparent communication', text: 'Clear reporting and practical visibility so you understand where things stand.' },
              { title: 'Built for scalability', text: 'From smaller practices to larger groups, workflows are designed to adapt and improve.' },
            ].map((item) => (
              <div key={item.title} className="card-surface p-8">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-slate-900" />
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-100">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Assessment"
                title="Find Out Where Your Revenue Cycle Is Losing Momentum."
                description="A structured review can help uncover claims friction, documentation gaps, denial trends, and workflow inefficiencies before they affect cash flow."
              />
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_35px_80px_-36px_rgba(15,23,42,0.3)]">
              <ul className="space-y-3 text-slate-700">
                <li>• Claims</li>
                <li>• Denials</li>
                <li>• A/R</li>
                <li>• Coding</li>
                <li>• Billing workflows</li>
                <li>• Eligibility</li>
                <li>• Payment posting</li>
                <li>• Revenue-cycle processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Common questions from healthcare leaders."
          />
          <div className="mt-10">
            <FAQAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="Insights" title="Helpful revenue-cycle education." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {blogPosts.slice(0, 4).map((post) => (
              <div key={post.slug} className="card-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Article</p>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
