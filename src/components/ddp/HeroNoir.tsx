import { useEffect, useRef, useState } from "react";

const LINES = ["La voz", "del legado."];
const VIDEO_ID = "ZydPM-xkYvA";

export function HeroNoir() {
  const [loadVideo, setLoadVideo] = useState(true);
  const [scrolled, setScrolled] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Fuerza la reproducción vía IFrame API para que no aparezca el overlay de pausa.
  useEffect(() => {
    if (!loadVideo) return;
    const post = (func: string) => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      );
    };
    const id = window.setInterval(() => {
      post("mute");
      post("playVideo");
    }, 600);
    const stop = window.setTimeout(() => window.clearInterval(id), 6000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(stop);
    };
  }, [loadVideo]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setLoadVideo(false);
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) setLoadVideo(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(Math.min(1, window.scrollY / (window.innerHeight || 1)));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100dvh] border-b border-border grain">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ transform: `scale(${1 + scrolled * 0.05})`, opacity: 1 - scrolled * 0.7 }}
      >
        {loadVideo && (
          <div className="absolute inset-0 overflow-hidden">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&start=91&enablejsapi=1&origin=${typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : ""}`}
            title="Diario del Poder — fondo"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 grayscale contrast-110"
            style={{
              border: 0,
              // 1.45x sobrescala: recorta el título y los controles de YouTube fuera del encuadre.
              width: "max(145vw, 257.8dvh)",
              height: "max(145dvh, 81.6vw)",
            }}
          />
          </div>
        )}
        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Technical HUD overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[2]">
        <div className="dot-grid absolute inset-0" />
        <div className="absolute inset-x-5 inset-y-20 md:inset-x-12">
          {[
            "left-0 top-0 border-l border-t",
            "right-0 top-0 border-r border-t",
            "left-0 bottom-0 border-l border-b",
            "right-0 bottom-0 border-r border-b",
          ].map((c) => (
            <span key={c} className={`absolute h-3 w-3 border-foreground/45 ${c}`} />
          ))}
        </div>
        <span className="absolute bottom-6 right-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground md:right-12">
          40.4168 N — 3.7038 W
        </span>
      </div>

      <div className="container-ddp relative z-10 flex min-h-[100dvh] flex-col justify-end pb-16 pt-40 md:pb-24">
        <div className="w-full">
          <div>
            <h1 className="type-hero font-sans font-medium">
              {LINES.map((l, i) => (
                <span key={l} className="line-mask">
                  <span className="line-inner" style={{ "--i": i } as React.CSSProperties}>
                    {l}
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-10 max-w-[52ch]">
              <p className="prose-editorial">
                Entrevistas con jefes de Estado, CEOs y referentes. La Vanguardia es nuestro media partner oficial.
              </p>
              <a href="#episodios" className="link-rule mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.12em]">
                Ver episodios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
