"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";

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

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === cat ? "bg-violet-500 text-white" : "bg-violet-500/10 text-violet-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-zinc-500">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;