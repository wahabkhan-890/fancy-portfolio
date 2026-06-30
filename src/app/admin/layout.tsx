"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  return (
    <div className="flex min-h-screen">
      {/* ── ADMIN SIDEBAR ── */}
      <aside className="w-60 border-r border-violet-500/20 bg-white px-4 py-6 dark:bg-[#0a0611]">
        <h2 className="mb-6 text-lg font-bold text-violet-500">Admin Panel</h2>
        <nav className="space-y-1">
          <a href="/admin/dashboard" className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-violet-500/10 dark:text-zinc-300 dark:hover:bg-violet-500/15">Dashboard</a>
          <a href="/admin/projects" className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-violet-500/10 dark:text-zinc-300 dark:hover:bg-violet-500/15">Projects</a>
          <a href="/admin/highlights" className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-violet-500/10 dark:text-zinc-300 dark:hover:bg-violet-500/15">Highlights</a>
          <a href="/admin/contacts" className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-violet-500/10 dark:text-zinc-300 dark:hover:bg-violet-500/15">Contacts</a>
          <a href="/admin/emails" className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-violet-500/10 dark:text-zinc-300 dark:hover:bg-violet-500/15">Emails</a>
        </nav>
        <button onClick={handleLogout} className="mt-auto rounded-lg border border-red-500/40 px-3 py-1.5 text-xs text-red-500 hover:bg-red-500/10">Logout</button>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 bg-zinc-100 p-6 dark:bg-zinc-900">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;