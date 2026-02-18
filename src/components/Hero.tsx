"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

function useTypingRotation(words: readonly string[], typingSpeed = 80, pauseDuration = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, wordIndex, isDeleting, words, typingSpeed, pauseDuration]);

  return displayed;
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/seongm1n",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Blog",
    href: "https://velog.io/@seongm1n",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.165 1.193.495.33.315.495.765.495 1.35 0 .93-.405 2.145-1.215 3.645-.795 1.5-1.98 3.24-3.555 5.22l-1.755.03L9.028 7.543c-.075-.36-.263-.54-.563-.54-.21 0-.488.135-.833.405L6.86 6.573 8.753 6.3c.36-.033.72-.05 1.08-.05h-.45.5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hellotheo",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:0411tjdals34@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export function Hero() {
  const { t } = useLanguage();
  const typed = useTypingRotation(t.hero.roles);

  return (
    <section className="min-h-[90vh] flex items-center px-6 pt-20 pb-16">
      <div className="max-w-3xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-w-0 order-2 md:order-1"
        >
          <p className="text-accent font-mono text-sm mb-4">{t.hero.greeting}</p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
            {t.hero.name}
            <span className="text-muted font-normal text-2xl md:text-3xl ml-3">
              {t.hero.nickname}
            </span>
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-accent/40 text-accent bg-accent/5">
              {t.hero.badge}
            </span>
          </div>

          <div className="h-10 md:h-12 flex items-center mb-6">
            <span className="text-xl md:text-2xl text-muted font-mono">
              {typed}
              <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-blink align-middle" />
            </span>
          </div>

          <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
            {t.hero.description}
            <br className="hidden md:block" />
            {t.hero.descriptionSub}
          </p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-2.5 rounded-lg border border-border text-muted hover:text-accent hover:border-accent transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-lg bg-accent text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {t.hero.contact}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[280px] shrink-0 order-1 md:order-2"
        >
          <div className="rounded-2xl overflow-hidden border border-border opacity-90">
            <Image
              src="/images/theo.JPG"
              alt="김성민 (Theo) 발표 장면"
              width={560}
              height={420}
              priority
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
