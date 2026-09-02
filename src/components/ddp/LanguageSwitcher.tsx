import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";

type Lang = { code: string; label: string };

const LANGS: Lang[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
  { code: "ca", label: "Català" },
  { code: "zh-CN", label: "中文" },
  { code: "ar", label: "العربية" },
];

const SOURCE = "es";
const STORAGE_KEY = "ddp-lang";

function readCookieLang(): string {
  if (typeof document === "undefined") return SOURCE;
  const raw = document.cookie.split("; ").find((c) => c.startsWith("googtrans="));
  if (!raw) return SOURCE;
  const parts = decodeURIComponent(raw.split("=")[1] ?? "").split("/");
  return parts[2] || SOURCE;
}

function setCookieLang(code: string) {
  const value = code === SOURCE ? "" : `/${SOURCE}/${code}`;
  const host = window.location.hostname;
  const domains = [undefined, host, `.${host.replace(/^www\./, "")}`];
  for (const d of domains) {
    const base = `googtrans=${encodeURIComponent(value)}; path=/;`;
    document.cookie = value
      ? `${base}${d ? ` domain=${d};` : ""} max-age=31536000`
      : `${base}${d ? ` domain=${d};` : ""} max-age=0`;
  }
}

function loadWidget() {
  if (typeof window === "undefined") return;
  if (document.getElementById("google-translate-script")) return;
  const w = window as unknown as Record<string, unknown>;
  w["googleTranslateElementInit"] = () => {
    const g = (window as any).google;
    if (!g?.translate?.TranslateElement) return;
    new g.translate.TranslateElement(
      { pageLanguage: SOURCE, autoDisplay: false },
      "google_translate_element",
    );
  };
  const s = document.createElement("script");
  s.id = "google-translate-script";
  s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  s.async = true;
  document.body.appendChild(s);
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(SOURCE);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const cookie = readCookieLang();

    if (cookie !== SOURCE) {
      setCurrent(cookie);
      loadWidget();
      return;
    }
    if (stored) {
      setCurrent(stored);
      return;
    }
    // Primera visita: detectar idioma del navegador.
    const nav = (navigator.language || SOURCE).toLowerCase();
    const match = LANGS.find(
      (l) => l.code.toLowerCase() === nav || nav.startsWith(l.code.toLowerCase().split("-")[0]),
    );
    if (match && match.code !== SOURCE) {
      localStorage.setItem(STORAGE_KEY, match.code);
      setCookieLang(match.code);
      setCurrent(match.code);
      loadWidget();
      window.location.reload();
    } else {
      localStorage.setItem(STORAGE_KEY, SOURCE);
    }
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
    localStorage.setItem(STORAGE_KEY, code);
    setCookieLang(code);
    setOpen(false);
    window.location.reload();
  };

  const label = LANGS.find((l) => l.code === current)?.code.slice(0, 2).toUpperCase() ?? "ES";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Cambiar idioma"
        className="tap notranslate flex h-11 items-center gap-1.5 font-mono text-2xs uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground"
      >
        <Globe size={15} strokeWidth={1.5} aria-hidden />
        <span>{label}</span>
      </button>

      {open && (
        <div
          role="listbox"
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


      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
