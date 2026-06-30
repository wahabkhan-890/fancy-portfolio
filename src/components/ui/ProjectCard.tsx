import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string;
  category: string;
  preview: string;
  github: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_4px_24px_0_rgba(94,14,192,0.10)] transition-all duration-300 hover:-translate-y-1 dark:border-violet-900/40 dark:bg-[#0d0a17]">
    {/* Image */}
    {project.image && (
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.category && (
          <span className="absolute left-3 top-3 rounded-full bg-violet-600/90 px-2.5 py-1 text-[10px] font-bold uppercase text-white">
            {project.category}
          </span>
        )}
      </div>
    )}

    {/* Body */}
    <div className="flex flex-1 flex-col gap-3 px-5 py-4">
      <h3 className="font-bold text-neutral-900 transition-colors group-hover:text-violet-500 dark:text-white">
        {project.title}
      </h3>

      <div className="h-px w-full bg-gradient-to-r from-violet-500/30 to-transparent" />

      <p className="text-sm leading-relaxed text-neutral-600 dark:text-violet-200/80">
        {project.description}
      </p>

      {/* Tech Tags */}
      {project.tech && (
        <div className="flex flex-wrap gap-1.5">
          {project.tech.split(",").map((t) => (
            <span
              key={t.trim()}
              className="rounded-full border border-violet-200 bg-violet-100 px-2.5 py-0.5 text-[11px] font-semibold text-violet-700 dark:border-violet-700/40 dark:bg-violet-500/15 dark:text-violet-300"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="mt-auto flex gap-3 pt-3">
        {project.preview && (
          <a href={project.preview} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-semibold hover:border-violet-500 dark:border-violet-700/40 dark:bg-[#0d0a17] dark:text-white">
            <ExternalLink size={13} /> Preview
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-semibold hover:border-violet-500 dark:border-violet-700/40 dark:bg-[#0d0a17] dark:text-white">
            <FaGithub size={13} /> GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;