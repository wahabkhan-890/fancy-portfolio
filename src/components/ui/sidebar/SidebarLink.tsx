"use client";

import Link from "next/link";
import { useSidebarcontext } from "./SidebarContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ============================================================
// LINK INTERFACE — Har link ki shape
// ============================================================
interface LinkItem {
  label: string;          // Link ka naam ("Home", "About")
  href: string;           // Kahan le jana hai ("/", "/about")
  icon: React.ReactNode;  // Icon (JSX Element)
  onClick?: () => void;   // Extra click handler — OPTIONAL (logout ke liye)
}

// ============================================================
// PROPS INTERFACE
// ============================================================
interface SidebarLinkProps {
  link: LinkItem;
  className?: string;
}

// ============================================================
// SIDEBAR LINK COMPONENT
// Collapsed: sirf icon | Expanded: icon + text
// ============================================================
export const SidebarLink = ({
  link,
  className,
  ...props
}: SidebarLinkProps) => {
  
  // Context se values lo
  const { isOpen, animate } = useSidebarcontext();

  return (
    <Link
      href={link.href}
      onClick={(e) => {
        // Agar link mein onClick hai (jaise logout)
        if (link.onClick) {
          e.preventDefault();  // Navigation roko
          link.onClick();      // Custom function chalao
        }
      }}
      className={cn(
        // Base styles
        "flex items-center gap-2 rounded-lg py-2 transition-all duration-200",
        // Hover effect
        "hover:bg-violet-500/10 dark:hover:bg-violet-500/35",
        // Jab expanded ho — left padding
        isOpen ? "ps-2" : "",
        // Parent ki extra classes
        className
      )}
      {...props}
    >
      {/* ============================================================
          ICON — hamesha dikhega
          ============================================================ */}
      {link.icon}

      {/* ============================================================
          TEXT — sirf expanded mode mein dikhega
          ============================================================ */}
      <motion.span
        animate={{
          // Agar animate ON + open → dikhao
          // Agar animate ON + closed → chhupao
          // Agar animate OFF → hamesha dikhao
          display: animate ? (isOpen ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (isOpen ? 1 : 0) : 1,
        }}
        className="whitespace-pre text-sm !m-0 !p-0 text-neutral-700 dark:text-neutral-200"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};