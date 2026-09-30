export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Nexovia Health logo">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[radial-gradient(circle_at_top,_#5dc9c0,_#0f3d5c_72%)] text-lg font-bold text-white shadow-lg shadow-slate-900/10">
        N
      </div>
      <div className="leading-none">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
          {compact ? 'Nexovia' : 'NEXOVIA'}
        </div>
        <div className="text-base font-bold tracking-[0.16em] text-slate-900">
          HEALTH
        </div>
      </div>
    </div>
  );
}
