import Link from "next/link";

const ContactHero = () => (
  <section className="relative w-full min-h-[90vh] md:min-h-[70vh] flex items-center justify-between overflow-hidden">
    <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
      {/* Left Content */}
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm 2xl:text-lg font-semibold">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          CONTACT
        </span>

        <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-zinc-900 dark:text-white">
          Let&apos;s build something
          <span className="block text-primary mt-2">impactful together</span>
        </h1>

        <p className="max-w-xl text-lg 2xl:text-2xl text-primary dark:text-primary-light">
          Have a project idea, collaboration, or just want to say hello?
          I&apos;m always open to discussing new opportunities and creative ideas.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="#contact-section"
            className="text-sm sm:text-md 2xl:text-lg px-4 sm:px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-[0_0_40px_rgba(var(--primary-rgb),0.45)] hover:shadow-[0_0_70px_rgba(var(--primary-rgb),0.7)] transition"
          >
            Send a Message
          </Link>

          <a
            href="mailto:your-email@gmail.com"
            className="text-sm sm:text-md 2xl:text-lg px-4 sm:px-6 py-3 rounded-xl border border-primary/40 text-primary dark:text-primary-light hover:bg-primary/10 transition"
          >
            Email Me
          </a>
        </div>
      </div>

      {/* Right Card */}
      <div className="relative hidden lg:flex items-center justify-center">
        <div className="relative max-w-md rounded-3xl p-8 border border-primary/30 bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm space-y-6">
          <div>
            <h3 className="text-xl 2xl:text-2xl font-semibold text-zinc-900 dark:text-white">
              Quick & Reliable Communication
            </h3>
            <p className="text-sm 2xl:text-lg text-zinc-600 dark:text-gray-400 mt-2">
              I value clear communication and quick responses to keep projects moving smoothly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <p className="text-sm 2xl:text-lg font-medium text-zinc-800 dark:text-zinc-200">Fast Response</p>
                <p className="text-xs 2xl:text-base text-zinc-600 dark:text-gray-400">Usually replies within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">💼</span>
              <div>
                <p className="text-sm 2xl:text-lg font-medium text-zinc-800 dark:text-zinc-200">Open for Work</p>
                <p className="text-xs 2xl:text-base text-zinc-600 dark:text-gray-400">Freelance, collaborations & long-term projects</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">🤝</span>
              <div>
                <p className="text-sm 2xl:text-lg font-medium text-zinc-800 dark:text-zinc-200">Client-Focused</p>
                <p className="text-xs 2xl:text-base text-zinc-600 dark:text-gray-400">Clean code, timelines & transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-0 w-0 shadow-[0_0_200px_300px_rgba(var(--primary-rgb),0.45)] -z-10" />
  </section>
);

export default ContactHero;