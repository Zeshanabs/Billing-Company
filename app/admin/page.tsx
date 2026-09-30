'use client';

import { useEffect, useState } from 'react';

type LeadRow = {
  id: number;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  practiceName?: string | null;
  specialty?: string | null;
  message?: string | null;
  status: string;
  createdAt: string;
  table?: 'contact' | 'assessment';
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [items, setItems] = useState<LeadRow[]>([]);

  async function loadLeads() {
    const response = await fetch('/api/admin/leads');
    if (!response.ok) {
      setLoggedIn(false);
      setLoading(false);
      return;
    }
    const data = await response.json();
    const combined = [
      ...(data.contactRequests ?? []).map((item: LeadRow) => ({ ...item, table: 'contact' })),
      ...(data.assessmentRequests ?? []).map((item: LeadRow) => ({ ...item, table: 'assessment' })),
    ];
    setItems(combined);
    setLoggedIn(true);
    setLoading(false);
  }

  useEffect(() => {
    const fetchLeads = async () => {
      await loadLeads();
    };

    void fetchLeads();
  }, []);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.message ?? 'Login failed.');
      return;
    }

    setLoggedIn(true);
    setLoading(false);
    await loadLeads();
  }

  async function updateStatus(table: 'contact' | 'assessment', id: number, status: string) {
    await fetch('/api/admin/leads', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ table, id, status }),
    });
    setItems((current) => current.map((item) => (item.id === id && item.table === table ? { ...item, status } : item)));
  }

  if (loading) {
    return <div className="container-shell section-pad text-slate-700">Loading...</div>;
  }

  if (!loggedIn) {
    return (
      <div className="container-shell section-pad">
        <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.3)]">
          <h1 className="text-3xl font-bold text-slate-900">Admin login</h1>
          <p className="mt-3 text-slate-600">Use the configured admin credentials to view incoming leads.</p>
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </div>
            {error ? <p className="text-sm text-rose-600">{error}</p> : null}
            <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container-shell section-pad">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Admin</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Lead dashboard</h1>
        </div>
        <button onClick={() => { document.cookie = 'nexovia_admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'; setLoggedIn(false); }} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Log out</button>
      </div>

      <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.25)]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-900">
              <tr>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Practice</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const displayName = (item.name ?? [item.firstName ?? '', item.lastName ?? ''].filter(Boolean).join(' ')) || 'Unknown';

                return (
                  <tr key={`${item.table}-${item.id}`} className="border-t border-slate-200">
                    <td className="px-4 py-3">{item.table === 'assessment' ? 'Assessment' : 'Contact'}</td>
                    <td className="px-4 py-3">{displayName}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.company ?? item.practiceName ?? '-'}</td>
                    <td className="px-4 py-3">{item.status}</td>
                    <td className="px-4 py-3">{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <select
                        value={item.status}
                        onChange={(event) => updateStatus(item.table ?? 'contact', item.id, event.target.value)}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-xs"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
