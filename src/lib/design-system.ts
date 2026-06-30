export const colors = {
  primary: {
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
  },
  dark: {
    bg: "#080612",
    surface: "#0d0a17",
    card: "#100a1b",
    border: "rgba(139, 92, 246, 0.2)",
  },
  light: {
    bg: "#f8f7ff",
    surface: "#ffffff",
    card: "#ffffff",
    border: "rgba(139, 92, 246, 0.15)",
  },
} as const;

export const glassStyles = {
  card: "rounded-2xl border border-violet-500/30 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_-40px_rgba(139,92,246,0.7)]",
  input: "rounded-xl border border-violet-500/30 bg-white/70 dark:bg-white/5 backdrop-blur-xl px-4 py-3 outline-none focus:border-violet-500 transition-colors",
} as const;