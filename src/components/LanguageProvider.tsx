"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { ko, en, ja } from "@/locales";
import type { Translations } from "@/locales";

export type Locale = "ko" | "en" | "ja";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LOCALES: Record<Locale, Translations> = { ko, en, ja };

const LOCALE_LABELS: Record<Locale, string> = {
  ko: "한국어",
  en: "EN",
  ja: "日本語",
};

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "ko";
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("ja")) return "ja";
  if (lang.startsWith("ko")) return "ko";
  return "en";
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "ko",
  t: ko,
  setLocale: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export { LOCALE_LABELS };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    const initial = stored ?? detectLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ locale, t: LOCALES[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
