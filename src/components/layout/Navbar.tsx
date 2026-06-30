"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/useThemeStore";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-violet-500/20 bg-white/70 dark:bg-[#080612]/70 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-violet-500">
          Abdul Wahab
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-violet-500",
                pathname === link.href ? "text-violet-500 font-medium" : "text-zinc-600 dark:text-zinc-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 transition-colors hover:bg-violet-500/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 transition-colors hover:bg-violet-500/10 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-violet-500/20 bg-white/70 dark:bg-[#080612]/70 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-violet-500/10",
                  pathname === link.href ? "text-violet-500 font-medium bg-violet-500/10" : "text-zinc-600 dark:text-zinc-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;