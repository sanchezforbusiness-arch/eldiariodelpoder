import { useEffect, useState } from "react";

const LINES = ["La voz", "del legado."];
const VIDEO_ID = "ZydPM-xkYvA";

export function HeroNoir() {
  const [loadVideo, setLoadVideo] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) return;
    const t = window.setTimeout(() => setLoadVideo(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    <section id="top" className="relative min-h-[92svh] border-b border-border grain">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ transform: `scale(${1 + scrolled * 0.05})`, opacity: 1 - scrolled * 0.7 }}
      >
        {loadVideo && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&start=91`}
            title="Diario del Poder — fondo"
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 grayscale contrast-110"
            style={{ border: 0, width: "max(100vw, 177.78vh)", height: "max(92svh, 56.25vw)" }}
          />
        )}
        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container-ddp relative z-10 flex min-h-[92svh] flex-col justify-end pb-16 pt-40 md:pb-24">
        <div className="max-w-[16ch]">
          <div>
            <h1 className="font-sans text-[16vw] font-medium leading-[0.88] tracking-[-0.04em] sm:text-[13vw] lg:text-[9vw]">
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
