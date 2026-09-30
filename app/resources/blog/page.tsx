import type { Metadata } from 'next';
import { blogPosts } from '@/data/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Healthcare billing and revenue cycle education from Nexovia Health.',
  alternates: { canonical: '/resources/blog' },
};

export default function BlogPage() {
  return (
    <div className="container-shell section-pad">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Healthcare billing insights</h1>
      <p className="mt-4 max-w-2xl text-slate-600">This section contains placeholder educational articles intended to support content planning and future publishing.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Article</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
