"use client";

import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-muted font-mono">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
