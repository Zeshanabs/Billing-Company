import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Placeholder terms of use for Nexovia Health. Final legal review is recommended before publication.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="container-shell section-pad max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Use</h1>
      <p className="mt-4 text-slate-600">This placeholder content is provided for drafting purposes and should be reviewed by legal counsel before publication.</p>
      <div className="mt-8 space-y-6 text-slate-700 leading-8">
        <p>Use of this website is subject to applicable law and the website owner’s final published terms. Content presented on this site is for informational purposes only and does not constitute legal, billing, or compliance advice.</p>
        <p>Users are responsible for ensuring their use of website forms and materials is appropriate for their practice, jurisdiction, and operational requirements.</p>
      </div>
    </div>
  );
}
