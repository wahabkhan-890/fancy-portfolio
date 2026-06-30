"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FolderKanban, Users, BadgeCheck, CalendarDays } from "lucide-react";

interface Achievement {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: FolderKanban,
    value: 5,
    suffix: "+",
    label: "Projects Completed",
    description: "Full-stack apps shipped from concept to production.",
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    label: "Students Mentored",
    description: "Helped peers understand web dev concepts and debug projects during SMIT bootcamp.",
  },
  {
    icon: BadgeCheck,
    value: 4,
    suffix: "",
    label: "Cloud AI Certifications",
    description: "Certified across cloud and AI platforms — always leveling up.",
  },
  {
    icon: CalendarDays,
    value: 4,
    suffix: "+",
    label: "Years of Coding",
    description: "Consistent growth from C basics to production Next.js apps.",
  },
];

interface CounterProps {
  target: number;
  suffix: string;
  isInView: boolean;
  delay: number;
}

const Counter = ({ target, suffix, isInView, delay }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), target);
        setCount(current);
        if (step >= steps) clearInterval(timer);
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, target, delay]);

  return (
    <span className="text-4xl font-black text-white 2xl:text-5xl">
      {count}
      {suffix}
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" ref={ref} className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
            ACHIEVEMENTS
          </h2>
          <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Numbers that reflect real work, real learning, and real impact.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-3
                bg-gradient-to-br from-violet-600 to-violet-800
                border border-violet-400/30
                shadow-[0_8px_40px_0_rgba(139,92,246,0.4)]
                hover:shadow-[0_12px_60px_0_rgba(139,92,246,0.6)]
                hover:-translate-y-1 transition-all duration-300
                backdrop-blur-sm group"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 pointer-events-none" />

              {/* Top glow blob */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white border border-white/20">
                <item.icon size={22} />
              </div>

              {/* Counter */}
              <Counter
                target={item.value}
                suffix={item.suffix}
                isInView={isInView}
                delay={i * 0.12}
              />

              {/* Label */}
              <p className="text-sm font-bold text-white/90 2xl:text-base leading-tight">
                {item.label}
              </p>

              {/* Description */}
              <p className="text-xs text-white/65 leading-relaxed 2xl:text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
