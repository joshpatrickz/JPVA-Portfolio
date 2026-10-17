import React from "react";
import { ArrowDownRight, Mail } from "lucide-react";
import Josh from "@/assets/josh.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="py-12 sm:py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 sm:gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Full-Stack Web Developer &amp; IT Professional</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Joshua Patrick Aquino
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Information System Analyst &amp; developer based in the
              Philippines. I build clean, dependable web interfaces and internal
              enterprise systems with{" "}
              <span className="text-foreground font-medium">React.js</span>,{" "}
              <span className="text-foreground font-medium">Tailwind CSS</span>,{" "}
              <span className="text-foreground font-medium">PHP</span>,{" "}
              <span className="text-foreground font-medium">Laravel</span>, and{" "}
              <span className="text-foreground font-medium">MySQL</span>.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="w-full sm:w-auto h-10 sm:h-9"
              >
                View Projects
                <ArrowDownRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto h-10 sm:h-9"
              >
                <Mail className="w-3.5 h-3.5" />
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="shrink-0">
            <img
              src={Josh}
              alt="Joshua Patrick Aquino"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl object-cover border border-border grayscale-[15%] hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
