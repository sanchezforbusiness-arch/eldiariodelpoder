import heroAsset from "@/assets/hero-portada-nueva.jpg.asset.json";
import heroMobileAsset from "@/assets/hero-mobile.jpg.asset.json";
import { Play, Youtube } from "lucide-react";
import { Stamp } from "@/components/ddp/Stamp";
import { Eq } from "@/components/ddp/Eq";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[86svh] flex items-center overflow-hidden bg-background pt-44 md:pt-56">
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
            style={{ objectPosition: "50% 30%", opacity: 0.32, filter: "grayscale(0.6) contrast(1.02)" }}
          />
        </picture>
        {/* Paper overlay to keep light editorial feel */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(250,247,242,0.6) 0%, rgba(250,247,242,0.85) 55%, #FAF7F2 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(250,247,242,0.92) 0%, rgba(250,247,242,0.55) 45%, transparent 100%)" }} />
      </div>

      <div className="container-ddp relative z-10 py-12 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="kicker mb-8"><span className="kicker-num">Nº 24</span><span>Edición · Madrid · Podcast</span></div>

            <h1 className="font-serif text-[3rem] sm:text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-[-0.035em] font-light text-foreground headline-mask">
              <span><span>La voz</span></span>
              <span><span>del <em className="italic text-primary not-italic" style={{ fontStyle: "italic" }}>legado</em>.</span></span>
            </h1>

            <p className="mt-8 md:mt-10 max-w-xl text-lg md:text-xl text-foreground/75 leading-relaxed">
              Conversaciones donde los mayores referentes dejan su legado a la nueva generación.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="btn-primary items-center gap-3"
            >
              <Eq className="text-primary-foreground" />
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
          </div>
          <div className="hidden md:block col-span-4 pl-8 col-rule-l">
            <div className="flex items-start justify-between gap-4 mb-4">
              <p className="text-[10px] tracking-[0.28em] uppercase text-foreground/60">Sumario</p>
              <Stamp className="w-20 h-20 -mt-2 opacity-80" />
            </div>
            <ul className="space-y-2 text-sm text-foreground/85 font-serif leading-snug">
              <li className="border-b border-foreground/15 pb-2">Jordi Juan — la teoría de los cajones</li>
              <li className="border-b border-foreground/15 pb-2">Andrés Rodríguez — Forbes y poder</li>
              <li className="border-b border-foreground/15 pb-2">Guillermo Lasso — gobernar en crisis</li>
              <li>José María Aznar — liderar un país</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
