import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}

const Button = ({ children, variant = "primary", className, href }: ButtonProps) => {
  const baseClasses = "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-violet-500 text-white shadow-[0_12px_32px_rgba(142,81,255,0.35)] hover:bg-violet-600",
    secondary: "border border-violet-500/40 text-violet-600 dark:text-violet-300 bg-violet-500/10 hover:bg-violet-500/15",
  };

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(baseClasses, variants[variant], className)}>
      {children}
    </button>
  );
};

export default Button;