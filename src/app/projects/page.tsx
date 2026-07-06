import { supabaseServer } from "@/lib/supabase/server";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import type { Project } from "@/types";

const ProjectsPage = async () => {
  const { data: projects } = await supabaseServer
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="container min-h-screen py-20">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        PROJECTS
      </span>
      <h1 className=" text-center mt-4 text-4xl font-bold text-zinc-900 dark:text-white">
        Things I&apos;ve <span className="text-primary">Built</span>
      </h1>
      <p className=" text-center mt-2 text-zinc-600 dark:text-zinc-300">
        A collection of real-world projects — from client work to full-stack applications.
      </p>

      <div className="mt-10">
        <ProjectsGrid projects={(projects as Project[]) || []} />
      </div>
    </section>
  );
};

export default ProjectsPage;