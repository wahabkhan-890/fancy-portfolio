"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

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
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });
    setContacts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) return <p className="text-zinc-500">Loading contacts...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-violet-500">Contact Messages</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Messages received from the portfolio contact form.
      </p>

      <div className="mt-6 space-y-3">
        {contacts.length === 0 ? (
          <p className="text-zinc-500">No messages yet.</p>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="rounded-xl border border-violet-500/20 bg-white p-4 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {contact.name || "Anonymous"}
                </h3>
                <span className="text-xs text-zinc-400">
                  {new Date(contact.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-1 text-sm text-violet-500">{contact.email}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {contact.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminContacts;