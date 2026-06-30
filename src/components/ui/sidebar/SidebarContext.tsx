// ye clint side component hai 
"use client";

import { createContext, useContext, useState } from "react";

// ============================================================
// 1. CONTEXT TYPE
// Yeh batata hai ke context ke andar kya-kya store hoga
// Jaise: Notice board pe kya likha hoga
// ============================================================
interface SidebarContextType {
  isOpen: boolean;                          // Sidebar open hai ya closed?
  setIsOpen: (isOpen: boolean) => void;     // Sidebar toggle karne ka function
  animate: boolean;                         // Animation on/off
}

// ============================================================
// 2. PROVIDER PROPS TYPE
// Yeh batata hai ke SidebarProvider ko kaunse props dene hain
// Jaise: Manager ko kaunsi cheezein chahiye notice chipkane ke liye
// ============================================================
interface SidebarProviderProps {
  children: React.ReactNode;              // Andar ke components — REQUIRED
  isOpen?: boolean;                       // Parent control de sakta hai — OPTIONAL
  setIsOpen?: (isOpen: boolean) => void;  // Parent ka toggle function — OPTIONAL
  animate?: boolean;                      // Animation on/off — OPTIONAL, default true
}

// ============================================================
// 3. CONTEXT CREATE
// Notice board banaya — abhi khaali hai (undefined)
// ============================================================
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// ============================================================
// 4. CUSTOM HOOK — useSidebarcontext
// Koi bhi component is hook se context read kar sakta hai
// Jaise: Notice board padhne ka tarika
// ============================================================
export const useSidebarcontext = () => {
  // Notice board se data lo
  const context = useContext(SidebarContext);

  // Agar notice board khaali hai (Provider wrap nahi kiya)
  if (!context) {
    // Error throw karo — developer ko turant pata chalega
    throw new Error("useSidebarcontext must be used within a SidebarProvider");
  }

  // Notice board ka content return karo
  return context;
};

// ============================================================
// 5. PROVIDER COMPONENT
// Notice board pe notice chipkane wala manager
// ============================================================
export const SidebarProvider = ({
  children,              // Andar ke components
  isOpen: openProp,      // Parent se aaya — rename kiya openProp (conflict se bache)
  setIsOpen: setOpenProp,// Parent se aaya — rename kiya setOpenProp
  animate = true,        // Agar parent ne nahi diya, default true
}: SidebarProviderProps) => {
  
  // ============================================================
  // INTERNAL STATE — Agar parent control nahi karega toh yeh use hoga
  // Jaise: TV ka apna volume — agar remote se nahi badla toh yeh chalega
  // ============================================================
  const [openState, setOpenState] = useState(false);

  // ============================================================
  // DECISION LOGIC — Parent ki value use karein ya apni?
  // Parent ne di → parent ki. Nahi di → internal state.
  // ============================================================
  const isOpen = openProp !== undefined ? openProp : openState;
  const setIsOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  // ============================================================
  // NOTICE CHIPKAO — Sab children ab yeh values read kar sakte hain
  // ============================================================
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};