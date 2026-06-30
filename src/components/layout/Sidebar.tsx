"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Home, User, Folder, Mail, Star, FileText } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Highlights", href: "/highlights", icon: Star },
  { name: "Resume", href: "/resume", icon: FileText },
];

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/wahabkhan-890" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/wahab-khan-203413347?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/923179922459" },
  { name: "Email", icon: HiOutlineMail, href: "mailto:wahabkhan9605@gmail.com" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on outside click (mobile)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(e.target as Node) && window.innerWidth < 1654) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Auto-open on large screens
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1654);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ── Sidebar Panel ── */}
      <aside
        id="sidebar"
        className={`
          group/sidebar fixed top-0 left-0 z-40 flex h-full w-64 flex-col
          border-r border-violet-500/15
          bg-white dark:bg-[#0a0611]
          shadow-md transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            absolute top-5 z-50 rounded-md p-2 transition-all
            bg-gray-200 hover:bg-gray-300 text-zinc-800
            dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white
            ${isOpen ? "right-3" : "-right-11"}
          `}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-3 px-4 pt-14">
          <div className="relative">
            <div
              className="absolute -inset-1.5 animate-spin rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 opacity-75 blur-sm"
              style={{ animationDuration: "4s" }}
            />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-[3px] border-violet-500 bg-violet-500/10">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="mt-3 text-xl font-bold text-zinc-900 dark:text-white">
            Abdul Wahab
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Full Stack Developer
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex-1">
          <ul className="space-y-1 px-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (window.innerWidth < 1654) setIsOpen(false);
                  }}
                  className={`
                    flex items-center gap-3 rounded-full px-4 py-2 text-sm transition-all
                    ${pathname === item.href
                      ? "bg-violet-800 text-white"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-gray-200 hover:text-zinc-900 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  `}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="mt-auto border-t border-violet-500/20 pt-4 pb-6">
          <span className="block px-4 text-sm text-violet-500">Find With Me</span>
          <div className="mt-3 flex justify-center gap-3 px-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 transition-all hover:text-white dark:bg-gray-700"
              >
                <span className="relative z-10 text-zinc-600 group-hover:text-white transition-colors duration-300 dark:text-zinc-300">
                  <link.icon size={18} />
                </span>
                <span className="absolute inset-0 scale-0 rounded-full bg-violet-500 transition-transform duration-300 group-hover:scale-100" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
