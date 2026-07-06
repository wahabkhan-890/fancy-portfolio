import type { Highlight } from "@/types";
import Image from "next/image";

const HighlightCard = ({ highlight }: { highlight: Highlight }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_70px_-25px_rgba(var(--primary-rgb),0.4)]">
    {highlight.image && (
      <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={highlight.image}
          alt={highlight.title}
          fill
          className=" object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    )}

    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white 2xl:text-xl">
      {highlight.icon && <span className="mr-2">{highlight.icon}</span>}
      {highlight.title}
    </h3>

    <div className="my-3 h-px w-full bg-gradient-to-r from-primary/30 via-primary-light/10 to-transparent" />

    <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 2xl:text-base">
      {highlight.description}
    </p>

    {highlight.date && (
      <p className="mt-4 text-xs font-semibold text-primary dark:text-primary-light 2xl:text-sm">
        {highlight.date}
      </p>
    )}
  </div>
);

export default HighlightCard;
