export const colors = {
  primary: {
    400: "var(--primary-light)",
    500: "var(--primary)",
    600: "var(--primary-hover)",
  },
  dark: {
    bg: "#080612",
    surface: "#0d0a17",
    card: "#100a1b",
    border: "rgba(var(--primary-rgb), 0.2)",
  },
  light: {
    bg: "#f8f7ff",
    surface: "#ffffff",
    card: "#ffffff",
    border: "rgba(var(--primary-rgb), 0.15)",
  },
} as const;

export const glassStyles = {
  card: "rounded-2xl border border-primary/30 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_-40px_rgba(var(--primary-rgb),0.7)]",
  input: "rounded-xl border border-primary/30 bg-white/70 dark:bg-white/5 backdrop-blur-xl px-4 py-3 outline-none focus:border-primary transition-colors",
} as const;