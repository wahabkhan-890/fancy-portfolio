import Link from "next/link";
import { Download, Briefcase, Mail } from "lucide-react";
import Typing from "./Typing";
import TechSnippet from "./TechSnippet";

const HeroSection = () => (
  <section
    id="hero"
    className="relative flex w-full items-center overflow-y-hidden bg-[radial-gradient(circle_at_top_left,rgba(var(--primary-rgb),0.22),transparent_28%),linear-gradient(180deg,rgba(var(--primary-rgb),0.05),transparent_70%)]"
    style={{ minHeight: "100vh" }}
  >
    {/* ── LEFT CONTENT ── */}
    <div className="ms-[5vw] me-[5vw] w-full lg:me-0 lg:w-1/2">
      {/* Badge */}
      <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs sm:text-sm font-medium tracking-[0.24em] text-primary">
        FULL STACK DEVELOPER
      </p>

      {/* Heading + Typing */}
      <h1
        className="my-2.5 font-bold text-zinc-900 dark:text-white"
        style={{
          fontSize: "clamp(2rem, 5vw, 5rem)",
          lineHeight: "clamp(2.5rem, 5vw + 1.5rem, 5.5rem)",
        }}
      >
        I&apos;m <span className="text-primary">Abdul Wahab</span>
        <br />A <Typing />
      </h1>

      {/* Description */}
      <p className="my-5 max-w-3xl text-sm leading-[1.9] text-gray-700 sm:text-[18px] 2xl:text-xl dark:text-gray-300">
        I craft fast, user-friendly web apps with React, Next.js, and
        TypeScript. Focused on clean interfaces, smooth animations, and
        building real-world products that solve problems.
      </p>

      {/* Pills */}
      <div className="flex flex-wrap gap-3 text-xs sm:text-sm 2xl:text-base">
        <span className="rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-zinc-700 backdrop-blur dark:bg-white/5 dark:text-zinc-300">
          MERN Stack + Next.js Developer
        </span>
        <span className="rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-zinc-700 backdrop-blur dark:bg-white/5 dark:text-zinc-300">
          Frontend Developer
        </span>
        <span className="hidden rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-zinc-700 backdrop-blur sm:inline dark:bg-white/5 dark:text-zinc-300">
          Supabase + Admin Systems
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-wrap gap-4 sm:mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white shadow-[0_18px_60px_-20px_rgba(var(--primary-rgb),0.85)] transition hover:bg-primary-hover sm:px-6 sm:text-base"
        >
          <Briefcase size={18} />
          Let&apos;s Work
        </Link>

        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-white px-4 py-3 text-sm text-primary-hover transition hover:bg-primary-bg sm:px-6 sm:text-base dark:bg-primary/10 dark:text-primary-light dark:hover:bg-primary/20"
        >
          <Download size={18} />
          Download Resume
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 transition hover:border-primary/40 hover:text-primary sm:px-6 sm:text-base dark:border-white/10 dark:bg-transparent dark:text-zinc-200 dark:hover:border-primary/40 dark:hover:text-primary-light"
        >
          <Mail size={18} />
          Contact Directly
        </Link>
      </div>
    </div>

    {/* ── RIGHT CONTENT — TECH SNIPPET ── */}
    <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:pr-[5vw]">
      <TechSnippet />
    </div>

    {/* Bottom Glow */}
    <div className="absolute -bottom-20 left-[40%] -z-10 h-0 w-80 rounded-full shadow-[0_0_200px_350px_rgba(var(--primary-rgb),0.15)] dark:shadow-[0_0_300px_300px_rgba(var(--primary-rgb),0.4)]" />
  </section>
);

export default HeroSection;