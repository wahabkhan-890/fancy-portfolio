"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bug, MessageSquare, ClipboardList, Lightbulb, Layers } from "lucide-react";

const strengths = [
  {
    icon: Bug,
    title: "Best Debugger",
    description:
      "Quickly identify root causes and fix complex issues across the full stack — from UI glitches to backend logic errors.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communicator",
    description:
      "Translate technical details into plain language for clients and teammates. No jargon, just clarity and alignment.",
  },
  {
    icon: ClipboardList,
    title: "Project Manager",
    description:
      "Plan, prioritize, and deliver projects on time. Managed teams during bootcamp and consistently shipped on schedule.",
  },
  {
    icon: Lightbulb,
    title: "Solution Provider",
    description:
      "Focused on building scalable, practical solutions to real-world problems — not just writing code for its own sake.",
  },
  {
    icon: Layers,
    title: "Full-Stack Thinker",
    description:
      "See the bigger picture across frontend, backend, and database layers. Design systems that are cohesive end to end.",
  },
];

const StrengthsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="strengths" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary font-semibold text-lg inline-block border-s-2 border-primary ps-2 leading-6">
            STRENGTHS
          </h2>
          <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Beyond the tech stack — the qualities that make me effective as
            both a developer and a collaborator.
          </p>
        </motion.div>

        {/* Cards — 3 col desktop, 2 col tablet, 1 col mobile */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col gap-4 rounded-2xl p-6 overflow-hidden
                border border-neutral-200 dark:border-primary/40
                bg-white dark:bg-[#0d0a17]
                shadow-[0_4px_24px_0_rgba(var(--primary-rgb),0.10)] dark:shadow-[0_4px_40px_0_rgba(var(--primary-rgb),0.22)]
                hover:border-primary/60 hover:bg-primary-bg dark:hover:bg-primary-hover/40
                hover:shadow-[0_8px_48px_0_rgba(var(--primary-rgb),0.35)]
                hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Hover background accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl
                bg-primary-bg text-primary-hover
                dark:bg-primary/15 dark:text-primary-light
                group-hover:bg-primary group-hover:text-white
                dark:group-hover:bg-primary dark:group-hover:text-white
                transition-all duration-300 group-hover:scale-110">
                <item.icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-zinc-900 dark:text-white
                group-hover:text-primary-hover dark:group-hover:text-primary-light
                transition-colors duration-300 2xl:text-lg">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400
                group-hover:text-zinc-700 dark:group-hover:text-zinc-200
                transition-colors duration-300 2xl:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
