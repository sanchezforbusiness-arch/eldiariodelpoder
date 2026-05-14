import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Episodes } from "@/components/ddp/Episodes";
import { GuestsMasonry } from "@/components/ddp/GuestsMasonry";
import { useReveal } from "@/hooks/use-reveal";
import letiziaImg from "@/assets/letizia-encuentro.jpg";
import alejandroImg from "@/assets/founder-alejandro.jpg";
import victorImg from "@/assets/founder-victor.jpg";

const Newsletter = lazy(() => import("@/components/ddp/Newsletter").then((m) => ({ default: m.Newsletter })));
const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diario del Poder — La voz del legado | Podcast" },
      { name: "description", content: "Diario del Poder: el podcast premium en español con expresidentes, CEOs y líderes institucionales. Cobertura en 7 medios nacionales." },
      { property: "og:title", content: "Diario del Poder — La voz del legado | Podcast" },
      { property: "og:description", content: "El podcast premium en español con expresidentes, CEOs y líderes institucionales." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldiariodelpoder.com/" },
      { name: "twitter:title", content: "Diario del Poder — La voz del legado" },
      { name: "twitter:description", content: "El podcast premium en español con expresidentes, CEOs y líderes institucionales." },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <LetiziaHero />
        <PressStrip />
        <GuestsMasonry />
        <Episodes />
        <AboutPreview />
        <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
          <Newsletter />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

function LetiziaHero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden grain">
      <img
        src={letiziaImg}
        alt="Víctor Gandarilla saluda a la Reina Letizia durante un acto institucional, junto a Alejandro Sánchez Martínez — Diario del Poder"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[35%_30%] ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/35 to-transparent" />
      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24 opacity-50" />

      <div className="container-ddp relative z-10 pt-32 pb-24 md:pb-32 fade-up">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-7">
            <span className="h-px w-14 bg-gold/70" />
            <span className="eyebrow">Podcast · ESPAÑA</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-[-0.045em] font-light">
            La voz<br />del <span className="italic shimmer-gold">legado</span>.
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-[1.1rem] text-foreground/85 leading-[1.65]">
            Conversaciones que dejan criterio con los líderes que más importan.
            Expresidentes, CEOs y figuras institucionales hablan sin guion.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/episodios"
              className="ring-pulse group inline-flex items-center gap-3 bg-gold text-gold-foreground px-9 py-4 text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-gold-bright transition-all hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              Descubre los episodios
            </Link>
            <Link
              to="/prensa"
              className="inline-flex items-center gap-2 px-7 py-4 text-[11px] tracking-[0.28em] uppercase text-foreground/85 border border-foreground/25 hover:border-gold hover:text-gold transition-colors"
            >
              Ver cobertura en prensa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const medios = [
  "Antena 3",
  "El Español",
  "Hola",
  "Semana",
  "Diario de Navarra",
  "Vozpopuli",
  "Infobae",
];

function PressStrip() {
  return (
    <section className="py-16 md:py-20 border-t border-border bg-card/20">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 reveal">
            <span className="eyebrow block mb-5">Vistos en</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-light tracking-[-0.02em]">
              7 medios <span className="italic text-gold">nacionales</span>.
            </h2>
            <p className="mt-5 text-sm text-muted-foreground leading-[1.7] max-w-sm">
              Tras nuestro encuentro con la Reina Letizia, la historia la contaron ellos.
            </p>
            <Link
              to="/prensa"
              className="mt-7 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-gold hover:text-gold-bright transition-colors group"
            >
              Ver cobertura completa
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="md:col-span-8 reveal">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
              {medios.map((m) => (
                <li
                  key={m}
                  className="bg-background px-4 py-5 flex items-center justify-center text-center text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-foreground/80 hover:text-gold transition-colors"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 reveal">
          <span className="eyebrow block mb-5">Quiénes somos</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
            Un ecosistema de <span className="italic text-gold">influencia</span>.
          </h2>
          <div className="mt-7 space-y-4 text-base md:text-[1.05rem] text-foreground/80 leading-[1.75] max-w-xl">
            <p>
              Diario del Poder es un proyecto de comunicación premium dedicado al
              liderazgo, la influencia y el legado.
            </p>
            <p>
              Entrevistamos a los perfiles que importan. Compartimos su criterio con
              una generación que lo entiende.
            </p>
          </div>
          <Link
            to="/nosotros"
            className="mt-9 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-gold hover:text-gold-bright transition-colors group"
          >
            Conoce a Alejandro y Víctor
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          <figure className="relative aspect-[3/4] overflow-hidden bg-card hover-cinema">
            <img src={alejandroImg} alt="Alejandro Sánchez Martínez, fundador de Diario del Poder" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gold/90">Fundador</p>
              <p className="font-serif text-lg mt-0.5">Alejandro</p>
            </figcaption>
          </figure>
          <figure className="relative aspect-[3/4] overflow-hidden bg-card hover-cinema mt-8">
            <img src={victorImg} alt="Víctor Gandarilla, co-fundador de Diario del Poder" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gold/90">Co-fundador</p>
              <p className="font-serif text-lg mt-0.5">Víctor</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}