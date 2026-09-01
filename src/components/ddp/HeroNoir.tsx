import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroStudio from "@/assets/hero-studio.webp";
import { guestCardImageBySlug } from "@/data/guestImages";
import { guestList } from "@/data/podcast";

const LINES = ["La voz", "del legado."];

const FACES = [
  { slug: "jose-maria-aznar", name: "José María Aznar" },
  { slug: "guillermo-lasso", name: "Guillermo Lasso" },
  { slug: "marcos-de-quinto", name: "Marcos de Quinto" },
  { slug: "sonsoles-onega", name: "Sonsoles Ónega" },
];

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
    <section id="top" className="relative bg-background p-2 md:p-3">
      <div className="relative min-h-[calc(100dvh-16px)] overflow-hidden rounded-sm border border-border grain md:min-h-[calc(100dvh-24px)]">
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

        <div className="container-ddp safe-b relative z-10 flex min-h-[calc(100dvh-16px)] flex-col justify-end pb-16 pt-32 md:min-h-[calc(100dvh-24px)] md:pb-20 md:pt-40">
          <div className="w-full">
            <h1 className="type-hero font-sans font-medium">
              <span className="line-mask">
                <span className="line-inner" style={{ "--i": 0 } as React.CSSProperties}>
                  {LINES[0]}
                </span>
              </span>
              <span className="line-mask">
                <span
                  className="line-inner font-serif font-light italic"
                  style={{ "--i": 1 } as React.CSSProperties}
                >
                  {LINES[1]}
                </span>
              </span>
            </h1>


            <div className="mt-6 flex items-center gap-3">
              <span className="flex shrink-0 items-center">
                {FACES.map((f, i) => (
                  <img
                    key={f.slug}
                    src={guestCardImageBySlug[f.slug]}
                    alt={f.name}
                    loading="lazy"
                    decoding="async"
                    width={96}
                    height={96}
                    className="h-9 w-9 rounded-full border border-border object-cover md:h-10 md:w-10"
                    style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: FACES.length - i }}
                  />
                ))}
              </span>
              <span className="mono-label">{guestList.length} invitados en la mesa</span>
            </div>


            <div className="mt-7 max-w-[46ch] md:mt-9">
              <p className="prose-editorial">
                Nos sentamos con presidentes, CEOs y referentes, y publicamos la conversación entera.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#ultimo" className="btn-primary w-full sm:w-auto">
                  Ver el episodio
                </a>
                <Link to="/invitados" className="btn-outline w-full sm:w-auto">
                  Quién se ha sentado
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
