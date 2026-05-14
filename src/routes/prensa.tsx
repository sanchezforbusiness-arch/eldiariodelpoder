import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";
import letiziaImg from "@/assets/letizia-encuentro.jpg";

const SITE = "https://eldiariodelpoder.com";

const medios = [
  { name: "Antena 3", program: "Espejo Público", url: "https://www.antena3.com/programas/espejo-publico/noticias/chascarrillo-reina-letizia-dos-jovenes-que-pedian-entrevista-antes-delante-camara-era-inviable_202605116a01daefb5b06629960c3679.html" },
  { name: "El Español", program: "Royals", url: "https://www.elespanol.com/mujer/royals/20260508/anecdota-reina-letizia-chicos-querian-hablara-podcast-entrevistada-entrevistadora/1003744238033_0.html" },
  { name: "¡Hola!", program: "Actualidad", url: "https://www.hola.com/actualidad/20260509900617/letizia-de-entrevistada-a-entrevistadora/" },
  { name: "Semana", program: "Realeza", url: "https://www.semana.es/realeza/reina-letizia-se-vuelve-viral-por-su-reaccion-propuesta-entrevista-yo-creo-que-estais-consiguiendo_2814249" },
  { name: "Diario de Navarra", program: "Navarra", url: "https://www.diariodenavarra.es/noticias/navarra/2026/05/07/reina-letizia-vuelve-pamplona-directo-acto-celebracion-dia-mundial-cruz-roja-819846-15.html" },
  { name: "Vozpópuli", program: "Dolce Vita", url: "https://www.vozpopuli.com/dolcevita/la-reina-letizia-se-hace-viral-por-lo-que-le-dijo-a-unos-jovenes-que-querian-entrevistarla-en-su-podcast.html" },
  { name: "Infobae", program: "España", url: "https://www.infobae.com/espana/2026/05/08/la-elegante-forma-en-la-que-la-reina-letizia-evita-la-invitacion-al-podcast-de-unos-estudiantes-para-hacerles-ella-la-entrevista-sois-de-que-facultad/" },
  { name: "El Mundo", program: "Actualidad", url: "https://www.elmundo.es/" },
  { name: "El Periódico", program: "Gente", url: "https://www.elperiodico.com/" },
  { name: "El Debate", program: "España", url: "https://www.eldebate.com/" },
];

const newsLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Diario del Poder — Cobertura en medios nacionales",
  description: "Cobertura en 10 medios españoles tras el encuentro con la Reina Letizia.",
  image: `${SITE}/og-prensa.jpg`,
  author: { "@type": "Organization", name: "Diario del Poder" },
  publisher: {
    "@type": "Organization",
    name: "Diario del Poder",
    logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
  },
  mainEntityOfPage: `${SITE}/prensa`,
};

export const Route = createFileRoute("/prensa")({
  head: () => ({
    meta: [
      { title: "Diario del Poder en Prensa | Cobertura Mediática" },
      { name: "description", content: "Mencionados en 10 medios españoles: Antena 3, El Español, ¡Hola!, Semana, Diario de Navarra, Vozpópuli, Infobae, El Mundo, El Periódico y El Debate." },
      { property: "og:title", content: "Diario del Poder en los medios españoles" },
      { property: "og:description", content: "Cobertura de 10 medios nacionales tras el encuentro con la Reina Letizia." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE}/prensa` },
      { property: "og:image", content: `${SITE}/og-default.jpg` },
      { name: "twitter:title", content: "Diario del Poder en los medios españoles" },
      { name: "twitter:description", content: "Cobertura de 10 medios nacionales tras el encuentro con la Reina Letizia." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/prensa` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(newsLd) }],
  }),
  component: PrensaPage,
});

function PrensaPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Highlight />
        <MediosList />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden grain">
      <div className="gold-glow w-[520px] h-[520px] -top-40 -left-40 float-slow opacity-50" />
      <div className="container-ddp relative">
        <div className="flex items-center gap-4 mb-7 fade-up">
          <span className="h-px w-12 bg-gold/70" />
          <span className="eyebrow">Prensa</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] font-light tracking-[-0.04em] max-w-5xl fade-up">
          Cuando la historia<br />se cuenta <span className="italic shimmer-gold">sola</span>.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-[1.1rem] text-foreground/75 leading-[1.7] fade-up">
          Cobertura en 7 medios españoles de referencia. Porque el trabajo habla.
        </p>
      </div>
    </section>
  );
}

function Highlight() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container-ddp grid md:grid-cols-12 gap-12 items-start">
        <figure className="md:col-span-7 reveal relative overflow-hidden">
          <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-card">
            <img
              src={letiziaImg}
              alt="Víctor Gandarilla y Alejandro Sánchez saludando a la Reina Letizia durante un acto institucional en Pamplona"
              loading="lazy"
              className="w-full h-full object-cover object-[35%_30%]"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">
            Pamplona · Acto institucional. © Diario del Poder
          </figcaption>
        </figure>

        <div className="md:col-span-5 reveal">
          <span className="eyebrow block mb-5">El encuentro</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-light tracking-[-0.02em]">
            Cuando la entrevistadora se convierte en <span className="italic text-gold">entrevistada</span>.
          </h2>
          <div className="mt-6 space-y-4 text-base text-foreground/80 leading-[1.75]">
            <p>
              Durante un acto institucional en Pamplona, los fundadores de Diario del
              Poder propusieron una entrevista a la Reina Letizia.
            </p>
            <p>
              Su respuesta fue elegante y directa:
              <span className="block mt-3 pl-4 border-l-2 border-gold/60 font-serif italic text-xl text-foreground/90">
                "Creo que estáis consiguiendo algo."
              </span>
            </p>
            <p>
              Lo que pasó después lo cubrieron 7 medios españoles de referencia
              en 48 horas. A veces, el mejor endorsement no viene de un comunicado.
              Viene de una conversación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MediosList() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="container-ddp">
        <div className="reveal mb-12 max-w-2xl">
          <span className="eyebrow block mb-5">Cobertura</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
            Los medios que lo <span className="italic text-gold">contaron</span>.
          </h2>
        </div>
        <ul className="reveal grid md:grid-cols-2 gap-px bg-border border border-border reveal-stagger">
          {medios.map((m) => (
            <li key={m.name} className="bg-background">
              <a
                href={m.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 p-7 md:p-8 hover:bg-card/40 transition-colors"
              >
                <div>
                  <p className="font-serif text-2xl md:text-3xl group-hover:text-gold transition-colors">{m.name}</p>
                  <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{m.program}</p>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-gold transition-colors shrink-0" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-muted-foreground">
          Algunos enlaces se actualizarán con la URL exacta del artículo original.
        </p>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp grid md:grid-cols-2 gap-8">
        <Link
          to="/invitados"
          className="group block border border-border hover:border-gold p-10 transition-colors"
        >
          <span className="eyebrow block mb-4">Siguiente</span>
          <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Conoce el roster de invitados</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">
            Ir a invitados <ArrowUpRight size={14} />
          </span>
        </Link>
        <Link
          to="/nosotros"
          className="group block border border-border hover:border-gold p-10 transition-colors"
        >
          <span className="eyebrow block mb-4">El proyecto</span>
          <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Quiénes están detrás</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">
            Ir a nosotros <ArrowUpRight size={14} />
          </span>
        </Link>
      </div>
    </section>
  );
}