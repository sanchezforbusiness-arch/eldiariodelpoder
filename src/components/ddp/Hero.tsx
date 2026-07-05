import { useEffect, useRef } from "react";
import { Youtube, ChevronDown } from "lucide-react";
import { Eq } from "@/components/ddp/Eq";
import heroDesktop from "@/assets/hero-hosts-set.jpg.asset.json";
import heroMobile from "@/assets/hero-hosts-set.jpg.asset.json";

export function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-background"
    >
      {/* Cinematic background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <picture>
          <source media="(max-width: 639px)" srcSet={heroMobile.url} />
          <img
            src={heroDesktop.url}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 40%", opacity: 0.5 }}
          />
        </picture>
        {/* Vignette / gradient layers */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 40%, rgba(12,12,14,0.35) 0%, rgba(12,12,14,0.75) 55%, rgba(12,12,14,0.98) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,12,14,0.55) 0%, rgba(12,12,14,0.15) 30%, rgba(12,12,14,0.85) 100%)",
          }}
        />
      </div>

      <div className="container-ddp relative z-10 pt-32 md:pt-44 pb-24 md:pb-32 w-full">
        <div className="max-w-[1200px]">
          <p className="eyebrow mb-6 md:mb-8">El podcast — Madrid</p>

          <h1 className="display-xl text-foreground headline-mask">
            <span><span>Diario</span></span>
            <span><span>del Poder</span></span>
          </h1>

          <div className="mt-8 md:mt-10 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
            <p className="md:col-span-7 font-display text-2xl md:text-4xl font-medium tracking-tight text-foreground/85 uppercase leading-tight">
              La voz del <span className="italic font-serif font-normal normal-case">legado</span>.
            </p>
            <p className="md:col-span-5 text-base md:text-lg text-foreground/70 leading-relaxed">
              Conversaciones sin filtro con las personas que han definido la política, la empresa y la cultura.
            </p>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="btn-primary items-center gap-3 w-full sm:w-auto min-h-[52px]"
            >
              <Eq />
              Escuchar en Spotify
            </a>
            <a
              href="https://www.youtube.com/@eldiariodelpoder"
              target="_blank"
              rel="noreferrer"
              className="btn-outline w-full sm:w-auto min-h-[52px]"
            >
              <Youtube size={16} strokeWidth={1.5} />
              Ver en YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} strokeWidth={1.5} className="animate-bounce" />
      </div>
    </section>
  );
}
