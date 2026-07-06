"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  const MAX_CHARS = 100;
  const isLong = project.description.length > MAX_CHARS;
  const shortDesc = project.description.slice(0, MAX_CHARS);

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_4px_24px_0_rgba(var(--primary-rgb),0.10)] transition-all duration-300 hover:-translate-y-1 dark:border-primary/40 dark:bg-[#0d0a17]">
      {/* Image */}
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          {project.category && (
            <span className="absolute left-3 top-3 rounded-full bg-primary-hover/90 px-2.5 py-1 text-[10px] font-bold uppercase text-white">
              {project.category}
            </span>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 px-5 py-4">
        <h3 className="font-bold text-neutral-900 transition-colors group-hover:text-primary dark:text-white">
          {project.title}
        </h3>

        <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />

        {/* Description — Show FULL text when expanded, 100 chars when collapsed */}
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-primary-light/80">
          {expanded ? project.description : `${shortDesc}${isLong ? "..." : ""}`}
        </p>

        {/* More/Less Button — only show if text is long */}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start text-xs font-semibold text-primary hover:underline"
          >
            {expanded ? "▲ Less" : "▼ More"}
          </button>
        )}

        {/* Tech Tags */}
        {project.tech && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech.split(",").map((t) => (
              <span key={t.trim()} className="rounded-full border border-primary-border bg-primary-bg px-2.5 py-0.5 text-[11px] font-semibold text-primary-hover dark:border-primary/40 dark:bg-primary/15 dark:text-primary-light">
                {t.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-auto flex gap-3 pt-3">
          {project.preview && (
            <a href={project.preview} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-primary-border bg-white px-4 py-1.5 text-xs font-semibold hover:border-primary dark:border-primary/40 dark:bg-[#0d0a17] dark:text-white">
              <ExternalLink size={13} /> Preview
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-primary-border bg-white px-4 py-1.5 text-xs font-semibold hover:border-primary dark:border-primary/40 dark:bg-[#0d0a17] dark:text-white">
              <FaGithub size={13} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;