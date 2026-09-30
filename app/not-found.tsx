import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-shell section-pad">
      <div className="mx-auto max-w-xl rounded-[30px] border border-slate-200 bg-white p-10 text-center shadow-[0_35px_80px_-35px_rgba(15,23,42,0.28)]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you were looking for may have moved or does not currently exist.</p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Return home</Link>
      </div>
    </div>
  );
}
