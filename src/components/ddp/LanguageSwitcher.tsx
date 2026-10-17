import { useEffect, useRef, useState } from "react";
import { Globe, Check, Loader2 } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { localeForPath, staticLanguageHref } from "@/i18n/locale";
import { useLanding } from "@/i18n/LandingContext";
import {
  LANGS,
  SOURCE_LANG,
  STATIC_LOCALES,
  setStoredLang,
  startTranslation,
  stopTranslation,
  subscribeBusy,
  subscribeLang,
  broadcastLang,
} from "@/lib/translator";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { dict } = useLanding();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const urlLang = localeForPath(pathname);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>(urlLang);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(urlLang);
    if (urlLang === SOURCE_LANG) {
      const pending = sessionStorage.getItem("ddp-pending-translation");
      sessionStorage.removeItem("ddp-pending-translation");
      if (pending && LANGS.some((item) => item.code === pending) && !(pending in STATIC_LOCALES) && pending !== SOURCE_LANG) {
        setCurrent(pending);
        broadcastLang(pending);
        startTranslation(pending);
      }
    }
    return () => stopTranslation();
  }, [urlLang]);

  useEffect(() => subscribeBusy(setBusy), []);

  useEffect(() => {
    const unsubscribe = subscribeLang(setCurrent);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const choose = (code: string) => {
    setOpen(false);
    setStoredLang(code);
    if (urlLang !== SOURCE_LANG) {
      sessionStorage.setItem("ddp-pending-translation", code);
      window.location.assign("/");
      return;
    }
    if (code === current) return;
    broadcastLang(code);
    startTranslation(code);
  };

  const followStatic = () => {
    stopTranslation();
    sessionStorage.removeItem("ddp-pending-translation");
    setStoredLang(SOURCE_LANG);
  };

  const label = current.slice(0, 2).toUpperCase();

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={dict.nav.languageLabel}
        data-no-translate
        className="notranslate flex h-11 items-center gap-1.5 font-mono text-2xs uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
      >
        {busy ? (
          <Loader2 size={15} strokeWidth={1.5} className="animate-spin" aria-hidden />
        ) : (
          <Globe size={15} strokeWidth={1.5} aria-hidden />
        )}
        <span>{label}</span>
      </button>

      {open && (
        <div
          role="listbox"
          data-no-translate
          className="notranslate surface-light absolute right-0 top-full z-50 mt-1 max-h-[70dvh] min-w-44 overflow-y-auto rounded-xl border border-border bg-card py-1 text-foreground shadow-lg"
        >
          {LANGS.map((l) => {
            const href = staticLanguageHref(l.code, pathname);
            const content = <>{dict.nav.languageNames[l.code] ?? l.label}{l.code === current && <Check size={14} className="text-signal" aria-hidden />}</>;
            const optionClass = "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-background";
            return href !== undefined ? (
              <a key={l.code} href={href} role="option" aria-selected={l.code === current} onClick={followStatic} className={optionClass}>{content}</a>
            ) : (
              <Button key={l.code} role="option" aria-selected={l.code === current} variant="ghost" onClick={() => choose(l.code)} className={`${optionClass} h-auto rounded-none font-normal`}>{content}</Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
