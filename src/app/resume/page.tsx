import Image from "next/image";

const ResumePage = () => (
  <div
    id="resume"
    className="flex min-h-[52vh] w-full flex-col items-center gap-4 py-20"
  >
    {/* Header */}
    <h2 className="text-center text-3xl font-bold text-zinc-900 md:text-4xl 2xl:text-5xl dark:text-white">
      My{" "}
      <span className="relative inline-block text-primary">
        Resume
        <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary/40" />
      </span>
    </h2>
    <p className="mx-auto mb-3 max-w-2xl px-2 text-center text-primary 2xl:text-lg dark:text-primary-light">
      A concise overview of my professional experience, skills, and
      accomplishments. This section highlights my work, projects, and
      milestones that demonstrate my growth and expertise in web development.
    </p>

    {/* Download Button */}
    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary-hover transition sm:px-6 sm:text-md 2xl:text-lg dark:text-white"
    >
      Download Resume
    </a>

    {/* Resume Image Preview */}
    <div className="flex w-full justify-center">
      <Image
        src="/images/resume-preview.png"
        alt="Resume"
        width={1200}
        height={1700}
        sizes="(max-width: 1024px) 95vw, 70vw"
        className="w-[95%] border bg-white shadow-lg lg:w-[70%]"
        priority
      />
    </div>
  </div>
);

export default ResumePage;