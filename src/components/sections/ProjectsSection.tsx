import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { supabaseServer } from "@/lib/supabase/server";
import GlassCard from "@/components/ui/GlassCard";

const ProjectsSection = async () => {
  const { data: projects } = await supabaseServer
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container">
        <h2 className="inline-block border-s-2 border-violet-500 ps-2 text-lg font-semibold leading-6 text-violet-500">
          PROJECTS
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 2xl:text-lg">
          A collection of real-world projects — from client work generating
          revenue to full-stack SaaS applications and admin systems.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {!projects || projects.length === 0 ? (
            <p className="col-span-full text-center text-zinc-500 dark:text-zinc-400">
              No projects yet.
            </p>
          ) : (
            projects.map((project: any) => (
              <GlassCard
                key={project.id}
                className="group flex flex-col overflow-hidden p-0"
              >
                {/* Image */}
                {project.image ? (
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {project.category && (
                      <span className="absolute left-3 top-3 rounded-full bg-violet-600/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex h-52 w-full items-center justify-center bg-violet-500/10">
                    <span className="text-violet-400 opacity-40 text-4xl font-bold">{"{}"}</span>
                  </div>
                )}

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-violet-500 dark:text-white dark:group-hover:text-violet-400 2xl:text-xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-violet-500/30 via-violet-300/10 to-transparent" />

                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 2xl:text-base">
                    {project.description}
                  </p>

                  {project.tech && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.split(",").map((tech: string) => (
                        <span
                          key={tech.trim()}
                          className="rounded-full border border-violet-200 bg-violet-100 px-2.5 py-0.5 text-[11px] font-semibold text-violet-700 dark:border-violet-700/40 dark:bg-violet-500/15 dark:text-violet-300"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex flex-wrap gap-3 pt-3">
                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 transition hover:border-violet-500 hover:text-violet-500 dark:border-violet-700/40 dark:bg-[#0d0a17] dark:text-white"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 transition hover:border-violet-500 hover:text-violet-500 dark:border-violet-700/40 dark:bg-[#0d0a17] dark:text-white"
                      >
                        <FaGithub size={13} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))
          )}
        </div>

        {/* View All link */}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 px-6 py-3 text-sm font-medium text-violet-600 transition hover:bg-violet-500/10 dark:text-violet-300"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
