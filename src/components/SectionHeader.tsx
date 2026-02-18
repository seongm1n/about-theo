"use client";

import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  index: string;
  title: string;
}

export function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-4 mb-10">
        <span className="text-accent font-mono text-sm font-semibold">
          {index}
        </span>
        <h2 className="text-xl md:text-2xl font-bold whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
    </ScrollReveal>
  );
}
