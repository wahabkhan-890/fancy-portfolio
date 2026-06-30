import { supabaseServer } from "@/lib/supabase/server";

interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  icon: string;
}

const HighlightsPage = async () => {
  const { data: highlights } = await supabaseServer
    .from("highlights")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Page header */}
      <div className="container pt-20 pb-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
          HIGHLIGHTS
        </span>
        <h1
          className="mt-4 font-bold text-zinc-900 dark:text-white"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
        >
          My <span className="text-violet-500">Achievements</span>
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base 2xl:text-lg">
          A curated collection of my top milestones, certifications, and
          notable work.
        </p>
      </div>

      {/* Grid */}
      <div className="container py-10">
        {!highlights || highlights.length === 0 ? (
          <p className="text-center text-zinc-500 dark:text-zinc-400">
            No highlights yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item: Highlight) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_20px_70px_-25px_rgba(139,92,246,0.4)] hover:-translate-y-1"
              >
                {/* Image */}
                {item.image && (
                  <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white 2xl:text-xl">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="my-3 h-px w-full bg-gradient-to-r from-violet-500/30 via-violet-300/10 to-transparent" />

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 2xl:text-base">
                  {item.description}
                </p>

                {/* Date */}
                {item.date && (
                  <p className="mt-4 text-xs font-semibold text-violet-500 dark:text-violet-400 2xl:text-sm">
                    {item.date}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom glow */}
      <div className="absolute -bottom-20 left-1/2 -z-10 h-0 w-80 -translate-x-1/2 rounded-full shadow-[0_0_200px_300px_rgba(139,92,246,0.12)] dark:shadow-[0_0_300px_300px_rgba(139,92,246,0.3)]" />
    </section>
  );
};

export default HighlightsPage;
