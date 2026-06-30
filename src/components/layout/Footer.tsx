import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/wahabkhan-890", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/wahab-khan-203413347?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: FaLinkedin },
  { name: "WhatsApp", href: "https://wa.me/923179922459", icon: FaWhatsapp },
  { name: "Email", href: "mailto:wahabkhan9605@gmail.com", icon: MdEmail },
];

const Footer = () => (
  <footer className="w-full border-t border-zinc-200 bg-violet-900 text-white dark:border-violet-500/30 dark:bg-violet-900">
    <div className="container py-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Abdul Wahab</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-300">
            Full stack web developer focused on modern interfaces, admin dashboards, and scalable Next.js applications.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-300 transition-colors hover:text-violet-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Socials</h4>
            <ul className="mt-3 space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-violet-400"
                  >
                    <social.icon size={16} />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-violet-500/30 md:flex-row">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Abdul Wahab. All rights reserved.
        </p>
        <p className="text-sm text-zinc-400">
          Built with Next.js, Tailwind CSS &amp; Supabase
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;