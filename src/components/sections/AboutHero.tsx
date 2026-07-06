import Image from "next/image";
import Link from "next/link";
import { Download, Briefcase } from "lucide-react";

const AboutHero = () => (
  <section
    id="about-hero"
    className="relative flex w-full items-center overflow-hidden py-20 lg:min-h-[85vh] lg:py-0"
  >
    {/* Background accent */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

    <div className="container relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* ── Left: Content ── */}
      <div className="space-y-7">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary 2xl:text-lg">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          ABOUT ME
        </div>

        {/* Heading */}
        <h1
          className="font-bold leading-tight text-zinc-900 dark:text-white"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
        >
          Crafting{" "}
          <span className="relative inline-block mx-1">
            <span className="absolute inset-0 -skew-y-2 rounded-lg bg-primary/20" />
            <span className="relative text-primary">modern</span>
          </span>{" "}
          web experiences with
          <span className="mt-2 block text-primary">
            clean code &amp; scalable UI
          </span>
        </h1>

        {/* Divider */}
        <div className="hidden h-[2px] w-20 bg-gradient-to-r from-primary to-transparent sm:block" />

        {/* Description */}
        <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-gray-400 sm:text-lg 2xl:text-xl">
          I&apos;m{" "}
          <span className="font-medium text-zinc-900 dark:text-white">
            Abdul Wahab
          </span>
          , a full-stack developer specializing in{" "}
          <span className="font-medium text-primary">React.js, Next.js</span>{" "}
          and{" "}
          <span className="font-medium text-primary">Tailwind CSS</span>.
          I build fast, responsive, and user-friendly interfaces that solve real
          problems and ship production-ready products end-to-end.
        </p>

        {/* Highlights */}
        <ul className="space-y-3 text-sm text-zinc-600 dark:text-gray-400 sm:text-base 2xl:text-lg">
          {[
            "Full-stack apps from scratch — dashboards, portfolios, SaaS",
            "Supabase, Node.js, MongoDB — backend to browser",
            "Clean, reusable & performance-focused code",
          ].map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_12px_32px_rgba(var(--primary-rgb),0.4)] transition hover:bg-primary-hover sm:text-base 2xl:text-lg"
          >
            <Briefcase size={18} />
            Hire Me
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition hover:bg-primary/20 dark:text-primary-light sm:text-base 2xl:text-lg"
          >
            <Download size={18} />
            Download Resume
          </Link>
        </div>
      </div>

      {/* ── Right: Profile image ── */}
      <div className="relative hidden items-center justify-center lg:flex">
        {/* Outer glow */}
        <div className="absolute h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

        {/* Glowing ring + image */}
        <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border-[6px] border-primary shadow-[0_0_60px_8px_rgba(var(--primary-rgb),0.5),inset_0_0_60px_8px_rgba(var(--primary-rgb),0.3)]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt="Abdul Wahab"
              fill
              priority
              sizes="420px"
              className="object-cover"
            />
          </div>

          {/* Decorative code brackets */}
          <span className="absolute -left-16 -top-16 text-[130px] font-bold opacity-60 [-webkit-text-stroke:3px_var(--primary)] text-transparent">
            {"<"}
          </span>
          <span className="absolute -bottom-16 -right-12 text-[130px] font-bold opacity-60 [-webkit-text-stroke:3px_var(--primary)] text-transparent">
            {">"}
          </span>
        </div>
      </div>
    </div>

    {/* Bottom glow */}
    <div className="absolute -bottom-20 left-[40%] -z-10 h-0 w-80 rounded-full shadow-[0_0_200px_350px_rgba(var(--primary-rgb),0.15)] dark:shadow-[0_0_300px_300px_rgba(var(--primary-rgb),0.4)]" />
  </section>
);

export default AboutHero;
