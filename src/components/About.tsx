"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader index={t.about.index} title={t.about.title} />

        <div className="space-y-6">
          {t.about.values.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex gap-4 md:gap-6">
                <div className="shrink-0 w-1 rounded-full bg-accent" />
                <div>
                  <h3 className="font-semibold text-base mb-1">
                    {item.keyword}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
