"use client";

import { createContext, useContext, useState } from "react";

// ============================================================
// SIDEBAR CONTEXT - Shared state for desktop and mobile sidebar
// ============================================================
interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  animate: boolean;
}

interface SidebarProviderProps {
  children: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  animate?: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// ============================================================
// SIDEBAR HOOK - Enforces usage inside SidebarProvider
// ============================================================
export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }

  return context;
};

// ============================================================
// SIDEBAR PROVIDER - Supports controlled and uncontrolled usage
// ============================================================
export const SidebarProvider = ({
  children,
  isOpen: openProp,
  setIsOpen: setOpenProp,
  animate = true,
}: SidebarProviderProps) => {
  const [openState, setOpenState] = useState(false);

  const isOpen = openProp !== undefined ? openProp : openState;
  const setIsOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};
