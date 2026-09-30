import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Accessibility commitment and placeholder information for Nexovia Health.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <div className="container-shell section-pad max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Accessibility</h1>
      <p className="mt-4 text-slate-600">Nexovia Health aims to build inclusive digital experiences and will continue refining accessibility practices over time.</p>
      <div className="mt-8 space-y-6 text-slate-700 leading-8">
        <p>This website follows a WCAG-conscious approach with semantic markup, accessible form controls, strong color contrast, keyboard-friendly navigation, and reduced-motion support.</p>
        <p>If you encounter accessibility issues or need assistance using this site, please contact the Nexovia team.</p>
      </div>
    </div>
  );
}
