"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useLanguage, LOCALE_LABELS } from "./LanguageProvider";
import type { Locale } from "./LanguageProvider";

const LOCALES: Locale[] = ["ko", "en", "ja"];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { locale, t, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  const ThemeIcon = theme === "dark" ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-accent font-semibold hover:opacity-80 transition-opacity">
          theo.dev
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs text-muted hover:text-foreground transition-colors font-mono">
              {item.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className="px-2 py-1 rounded-md text-xs font-mono text-muted hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Change language"
            >
              {LOCALE_LABELS[locale]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 py-1 rounded-md border border-border bg-surface shadow-lg min-w-[80px]"
                >
                  {LOCALES.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLocale(l); setLangOpen(false); }}
                      className={`block w-full text-left px-3 py-1.5 text-xs font-mono transition-colors ${
                        l === locale ? "text-accent" : "text-muted hover:text-foreground"
                      }`}
                    >
                      {LOCALE_LABELS[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-surface transition-colors text-muted hover:text-foreground"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {ThemeIcon}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile language switcher */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className="px-2 py-1 rounded-md text-xs font-mono text-muted hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Change language"
            >
              {LOCALE_LABELS[locale]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 py-1 rounded-md border border-border bg-surface shadow-lg min-w-[80px]"
                >
                  {LOCALES.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLocale(l); setLangOpen(false); }}
                      className={`block w-full text-left px-3 py-1.5 text-xs font-mono transition-colors ${
                        l === locale ? "text-accent" : "text-muted hover:text-foreground"
                      }`}
                    >
                      {LOCALE_LABELS[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-surface transition-colors text-muted hover:text-foreground"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {ThemeIcon}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-foreground transition-colors font-mono py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
