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
      <div className="absolute inset-0 bg-gradient-to-r from-background/65 via-background/25 to-background/10" />
      <div className="container-ddp relative fade-up w-full">
        <h1 className="font-display uppercase leading-[0.86] tracking-[-0.02em] text-primary text-[clamp(3.5rem,12vw,10.5rem)] text-left max-w-[14ch]">
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
        <h2 className="font-display uppercase text-[clamp(1rem,1.4vw,1.35rem)] tracking-[0.04em] mb-12 md:mb-16 reveal">
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
                  <h3 className="font-display uppercase text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.02] tracking-[-0.01em] text-foreground">
                    Nº{String(i + 1).padStart(2, "0")} {e.guest} — {e.role}
                  </h3>
                  <p className="mt-5 text-sm md:text-[15px] text-muted-foreground leading-[1.7] max-w-2xl">
                    {isOpen ? e.copy : `${e.copy.slice(0, 110)}…`}
                    {" "}
                    <button onClick={() => setExpanded(isOpen ? null : i)} className="text-primary hover:underline">
                      {isOpen ? "leer menos" : "leer más"}
                    </button>
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                    <a href={e.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-display uppercase text-primary tracking-[0.18em] text-[13px] hover:gap-3 transition-all">
                      Ver episodio <ArrowRight size={14} />
                    </a>
                    <div className="flex items-center gap-2.5">
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
  const label = { apple: "Apple Podcasts", spotify: "Spotify", youtube: "YouTube", ivoox: "iVoox" }[kind];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escuchar en ${label}`}
      className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform overflow-hidden"
    >
      {kind === "spotify" && (
        <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#1DB954" />
          <path fill="#000" d="M17.4 16.4c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.9-9.4-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-.9 7.6-.5 10.4 1.2.3.2.4.6.2.9zm1.4-2.8c-.3.4-.7.5-1.1.3-2.9-1.8-7.3-2.3-10.6-1.3-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.8-1.1 8.6-.6 11.9 1.4.4.2.5.7.3 1.1zm.1-2.9c-3.4-2-9.1-2.2-12.4-1.2-.5.2-1.1-.2-1.2-.7-.2-.5.2-1.1.7-1.2 3.7-1.1 10-.9 13.9 1.4.5.3.6.9.4 1.4-.3.4-.9.6-1.4.3z"/>
        </svg>
      )}
      {kind === "youtube" && (
        <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#FF0000" />
          <path d="M10 8.5v7l6-3.5z" fill="#fff" />
        </svg>
      )}
      {kind === "apple" && (
        <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden>
          <defs>
            <linearGradient id={`apl-${href}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#F452FF" />
              <stop offset="1" stopColor="#832BC1" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="12" fill={`url(#apl-${href})`} />
          <circle cx="12" cy="9.5" r="1.8" fill="#fff" />
          <path d="M9 16c.6-.9 1.8-1.5 3-1.5s2.4.6 3 1.5l-.7 1.2c-.5-.7-1.3-1.1-2.3-1.1s-1.8.4-2.3 1.1z" fill="#fff" />
          <rect x="11.2" y="11.6" width="1.6" height="6" rx=".8" fill="#fff" />
        </svg>
      )}
      {kind === "ivoox" && (
        <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#EE7202" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">iV</text>
        </svg>
      )}
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
        <h2 className="font-display uppercase text-center text-[clamp(1.1rem,1.8vw,1.6rem)] leading-tight tracking-[0.04em] mb-10 md:mb-12 reveal text-primary-foreground">
          Suscríbete en tu plataforma favorita
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 reveal">
          {cards.map((c) => (
            <a
              key={c.kind}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="bg-background text-foreground rounded-2xl py-6 md:py-7 px-6 flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
            >
              <BrandLogo kind={c.kind} />
              <span className="font-sans font-bold text-base md:text-[17px] tracking-tight">{labels[c.kind]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ kind }: { kind: "apple" | "spotify" | "youtube" | "ivoox" }) {
  if (kind === "spotify") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="12" fill="#1DB954" />
        <path fill="#fff" d="M17.4 16.4c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.9-9.4-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-.9 7.6-.5 10.4 1.2.3.2.4.6.2.9zm1.4-2.8c-.3.4-.7.5-1.1.3-2.9-1.8-7.3-2.3-10.6-1.3-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.8-1.1 8.6-.6 11.9 1.4.4.2.5.7.3 1.1zm.1-2.9c-3.4-2-9.1-2.2-12.4-1.2-.5.2-1.1-.2-1.2-.7-.2-.5.2-1.1.7-1.2 3.7-1.1 10-.9 13.9 1.4.5.3.6.9.4 1.4-.3.4-.9.6-1.4.3z"/>
      </svg>
    );
  }
  if (kind === "youtube") {
    return (
      <svg width="42" height="30" viewBox="0 0 28 20" aria-hidden>
        <rect width="28" height="20" rx="5" fill="#FF0000" />
        <path d="M11.2 6.2v7.6L17.6 10z" fill="#fff" />
      </svg>
    );
  }
  if (kind === "apple") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id="apl" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#F452FF" />
            <stop offset="1" stopColor="#832BC1" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="5" fill="url(#apl)" />
        <circle cx="12" cy="9.2" r="2.2" fill="#fff" />
        <path d="M9 16.2c.6-.9 1.8-1.5 3-1.5s2.4.6 3 1.5l-.8 1.4c-.5-.7-1.3-1.2-2.2-1.2s-1.7.5-2.2 1.2z" fill="#fff" />
        <rect x="11.2" y="11.6" width="1.6" height="6.4" rx=".8" fill="#fff" />
      </svg>
    );
  }
  return (
    <span className="w-9 h-9 rounded-md bg-[#EE7202] text-white font-display text-base flex items-center justify-center" aria-hidden>iV</span>
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
