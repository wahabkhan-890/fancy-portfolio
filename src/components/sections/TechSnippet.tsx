"use client";

import { useState, useEffect, useRef } from "react";
import { CodeBlock } from "./CodeBlock";

/* ── Tab icons (inline SVGs) ── */
const Icons = {
  react: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#61DAFB">
      <circle cx="12" cy="12" r="2.05" />
      <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
        <ellipse rx="10" ry="4" cx="12" cy="12" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" />
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="white">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.465-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0z" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#3ECF8E">
      <path d="M11.5.5C5.5.5 1.5 5.5 1.5 11.5v1c0 6 4 11 10 11s10-5 10-11v-1c0-6-4-11-10-11zM5 14l3-7 3 7H5zm8 0l3-7 3 7h-6z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#3178C6">
      <path d="M0 12v12h24V0H0v12zm13.9-1.6v1.5h-2.3v6.5h-1.5v-6.5H7.8v-1.5h6.1zm3.7 6.3l-.7-.4c-.2.4-.5.7-.9.8-.4.1-.7 0-.9-.2-.2-.2-.2-.5-.1-.8.1-.3.3-.5.9-1 .7-.5 1.2-1 1.5-1.5.4-.7.3-1.4-.2-1.9-.5-.5-1.3-.7-2.1-.5-.7.1-1.3.5-1.7 1l.7.6c.3-.4.7-.7 1.2-.8.4-.1.7 0 .9.2.2.3.2.6 0 .9-.1.3-.4.5-.9 1-.7.5-1.2 1-1.5 1.5-.3.7-.3 1.4.2 1.9.5.5 1.3.7 2.1.5.9-.1 1.6-.6 2-1.3z" />
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  ),
};

const FILE_LABELS: Record<string, string> = {
  react: "ProjectCard.tsx",
  next: "layout.tsx",
  supabase: "supabase.ts",
  typescript: "types.ts",
  workflow: "build.md",
};

const LANG_COLORS: Record<string, string> = {
  tsx: "#61DAFB",
  typescript: "#3178C6",
  text: "#a78bfa",
};

const snippets: Record<string, { name: string; language: string; code: string }> = {
  react: {
    name: "React",
    language: "tsx",
    code: `// components/ui/ProjectCard.tsx
import Image from "next/image";
import type { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group rounded-3xl border p-5
    hover:-translate-y-1 transition-all">
    {project.image && (
      <Image src={project.image} alt={project.title}
        fill className="object-cover rounded-xl" />
    )}
    <h3 className="font-bold">{project.title}</h3>
    <p>{project.description}</p>
  </div>
);

export default ProjectCard;`,
  },
  next: {
    name: "Next.js",
    language: "tsx",
    code: `// app/layout.tsx — Root Layout
import Sidebar from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}`,
  },
  supabase: {
    name: "Supabase",
    language: "typescript",
    code: `// lib/supabase/server.ts
import { createClient } from "@supabase/supabase-js";

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Service role — bypasses RLS
// Used only in API routes, never browser`,
  },
  typescript: {
    name: "TypeScript",
    language: "typescript",
    code: `// types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string;
  category: "Full Stack" | "Frontend" | "Backend";
  preview?: string;
  github?: string;
  created_at: string;
}

export interface Highlight {
  id: number;
  title: string;
  description: string;
  image?: string;
  date: string;
  icon: string;
}`,
  },
  workflow: {
    name: "Workflow",
    language: "text",
    code: `▸ Plan: User needs → Architecture
▸ Design: Figma → Responsive UI
▸ Build: Next.js + Supabase
▸ Integrate: REST APIs + Auth
▸ Optimize: Performance + SEO
▸ Deploy: Vercel → Production
▸ Monitor: Analytics + Logs
▸ Iterate: Feedback → Improve`,
  },
};

/* ── Main Component ── */
export default function TechSnippet() {
  const [active, setActive] = useState("next");
  const [fading, setFading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const pendingTab = useRef<string | null>(null);

  const activeSnippet = snippets[active];

  useEffect(() => {
    setLineCount(activeSnippet.code.split("\n").length);
  }, [active]);

  const switchTab = (key: string) => {
    if (key === active) return;
    pendingTab.current = key;
    setFading(true);
    setTimeout(() => {
      if (pendingTab.current) {
        setActive(pendingTab.current);
        pendingTab.current = null;
      }
      setFading(false);
    }, 160);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[27.5rem] mx-auto select-none flex flex-col" style={{ filter: "drop-shadow(0 0 48px rgba(139,92,246,0.25))" }}>
      {/* ── Window Chrome ── */}
      <div className="flex items-center justify-between px-4 py-2.5 rounded-t-2xl bg-[#0e0b1a] border border-white/8 border-b-0">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f57aa]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_#febc2eaa]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_#28c840aa]" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/8 text-[11px] text-gray-400 font-mono">
          <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span>{FILE_LABELS[active]}</span>
        </div>
        <button onClick={handleCopy} className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all duration-200 border" style={{ background: copied ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.04)", borderColor: copied ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.08)", color: copied ? "#a78bfa" : "#6b7280" }}>
          {copied ? "✓ Copied" : "📋 Copy"}
        </button>
      </div>

      {/* ── Tabs ── */}
      <div className="flex w-full bg-[#080612] border-x border-white/8 overflow-x-auto scrollbar-none">
        {Object.entries(snippets).map(([key, item]) => {
          const isActive = active === key;
          return (
            <button key={key} onClick={() => switchTab(key)} className="relative flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 border-r border-white/5 last:border-r-0" style={{ color: isActive ? "#c4b5fd" : "#6b7280", background: isActive ? "rgba(139,92,246,0.1)" : "transparent" }}>
              {Icons[key as keyof typeof Icons]}
              <span>{item.name}</span>
              {isActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #a78bfa)" }} />}
            </button>
          );
        })}
      </div>

      {/* ── Code Area ── */}
      <div className="relative bg-[#080612] border-x border-white/8 overflow-hidden" style={{ minHeight: "260px", transition: "opacity 0.16s ease", opacity: fading ? 0 : 1 }}>
        <div className="pointer-events-none absolute inset-0 z-10" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)" }} />
        <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
        <CodeBlock language={activeSnippet.language} code={activeSnippet.code} />
      </div>

      {/* ── Status Bar ── */}
      <div className="flex items-center justify-between px-4 py-2 rounded-b-2xl bg-[#0e0b1a] border border-white/8 border-t border-t-white/6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>main</span>
          </div>
          <span className="text-[11px] text-gray-600">UTF-8</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-gray-500">Ln {lineCount}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border" style={{ color: LANG_COLORS[activeSnippet.language] ?? "#a78bfa", borderColor: (LANG_COLORS[activeSnippet.language] ?? "#a78bfa") + "44", background: (LANG_COLORS[activeSnippet.language] ?? "#a78bfa") + "18" }}>
            {activeSnippet.language}
          </span>
        </div>
      </div>
    </div>
  );
}