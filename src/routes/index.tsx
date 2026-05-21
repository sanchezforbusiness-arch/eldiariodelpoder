import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { useReveal } from "@/hooks/use-reveal";
import heroBg from "@/assets/hero-studio.webp";
import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import g8 from "@/assets/guest-8.jpg";
import gEcha from "@/assets/guest-echavarren.jpg";
import gJordi from "@/assets/guest-jordi-juan.jpg";
import bts1 from "@/assets/bts-aznar-firma.jpg";
import bts2 from "@/assets/bts-guillermo-lasso.jpg";
import bts3 from "@/assets/bts-jordi-urbea-talk.jpg";
import bts4 from "@/assets/bts-andres-rodriguez.jpg";
import bts5 from "@/assets/bts-mikel-palco.jpg";
import bts6 from "@/assets/bts-metropolitano.jpg";

const Newsletter = lazy(() => import("@/components/ddp/Newsletter").then((m) => ({ default: m.Newsletter })));
const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diario del Poder — La voz del legado | Podcast" },
      { name: "description", content: "Diario del Poder: el podcast en español con expresidentes, CEOs y líderes institucionales. Cobertura en 11 medios." },
      { property: "og:title", content: "Diario del Poder — La voz del legado | Podcast" },
      { property: "og:description", content: "El podcast en español con expresidentes, CEOs y líderes institucionales." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldiariodelpoder.com/" },
      { name: "twitter:title", content: "Diario del Poder — La voz del legado" },
      { name: "twitter:description", content: "El podcast en español con expresidentes, CEOs y líderes institucionales." },
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
        <Hero />
        <Intro />
        <PopularEpisodes />
        <SubscribeBand />
        <NewsStories />
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

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      <img
        src={heroBg}
        alt="Diario del Poder"
        className="absolute inset-0 w-full h-full object-cover ken-burns"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-background/20" />
      <div className="container-ddp relative fade-up px-4">
        <h1 className="font-display uppercase leading-[0.88] tracking-[-0.015em] text-primary text-[clamp(4rem,13vw,11rem)] text-center">
          Diario<br />del Poder
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground text-[11px] tracking-[0.32em] uppercase flex flex-col items-center gap-2 font-display">
        Scroll
        <span className="text-primary text-base bounce-down">↓</span>
      </div>
    </section>
  );
}

