import heroAsset from "@/assets/hero-portada-nueva.jpg.asset.json";
import heroMobileAsset from "@/assets/hero-mobile.jpg.asset.json";
import { Play, ArrowDown } from "lucide-react";
import { SplitText } from "./SplitText";
import { useEffect, useState } from "react";

export function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Cargamos el iframe en cualquier viewport, respetando reduce-motion y save-data.
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType));
    if (mqReduced.matches || slow) return;

    let handle: number | undefined;
    const schedule =
      (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    // Móvil: arrancamos antes para no dejar tanto tiempo la foto estática.
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    const delay = isMobile ? 350 : 900;
    const t = window.setTimeout(() => {
      handle = schedule(() => setLoadVideo(true), { timeout: 2000 });
    }, delay);
    return () => {
      window.clearTimeout(t);
      const cancel = (window as unknown as { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback;
      if (handle != null && cancel) cancel(handle);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden grain">
      {/* Imagen LCP + vídeo perezoso de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <picture>
          <source media="(max-width: 639px)" srcSet={heroMobileAsset.url} />
          <img
            src={heroAsset.url}
            alt="Diario del Poder — conversación con un referente"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-center opacity-55 ken-burns"
            style={{ objectPosition: "50% 35%" }}
          />
        </picture>
        {loadVideo && (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src="https://www.youtube-nocookie.com/embed/nTtgtxG7UNs?autoplay=1&mute=1&loop=1&playlist=nTtgtxG7UNs&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&start=5&end=60"
              title="Diario del Poder — fondo"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-55 pointer-events-none"
              style={{
                border: 0,
                // Cobertura tipo object-cover: siempre llena el viewport sin bandas.
                width: "max(100vw, 177.78vh)",
                height: "max(100vh, 56.25vw)",
              }}
            />
            <div className="absolute inset-0 pointer-events-auto" />
          </div>
        )}
      </div>
      {/* Cinematic overlays — darker top and bottom for cleaner text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background/90" />

      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      {/* Centered editorial content */}
      <div className="container-ddp relative z-10 flex-1 flex flex-col items-center justify-center text-center pt-32 pb-32 sm:pt-36 sm:pb-40 fade-up w-full">
        <div className="flex items-center gap-4 mb-8 md:mb-10 opacity-70">
          <span className="h-px w-8 bg-foreground/30" />
          <span className="text-[10px] md:text-[11px] tracking-[0.5em] font-light uppercase text-foreground/70">
            Podcast · Madrid
          </span>
          <span className="h-px w-8 bg-foreground/30" />
        </div>

        <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.02] sm:leading-[1.02] tracking-[-0.025em] font-light max-w-5xl">
          <SplitText text="La voz del legado." italicWords={["legado"]} />
        </h1>

        <p className="mt-8 md:mt-10 max-w-md text-[11px] md:text-[12px] tracking-[0.28em] uppercase text-foreground/50 leading-relaxed">
          Los referentes de hoy, hablando a los de mañana
        </p>

        <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <Play size={12} className="fill-current" />
            Escuchar último episodio
          </a>
          <a href="#episodes" className="btn-outline">
            Ver episodios
          </a>
        </div>
      </div>

      {/* Bottom editorial strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-foreground/10 bg-background/30 backdrop-blur-md">
        <div className="container-ddp py-4 sm:py-6 flex items-center justify-between gap-4 sm:gap-6 text-[9px] sm:text-[10px] tracking-[0.32em] sm:tracking-[0.4em] uppercase font-light">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5 md:gap-7 overflow-hidden">
            <span className="text-foreground/40 hidden sm:inline">En este episodio —</span>
            <span className="text-foreground/85 truncate">Andrés Rodríguez</span>
            <span className="font-serif italic text-base tracking-normal text-foreground/25 hidden sm:inline normal-case">/</span>
            <span className="hidden md:inline text-foreground/60">Presidente Forbes</span>
          </div>
          <a
            href="#guests"
            aria-label="Bajar"
            className="flex items-center gap-2.5 shrink-0 text-foreground/50 hover:text-foreground transition-colors duration-500 group"
          >
            Scroll
            <ArrowDown size={12} className="transition-transform duration-500 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
