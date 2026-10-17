import React from "react";
import { experienceData, certificatesData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Work History */}
        <div className="grid sm:grid-cols-12 gap-4 sm:gap-12">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              04 / Experience
            </h2>
          </div>

          <div className="sm:col-span-8 space-y-8 sm:space-y-10">
            {experienceData.map((job) => (
              <div key={job.role + job.organization} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {job.organization}
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-muted-foreground shrink-0">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {job.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-muted-foreground/60 select-none">
                        &ndash;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trainings & Certificates */}
        <div className="grid sm:grid-cols-12 gap-4 sm:gap-12 pt-8 border-t border-border/40">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Trainings &amp; Certificates
            </h2>
          </div>

          <div className="sm:col-span-8 divide-y divide-border/50">
            {certificatesData.map((cert) => (
              <div
                key={cert.title}
                className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-foreground">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {cert.org}
                  </p>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-muted-foreground shrink-0">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
