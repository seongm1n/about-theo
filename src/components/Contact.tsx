"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "./LanguageProvider";

const LINKS = [
  { label: "Email", value: "0411tjdals34@gmail.com", href: "mailto:0411tjdals34@gmail.com" },
  { label: "GitHub", value: "github.com/seongm1n", href: "https://github.com/seongm1n" },
  { label: "Blog", value: "velog.io/@seongm1n", href: "https://velog.io/@seongm1n" },
  { label: "LinkedIn", value: "linkedin.com/in/hellotheo", href: "https://www.linkedin.com/in/hellotheo" },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader index={t.contact.index} title={t.contact.title} />

        <ScrollReveal>
          <p className="text-muted text-sm leading-relaxed mb-8">
            {t.contact.description}
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {LINKS.map((link, i) => {
            const isExternal = !link.href.startsWith("mailto");
            return (
              <ScrollReveal key={link.label} delay={i * 0.08}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-3 border-b border-border group hover:border-accent/40 transition-colors"
                >
                  <span className="text-sm font-mono text-muted w-20 shrink-0">
                    {link.label}
                  </span>
                  <span className="text-sm text-foreground group-hover:text-accent transition-colors truncate">
                    {link.value}
                  </span>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-muted group-hover:text-accent transition-colors shrink-0 ml-4"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
