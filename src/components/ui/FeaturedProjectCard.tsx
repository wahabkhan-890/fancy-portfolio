import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import GlassCard from "@/components/ui/GlassCard";
import type { Project } from "@/types";

const FeaturedProjectCard = ({ project }: { project: Project }) => (
  <GlassCard className="group flex flex-col overflow-hidden p-0">
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
          <span className="absolute left-3 top-3 rounded-full bg-primary-hover/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            {project.category}
          </span>
        )}
      </div>
    ) : (
      <div className="flex h-52 w-full items-center justify-center bg-primary/10">
        <span className="text-4xl font-bold text-primary-light opacity-40">
          {"{}"}
        </span>
      </div>
    )}

    <div className="flex flex-1 flex-col gap-3 p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary-light 2xl:text-xl">
          {project.title}
        </h3>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-primary/30 via-primary-light/10 to-transparent" />

      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 2xl:text-base">
        {project.description}
      </p>

      {project.tech && (
        <div className="flex flex-wrap gap-1.5">
          {project.tech.split(",").map((tech) => (
            <span
              key={tech.trim()}
              className="rounded-full border border-primary-border bg-primary-bg px-2.5 py-0.5 text-[11px] font-semibold text-primary-hover dark:border-primary/40 dark:bg-primary/15 dark:text-primary-light"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-primary-border bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 transition hover:border-primary hover:text-primary dark:border-primary/40 dark:bg-[#0d0a17] dark:text-white"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-primary-border bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 transition hover:border-primary hover:text-primary dark:border-primary/40 dark:bg-[#0d0a17] dark:text-white"
          >
            <FaGithub size={13} />
            GitHub
          </a>
        )}
      </div>
    </div>
  </GlassCard>
);

export default FeaturedProjectCard;
