import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Abdul Wahab | Full-Stack Developer",
    template: "%s | Abdul Wahab",
  },
  description:
    "Full-stack developer portfolio showcasing React, Next.js, Supabase projects.",
  keywords: ["React", "Next.js", "Supabase", "Full Stack", "Developer"],
  authors: [{ name: "Abdul Wahab" }],
  icons: {
    icon: "/images/profile.jpg",
  },
  openGraph: {
    title: "Abdul Wahab | Full-Stack Developer",
    description: "Full-stack developer portfolio.",
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