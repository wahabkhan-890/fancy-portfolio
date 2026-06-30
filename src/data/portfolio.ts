import type { Profile, SocialLinks, Skill } from "@/types";

export const profile: Profile = {
  name: "Abdul Wahab",
  role: "MERN Stack + Next.js Developer",
  company: "Frontend Developer at Apptex Software Solutions",
  heroDescription:
    "I build fast, conversion-focused products using React, Next.js, TypeScript and Tailwind CSS, backed by scalable backend systems.",
  aboutDescription:
    "I am currently working as a Frontend Developer at Apptex Software Solutions while actively leveling up backend depth.",
  footerDescription:
    "Full stack web developer focused on modern interfaces, admin dashboards, and scalable Next.js applications.",
};

export const socialLinks: SocialLinks = {
  linkedin: "https://linkedin.com/in/israr-ahmad-tech",
  github: "https://github.com/wahabkhan-890",
  whatsapp: "https://wa.me/+923179922459",
  email: "mailto:israrahmadtech@gmail.com",
};

export const skills: Skill[] = [
  { name: "React.js", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "TypeScript", level: 82 },
  { name: "Tailwind CSS", level: 93 },
  { name: "Supabase", level: 86 },
  { name: "Node.js + Express", level: 74, note: "Growing Fast" },
];

export const typingRoles: string[] = [
  "Next.js Engineer",
  "MERN Stack Developer",
  "Frontend Specialist",
];