/* ---------- INTRO + MOSAIC ---------- */
const mosaic = [bts4, bts1, bts2, bts3, bts5, bts6, g1, g5, gEcha];
function Intro() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container-ddp grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="reveal">
          <h2 className="font-display uppercase text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.01em]">
            <span className="text-primary">Diario del Poder</span>{" "}
            es un viaje sin guion a las decisiones, hábitos y legados de las personas que han marcado nuestro tiempo.
          </h2>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-[1.7]">
            Alejandro Sánchez y Víctor Gandarilla se sientan con expresidentes, CEOs globales y líderes
            institucionales para descubrir verdades no contadas, lecciones por aprender y la manera en
            que se toman las decisiones que cambian un país o una compañía.
          </p>
        </div>

        <div className="relative reveal">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {mosaic.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-card aspect-[3/4] hover-lift ${
                  i % 4 === 0 ? "translate-y-4" : i % 3 === 0 ? "-translate-y-3" : ""
                }`}
                style={{ animation: `float-slow ${8 + (i % 4) * 2}s ease-in-out ${i * 0.3}s infinite` }}
              >
                <img src={src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- POPULAR EPISODES ---------- */
const platformLinks = {
  spotify: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ",
  youtube: "https://www.youtube.com/@diariodelpoder",
  apple: "https://podcasts.apple.com/es/podcast/diario-del-poder/id1746728894",
  ivoox: "https://www.ivoox.com/podcast-diario-del-poder_sq_f12586437_1.html",
};

const episodes = [
  {
    guest: "Andrés Rodríguez",
    role: "Presidente de Forbes España",
    img: bts4,
    copy: "Forbes, lujo y poder desde la Forbes House. Una conversación sobre liderazgo editorial, construcción de marca y el negocio del prestigio en España.",
    url: "https://youtu.be/nTtgtxG7UNs",
  },
  {
    guest: "Guillermo Lasso",
    role: "Expresidente de Ecuador",
    img: g5,
    copy: "Gobernar en plena crisis. Decisiones difíciles, presión política y la responsabilidad de liderar un país en tiempos turbulentos.",
    url: "https://youtu.be/2XZuIBfyBH0",
  },
  {
    guest: "José María Aznar",
    role: "Expresidente del Gobierno de España",
    img: g1,
    copy: "Liderar un país. Aznar habla sin guion sobre poder, decisiones difíciles y el legado de quien ha estado donde se decide.",
    url: "https://youtu.be/ZydPM-xkYvA",
  },
  {
    guest: "Mikel Echavarren",
    role: "CEO de Colliers España",
    img: gEcha,
    copy: "Real estate, ciclos y dinero inteligente. Una clase magistral sobre el negocio de los activos reales y la lectura del mercado.",
    url: "https://youtu.be/ARO5S1I5cg8",
  },
];

function PopularEpisodes() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-ddp">
        <h2 className="font-display uppercase text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.01em] mb-14 md:mb-20 reveal">
          Episodios más vistos
        </h2>

        <div className="flex flex-col gap-16 md:gap-20">
          {episodes.map((e, i) => {
            const isOpen = expanded === i;
            return (
              <article key={e.guest} className="grid md:grid-cols-[minmax(0,420px)_1fr] gap-8 md:gap-14 items-start reveal">
                <a href={e.url} target="_blank" rel="noreferrer" className="block relative aspect-video overflow-hidden group bg-card">
                  <img src={e.img} alt={e.guest} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_8px_40px_-10px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform">
                      <Play size={24} className="fill-current ml-1" />
                    </span>
                  </div>
                </a>

                <div>
                  <h3 className="font-display uppercase text-[clamp(1.4rem,2.4vw,2.4rem)] leading-[1.05] tracking-[-0.01em]">
                    {e.guest}
                    <span className="block text-primary text-base md:text-lg mt-2 tracking-[0.08em]">
                      {e.role}
                    </span>
                  </h3>
                  <p className="mt-5 text-base md:text-lg text-muted-foreground leading-[1.7] max-w-2xl">
                    {isOpen ? e.copy : `${e.copy.slice(0, 110)}…`}
                    {" "}
                    <button onClick={() => setExpanded(isOpen ? null : i)} className="text-primary hover:underline">
                      {isOpen ? "leer menos" : "leer más"}
                    </button>
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-6">
                    <a href={e.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-display uppercase text-primary tracking-[0.14em] text-sm md:text-base hover:gap-5 transition-all">
                      Ver episodio <ArrowRight size={18} />
                    </a>
                    <div className="flex items-center gap-3">
                      <PlatformIcon kind="apple" href={platformLinks.apple} />
                      <PlatformIcon kind="spotify" href={platformLinks.spotify} />
                      <PlatformIcon kind="youtube" href={platformLinks.youtube} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 text-center reveal">
          <Link to="/escuchanos" className="btn-ghost">Todos los episodios</Link>
        </div>
      </div>
    </section>
  );
}

function PlatformIcon({ kind, href }: { kind: "apple" | "spotify" | "youtube" | "ivoox"; href: string }) {
  const bg = { apple: "#9B49E5", spotify: "#1DB954", youtube: "#FF0000", ivoox: "#EE7202" }[kind];
  const label = { apple: "Apple Podcasts", spotify: "Spotify", youtube: "YouTube", ivoox: "iVoox" }[kind];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escuchar en ${label}`}
      className="w-10 h-10 rounded-md flex items-center justify-center text-white hover:scale-110 transition-transform"
      style={{ background: bg }}
    >
      <span className="font-display text-xs">{label[0]}</span>
    </a>
  );
}

