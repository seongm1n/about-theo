"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "./LanguageProvider";
import type { ProjectItem } from "@/locales/types";

const STATUS_STYLE: Record<string, string> = {
  "운영 중": "bg-green-500/10 text-green-500 dark:text-green-400",
  "개발 중": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  "완료": "bg-muted/10 text-muted",
  "Live": "bg-green-500/10 text-green-500 dark:text-green-400",
  "In Dev": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  "Completed": "bg-muted/10 text-muted",
  "運用中": "bg-green-500/10 text-green-500 dark:text-green-400",
  "開発中": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  "完了": "bg-muted/10 text-muted",
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
}

function ProjectCard({ project, index, problemLabel, solutionLabel, resultLabel }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        className="rounded-lg border border-border bg-surface hover:border-accent/40 transition-colors cursor-pointer overflow-hidden"
        onClick={() => setExpanded(!expanded)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setExpanded(!expanded);
        }}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
      >
        {project.image && project.imageWidth && project.imageHeight && (
          <div className="bg-background border-b border-border">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={project.imageWidth}
              height={project.imageHeight}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <div className="p-5">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-base">{project.title}</h3>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${STATUS_STYLE[project.status] ?? "bg-muted/10 text-muted"}`}>
                {project.status}
              </span>
            </div>
            <motion.svg
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              className="text-muted shrink-0"
            >
              <path d="m6 9 6 6 6-6" />
            </motion.svg>
          </div>

          <p className="text-sm text-muted mb-3 leading-relaxed">{project.subtitle}</p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted font-mono mb-3">
            <span>{project.period}</span>
            <span className="text-border">|</span>
            <span>{project.role}</span>
            {project.team && (
              <>
                <span className="text-border">|</span>
                <span>{project.team}</span>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.stacks.map((stack) => (
              <span key={stack} className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent">
                {stack}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-3 border-t border-border space-y-5">
                {project.problem && (
                  <div>
                    <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
                      {problemLabel}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
                  </div>
                )}

                {project.solutions && project.solutions.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
                      {solutionLabel}
                    </h4>
                    <ol className="space-y-3">
                      {project.solutions.map((sol, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent text-[11px] font-mono mt-0.5">
                            {i + 1}
                          </span>
                          <div className="space-y-1">
                            <p className="text-sm font-semibold leading-snug">{sol.title}</p>
                            <p className="text-sm text-muted leading-relaxed">{sol.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {project.results && project.results.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
                      {resultLabel}
                    </h4>
                    <ul className="space-y-1.5">
                      {project.results.map((res, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-2 leading-relaxed">
                          <span className="text-green-500 mt-2 shrink-0 text-[6px]">&#9679;</span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.highlight && (
                  <p className="text-sm text-accent bg-accent/5 border border-accent/20 rounded-md px-4 py-2.5 leading-relaxed">
                    {project.highlight}
                  </p>
                )}

                {project.notice && (
                  <p className="text-[11px] text-muted italic">
                    {project.notice}
                  </p>
                )}

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
                      >
                        {link.label}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader index={t.projects.index} title={t.projects.title} />

        <div className="space-y-3">
          {t.projects.items.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              problemLabel={t.projects.problemLabel}
              solutionLabel={t.projects.solutionLabel}
              resultLabel={t.projects.resultLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
