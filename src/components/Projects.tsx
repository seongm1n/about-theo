"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "./LanguageProvider";

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
  project: {
    title: string;
    subtitle: string;
    period: string;
    role: string;
    team: string;
    status: string;
    stacks: readonly string[];
    implementations: readonly string[];
    troubleshooting?: readonly string[];
    highlight?: string;
    links?: readonly { label: string; href: string }[];
    notice?: string;
  };
  index: number;
  implementationLabel: string;
  troubleshootingLabel: string;
}

function ProjectCard({ project, index, implementationLabel, troubleshootingLabel }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        className="rounded-lg border border-border bg-surface hover:border-accent/40 transition-colors cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setExpanded(!expanded);
        }}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
      >
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

          <p className="text-sm text-muted mb-3">{project.subtitle}</p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted font-mono mb-3">
            <span>{project.period}</span>
            <span className="text-border">|</span>
            <span>{project.role}</span>
            <span className="text-border">|</span>
            <span>{project.team}</span>
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
              <div className="px-5 pb-5 pt-3 border-t border-border space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
                    {implementationLabel}
                  </h4>
                  <ul className="space-y-1.5">
                    {project.implementations.map((impl, i) => (
                      <li key={i} className="text-sm text-muted flex items-start gap-2 leading-relaxed">
                        <span className="text-accent mt-2 shrink-0 text-[6px]">&#9679;</span>
                        {impl}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.troubleshooting && project.troubleshooting.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
                      {troubleshootingLabel}
                    </h4>
                    <ul className="space-y-1.5">
                      {project.troubleshooting.map((ts, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-2 leading-relaxed">
                          <span className="text-yellow-500 mt-2 shrink-0 text-[6px]">&#9679;</span>
                          {ts}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.highlight && (
                  <p className="text-sm text-accent bg-accent/5 border border-accent/20 rounded-md px-4 py-2.5">
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
              implementationLabel={t.projects.implementationLabel}
              troubleshootingLabel={t.projects.troubleshootingLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
