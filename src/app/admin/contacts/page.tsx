"use client";

import { useEffect, useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      console.log("CONTACTS RECEIVED:", data);
      setContacts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) return <p className="text-zinc-500">Loading contacts...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">Contact Messages</h1>
      <p className="mt-1 text-sm text-zinc-500">Total: {contacts.length} messages</p>

      {contacts.length === 0 ? (
        <p className="mt-6 text-zinc-500">No messages yet.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="rounded-xl border border-primary/20 bg-white p-4 dark:bg-[#0d0a17]">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{contact.name}</h3>
                <span className="text-xs text-zinc-400">{new Date(contact.created_at).toLocaleDateString()}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{contact.email}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{contact.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminContacts;