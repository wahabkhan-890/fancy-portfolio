"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const skills = [
  { name: "HTML5 + CSS3", percent: 95 },
  { name: "JavaScript", percent: 90 },
  { name: "React.js", percent: 92 },
  { name: "Next.js", percent: 88 },
  { name: "Tailwind CSS", percent: 93 },
  { name: "TypeScript", percent: 82 },
  { name: "Supabase", percent: 86 },
  { name: "Node.js + Express", percent: 74, badge: "Growing Fast" },
  { name: "MongoDB + MERN", percent: 72, badge: "Current Focus" },
];

interface SkillBarProps {
  name: string;
  percent: number;
  badge?: string;
  delay: number;
}

const SkillBar = ({ name, percent, badge, delay }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${percent}%`,
        transition: { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] },
      });
    }
  }, [isInView, controls, percent, delay]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      {/* Label row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 2xl:text-base">
            {name}
          </span>
          {badge && (
            <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-bold text-violet-500 border border-violet-500/30">
              {badge}
            </span>
          )}
        </div>
        <span className="text-sm font-bold text-violet-500 2xl:text-base">
          {percent}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-2.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden">
        {/* Animated fill */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400"
          initial={{ width: 0 }}
          animate={controls}
          style={{
            boxShadow: "0 0 10px rgba(139,92,246,0.5)",
          }}
        />
        {/* Breathing glow overlay */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-400/30 to-transparent"
          initial={{ width: 0 }}
          animate={
            isInView
              ? {
                  width: `${percent}%`,
                  opacity: [0.3, 0.7, 0.3],
                }
              : { width: 0 }
          }
          transition={
            isInView
              ? {
                  width: { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: {
                    duration: 2,
                    delay: delay + 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : {}
          }
        />
      </div>
    </div>
  );
};

const SkillsProgress = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Split into two columns
  const col1 = skills.slice(0, Math.ceil(skills.length / 2));
  const col2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section
      id="skills-progress"
      ref={sectionRef}
      className="py-20 lg:py-28"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
            SKILLS
          </h2>
          <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Strong frontend foundation with growing full-stack capability.
            Each skill represents real projects built and deployed — not just
            tutorials watched.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
          {/* Column 1 */}
          <div className="flex flex-col gap-7">
            {col1.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
                badge={skill.badge}
                delay={i * 0.1}
              />
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-7">
            {col2.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
                badge={skill.badge}
                delay={i * 0.1 + 0.05}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;
