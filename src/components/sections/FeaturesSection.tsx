"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import {
  Code2,
  Palette,
  LayoutDashboard,
  Plug,
  Database,
  PenTool,
  Zap,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Clean Component Architecture",
    description:
      "Reusable, modular components built with Next.js App Router patterns. Every piece is designed to scale and stay maintainable across products.",
    icon: Code2,
  },
  {
    title: "Polished Visual Design",
    description:
      "Intentional layouts, smooth micro-interactions, and consistent styling systems that make interfaces feel sharp and modern on every screen.",
    icon: Palette,
  },
  {
    title: "Structured Admin Panels",
    description:
      "CRUD dashboards, protected routes, and modular UI structures that make content management feel effortless and organized.",
    icon: LayoutDashboard,
  },
  {
    title: "Seamless Integrations",
    description:
      "REST APIs, Supabase backends, and third-party services connected with clean, maintainable logic that just works.",
    icon: Plug,
  },
  {
    title: "Database & Realtime Workflows",
    description:
      "Database design, file storage, realtime subscriptions, and auth-aware flows for dynamic, production-ready applications.",
    icon: Database,
  },
  {
    title: "Design to Production",
    description:
      "Translating Figma designs into responsive, pixel-accurate components with proper spacing, typography, and visual hierarchy.",
    icon: PenTool,
  },
  {
    title: "Performance First",
    description:
      "Optimized rendering, lazy loading, smart image handling, and frontend decisions that prioritize fast, smooth user experiences.",
    icon: Zap,
  },
  {
    title: "Complete Ownership",
    description:
      "From idea to deployed product — I handle the full journey, shipping work that is reliable, maintainable, and production-ready.",
    icon: Rocket,
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Even cards (0,2,4,6) → enter from RIGHT
        // Odd cards (1,3,5,7) → enter from LEFT
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
    <section id="features" ref={sectionRef} className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <h2 className="text-primary font-semibold text-lg inline-block border-s-2 border-primary ps-2 leading-6">
          FEATURES
        </h2>
        <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
          Modern frontend expertise with reusable components, smooth animations,
          API integrations, and complete end-to-end project delivery.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group h-full"
            >
              <GlassCard className="group flex flex-col gap-4 p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_70px_-25px_rgba(var(--primary-rgb),0.4)] hover:-translate-y-1">
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-bg text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <feature.icon size={20} />
                </div>

                {/* Title */}
                <h3 className="text-base 2xl:text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-primary dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm 2xl:text-base leading-relaxed text-zinc-600 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                  {feature.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;