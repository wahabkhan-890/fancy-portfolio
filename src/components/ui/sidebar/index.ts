/*
without indext.ts:
// ❌ Pehle — 4 alag imports:
import { SidebarProvider } from "@/components/ui/sidebar/SidebarContext";
import { DesktopSidebar } from "@/components/ui/sidebar/DesktopSidebar";
import { MobileSidebar } from "@/components/ui/sidebar/MobileSidebar";
import { SidebarLink } from "@/components/ui/sidebar/SidebarLink";
humi eik eik component ko alag alag import karte the, jo ki verbose our repetitive tha.
*/



// ============================================================
// BARREL EXPORT — Sab components ek jagah se export
// ============================================================

export { SidebarProvider, useSidebarcontext } from "./SidebarContext";
export { DesktopSidebar } from "./DesktopSidebar";
export { MobileSidebar } from "./MobileSidebar";
export { SidebarLink } from "./SidebarLink";