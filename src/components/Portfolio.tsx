import React, { useState } from "react";
import { ArrowUpRight, Lock, Check } from "lucide-react";
import { projectsData, type ProjectItem } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section id="portfolio" className="py-12 sm:py-16 border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-4 sm:gap-12">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              03 / Projects
            </h2>
          </div>

          <div className="sm:col-span-8 divide-y divide-border/60">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="py-5 sm:py-6 first:pt-0 last:pb-0 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 mb-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-left text-sm sm:text-base font-semibold text-foreground group-hover:underline underline-offset-4 inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] sm:text-xs font-mono text-muted-foreground shrink-0">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-[11px] font-normal px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs pt-1 sm:pt-0">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 py-1"
                    >
                      Details
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-0.5 py-1"
                      >
                        GitHub <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:opacity-80 transition-opacity inline-flex items-center gap-0.5 py-1"
                      >
                        Live <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted-foreground font-mono text-[11px] py-1">
                        <Lock className="w-3 h-3" /> Internal
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Case Study Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent>
              <DialogHeader>
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  {selectedProject.category}
                </div>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.subtitle}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-1">
                {selectedProject.imgUrl && (
                  <div className="rounded-lg overflow-hidden border border-border aspect-video bg-muted">
                    <img
                      src={selectedProject.imgUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <Check className="w-3.5 h-3.5 text-foreground shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedProject.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-[11px] font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {selectedProject.isInternalEnterprise && (
                  <p className="text-xs text-muted-foreground border-t border-border pt-3">
                    Deployed on the Local Water Utilities Administration (LWUA)
                    private intranet.
                  </p>
                )}

                {(selectedProject.github || selectedProject.link) && (
                  <div className="flex flex-col sm:flex-row sm:justify-end gap-2 pt-3 border-t border-border">
                    {selectedProject.github && (
                      <Button variant="outline" size="sm" className="w-full sm:w-auto h-9" asChild>
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                    {selectedProject.link && (
                      <Button size="sm" className="w-full sm:w-auto h-9" asChild>
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
