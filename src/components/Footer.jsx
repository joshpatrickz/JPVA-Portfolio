import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900 dark:bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight gradient-text mb-4"
          >
            JPVA.
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-6">
            {[
              { icon: FiGithub, href: "https://github.com/joshpatrickz" },
              { icon: FiLinkedin, href: "#" },
              { icon: FiMail, href: "mailto:josh@example.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-500">
            Handcrafted with React.js & Tailwind CSS
          </p>
          <p className="text-xs text-slate-600 mt-1">
            &copy; {year} Joshua Patrick Aquino
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
