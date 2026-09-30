'use client';

import { FormEvent, useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  practiceName: '',
  email: '',
  phone: '',
  specialty: '',
  providerCount: '',
  ehr: '',
  challenge: '',
  message: '',
};

export function AssessmentForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  function handleChange(field: string, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setSubmitMessage('');

    const response = await fetch('/api/assessment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrors(data.errors ?? {});
      setStatus('error');
      setSubmitMessage(data.message ?? 'Please review the form and try again.');
      return;
    }

    setForm(initialState);
    setStatus('success');
    setSubmitMessage('Thank you. Your request has been received. A member of the Nexovia Health team will follow up with you.');
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_35px_80px_-38px_rgba(15,23,42,0.3)]" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700">First Name</label>
          <input id="firstName" value={form.firstName} onChange={(e) => handleChange('firstName', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
          {errors.firstName ? <p className="mt-2 text-sm text-rose-600">{errors.firstName}</p> : null}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700">Last Name</label>
          <input id="lastName" value={form.lastName} onChange={(e) => handleChange('lastName', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
          {errors.lastName ? <p className="mt-2 text-sm text-rose-600">{errors.lastName}</p> : null}
        </div>
        <div>
          <label htmlFor="practiceName" className="mb-2 block text-sm font-medium text-slate-700">Practice Name</label>
          <input id="practiceName" value={form.practiceName} onChange={(e) => handleChange('practiceName', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <input id="email" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
          {errors.email ? <p className="mt-2 text-sm text-rose-600">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
          <input id="phone" type="tel" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        </div>
        <div>
          <label htmlFor="specialty" className="mb-2 block text-sm font-medium text-slate-700">Specialty</label>
          <input id="specialty" value={form.specialty} onChange={(e) => handleChange('specialty', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        </div>
        <div>
          <label htmlFor="providerCount" className="mb-2 block text-sm font-medium text-slate-700">Number of Providers</label>
          <input id="providerCount" value={form.providerCount} onChange={(e) => handleChange('providerCount', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        </div>
        <div>
          <label htmlFor="ehr" className="mb-2 block text-sm font-medium text-slate-700">Current Billing System / EHR</label>
          <input id="ehr" value={form.ehr} onChange={(e) => handleChange('ehr', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="mb-2 block text-sm font-medium text-slate-700">Primary Challenge</label>
        <input id="challenge" value={form.challenge} onChange={(e) => handleChange('challenge', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
        <textarea id="message" rows={5} value={form.message} onChange={(e) => handleChange('message', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        Please do not submit patient-identifiable information through this form.
      </div>

      <button type="submit" disabled={status === 'loading'} className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'loading' ? 'Submitting...' : 'Request My Assessment'}
      </button>

      {submitMessage ? (
        <p className={status === 'success' ? 'text-sm font-medium text-emerald-700' : 'text-sm font-medium text-rose-600'}>
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
