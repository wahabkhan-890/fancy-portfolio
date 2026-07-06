import { supabaseServer } from "@/lib/supabase/server";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import type { Project } from "@/types";

const ProjectsSection = async () => {
  const { data: allProjects } = await supabaseServer
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  // Sirf "Top" category wale projects lo — max 3
  const topProjects = (allProjects as Project[])
    ?.filter((p) => p.category === "Top")
    .slice(0, 3);

  if (!topProjects || topProjects.length === 0) return null;

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container">
        <h2 className="inline-block border-s-2 border-primary ps-2 text-lg font-semibold leading-6 text-primary">
          TOP PROJECTS
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 2xl:text-lg">
          A selection of projects demonstrating my skills and problem-solving approach.
        </p>

        {/* 3 Cards in 1 Row */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {topProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/10"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;