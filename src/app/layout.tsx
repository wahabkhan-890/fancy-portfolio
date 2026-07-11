import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { siteMetadata } from "@/lib/metadata";

export const metadata: Metadata = siteMetadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <ThemeScript />
    </head>
    <body>
      <Toaster position="top-right" />
      <CursorGlow />
      
      {/* Theme Toggle — Fixed Top-Right (Mobile + Desktop dono pe dikhega) */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>
      
      <Sidebar />
      <main className="min-h-screen">
        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;