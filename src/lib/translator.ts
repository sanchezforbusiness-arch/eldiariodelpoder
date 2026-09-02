import { hashText, translateTexts } from "./translate.functions";

export type Lang = { code: string; label: string };

export const LANGS: Lang[] = [
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

export const SOURCE_LANG = "es";
export const STORAGE_KEY = "ddp-lang";

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "SVG", "IFRAME", "CANVAS"]);
const MIN_LEN = 2;

/** Texto original de cada nodo ya traducido, para no traducir dos veces. */
const originals = new WeakMap<Text, string>();
/** Caché en memoria + localStorage: `${lang}:${hash}` -> traducción */
const memory = new Map<string, string>();

function cacheKey(lang: string, hash: string) {
  return `${lang}:${hash}`;
}

function loadCache(lang: string) {
  try {
    const raw = localStorage.getItem(`ddp-tr-${lang}`);
    if (!raw) return;
    const obj = JSON.parse(raw) as Record<string, string>;
    for (const [h, v] of Object.entries(obj)) memory.set(cacheKey(lang, h), v);
  } catch {
    /* caché opcional */
  }
}

function saveCache(lang: string) {
  try {
    const obj: Record<string, string> = {};
    const prefix = `${lang}:`;
    for (const [k, v] of memory) {
      if (k.startsWith(prefix)) obj[k.slice(prefix.length)] = v;
    }
    localStorage.setItem(`ddp-tr-${lang}`, JSON.stringify(obj));
  } catch {
    /* cuota llena: seguimos sin caché local */
  }
}

function isTranslatable(node: Text): boolean {
  const value = node.nodeValue ?? "";
  if (value.trim().length < MIN_LEN) return false;
  if (!/\p{L}/u.test(value)) return false;

  let el = node.parentElement;
  while (el) {
    if (SKIP_TAGS.has(el.tagName)) return false;
    if (el.classList?.contains("notranslate")) return false;
    if (el.getAttribute?.("translate") === "no") return false;
    if (el.hasAttribute?.("data-no-translate")) return false;
    el = el.parentElement;
  }
  return true;
}

function collectNodes(root: Node): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    const text = current as Text;
    if (isTranslatable(text)) nodes.push(text);
    current = walker.nextNode();
  }
  return nodes;
}

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

let running = false;
let queued = false;

async function translateDocument(lang: string) {
  if (lang === SOURCE_LANG) return;
  if (running) {
    queued = true;
    return;
  }
  running = true;
  try {
    const nodes = collectNodes(document.body).filter((n) => {
      const original = originals.get(n);
      return original === undefined || original !== n.nodeValue;
    });
    if (nodes.length === 0) return;

    // Guardar original y separar espacios exteriores.
    const pending: { node: Text; core: string; pre: string; post: string; hash: string }[] = [];
    for (const node of nodes) {
      const value = node.nodeValue ?? "";
      const core = value.trim();
      const pre = value.slice(0, value.indexOf(core));
      const post = value.slice(value.indexOf(core) + core.length);
      pending.push({ node, core, pre, post, hash: hashText(core) });
    }

    // 1) Aplicar lo que ya está en caché.
    const uncached: typeof pending = [];
    for (const item of pending) {
      const hit = memory.get(cacheKey(lang, item.hash));
      if (hit !== undefined) {
        item.node.nodeValue = item.pre + hit + item.post;
        originals.set(item.node, item.node.nodeValue);
      } else {
        uncached.push(item);
      }
    }
    if (uncached.length === 0) return;

    // 2) Pedir el resto al servidor (caché en base de datos + IA).
    const uniqueTexts = [...new Set(uncached.map((i) => i.core))];
    for (const batch of chunk(uniqueTexts, 60)) {
      let translations: Record<string, string> = {};
      try {
        const res = await translateTexts({ data: { lang, texts: batch } });
        translations = res.translations;
      } catch (err) {
        console.error("[translator]", err);
        continue;
      }
      for (const [hash, value] of Object.entries(translations)) {
        memory.set(cacheKey(lang, hash), value);
      }
      for (const item of uncached) {
        const hit = memory.get(cacheKey(lang, item.hash));
        if (hit !== undefined && originals.get(item.node) !== item.node.nodeValue) {
          item.node.nodeValue = item.pre + hit + item.post;
          originals.set(item.node, item.node.nodeValue);
        }
      }
    }
    saveCache(lang);
  } finally {
    running = false;
    if (queued) {
      queued = false;
      void translateDocument(lang);
    }
  }
}

let observer: MutationObserver | null = null;
let timer: ReturnType<typeof setTimeout> | null = null;

/** Arranca la traducción de la página al idioma indicado y la mantiene al navegar. */
export function startTranslation(lang: string) {
  stopTranslation();
  if (typeof document === "undefined") return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  if (lang === SOURCE_LANG) return;

  loadCache(lang);
  void translateDocument(lang);

  observer = new MutationObserver(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => void translateDocument(lang), 250);
  });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
}

export function stopTranslation() {
  observer?.disconnect();
  observer = null;
  if (timer) clearTimeout(timer);
  timer = null;
}

export function getStoredLang(): string {
  if (typeof window === "undefined") return SOURCE_LANG;
  try {
    return localStorage.getItem(STORAGE_KEY) || SOURCE_LANG;
  } catch {
    return SOURCE_LANG;
  }
}

export function setStoredLang(code: string) {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* almacenamiento bloqueado */
  }
}
