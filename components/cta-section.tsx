import Link from 'next/link';

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.5)] md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
              Start with clarity
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              See where your revenue cycle is losing momentum.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rcm-assessment"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Request a Free RCM Assessment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to an RCM Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
