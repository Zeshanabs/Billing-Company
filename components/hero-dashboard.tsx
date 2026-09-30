import { dashboardItems } from '@/data/site';

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] rounded-[32px] border border-slate-200 bg-white/80 p-4 shadow-[0_35px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Revenue dashboard
          </p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">Operations overview</h3>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Demo data
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardItems.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-2xl font-bold text-slate-900">{item.value}</span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-teal-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-5 text-white">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm text-slate-300">Revenue trend</span>
            <span className="text-xs font-medium text-emerald-300">+12.4%</span>
          </div>
          <div className="flex h-28 items-end gap-2">
            {[32, 46, 52, 48, 75, 86, 110].map((bar, index) => (
              <div
                key={bar + index}
                className="w-full rounded-t-2xl bg-gradient-to-t from-teal-400 via-teal-300 to-cyan-200"
                style={{ height: `${bar}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-medium text-slate-500">Denial categories</p>
          <div className="mt-4 space-y-4">
            {[
              { label: 'Eligibility', amount: '31%' },
              { label: 'Coding', amount: '26%' },
              { label: 'Auth', amount: '22%' },
              { label: 'Other', amount: '21%' },
            ].map((segment) => (
              <div key={segment.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{segment.label}</span>
                  <span>{segment.amount}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-sky-500"
                    style={{ width: segment.amount }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
