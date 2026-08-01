import { episodeList } from "@/data/podcast";
import { useEffect, useState } from "react";

const LINES = ["La voz", "del legado."];
const VIDEO_ID = "ZydPM-xkYvA";

export function HeroNoir() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) return;
    const t = window.setTimeout(() => setLoadVideo(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative min-h-[92svh] border-b border-border grain">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {loadVideo && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0`}
            title="Diario del Poder — fondo"
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 grayscale contrast-110"
            style={{ border: 0, width: "max(100vw, 177.78vh)", height: "max(92svh, 56.25vw)" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/40" />
      </div>
      <div className="container-ddp relative z-10 flex min-h-[92svh] flex-col justify-end pb-16 pt-40 md:pb-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-sans text-[16vw] font-medium leading-[0.88] tracking-[-0.04em] sm:text-[13vw] lg:text-[9vw]">
              {LINES.map((l, i) => (
                <span key={l} className="line-mask">
                  <span className="line-inner" style={{ "--i": i } as React.CSSProperties}>
                    {l}
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-12 max-w-[52ch]">
              <p className="prose-editorial">
                Entrevistas largas con jefes de Estado, presidentes de compañías y
                referentes. Grabadas en Madrid, publicadas sin recortes.
              </p>
              <a href="#episodios" className="link-rule mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.12em]">
                Ver episodios
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-1">
              <Meta k="Episodios" v={String(episodeList.length).padStart(2, "0")} />
              <Meta k="Fundado" v="2025" />
              <Meta k="Base" v="Madrid, ES" />
              <Meta k="Idioma" v="Español" />
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="mono-label">{k}</dt>
      <dd className="mt-1 font-mono text-sm tracking-[0.02em]">{v}</dd>
    </div>
  );
}
