export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
};

export type Specialty = {
  slug: string;
  title: string;
  shortDescription: string;
};

export type Solution = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: 'medical-billing',
    title: 'Medical Billing',
    shortDescription: 'Accurate claim preparation, submission, tracking, and follow-up.',
    description:
      'Nexovia Health helps practices keep reimbursement moving with structured billing workflows, clean claim preparation, and proactive follow-up.',
  },
  {
    slug: 'medical-coding',
    title: 'Medical Coding',
    shortDescription: 'Coding support focused on accuracy, documentation alignment, and payer requirements.',
    description:
      'Coding support designed to improve documentation alignment and reduce preventable billing issues before claims are submitted.',
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Revenue Cycle Management',
    shortDescription: 'End-to-end oversight across the revenue cycle.',
    description:
      'From eligibility and coding to claims, payment posting, denials, and reporting, Nexovia helps practices manage the full billing lifecycle.',
  },
  {
    slug: 'denial-management',
    title: 'Denial Management',
    shortDescription: 'Reduce recurring issues and improve resolution of disputed claims.',
    description:
      'Identify denial causes, prioritize unresolved claims, and support clean-up workflows that improve claims performance over time.',
  },
  {
    slug: 'ar-management',
    title: 'A/R Management',
    shortDescription: 'Systematic follow-up to improve aging account recoveries.',
    description:
      'A/R follow-up and account review designed to reduce aging, improve accountability, and keep outstanding claims visible and manageable.',
  },
  {
    slug: 'credentialing',
    title: 'Credentialing & Enrollment',
    shortDescription: 'Support provider enrollment and payer participation workflows.',
    description:
      'Facilitate payer enrollment and provider credentialing tasks with organized, consistent follow-up and documentation tracking.',
  },
  {
    slug: 'eligibility-verification',
    title: 'Eligibility & Benefits Verification',
    shortDescription: 'Verify coverage and benefits before services are delivered.',
    description:
      'Check coverage and benefit information before care is rendered to improve claim readiness and reduce avoidable billing delays.',
  },
  {
    slug: 'prior-authorization',
    title: 'Prior Authorization',
    shortDescription: 'Support authorization steps and payer requirements.',
    description:
      'Coordinate pre-service authorization workflows with payer requirements and internal documentation needs.',
  },
  {
    slug: 'payment-posting',
    title: 'Payment Posting',
    shortDescription: 'Accurate reconciliation of payments, adjustments, and remits.',
    description:
      'Promote clean payment posting workflows so balances are updated accurately and insights remain actionable.',
  },
  {
    slug: 'medical-billing-audit',
    title: 'Medical Billing Audit',
    shortDescription: 'Review revenue-cycle workflows and identify weak points.',
    description:
      'Audit billing processes, coding practices, claims activity, denials, and A/R to uncover opportunities for improvement.',
  },
  {
    slug: 'patient-billing',
    title: 'Patient Billing Support',
    shortDescription: 'Support patient-facing billing workflows when applicable.',
    description:
      'Improve patient communication around balances, statements, and follow-up while reducing administrative burden on the practice team.',
  },
  {
    slug: 'rcm-consulting',
    title: 'RCM Consulting',
    shortDescription: 'Analyze performance and operational opportunities across the revenue cycle.',
    description:
      'Work with practice leaders to review workflows and identify improvement areas that support cleaner operations and better visibility.',
  },
];

export const specialties: Specialty[] = [
  { slug: 'orthopedics', title: 'Orthopedics', shortDescription: 'Billing and coding workflows tailored to orthopedic procedures and post-op documentation.' },
  { slug: 'cardiology', title: 'Cardiology', shortDescription: 'Complex coding, authorization, and payer workflow support for cardiac services.' },
  { slug: 'dermatology', title: 'Dermatology', shortDescription: 'High-volume visit and procedure billing requirements with documentation focus.' },
  { slug: 'gastroenterology', title: 'Gastroenterology', shortDescription: 'Procedure-heavy billing workflows and visit coding considerations.' },
  { slug: 'neurology', title: 'Neurology', shortDescription: 'Specialty-specific claims management and documentation review workflows.' },
  { slug: 'pediatrics', title: 'Pediatrics', shortDescription: 'Strong claims tracking and patient billing support for family-centered practices.' },
  { slug: 'internal-medicine', title: 'Internal Medicine', shortDescription: 'Workflow support for high-volume evaluation and management services.' },
  { slug: 'family-medicine', title: 'Family Medicine', shortDescription: 'Billing support for multi-service family practices and preventive care workflows.' },
  { slug: 'pain-management', title: 'Pain Management', shortDescription: 'Claims and authorization support for ongoing treatment plans and procedures.' },
  { slug: 'physical-therapy', title: 'Physical Therapy', shortDescription: 'Billing and documentation support for recurring therapy services and payer rules.' },
  { slug: 'behavioral-health', title: 'Behavioral Health', shortDescription: 'Operational support for therapy-focused practices and documentation consistency.' },
  { slug: 'radiology', title: 'Radiology', shortDescription: 'Workflow support for imaging services, authorizations, and payer communication.' },
  { slug: 'urology', title: 'Urology', shortDescription: 'Procedure coding review and follow-up support for office and surgical services.' },
  { slug: 'general-surgery', title: 'General Surgery', shortDescription: 'Billing support across pre-op, intra-op, and post-op service workflows.' },
];

