'use client';

import { useState } from 'react';

export function FAQAccordion({ items }: { items: Array<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-slate-900">{item.question}</span>
              <span className="text-xl text-slate-500">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? <div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
