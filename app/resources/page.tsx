import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts, faqs } from '@/data/site';
import { SectionHeading } from '@/components/section-heading';
import { FAQAccordion } from '@/components/faq-accordion';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore Nexovia Health blog posts, guides, FAQs, and healthcare RCM education resources.',
  alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
  return (
    <div className="container-shell section-pad">
      <SectionHeading eyebrow="Resources" title="Healthcare billing education and practical RCM guidance." description="The resources below support provider learning and operational awareness around billing, coding, claims, denials, and revenue management." />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.slug} className="card-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Article</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading title="FAQ" description="Common questions asked by practices evaluating billing and RCM operations." />
        <div className="mt-8">
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-4">
        <Link href="/resources/blog" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">View blog</Link>
        <Link href="/resources/faqs" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">View FAQs</Link>
        <Link href="/resources/guides" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">View guides</Link>
      </div>
    </div>
  );
}
