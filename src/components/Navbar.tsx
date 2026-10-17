import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import CV from "@/assets/aquino-cv.pdf";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 160;
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Minimal Brand */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-sm font-semibold tracking-tight hover:opacity-75 transition-opacity focus:outline-none py-2"
        >
          jpva.
        </button>

        {/* Minimal Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-xs transition-colors py-1 ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Minimal Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 text-muted-foreground hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex h-8 text-xs px-3 gap-1"
          >
            <a href={CV} download="Aquino, Joshua Patrick - CV.pdf">
              Resume
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className="md:hidden h-9 w-9"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <nav className="px-4 py-3 flex flex-col space-y-1">
              {navLinks.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    )}
                  </button>
                );
              })}
              <div className="pt-2 mt-1 border-t border-border">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-center h-10 text-xs gap-1.5"
                >
                  <a href={CV} download="Aquino, Joshua Patrick - CV.pdf">
                    Download Resume (PDF)
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
