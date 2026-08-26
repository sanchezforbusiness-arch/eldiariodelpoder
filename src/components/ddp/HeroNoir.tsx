import { useEffect, useState } from "react";
import heroStudio from "@/assets/hero-studio.webp";

const LINES = ["La voz", "del legado."];

export function HeroNoir() {
  const [scrolled, setScrolled] = useState(0);

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
        <div className="absolute inset-0 bg-background" />
        <img
          src={heroStudio}
          alt="Grabación de Diario del Poder en estudio"
          width={1920}
          height={1083}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full grayscale contrast-110 opacity-80"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-ddp safe-b relative z-10 flex min-h-[100dvh] flex-col justify-end pb-16 pt-32 md:pb-20 md:pt-40">
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

            <div className="mt-7 max-w-[46ch] md:mt-9">
              <p className="prose-editorial">
                Nos sentamos con presidentes, CEOs y referentes, y publicamos la conversación entera.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#ultimo" className="btn-primary w-full sm:w-auto">
                  Ver el episodio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
