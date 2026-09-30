import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { services, specialties } from '@/data/site';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <BrandLogo compact />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Supporting healthcare providers with smarter, more transparent revenue cycle management.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>{siteConfig.contact.phone}</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="transition hover:text-white">
                {siteConfig.contact.email}
              </a>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/rcm-assessment">RCM Assessment</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Specialties</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {specialties.slice(0, 6).map((specialty) => (
                <li key={specialty.slug}><Link href={`/specialties/${specialty.slug}`}>{specialty.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/resources/blog">Blog</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteConfig.name}. {siteConfig.legal.footerNote}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
