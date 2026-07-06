"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "From Curiosity to Code",
    description:
      "Started web development out of pure curiosity. What began as tinkering with HTML & CSS turned into a full-blown passion for building complete web applications.",
  },
  {
    title: "Hands-On Builder",
    description:
      "Built multiple full-stack projects from scratch — dashboards, portfolios, and admin panels. Every project taught me something new about architecture, performance, and user experience.",
  },
  {
    title: "Beyond the Browser",
    description:
      "Not just stopping at frontend. Actively mastering backend technologies — Supabase, Node.js, and databases — to ship end-to-end products independently.",
  },
  {
    title: "Builder Mindset",
    description:
      "I don't just write code. I solve problems. Every project I build focuses on making someone's life easier — whether it's a dashboard, a portfolio, or an internal tool.",
  },
  {
    title: "Production Frontend Delivery",
    description:
      "Experienced in shipping responsive, maintainable interfaces with React, Next.js, Tailwind CSS, and modern component patterns.",
  },
  {
    title: "Full Stack Upgrade Path",
    description:
      "Expanding from frontend strength into Node.js, Express.js, MongoDB, Redis, and scalable backend architecture.",
  },
  {
    title: "Admin System Thinking",
    description:
      "Comfortable building dashboards, CRUD flows, auth-protected panels, and structured content management experiences.",
  },
  {
    title: "UI Quality",
    description:
      "Focused on polished interfaces, sensible motion, accessible patterns, and clean responsive behavior across devices.",
  },
];

const AboutSection = () => {
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
              delay: i * 0.06,
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
    <section id="about" ref={sectionRef} className="py-20 lg:py-28">
      <div className="container">
        <h2 className="text-primary font-semibold text-lg inline-block border-s-2 border-primary ps-2 leading-6">
          ABOUT ME
        </h2>
        <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
          I&apos;m a self-taught developer who turned curiosity into a career.
          Building products that solve real problems, one line of code at a time.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group h-full"
            >
              <GlassCard className="p-6 flex flex-col gap-3 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_70px_-25px_rgba(var(--primary-rgb),0.4)] hover:-translate-y-1">
                <h3 className="text-base 2xl:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm 2xl:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                  {item.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;