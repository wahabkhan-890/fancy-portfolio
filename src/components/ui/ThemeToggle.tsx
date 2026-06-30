"use client";

import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-violet-100 dark:bg-white/5 dark:hover:bg-violet-500/20"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-amber-500" />
      ) : (
        <Moon size={18} className="text-violet-500" />
      )}
    </button>
  );
};

export default ThemeToggle;