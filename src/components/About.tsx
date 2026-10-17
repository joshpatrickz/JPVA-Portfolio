import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-4 sm:gap-12">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              01 / About
            </h2>
          </div>

          <div className="sm:col-span-8 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium">
              Hi, I&apos;m Josh — nice to meet you.
            </p>
            <p>
              I build web applications from the ground up, combining responsive
              front-end interfaces with structured back-end logic and relational
              databases. My background spans both software development and
              hands-on ICT infrastructure administration.
            </p>
            <p>
              Currently, I work as an{" "}
              <span className="text-foreground font-medium">
                Information System Analyst I
              </span>{" "}
              at the Local Water Utilities Administration (LWUA), where I
              architect and maintain internal administrative systems. I&apos;m
              always open to opportunities where I can contribute, learn, and
              grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
