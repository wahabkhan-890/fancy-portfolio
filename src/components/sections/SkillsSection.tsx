"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiSupabase,
  SiRedux,
  SiGit,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandVercel, TbComponents } from "react-icons/tb";

const skills = [
  {
    name: "React.js",
    description:
      "Component-driven UI development with hooks, reusable patterns, and modern state management.",
    icon: SiReact,
  },
  {
    name: "Next.js",
    description:
      "App Router architecture, SSR strategies, API routes, and performance-optimized production builds.",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    description:
      "Type-safe development for scalable, maintainable codebases with better tooling and fewer runtime errors.",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    description:
      "Strong core language fundamentals powering interactive interfaces, DOM manipulation, and application logic.",
    icon: SiJavascript,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first styling approach for consistent design systems, rapid development, and responsive layouts.",
    icon: SiTailwindcss,
  },
  {
    name: "Shadcn UI",
    description:
      "Composable, accessible UI primitives for building polished dashboards, forms, and production interfaces.",
    icon: TbComponents,
  },
  {
    name: "Node.js + Express",
    description:
      "Backend foundations for REST APIs, authentication flows, middleware patterns, and server-side logic.",
    icon: SiNodedotjs,
  },
  {
    name: "MongoDB + Mongoose",
    description:
      "Document database design with schema modeling, aggregation pipelines, and scalable data workflows.",
    icon: SiMongodb,
  },
  {
    name: "Supabase + Firebase",
    description:
      "Backend-as-a-Service for databases, authentication, file storage, and real-time subscriptions.",
    icon: SiSupabase,
  },
  {
    name: "Redux Toolkit + TanStack",
    description:
      "Predictable client-side state and efficient server-state handling for complex application data flows.",
    icon: SiRedux,
  },
  {
    name: "Git + Vercel",
    description:
      "Version control workflows, collaboration patterns, and seamless deployment pipelines for shipping fast.",
    icon: SiGit,
  },
  {
    name: "Socket.io + Realtime",
    description:
      "Live updates and event-driven architecture for interactive, real-time user experiences.",
    icon: SiSocketdotio,
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 lg:py-28">
    <div className="container">
      {/* Section Header */}
      <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
        TECH STACK
      </h2>
      <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
        Current stack spanning frontend delivery, backend growth, admin
        systems, real-time features, and production deployment.
      </p>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <GlassCard
            key={skill.name}
            className="group flex flex-col items-center gap-4 p-6 text-center transition-all duration-300 hover:!bg-violet-500/20 hover:!border-violet-400/50 hover:shadow-[0_20px_70px_-25px_rgba(139,92,246,0.5)] hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition-all duration-300 group-hover:bg-violet-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg dark:bg-violet-500/15 dark:text-violet-400 dark:group-hover:bg-violet-500 dark:group-hover:text-white">
              <skill.icon size={26} />
            </div>

            {/* Name */}
            <h3 className="text-sm 2xl:text-base font-bold text-zinc-800 transition-colors duration-300 group-hover:text-violet-600 dark:text-zinc-200 dark:group-hover:text-violet-300">
              {skill.name}
            </h3>

            {/* Description */}
            <p className="text-xs 2xl:text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200">
              {skill.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;