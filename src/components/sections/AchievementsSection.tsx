"use client";

import { useEffect, useRef, useState } from "react";
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
  delay: number;
}

const Counter = ({ target, suffix, delay }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

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
  }, [started, target, delay]);

  return (
    <span ref={ref} className="text-4xl font-black text-primary 2xl:text-5xl">
      {count}
      {suffix}
    </span>
  );
};

const AchievementsSection = () => (
  <section id="achievements" className="py-20 lg:py-28">
    <div className="container">
      {/* Section Header */}
      <h2 className="text-primary font-semibold text-lg inline-block border-s-2 border-primary ps-2 leading-6">
        ACHIEVEMENTS
      </h2>
      <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
        Numbers that reflect real work, real learning, and real impact.
      </p>

      {/* Cards grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, i) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl p-6 flex flex-col gap-3 h-full
              bg-gradient-to-br from-primary/20 to-transparent
              border border-primary/30
              backdrop-blur-sm
              transition-all duration-300
              hover:border-primary/50
              hover:shadow-[0_20px_70px_-25px_rgba(var(--primary-rgb),0.4)]
              hover:-translate-y-1
              dark:hover:!bg-primary dark:hover:border-primary"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 pointer-events-none" />

            {/* Icon */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary-bg text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-all duration-300">
              <item.icon size={22} />
            </div>

            {/* Counter */}
            <Counter target={item.value} suffix={item.suffix} delay={i * 0.12} />

            {/* Label */}
            <p className="relative text-sm font-bold text-zinc-800 dark:text-white 2xl:text-base leading-tight group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
              {item.label}
            </p>

            {/* Description */}
            <p className="relative text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed 2xl:text-sm group-hover:text-zinc-700 dark:group-hover:text-white/90 transition-colors duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;