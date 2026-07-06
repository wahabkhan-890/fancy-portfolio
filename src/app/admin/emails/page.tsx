"use client";

import { useEffect, useState } from "react";

interface Email {
  id: number;
  email: string;
  created_at: string;
}

const AdminEmails = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEmails = async () => {
    try {
      const res = await fetch("/api/emails");
      const data = await res.json();
      console.log("EMAILS RECEIVED:", data);
      setEmails(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  if (loading) return <p className="text-zinc-500">Loading emails...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">Newsletter Subscribers</h1>
      <p className="mt-1 text-sm text-zinc-500">Total: {emails.length} subscribers</p>

      {emails.length === 0 ? (
        <p className="mt-6 text-zinc-500">No subscribers yet.</p>
      ) : (
        <div className="mt-6 space-y-3">
          {emails.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl border border-primary/20 bg-white p-4 dark:bg-[#0d0a17]">
              <p className="font-medium text-zinc-900 dark:text-white">{item.email}</p>
              <span className="text-xs text-zinc-400">{new Date(item.created_at).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminEmails;