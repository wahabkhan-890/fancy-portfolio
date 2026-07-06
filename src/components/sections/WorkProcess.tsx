"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import { Target, Layout, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Target,
    title: "Understand Product Goals",
    description:
      "I start by mapping user needs, business outcomes, and the exact problem the interface must solve.",
  },
  {
    icon: Layout,
    title: "Plan UI + Data Flow",
    description:
      "I break the product into reusable components, pages, API touchpoints, and sensible state boundaries.",
  },
  {
    icon: Code2,
    title: "Build with Real Integrations",
    description:
      "I connect frontend and backend flows using Next.js, Supabase, REST APIs, and practical full stack patterns.",
  },
  {
    icon: Rocket,
    title: "Optimize and Ship",
    description:
      "I test, refine UX, fix edge cases, and deploy work that feels stable enough for real users and teams.",
  },
];

const WorkProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const fromX = i % 2 === 0 ? 80 : -80;

        gsap.set(card, { opacity: 0, x: fromX, y: 20 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: i * 0.08,
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
    <section id="work-process" ref={sectionRef} className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <h2 className="text-primary font-semibold text-lg inline-block border-s-2 border-primary ps-2 leading-6">
          WORK PROCESS
        </h2>
        <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
          A clear and structured approach I follow to turn ideas into reliable,
          scalable, and high-quality web applications.
        </p>

        {/* Steps Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group h-full"
            >
              <GlassCard className="p-6 flex flex-col gap-4 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_70px_-25px_rgba(var(--primary-rgb),0.4)] hover:-translate-y-1">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-bg text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <step.icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-base 2xl:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm 2xl:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                  {step.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;