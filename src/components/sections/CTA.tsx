import Link from "next/link";
import { Briefcase, Download, Mail } from "lucide-react";

interface CTAProps {
  largeText?: boolean;
}

const CTA = ({ largeText = false }: CTAProps) => (
  <section className="relative w-full py-[10vw] lg:py-[6vw] overflow-hidden container">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-10" />
    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-10" />

    <div className="mx-auto max-w-4xl text-center px-6">
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight ${largeText ? "2xl:text-5xl" : ""}`}>
        Let&apos;s Build Something <span className="text-primary">Meaningful</span>
      </h2>
      <p className={`text-sm sm:text-base mt-4 max-w-xl mx-auto text-zinc-600 dark:text-gray-400 ${largeText ? "2xl:text-xl" : "2xl:text-lg"}`}>
        I&apos;m open to freelance work, collaborations, and full-time opportunities. Let&apos;s turn your ideas into real, scalable products.
      </p>

      <div className="mt-6 h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/contact" className={`inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-medium shadow-md hover:bg-primary-hover hover:scale-[1.03] transition-all duration-300 ${largeText ? "text-sm sm:text-base 2xl:text-lg" : "text-sm sm:text-base"}`}>
          <Briefcase size={18} /> Hire Me
        </Link>
        <Link href="/resume" className={`inline-flex items-center gap-2 rounded-xl border border-primary/40 px-6 py-3 text-primary-hover dark:text-primary-light hover:bg-primary/10 transition-all duration-300 ${largeText ? "text-sm sm:text-base 2xl:text-lg" : "text-sm sm:text-base"}`}>
          <Download size={18} /> Download Resume
        </Link>
        <Link href="/contact" className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-zinc-700 dark:text-gray-300 hover:text-primary transition-all duration-300 ${largeText ? "text-sm sm:text-base 2xl:text-lg" : "text-sm sm:text-base"}`}>
          <Mail size={18} /> Contact
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;