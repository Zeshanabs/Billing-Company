import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Placeholder cookie policy for Nexovia Health. Final review is recommended before publication.',
  alternates: { canonical: '/cookie-policy' },
};

export default function CookiePolicyPage() {
  return (
    <div className="container-shell section-pad max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Cookie Policy</h1>
      <p className="mt-4 text-slate-600">This page contains placeholder cookie-language that should be reviewed by counsel before final publication.</p>
      <div className="mt-8 space-y-6 text-slate-700 leading-8">
        <p>This website may use cookies or related technologies to improve site functionality, support analytics, and help maintain a better browsing experience.</p>
        <p>Users may configure browser preference settings to manage cookies. Final cookie settings and consent notices should be validated for the final production site.</p>
      </div>
    </div>
  );
}
