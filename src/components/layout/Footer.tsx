import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full mt-[6vw] lg:mt-[4vw] border-t text-white border-zinc-200 bg-primary-hover dark:bg-primary-hover dark:border-primary/30">
    <div className="container py-14">
      {/* Top */}
      <div className="flex flex-col lg:flex-row gap-12 lg:justify-between">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-bold">Abdul Wahab</h3>
          <p className="mt-3 text-base max-w-md leading-relaxed">
            Full stack web developer focused on modern interfaces, admin
            dashboards, and scalable Next.js applications.
          </p>
        </div>

        {/* Navigation + Social */}
        <div className="flex gap-20">
          {/* Navigation */}
          <div>
            <h4 className="text-base font-semibold">Navigation</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="transition-colors duration-300 hover:text-primary-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base font-semibold">Socials</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { icon: <FaGithub size={18} />, label: "GitHub", href: "https://github.com/wahabkhan-890" },
                { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/wahab-khan-203413347" },
                { icon: <FaWhatsapp size={18} />, label: "WhatsApp", href: "https://wa.me/923179922459" },
                { icon: <MdEmail size={18} />, label: "Email", href: "mailto:wahabkhan9605@gmail.com" },
              ].map((social) => (
                <li
                  key={social.label}
                  className="flex items-center gap-3 hover:text-primary-light transition-colors duration-300"
                >
                  {social.icon}
                  <a href={social.href} target="_blank" rel="noreferrer" className="hover:underline">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-primary/30 pt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abdul Wahab. All rights reserved.
        </p>
        <p className="text-sm">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;