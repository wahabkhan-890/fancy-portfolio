import GlassCard from "@/components/ui/GlassCard";

const highlights =[
  {
    title : "From Curiosity to Code",
    description : 
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
    title : "UI Quality",
    description:
      "Focused on polished interfaces, sensible motion, accessible patterns, and clean responsive behavior across devices.",
  }
  ]
const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container">
      <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
        ABOUT ME
      </h2>
      <p className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
        I&apos;m a self-taught developer who turned curiosity into a career.
        Building products that solve real problems, one line of code at a time.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item) => (
          <GlassCard key={item.title} className="p-6 flex flex-col gap-3">
            <h3 className="text-base 2xl:text-lg font-bold text-zinc-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm 2xl:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;