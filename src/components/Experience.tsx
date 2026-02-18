"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "./LanguageProvider";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader index={t.experience.index} title={t.experience.title} />

        <div className="space-y-8">
          {t.experience.items.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-1 md:gap-8 ${
                  exp.current
                    ? "rounded-lg border border-accent/30 bg-accent/[0.03] p-5 -mx-5"
                    : ""
                }`}
              >
                <div className="shrink-0">
                  <span className={`text-sm font-mono ${exp.current ? "text-accent font-semibold" : "text-muted"}`}>
                    {exp.period}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className={`font-semibold text-base ${exp.current ? "text-accent" : ""}`}>
                      {exp.title}
                    </h3>
                    {exp.role && (
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                        {exp.role}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-muted bg-surface px-2 py-0.5 rounded">
                      {exp.type}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {exp.details.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5 shrink-0 text-[8px]">&#9654;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
