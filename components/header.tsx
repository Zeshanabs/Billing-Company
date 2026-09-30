'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/brand-logo';
import { navigation } from '@/data/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? 'bg-white/90 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.25)] backdrop-blur' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Nexovia Health home">
          <BrandLogo compact />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
            Talk to an RCM Expert
          </Link>
          <Link href="/rcm-assessment" className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
            Request a Free RCM Assessment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-slate-900" />
            <span className="block h-0.5 w-5 rounded-full bg-slate-900" />
            <span className="block h-0.5 w-5 rounded-full bg-slate-900" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/rcm-assessment" className="mt-4 rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white" onClick={() => setIsOpen(false)}>
              Request a Free RCM Assessment
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
