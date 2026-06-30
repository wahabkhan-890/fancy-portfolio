import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * GlassCard — matches reference portfolio ProjectCard styling.
 *
 * Light: white bg, light border, subtle violet shadow
 * Dark:  dark bg (#0d0a17), violet/40 border, deeper violet shadow
 */
const GlassCard = ({ children, className }: GlassCardProps) => (
  <div
    className={cn(
      // Shape
      "rounded-3xl overflow-hidden",
      // Light mode surface
      "bg-white",
      // Dark mode surface
      "dark:bg-[#0d0a17]",
      // Border
      "border border-neutral-200 dark:border-violet-900/40",
      // Shadow
      "shadow-[0_4px_24px_0_rgba(94,14,192,0.10)] dark:shadow-[0_4px_40px_0_rgba(94,14,192,0.22)]",
      // Hover
      "hover:shadow-[0_8px_40px_0_rgba(94,14,192,0.18)] dark:hover:shadow-[0_8px_56px_0_rgba(130,60,255,0.35)]",
      "transition-all duration-300",
      className
    )}
  >
    {children}
  </div>
);

export default GlassCard;
