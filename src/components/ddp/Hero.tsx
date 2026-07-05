import heroAsset from "@/assets/hero-portada-nueva.jpg.asset.json";
import heroMobileAsset from "@/assets/hero-mobile.jpg.asset.json";
import { Play, Youtube } from "lucide-react";
import { Stamp } from "@/components/ddp/Stamp";
import { Eq } from "@/components/ddp/Eq";
import queenAsset from "@/assets/backstage-extra-2.jpeg.asset.json";

// Real photos = credibility. Editorial newsprint collage.
const collage = [
  {
    src: "/src/assets/bts-aznar-dialogos.webp",
    alt: "José María Aznar en Diálogos",
    caption: "Aznar · en Diálogos",
    rotate: -1.5,
    priority: true,
  },
  {
    src: queenAsset.url,
    alt: "Encuentro con S.M. la Reina Doña Letizia en la Universidad de Navarra",
    caption: "S.M. la Reina · U. de Navarra",
    rotate: 1.2,
  },
  {
    src: "/src/assets/bts-guillermo-lasso.webp",
    alt: "Guillermo Lasso en Diario del Poder",
    caption: "Lasso · gobernar en crisis",
    rotate: -0.8,
  },
  {
    src: "/src/assets/bts-hosts-palco.webp",
    alt: "Los hosts de Diario del Poder en set",
    caption: "Redacción · en set",
    rotate: 1.6,
  },
];

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
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 30%", opacity: 0.18, filter: "grayscale(0.85) contrast(1.02)" }}
          />
        </picture>
        {/* Paper overlay to keep light editorial feel */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(250,247,242,0.75) 0%, rgba(250,247,242,0.9) 55%, #FAF7F2 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(250,247,242,0.92) 0%, rgba(250,247,242,0.55) 45%, transparent 100%)" }} />
      </div>

      <div className="container-ddp relative z-10 py-12 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7">
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

            {/* Mobile compact collage */}
            <div className="mt-10 grid grid-cols-3 gap-2 md:hidden">
              {collage.slice(0, 3).map((p, i) => (
                <figure
                  key={i}
                  className="curtain relative border border-foreground/70 bg-background"
                  style={{ transform: `rotate(${p.rotate}deg)` }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading={p.priority ? "eager" : "lazy"}
                    fetchPriority={p.priority ? "high" : "auto"}
                    decoding="async"
                    className="block w-full h-28 object-cover"
                    style={{ filter: "grayscale(0.7) contrast(1.02)" }}
                  />
                </figure>
              ))}
            </div>
          </div>

          {/* Desktop editorial collage */}
          <div className="hidden md:block col-span-5 pl-8 col-rule-l">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[10px] tracking-[0.28em] uppercase text-foreground/60">Álbum · Redacción</p>
              <Stamp className="w-16 h-16 opacity-80" />
            </div>

            <div className="relative h-[520px] lg:h-[600px]">
              {/* main — Aznar */}
              <figure
                className="curtain absolute left-2 top-0 w-[62%] shadow-none"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                <div className="relative border border-foreground bg-background">
                  <div className="absolute -right-2 -bottom-2 w-full h-full border border-foreground/40 -z-10" />
                  <img
                    src={collage[0].src}
                    alt={collage[0].alt}
                    fetchPriority="high"
                    decoding="async"
                    className="block w-full h-[300px] lg:h-[360px] object-cover"
                    style={{ filter: "grayscale(0.7) contrast(1.03)" }}
                  />
                </div>
                <figcaption className="mt-1.5 text-[10px] tracking-[0.24em] uppercase text-foreground/65">
                  {collage[0].caption}
                </figcaption>
              </figure>

              {/* Queen Letizia */}
              <figure
                className="curtain absolute right-0 top-16 w-[46%]"
                style={{ transform: "rotate(1.2deg)" }}
              >
                <div className="relative border border-foreground bg-background">
                  <div className="absolute -right-2 -bottom-2 w-full h-full border border-foreground/40 -z-10" />
                  <img
                    src={collage[1].src}
                    alt={collage[1].alt}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-[220px] lg:h-[260px] object-cover"
                    style={{ filter: "grayscale(1)" }}
                  />
                </div>
                <figcaption className="mt-1.5 text-[10px] tracking-[0.24em] uppercase text-foreground/65">
                  {collage[1].caption}
                </figcaption>
              </figure>

              {/* Lasso */}
              <figure
                className="curtain absolute left-0 bottom-4 w-[44%]"
                style={{ transform: "rotate(-0.8deg)" }}
              >
                <div className="relative border border-foreground bg-background">
                  <div className="absolute -right-2 -bottom-2 w-full h-full border border-foreground/40 -z-10" />
                  <img
                    src={collage[2].src}
                    alt={collage[2].alt}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-[200px] lg:h-[220px] object-cover"
                    style={{ filter: "grayscale(0.75) contrast(1.02)" }}
                  />
                </div>
                <figcaption className="mt-1.5 text-[10px] tracking-[0.24em] uppercase text-foreground/65">
                  {collage[2].caption}
                </figcaption>
              </figure>

              {/* Hosts in set */}
              <figure
                className="curtain absolute right-2 bottom-0 w-[42%]"
                style={{ transform: "rotate(1.6deg)" }}
              >
                <div className="relative border border-foreground bg-background">
                  <div className="absolute -right-2 -bottom-2 w-full h-full border border-foreground/40 -z-10" />
                  <img
                    src={collage[3].src}
                    alt={collage[3].alt}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-[180px] lg:h-[200px] object-cover"
                    style={{ filter: "grayscale(0.7) contrast(1.02)" }}
                  />
                </div>
                <figcaption className="mt-1.5 text-[10px] tracking-[0.24em] uppercase text-foreground/65">
                  {collage[3].caption}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
