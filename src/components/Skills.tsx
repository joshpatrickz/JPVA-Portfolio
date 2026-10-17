import React from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiMysql,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";

const coreSkills = [
  { name: "HTML / CSS", icon: SiHtml5, secondIcon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "MySQL", icon: SiMysql },
];

const itExpertise = [
  "IT Infrastructure Maintenance",
  "System Installation, Configuration & Upgrading",
  "Hardware & Software Troubleshooting",
  "LAN / WAN / Wireless Administration",
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-4 sm:gap-12">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              02 / Skills &amp; Expertise
            </h2>
          </div>

          <div className="sm:col-span-8 space-y-7">
            {/* Web Development Stack */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3">
                Web Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {coreSkills.map((skill) => {
                  const Icon = skill.icon;
                  const SecondIcon = skill.secondIcon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors min-w-0"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                      {SecondIcon && (
                        <SecondIcon className="w-4 h-4 text-muted-foreground shrink-0 -ml-1" />
                      )}
                      <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* IT & Infrastructure */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3">
                Information Technology &amp; Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {itExpertise.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="py-1.5 px-3 text-xs font-normal text-muted-foreground whitespace-normal text-left leading-snug"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
