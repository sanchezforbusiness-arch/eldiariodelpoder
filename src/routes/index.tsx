import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Episodes } from "@/components/ddp/Episodes";
import { GuestsMasonry } from "@/components/ddp/GuestsMasonry";
import { useReveal } from "@/hooks/use-reveal";
import letiziaImg from "@/assets/letizia-encuentro.jpg";

const Newsletter = lazy(() => import("@/components/ddp/Newsletter").then((m) => ({ default: m.Newsletter })));
const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diario del Poder — La voz del legado | Podcast" },
      { name: "description", content: "Diario del Poder: el podcast premium en español con expresidentes, CEOs y líderes institucionales. Cobertura en 10 medios nacionales." },
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
    <div className="bg-white text-foreground">
      <Navbar />
      <main>
        <LetiziaHero />
        <PressStrip />
        <GuestsMasonry />
        <Episodes />
        <AboutMini />
        <Suspense fallback={<div style={{ minHeight: "40vh" }} />}>
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
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-card">
      <img
        src={letiziaImg}
        alt="Alejandro Sánchez y Víctor Gandarilla con la Reina Letizia en Pamplona — encuentro que generó cobertura en 10 medios nacionales"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[35%_30%]"
      />
      {/* Soft white fade for overlay legibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent" />

      <div className="container-ddp relative z-10 pt-28 md:pt-32 pb-10 min-h-[100svh] flex items-end md:items-end">
        <div className="w-full md:flex md:justify-end fade-up">
          <div className="bg-white border border-border p-8 md:p-10 max-w-[460px] w-full md:ml-auto shadow-[0_18px_50px_-25px_rgba(0,0,0,0.25)]">
            <span className="eyebrow block mb-4">La voz del legado</span>
            <h1 className="font-display text-3xl md:text-[2.6rem] font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
              Conversaciones que dejan criterio con los líderes que más importan.
            </h1>
            <p className="mt-5 text-[15px] text-muted-foreground leading-[1.7]">
              Expresidentes, CEOs y figuras institucionales hablan sin guion.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/escuchanos"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase hover:opacity-90 transition-opacity"
              >
                <Play size={14} className="fill-current" /> Escúchanos
              </Link>
              <Link
                to="/invitados"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Ver invitados
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const medios = [
  "Antena 3", "El Español", "¡Hola!", "Semana",
  "Diario de Navarra", "Vozpópuli", "Infobae",
  "El Mundo", "El Periódico", "El Debate",
];

function PressStrip() {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container-ddp">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal">
            <span className="eyebrow block mb-4">Cobertura</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
              10 medios españoles cubrieron nuestro encuentro
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-[1.7] max-w-md">
              Cuando haces algo real, los medios lo notan. En 48 horas, Antena 3,
              El Español, ¡Hola!, El Mundo y otros cubrieron el encuentro con la Reina Letizia.
            </p>
            <Link
              to="/prensa"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:opacity-80 transition-opacity group"
            >
              Ver cobertura completa
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="reveal">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border">
              {medios.map((m) => (
                <li
                  key={m}
                  className="bg-white px-4 py-6 flex items-center justify-center text-center text-[13px] font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
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

function AboutMini() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container-ddp max-w-3xl text-center">
        <span className="eyebrow block mb-5">Quiénes somos</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
          Somos la voz del legado
        </h2>
        <p className="mt-7 text-lg text-muted-foreground leading-[1.8]">
          Diario del Poder acerca conversaciones de criterio a jóvenes con ambición.
          Entrevistamos expresidentes, CEOs globales y líderes que comparten su visión,
          experiencia y legado.
        </p>
        <Link
          to="/equipo"
          className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:opacity-80 transition-opacity group"
        >
          Conoce a Alejandro y Víctor
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
