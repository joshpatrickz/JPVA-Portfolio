import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import CV from "../assets/aquino-cv.pdf";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "portfolio", label: "Portfolio" },
  { to: "experience", label: "Experience" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-extrabold tracking-tight cursor-pointer gradient-text"
          >
            JPVA.
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-accent dark:text-accent font-semibold"
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer rounded-lg hover:bg-accent/5"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Download CV */}
            <a
              href={CV}
              download="Aquino, Joshua Patrick - CV"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40"
            >
              Download CV
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <ul className="px-4 py-3 space-y-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={CV}
                  download="Aquino, Joshua Patrick - CV"
                  className="block w-full text-center px-4 py-2.5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-dark transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
