"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

interface Stats {
  projects: number;
  highlights: number;
  contacts: number;
  emails: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    projects: 0,
    highlights: 0,
    contacts: 0,
    emails: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [projectsRes, highlightsRes, contactsRes, emailsRes] =
        await Promise.all([
          supabase.from("projects").select("*", { count: "exact", head: true }),
          supabase.from("highlights").select("*", { count: "exact", head: true }),
          supabase.from("contacts").select("*", { count: "exact", head: true }),
          supabase.from("emails").select("*", { count: "exact", head: true }),
        ]);

      setStats({
        projects: projectsRes.count || 0,
        highlights: highlightsRes.count || 0,
        contacts: contactsRes.count || 0,
        emails: emailsRes.count || 0,
      });
      setLoading(false);
    };

    fetchStats();
  }, []);

  const cards = [
    { label: "Projects", value: stats.projects },
    { label: "Highlights", value: stats.highlights },
    { label: "Contacts", value: stats.contacts },
    { label: "Emails", value: stats.emails },
  ];

  if (loading) {
    return <p className="text-zinc-500 dark:text-zinc-400">Loading stats...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-violet-500">Dashboard</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Welcome to Admin Panel!
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-violet-500/20 bg-white p-6 shadow-sm dark:bg-[#0d0a17] dark:border-violet-900/40"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {card.label}
            </p>
            <p className="mt-2 text-3xl font-bold text-violet-500">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
