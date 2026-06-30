"use client";

import { useSidebarcontext } from "./SidebarContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ============================================================
// PROPS INTERFACE
// DesktopSidebar ko kaunsi props milengi
// ============================================================
interface DesktopSidebarProps {
  className?: string;        // Extra CSS classes — OPTIONAL
  children: React.ReactNode; // Andar ke components (links, profile, etc.)
}

// ============================================================
// DESKTOP SIDEBAR COMPONENT
// Sirf desktop pe dikhega — mouse hover pe expand, leave pe collapse
// ============================================================
export const DesktopSidebar = ({
  className,
  children,
  ...props                  // Baaki ke extra props (id, style, etc.)
}: DesktopSidebarProps) => {
  
  // ============================================================
  // Context se values lo — notice board se data read karo
  // ============================================================
  const { isOpen, setIsOpen, animate } = useSidebarcontext();

  return (
    <motion.div
      // ============================================================
      // STYLING
      // ============================================================
      className={cn(
        // Base styles — sab screens pe apply
        "z-40 h-full flex-col px-4 py-4",
        // Desktop: flex dikhao, Mobile: hide
        "hidden md:flex",
        // Fixed width — collapse nahi hoga content
        "shrink-0",
        // Parent se aayi extra classes
        className
      )}

      // ============================================================
      // ANIMATION — Width change on hover
      // ============================================================
      animate={{
        // Agar animate=true aur open=true → 300px (expanded)
        // Agar animate=true aur open=false → 60px (collapsed)
        // Agar animate=false → hamesha 300px (no animation)
        width: animate ? (isOpen ? "300px" : "60px") : "300px",
      }}
      transition={{
        duration: 0.3,        // Animation speed — 300ms
        ease: "easeInOut",    // Smooth start and end
      }}

      // ============================================================
      // MOUSE EVENTS — Expand/Collapse
      // ============================================================
      onMouseEnter={() => setIsOpen(true)}   // Mouse andar aaya → expand
      onMouseLeave={() => setIsOpen(false)}  // Mouse bahar gaya → collapse

      // ============================================================
      // EXTRA PROPS — Jo parent ne diye (id, style, etc.)
      // ============================================================
      {...props}
    >
      {/* Andar ke components — SidebarLink, profile, social icons */}
      {children}
    </motion.div>
  );
};