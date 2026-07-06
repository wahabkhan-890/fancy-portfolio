"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Home, User, Folder, Mail, Star, FileText } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "/about", icon: <User className="w-5 h-5" /> },
  { name: "Projects", href: "/projects", icon: <Folder className="w-5 h-5" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
  { name: "Highlights", href: "/highlights", icon: <Star className="w-5 h-5" /> },
  { name: "My Resume", href: "/resume", icon: <FileText className="w-5 h-5" /> },
];

const socialMedia = [
  { name: "LinkedIn", icon: <FaLinkedin className="text-2xl md:text-3xl" />, link: "https://www.linkedin.com/in/wahab-khan-203413347" },
  { name: "GitHub", icon: <FaGithub className="text-2xl md:text-3xl" />, link: "https://github.com/wahabkhan-890" },
  { name: "WhatsApp", icon: <FaWhatsapp className="text-2xl md:text-3xl" />, link: "https://wa.me/923179922459" },
  { name: "Email", icon: <HiOutlineMail className="text-2xl md:text-3xl" />, link: "mailto:wahabkhan9605@gmail.com" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1700) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(e.target as Node) && window.innerWidth <= 1700) {
        setIsSidebarOpen(false);
      }
    };
    if (isSidebarOpen && window.innerWidth <= 1700) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <>
      {/* ── Sidebar ── */}
      <aside
        id="sidebar"
        className={`group/sidebar fixed top-0 left-0 z-40 flex h-screen w-[280px] flex-col overflow-y-auto bg-white p-5 shadow-violet-500 transition-transform duration-500 dark:bg-[#000] md:w-[352px] ${
          isSidebarOpen ? "translate-x-0 shadow-md" : "-translate-x-full"
        }`}
      >
        {/* ── CLOSE BUTTON — SIDEBAR KE ANDAR ── */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute right-3 top-5 z-50 rounded-md bg-gray-200 p-2 transition-all hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close sidebar"
        >
          <FiX size={22} />
        </button>

        {/* ── Profile ── */}
        <div className="mb-6 flex flex-col items-center pt-10">
          <div className="relative aspect-square w-[70%]">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              priority
              sizes="(max-width: 640px) 80vw, 300px"
              className="rounded-full border-[3px] border-primary bg-primary/10 object-cover transition-all group-hover/sidebar:border-primary"
            />
          </div>
          <strong className="mt-2 text-center text-xl text-zinc-900 dark:text-white">
            Abdul Wahab
          </strong>
          <span className="mt-1 text-center text-xs text-zinc-500 dark:text-zinc-400">
            Full Stack Developer
          </span>
        </div>

        {/* ── Navigation ── */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (window.innerWidth <= 1654) setIsSidebarOpen(false);
                  }}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-base transition-all hover:bg-gray-700 hover:text-white ${
                    pathname === item.href ? "bg-primary-hover text-white" : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Social Icons ── */}
        <div className="mt-auto border-t border-primary pt-2 dark:border-primary/30">
          <span className="text-base text-primary">Find With Me</span>
          <div className="mt-2 flex justify-center gap-2">
            {socialMedia?.map((account, index) => (
              <a
                key={index + "social"}
                href={account?.link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 transition-all hover:text-white dark:bg-gray-700 md:h-12 md:w-12"
              >
                <span className="absolute z-10">{account?.icon}</span>
                <span className="absolute inset-0 z-[1] scale-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-100" />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* ── HAMBURGER BUTTON — SIDEBAR CLOSED PE DIKHEGA ── */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-5 top-5 z-50 rounded-md bg-gray-200 p-2 transition-all hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Open sidebar"
        >
          <FiMenu size={22} />
        </button>
      )}
    </>
  );
};

export default Sidebar;