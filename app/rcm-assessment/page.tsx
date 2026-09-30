import type { Metadata } from 'next';
import { AssessmentForm } from '@/components/assessment-form';

export const metadata: Metadata = {
  title: 'Free RCM Assessment',
  description: 'Request a free RCM assessment to review claims, denials, A/R, coding, billing workflows, eligibility, and revenue cycle performance.',
  alternates: { canonical: '/rcm-assessment' },
};

export default function RCMAssessmentPage() {
  return (
    <div className="container-shell section-pad">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">Assessment</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Find Out Where Your Revenue Cycle Is Losing Momentum.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">An RCM assessment can review areas such as claims, denials, A/R, coding, billing workflows, eligibility, payment posting, and broader revenue-cycle processes.</p>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.28)]">
            <ul className="space-y-3 text-slate-700">
              <li>• Claims</li>
              <li>• Denials</li>
              <li>• A/R</li>
              <li>• Coding</li>
              <li>• Billing workflows</li>
              <li>• Eligibility</li>
              <li>• Payment posting</li>
              <li>• Revenue-cycle processes</li>
            </ul>
          </div>
        </div>

        <AssessmentForm />
      </div>
    </div>
  );
}
