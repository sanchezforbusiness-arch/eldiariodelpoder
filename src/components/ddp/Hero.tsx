import heroAsset from "@/assets/hero-portada-nueva.jpg.asset.json";
import heroMobileAsset from "@/assets/hero-mobile.jpg.asset.json";
import { Play, Youtube } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] flex items-center overflow-hidden bg-background pt-20">
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
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 30%", opacity: 0.35, filter: "saturate(0.85)" }}
          />
        </picture>
        {/* Paper overlay to keep light editorial feel */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(250,247,242,0.55) 0%, rgba(250,247,242,0.82) 60%, #FAF7F2 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(250,247,242,0.9) 0%, rgba(250,247,242,0.5) 45%, transparent 100%)" }} />
      </div>

      <div className="container-ddp relative z-10 py-16 md:py-28">
        <div className="max-w-4xl">
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-primary/60" />
            Podcast · Madrid
          </span>

          <h1 className="mt-8 font-serif text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-[-0.035em] font-light text-foreground">
            La voz del <span className="italic text-primary">legado</span>.
          </h1>

          <p className="mt-8 md:mt-10 max-w-xl text-lg md:text-xl text-foreground/70 leading-relaxed">
            Conversaciones donde los mayores referentes dejan su legado a la nueva generación.
          </p>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Play size={13} className="fill-current" />
              Escuchar en Spotify
            </a>
            <a
              href="https://www.youtube.com/@eldiariodelpoder"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Youtube size={14} />
              Ver en YouTube
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            <span className="text-foreground/50">Disponible en</span>
            <span>Spotify</span>
            <span className="text-foreground/30">·</span>
            <span>YouTube</span>
            <span className="text-foreground/30">·</span>
            <span>Apple Podcasts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
