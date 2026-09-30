export default function Loading() {
  return (
    <div className="container-shell section-pad">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.3)]">
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-28 rounded-full bg-slate-200" />
          <div className="h-10 w-3/4 rounded-xl bg-slate-200" />
          <div className="h-4 w-full rounded-full bg-slate-200" />
          <div className="h-4 w-5/6 rounded-full bg-slate-200" />
          <div className="grid gap-4 pt-6 md:grid-cols-3">
            <div className="h-36 rounded-2xl bg-slate-200" />
            <div className="h-36 rounded-2xl bg-slate-200" />
            <div className="h-36 rounded-2xl bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
