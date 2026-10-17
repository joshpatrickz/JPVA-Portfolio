import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center sm:text-left">
        <p>&copy; {year} Joshua Patrick Aquino.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/joshpatrickz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors py-1"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors py-1"
          >
            Contact
          </a>
          <span className="font-mono text-[11px] text-muted-foreground/70">
            React &bull; Shadcn UI
          </span>
        </div>
      </div>
    </footer>
  );
}
