import Link from "next/link";
import { Download, Briefcase, Mail } from "lucide-react";
import Typing from "./Typing";

const HeroSection = () => (
  <section
    id="hero"
    className="relative flex w-full items-center overflow-y-hidden bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.22),transparent_28%),linear-gradient(180deg,rgba(94,14,192,0.05),transparent_70%)]"
    style={{ minHeight: "100vh" }}
  >
    <div className="ms-[5vw] me-[5vw] w-full lg:me-0">
      {/* Badge — untouched */}
      <p className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs sm:text-sm font-medium tracking-[0.24em] text-violet-500">
        FULL STACK DEVELOPER
      </p>

      {/* Heading + Typing — untouched */}
      <h1
        className="my-2.5 font-bold text-zinc-900 dark:text-white"
        style={{
          fontSize: "clamp(2rem, 5vw, 5rem)",
          lineHeight: "clamp(2.5rem, 5vw + 1.5rem, 5.5rem)",
        }}
      >
        I&apos;m <span className="text-violet-500">Abdul Wahab</span>
        <br />A <Typing />
      </h1>

      {/* Description — untouched */}
      <p className="my-5 max-w-3xl text-sm leading-[1.9] text-gray-700 sm:text-[18px] 2xl:text-xl dark:text-gray-300">
        I craft fast, user-friendly web apps with React, Next.js, and
        TypeScript. Focused on clean interfaces, smooth animations, and
        building real-world products that solve problems.
      </p>

      {/* Pills — FIXED: text color moved directly onto each span */}
      <div className="flex flex-wrap gap-3 text-xs sm:text-sm 2xl:text-base">
        <span className="rounded-full border border-violet-500/20 bg-white/70 px-4 py-2 text-zinc-700 backdrop-blur dark:bg-white/5 dark:text-zinc-300">
          MERN Stack + Next.js Developer
        </span>
        <span className="rounded-full border border-violet-500/20 bg-white/70 px-4 py-2 text-zinc-700 backdrop-blur dark:bg-white/5 dark:text-zinc-300">
          Frontend Developer
        </span>
        <span className="hidden rounded-full border border-violet-500/20 bg-white/70 px-4 py-2 text-zinc-700 backdrop-blur sm:inline dark:bg-white/5 dark:text-zinc-300">
          Supabase + Admin Systems
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-wrap gap-4 sm:mt-8">
        {/* Let's Work — untouched */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-3 text-sm font-medium text-white shadow-[0_18px_60px_-20px_rgba(139,92,246,0.85)] transition hover:bg-violet-600 sm:px-6 sm:text-base"
        >
          <Briefcase size={18} />
          Let&apos;s Work
        </Link>

        {/* Download Resume — FIXED: bg-white fully opaque + hover */}
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-white px-4 py-3 text-sm text-violet-600 transition hover:bg-violet-50 sm:px-6 sm:text-base dark:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-violet-500/20"
        >
          <Download size={18} />
          Download Resume
        </Link>

        {/* Contact Directly — FIXED: bg-white + full-opacity border */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 transition hover:border-violet-500/40 hover:text-violet-500 sm:px-6 sm:text-base dark:border-white/10 dark:bg-transparent dark:text-zinc-200 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
        >
          <Mail size={18} />
          Contact Directly
        </Link>
      </div>
    </div>

    {/* Bottom Glow */}
    <div className="absolute -bottom-20 left-[40%] -z-10 h-0 w-80 rounded-full shadow-[0_0_200px_350px_rgba(138,92,246,0.15)] dark:shadow-[0_0_300px_300px_rgba(139,92,246,0.4)]" />
  </section>
);

export default HeroSection;