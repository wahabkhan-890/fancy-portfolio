"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import { TbComponents } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

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

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Even cards (0,2,4...) → enter from RIGHT
        // Odd cards (1,3,5...) → enter from LEFT
        const fromX = i % 2 === 0 ? 80 : -80;

        gsap.set(card, { opacity: 0, x: fromX, y: 20 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: i * 0.05,
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              x: fromX,
              y: 20,
              duration: 0.3,
              ease: "power2.in",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <h2 className="text-primary font-semibold text-lg inline-block border-s-2 border-primary ps-2 leading-6">
          TECH STACK
        </h2>
        <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
          Current stack spanning frontend delivery, backend growth, admin
          systems, real-time features, and production deployment.
        </p>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group h-full"
            >
              <GlassCard className="group flex flex-col items-center gap-4 p-6 text-center h-full transition-all duration-300 hover:!bg-primary/20 hover:!border-primary-light/50 hover:shadow-[0_20px_70px_-25px_rgba(var(--primary-rgb),0.5)] hover:-translate-y-1">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-bg text-primary-hover transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg dark:bg-primary/15 dark:text-primary-light dark:group-hover:bg-primary dark:group-hover:text-white">
                  <skill.icon size={26} />
                </div>

                {/* Name */}
                <h3 className="text-sm 2xl:text-base font-bold text-zinc-800 transition-colors duration-300 group-hover:text-primary-hover dark:text-zinc-200 dark:group-hover:text-primary-light">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs 2xl:text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                  {skill.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;