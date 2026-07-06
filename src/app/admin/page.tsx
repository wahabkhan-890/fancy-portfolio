"use client";

import { useEffect, useState } from "react";

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
      try {
        const [pRes, hRes, cRes, eRes] = await Promise.all([
          fetch("/api/projects").then(r => r.json()),
          fetch("/api/highlights").then(r => r.json()),
          fetch("/api/contacts").then(r => r.json()),
          fetch("/api/emails").then(r => r.json()),
        ]);

        setStats({
          projects: Array.isArray(pRes) ? pRes.length : 0,
          highlights: Array.isArray(hRes) ? hRes.length : 0,
          contacts: Array.isArray(cRes) ? cRes.length : 0,
          emails: Array.isArray(eRes) ? eRes.length : 0,
        });
      } catch (err) {
        console.error("Stats fetch error:", err);
      }
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
      <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Welcome to Admin Panel!
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm dark:bg-[#0d0a17] dark:border-primary/40"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {card.label}
            </p>
            <p className="mt-2 text-3xl font-bold text-primary">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;