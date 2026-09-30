'use client';

import { FormEvent, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  specialty: '',
  message: '',
};

export function ContactForm() {
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

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrors(data.errors ?? {});
      setStatus('error');
      setSubmitMessage(data.message ?? 'Please correct the highlighted fields.');
      return;
    }

    setForm(initialState);
    setStatus('success');
    setSubmitMessage('Thank you. Your request has been received. A member of the Nexovia Health team will follow up with you.');
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_28px_70px_-35px_rgba(15,23,42,0.28)]" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
          <input id="contact-name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
          {errors.name ? <p className="mt-2 text-sm text-rose-600">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <input id="contact-email" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
          {errors.email ? <p className="mt-2 text-sm text-rose-600">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
          <input id="contact-phone" type="tel" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-slate-700">Practice / Company</label>
          <input id="contact-company" value={form.company} onChange={(e) => handleChange('company', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-specialty" className="mb-2 block text-sm font-medium text-slate-700">Specialty</label>
        <input id="contact-specialty" value={form.specialty} onChange={(e) => handleChange('specialty', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
        <textarea id="contact-message" rows={5} value={form.message} onChange={(e) => handleChange('message', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-500 focus:bg-white" />
        {errors.message ? <p className="mt-2 text-sm text-rose-600">{errors.message}</p> : null}
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        Please do not submit patient-identifiable health information through this form.
      </div>

      <button type="submit" disabled={status === 'loading'} className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {submitMessage ? (
        <p className={status === 'success' ? 'text-sm font-medium text-emerald-700' : 'text-sm font-medium text-rose-600'}>
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
