import { useEffect, useRef, useState } from "react";
import { Globe, Check, Loader2 } from "lucide-react";
import {
  LANGS,
  SOURCE_LANG,
  getStoredLang,
  setStoredLang,
  startTranslation,
  stopTranslation,
} from "@/lib/translator";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(SOURCE_LANG);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = getStoredLang();
    if (stored && stored !== SOURCE_LANG) {
      setCurrent(stored);
      setBusy(true);
      startTranslation(stored);
      const t = setTimeout(() => setBusy(false), 1200);
      return () => {
        clearTimeout(t);
        stopTranslation();
      };
    }
    return () => stopTranslation();
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
    if (code === current) return;
    setCurrent(code);
    if (code === SOURCE_LANG) {
      // Volver al original: recargamos para restaurar los textos en español.
      stopTranslation();
      window.location.reload();
      return;
    }
    setBusy(true);
    startTranslation(code);
    setTimeout(() => setBusy(false), 1500);
  };

  const label = current.slice(0, 2).toUpperCase();

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Cambiar idioma"
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
          {LANGS.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === current}
              onClick={() => choose(l.code)}
              className="flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-background"
            >
              {l.label}
              {l.code === current && <Check size={14} className="text-signal" aria-hidden />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
