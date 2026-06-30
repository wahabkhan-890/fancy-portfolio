import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Abdul Wahab | Full-Stack Developer",
    template: "%s | Abdul Wahab",
  },
  description:
    "Full-stack developer portfolio showcasing React, Next.js, Supabase projects. Open for freelance and full-time opportunities.",
  keywords: ["React", "Next.js", "Supabase", "Full Stack", "Developer", "Portfolio"],
  authors: [{ name: "Abdul Wahab" }],
  openGraph: {
    title: "Abdul Wahab | Full-Stack Developer",
    description: "Full-stack developer portfolio — React, Next.js, Supabase projects.",
    url: "https://your-domain.vercel.app",
    siteName: "Abdul Wahab Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Wahab | Full-Stack Developer",
    description: "Full-stack developer portfolio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};