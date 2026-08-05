import { useEffect, useRef, useState } from "react";
import posterAsset from "@/assets/hero-portada-nueva.jpg.asset.json";

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
    const stop = window.setTimeout(() => window.clearInterval(id), 10000);
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
        <img
          src={posterAsset.url}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center grayscale contrast-110"
        />
        {loadVideo && (
          <div className="absolute inset-0 overflow-hidden">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&start=91&enablejsapi=1&origin=${typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : ""}`}
            title="Diario del Poder — fondo"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grayscale contrast-110 opacity-80"
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

      <div className="container-ddp safe-b relative z-10 flex min-h-[100dvh] flex-col justify-end pb-12 pt-32 md:pb-20 md:pt-40">
        <div className="w-full">
          <div>
            <span className="chip mb-6 inline-flex md:mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Podcast · Madrid
            </span>
            <h1 className="type-hero font-sans font-medium">
              {LINES.map((l, i) => (
                <span key={l} className="line-mask">
                  <span className="line-inner" style={{ "--i": i } as React.CSSProperties}>
                    {l}
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-7 max-w-[46ch] md:mt-9">
              <p className="prose-editorial">
                Nos sentamos con presidentes, CEOs y referentes, y publicamos la conversación entera.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#ultimo" className="btn-primary w-full sm:w-auto">
                  Ver el último episodio
                </a>
                <a href="#newsletter" className="btn-outline w-full sm:w-auto">
                  Recibir la carta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
