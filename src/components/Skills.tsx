"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "./LanguageProvider";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader index={t.skills.index} title={t.skills.title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.skills.tiers.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="rounded-lg border border-border bg-surface p-5 h-full">
                <h3 className="text-sm font-semibold mb-1">{tier.label}</h3>
                <p className="text-xs text-muted mb-4">{tier.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tier.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-background"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-mono text-accent font-semibold shrink-0">
              {t.skills.certificatesLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              {t.skills.certificates.map((cert) => (
                <span
                  key={cert.name}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-surface"
                >
                  {cert.name}
                  <span className="text-muted ml-1.5">{cert.date}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
