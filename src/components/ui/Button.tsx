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
    primary: "bg-primary text-white shadow-[0_12px_32px_rgba(var(--primary-rgb),0.35)] hover:bg-primary-hover",
    secondary: "border border-primary/40 text-primary-hover dark:text-primary-light bg-primary/10 hover:bg-primary/15",
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