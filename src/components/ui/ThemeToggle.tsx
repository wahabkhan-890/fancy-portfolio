"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect } from "react";
import { useThemeStore } from "@/store/useThemeStore";

const ThemeToggle = () => {
  const { theme, toggleTheme, hydrate } = useThemeStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-primary-bg dark:bg-white/5 dark:hover:bg-primary/20"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-amber-500" />
      ) : (
        <Moon size={18} className="text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
