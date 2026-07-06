"use client";

import { useEffect } from "react";
import { useSidebarContext } from "./SidebarContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// ============================================================
// PROPS INTERFACE
// ============================================================
interface MobileSidebarProps {
  className?: string;
  children: React.ReactNode;
}

// ============================================================
// MOBILE SIDEBAR COMPONENT
// Sirf mobile pe dikhega — overlay + slide in from left
// ============================================================
export const MobileSidebar = ({
  className,
  children,
  ...props
}: MobileSidebarProps) => {
  
  // Context se values lo
  const { isOpen, setIsOpen } = useSidebarContext();
  
  // Current route — change pe sidebar close karna
  const pathname = usePathname();

  // ============================================================
  // ROUTE CHANGE PE AUTO CLOSE
  // ============================================================
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <>
      {/* ============================================================
          HAMBURGER BUTTON — sirf mobile pe dikhega
          ============================================================ */}
      <div
        className={cn(
          "flex h-10 w-fit flex-row items-center justify-between px-4 py-4 md:hidden",
          className
        )}
        {...props}
      >
        <div
          className="z-20 cursor-pointer text-neutral-800 dark:text-neutral-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </div>

        {/* ============================================================
            OVERLAY + SIDEBAR — jab open true ho
            ============================================================ */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay — transparent black background */}
              <motion.div
                className="fixed inset-0 z-[90] bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar panel — slides in from left */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={cn(
                  "fixed inset-0 z-[100] flex h-full w-full flex-col justify-between p-10",
                  "bg-white dark:bg-[#0a0611]"
                )}
              >
                {/* Close button */}
                <div
                  className="absolute right-10 top-10 z-50 cursor-pointer text-neutral-800 dark:text-neutral-200"
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </div>

                {/* Andar ke components — links, profile, social */}
                {children}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
