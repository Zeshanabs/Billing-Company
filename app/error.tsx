'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="container-shell section-pad">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-rose-200 bg-rose-50 p-10 text-center shadow-[0_30px_80px_-35px_rgba(15,23,42,0.3)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">Error</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Something went wrong</h1>
        <p className="mt-4 text-slate-600">
          We hit a problem while loading this page. Please try again or return to the homepage.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
