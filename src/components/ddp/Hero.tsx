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
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-center opacity-70 ken-burns"
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24 opacity-60" />
      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/3 -right-40 opacity-40" />

      <div className="container-ddp relative z-10 pt-28 sm:pt-32 pb-28 sm:pb-36 md:pb-52 fade-up">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="h-px w-14 bg-gold/70" />
            <span className="eyebrow flex items-center gap-2">
              <span className="dot-gold" /> Podcast · Madrid
            </span>
          </div>


          <h1 className="font-serif text-2xl sm:text-display md:text-display lg:text-display leading-[0.95] sm:leading-[0.92] tracking-tight font-light">
            <SplitText text="La voz del legado." goldWords={["legado"]} italicWords={["legado"]} />
          </h1>

          <p className="mt-7 md:mt-9 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Los referentes de hoy, hablando a los de mañana.
          </p>

          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Play size={14} className="fill-current" />
              Escuchar último episodio
            </a>
            <a href="#episodes" className="btn-outline">
              Ver episodios
            </a>
          </div>
        </div>
      </div>

      {/* Bottom proof strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-foreground/10 bg-background/50 backdrop-blur-md">
        <div className="container-ddp py-3.5 sm:py-5 flex items-center justify-between gap-4 sm:gap-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-6 md:gap-10 text-2xs md:text-2xs tracking-label sm:tracking-label uppercase text-muted-foreground overflow-hidden">
            <span className="text-gold/90 hidden sm:inline">En este episodio →</span>
            <span className="text-foreground/85 truncate">Andrés Rodríguez</span>
            <span className="text-gold/40 hidden sm:inline">·</span>
            <span className="hidden md:inline text-muted-foreground">Presidente Forbes</span>
          </div>
          <a
            href="#guests"
            aria-label="Bajar"
            className="flex items-center gap-2 shrink-0 text-2xs tracking-label sm:tracking-label uppercase text-gold/80 hover:text-gold transition-colors"
          >
            Scroll
            <ArrowDown size={14} className="bounce-down" />
          </a>
        </div>
      </div>
    </section>
  );
}
