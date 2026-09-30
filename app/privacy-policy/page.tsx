import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Placeholder privacy policy for Nexovia Health. Final legal review is recommended before publication.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-shell section-pad max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">This page contains temporary placeholder legal language and should be reviewed by counsel before launch.</p>
      <div className="mt-8 space-y-6 text-slate-700 leading-8">
        <p>Nexovia Health is committed to protecting the privacy of information shared through this website. This placeholder policy describes the general approach to collecting and using website information.</p>
        <p>Information provided through public contact and assessment forms is used to respond to inquiries and manage lead follow-up. Please do not submit patient-identifiable information through public forms.</p>
        <p>Use of this website should comply with applicable privacy, healthcare, and security requirements. Final legal and compliance review is recommended before publishing a production policy.</p>
      </div>
    </div>
  );
}
