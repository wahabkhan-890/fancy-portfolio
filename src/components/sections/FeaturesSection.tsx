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
    icon:  PenTool,
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

const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-28">
    <div className="container">
      {/* Section Header */}
      <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
        FEATURES
      </h2>
      <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
        Modern frontend expertise with reusable components, smooth animations,
        API integrations, and complete end-to-end project delivery.
      </p>

      {/* Features Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <GlassCard
            key={feature.title}
            className="group flex flex-col gap-4 p-6 transition-all duration-300 hover:from-violet-500/30 hover:to-violet-500/10 hover:border-violet-500/50 hover:shadow-[0_24px_80px_-30px_rgba(139,92,246,0.6)]"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white dark:bg-violet-500/15 dark:text-violet-400 dark:group-hover:bg-violet-500 dark:group-hover:text-white">
              <feature.icon size={20} />
            </div>

            {/* Title */}
            <h3 className="text-base 2xl:text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-300">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm 2xl:text-base leading-relaxed text-zinc-600 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;