export const solutions: Solution[] = [
  { slug: 'independent-practices', title: 'Independent Practices', description: 'Support for practices that need more consistent billing operations without adding internal overhead.' },
  { slug: 'specialty-clinics', title: 'Specialty Clinics', description: 'Workflow support designed around high-volume or procedure-heavy practice operations.' },
  { slug: 'multi-provider-groups', title: 'Multi-Provider Groups', description: 'Scalable RCM support for growing organizations balancing multiple providers and payer workflows.' },
  { slug: 'aging-ar', title: 'Aging A/R', description: 'Focused support for outstanding claims, delayed reimbursements, and backlog cleanup.' },
  { slug: 'denial-management', title: 'Denial Management', description: 'Operational oversight to identify recurring reasons and reduce future rework.' },
];

export const faqs = [
  { question: 'What is medical billing?', answer: 'Medical billing is the process of preparing, submitting, and following up on claims for healthcare services rendered. It includes coding, claim creation, payer communication, and payment reconciliation.' },
  { question: 'What is RCM?', answer: 'Revenue cycle management is the full process of managing a patient visit from registration and insurance verification through claim submission, payment posting, denial management, and reporting.' },
  { question: 'How does medical billing outsourcing work?', answer: 'An outsourcing partner receives and processes claim-related workflows on the practice’s behalf, often coordinating with the practice team, EHR, and payer communications.' },
  { question: 'What is denial management?', answer: 'Denial management focuses on identifying why claims are denied, addressing the root cause, and improving the process so issues are less likely to recur.' },
  { question: 'What is A/R follow-up?', answer: 'A/R follow-up is the process of reviewing open claims, identifying aging balances, and promoting timely payer action or resolution.' },
  { question: 'Can you work with our existing EHR?', answer: 'The right approach depends on the practice’s workflows, system setup, and operational needs. Nexovia can help evaluate how billing work fits with an existing system environment.' },
  { question: 'How does onboarding work?', answer: 'Onboarding usually includes workflow review, data collection, system setup, team communication, and a staged transition into ongoing operations.' },
  { question: 'What does an RCM assessment include?', answer: 'An assessment typically reviews claims flow, denials, A/R, coding, billing processes, eligibility, payment posting, and operational gaps that may affect revenue performance.' },
  { question: 'How is medical billing priced?', answer: 'Pricing varies based on workflow complexity, service model, volume, and the scope of support a practice needs. An initial assessment can help define the fit.' },
];

export const blogPosts = [
  { slug: 'what-is-revenue-cycle-management', title: 'What Is Revenue Cycle Management?', excerpt: 'A practical explanation of the full claims lifecycle and why clean workflow design matters.' },
  { slug: 'common-causes-of-medical-billing-denials', title: 'Common Causes of Medical Billing Denials', excerpt: 'Learn how eligibility, coding, documentation, and payer rules can affect claim outcomes.' },
  { slug: 'how-ar-aging-affects-practice-revenue', title: 'How A/R Aging Affects Practice Revenue', excerpt: 'Understand why delayed follow-up and aging balances can create operational strain.' },
  { slug: 'medical-coding-vs-medical-billing', title: 'Medical Coding vs Medical Billing', excerpt: 'Two related responsibilities that play different roles in revenue cycle performance.' },
  { slug: 'what-is-a-clean-claim', title: 'What Is a Clean Claim?', excerpt: 'Why clean claims are important and how billing workflows can reduce rework.' },
  { slug: 'why-eligibility-verification-matters', title: 'Why Eligibility Verification Matters', excerpt: 'A quick look at how insurance checks before care can prevent avoidable issues.' },
  { slug: 'understanding-prior-authorization', title: 'Understanding Prior Authorization', excerpt: 'What prior authorization does and where delays most often occur.' },
  { slug: 'how-medical-billing-outsourcing-works', title: 'How Medical Billing Outsourcing Works', excerpt: 'A provider-friendly overview of what changes when billing operations are outsourced.' },
];

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/specialties', label: 'Specialties' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export const trustBenefits = [
  'End-to-End Revenue Cycle Support',
  'Specialty-Focused Billing',
  'Transparent Reporting',
  'Experienced Billing Support',
  'Technology-Enabled Workflows',
];

export const problemCards = [
  'Claim denials',
  'Aging A/R',
  'Coding errors',
  'Eligibility issues',
  'Prior authorization delays',
  'Credentialing complexity',
  'Payment posting backlog',
  'Lack of billing visibility',
  'Administrative workload',
];

export const dashboardItems = [
  { label: 'Claims Submitted', value: '1,248', tone: 'emerald' },
  { label: 'Claims in Process', value: '386', tone: 'blue' },
  { label: 'Payments', value: '$672K', tone: 'slate' },
  { label: 'A/R', value: '$184K', tone: 'amber' },
  { label: 'Denials', value: '42', tone: 'rose' },
  { label: 'Collections', value: '94%', tone: 'teal' },
];

export const processSteps = [
  'Initial Conversation',
  'RCM Assessment',
  'Workflow Review',
  'Onboarding',
  'System/EHR Coordination',
  'Billing & Coding Operations',
  'Denial & A/R Management',
  'Reporting & Optimization',
];
