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
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* ── ADMIN SIDEBAR ── */}
      <aside className="w-full border-b border-primary/20 bg-white px-4 py-3 lg:w-60 lg:border-r lg:border-b-0 lg:px-4 lg:py-6 dark:bg-[#0a0611]">
        <div className="flex items-center justify-between lg:block">
          <h2 className="text-base font-bold text-primary lg:mb-6 lg:text-lg">Admin Panel</h2>
          {/* Mobile Logout — sirf mobile pe dikhega */}
          <button onClick={handleLogout} className="rounded-lg border border-red-500/40 px-2 py-1 text-xs text-red-500 hover:bg-red-500/10 lg:hidden">
            Logout
          </button>
        </div>
        
        <nav className="mt-2 flex flex-wrap gap-1 lg:mt-0 lg:flex-col lg:space-y-1">
          <a href="/admin" className="rounded-lg px-3 py-2 text-xs text-zinc-700 hover:bg-primary/10 lg:text-sm dark:text-zinc-300 dark:hover:bg-primary/15">Dashboard</a>
          <a href="/admin/projects" className="rounded-lg px-3 py-2 text-xs text-zinc-700 hover:bg-primary/10 lg:text-sm dark:text-zinc-300 dark:hover:bg-primary/15">Projects</a>
          <a href="/admin/highlights" className="rounded-lg px-3 py-2 text-xs text-zinc-700 hover:bg-primary/10 lg:text-sm dark:text-zinc-300 dark:hover:bg-primary/15">Highlights</a>
          <a href="/admin/contacts" className="rounded-lg px-3 py-2 text-xs text-zinc-700 hover:bg-primary/10 lg:text-sm dark:text-zinc-300 dark:hover:bg-primary/15">Contacts</a>
          <a href="/admin/emails" className="rounded-lg px-3 py-2 text-xs text-zinc-700 hover:bg-primary/10 lg:text-sm dark:text-zinc-300 dark:hover:bg-primary/15">Emails</a>
        </nav>
        
        {/* Desktop Logout — sirf desktop pe dikhega */}
        <button onClick={handleLogout} className="mt-auto hidden rounded-lg border border-red-500/40 px-3 py-1.5 text-xs text-red-500 hover:bg-red-500/10 lg:block">
          Logout
        </button>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 bg-zinc-100 p-4 lg:p-6 dark:bg-zinc-900">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;