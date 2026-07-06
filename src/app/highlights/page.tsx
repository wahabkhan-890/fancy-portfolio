import { supabaseServer } from "@/lib/supabase/server";
import HighlightCard from "@/components/ui/HighlightCard";
import type { Highlight } from "@/types";

const HighlightsPage = async () => {
  const { data: highlights } = await supabaseServer
    .from("highlights")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="container pt-20 pb-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          HIGHLIGHTS
        </span>
        <h1
          className=" text-center mt-4 font-bold text-zinc-900 dark:text-white"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
        >
          My <span className="text-primary">Achievements</span>
        </h1>
        <p className=" text-center mx-auto mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base 2xl:text-lg">
          A curated collection of my top milestones, certifications, and
          notable work.
        </p>
      </div>

      <div className="container py-10">
        {!highlights || highlights.length === 0 ? (
          <p className="text-center text-zinc-500 dark:text-zinc-400">
            No highlights yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(highlights as Highlight[]).map((item) => (
              <HighlightCard key={item.id} highlight={item} />
            ))}
          </div>
        )}
      </div>

      <div className="absolute -bottom-20 left-1/2 -z-10 h-0 w-80 -translate-x-1/2 rounded-full shadow-[0_0_200px_300px_rgba(var(--primary-rgb),0.12)] dark:shadow-[0_0_300px_300px_rgba(var(--primary-rgb),0.3)]" />
    </section>
  );
};

export default HighlightsPage;