/* ---------- SUBSCRIBE LIME BAND ---------- */
function SubscribeBand() {
  const cards: { kind: "apple" | "spotify" | "youtube" | "ivoox"; href: string }[] = [
    { kind: "apple", href: platformLinks.apple },
    { kind: "youtube", href: platformLinks.youtube },
    { kind: "spotify", href: platformLinks.spotify },
    { kind: "ivoox", href: platformLinks.ivoox },
  ];
  const labels = { apple: "Apple Podcasts", spotify: "Spotify", youtube: "YouTube", ivoox: "iVoox" };
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container-ddp">
        <h2 className="font-display uppercase text-center text-[clamp(1.6rem,3vw,2.6rem)] leading-tight tracking-[-0.005em] mb-12 md:mb-14 reveal">
          Suscríbete en tu plataforma favorita
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 reveal">
          {cards.map((c) => (
            <a
              key={c.kind}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="bg-background text-foreground rounded-xl py-7 md:py-9 px-6 flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
            >
              <span
                className="w-9 h-9 rounded-md flex items-center justify-center text-white font-display text-sm"
                style={{ background: { apple: "#9B49E5", spotify: "#1DB954", youtube: "#FF0000", ivoox: "#EE7202" }[c.kind] }}
                aria-hidden
              >
                {labels[c.kind][0]}
              </span>
              <span className="font-display uppercase text-base md:text-lg tracking-tight">{labels[c.kind]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- NEWS & STORIES ---------- */
const news = [
  { tag: "Internacional", title: "Univision se hace eco de Diario del Poder y su cobertura institucional", img: g2, href: "/prensa" },
  { tag: "Negocio", title: "Forbes España: Andrés Rodríguez conversa con DDP sobre liderazgo editorial", img: bts4, href: "/prensa" },
  { tag: "Política", title: "La conversación con José María Aznar marca el inicio de temporada", img: g1, href: "/prensa" },
  { tag: "Deporte", title: "Javier Tebas, sobre LaLiga, el futuro del fútbol y los derechos audiovisuales", img: g3, href: "/prensa" },
  { tag: "Empresa", title: "Mikel Echavarren y la lectura de los ciclos del real estate en España", img: gEcha, href: "/prensa" },
  { tag: "Cultura", title: "Jordi Juan: prensa, criterio y el papel del periodismo hoy", img: gJordi, href: "/prensa" },
];

function NewsStories() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSel = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSel);
    onSel();
    return () => { embla.off("select", onSel); };
  }, [embla]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-ddp">
        <div className="flex items-end justify-between mb-12 md:mb-14 gap-6 flex-wrap reveal">
          <h2 className="font-display uppercase text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.01em]">
            Noticias e historias
          </h2>
          <div className="flex gap-2">
            <button onClick={() => embla?.scrollPrev()} aria-label="Anterior" className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform flex items-center justify-center"><ChevronLeft size={20} /></button>
            <button onClick={() => embla?.scrollNext()} aria-label="Siguiente" className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform flex items-center justify-center"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5 md:-ml-6">
            {news.map((n, i) => (
              <Link
                key={i}
                to={n.href}
                className="pl-5 md:pl-6 shrink-0 grow-0 basis-[85%] sm:basis-[55%] lg:basis-[33.333%] group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <img src={n.img} alt={n.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/85 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-display uppercase text-primary-foreground tracking-[0.16em] flex items-center gap-3 text-sm">
                      Leer más <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <span className="inline-block border border-border px-3 py-1 text-[11px] font-display uppercase tracking-[0.16em]">{n.tag}</span>
                  <h3 className="mt-4 text-lg md:text-xl font-medium leading-snug">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {news.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-8 bg-primary" : "w-1.5 bg-foreground/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// keep imports used by ts checker
void [g4, g6, g7, g8];
