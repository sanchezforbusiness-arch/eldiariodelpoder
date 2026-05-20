import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { useReveal } from "@/hooks/use-reveal";
import heroBg from "@/assets/hero-studio.webp";
import founderAle from "@/assets/founder-alejandro.jpg";
import founderVic from "@/assets/founder-victor.jpg";
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
import bts7 from "@/assets/bts-osasuna.jpg";
import bts8 from "@/assets/bts-aznar-faes.jpg";

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
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TextBand items={["DIARIO DEL PODER", "LA VOZ DEL LEGADO", "EL PODCAST"]} />
        <MediaMarquee />
        <EpisodesSlider />
        <TextBand items={["EXPRESIDENTES", "CEOS", "LÍDERES", "FUNDADORES"]} reverse />
        <Purpose />
        <GuestsSlider />
        <TextBand items={["BACKSTAGE", "EN VIVO", "SIN GUION"]} />
        <EventosGrid />
        <FoundersBand />
        <JoinForm />
        <RosterMarquee />
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/60" />
      <div className="absolute inset-0 bg-background/20" />
      <div className="container-ddp relative text-center fade-up px-4">
        <h1 className="font-display uppercase leading-[0.88] tracking-[-0.02em] text-primary text-[clamp(4.5rem,17vw,14rem)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          Diario<br />del Poder
        </h1>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/90 text-[11px] tracking-[0.35em] uppercase flex flex-col items-center gap-3 font-display">
        Scroll
        <span className="text-foreground text-xl bounce-down">↓</span>
      </div>
    </section>
  );
}

/* ---------- TEXT BAND (slicer) ---------- */
function TextBand({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section className="py-8 md:py-12 bg-background overflow-hidden border-y border-border">
      <div className={`text-band ${reverse ? "marquee-reverse" : ""}`}>
        {loop.map((t, i) => (
          <span key={i} className="text-band-item flex items-center gap-8">
            <span className={i % 2 === 0 ? "text-foreground" : "text-primary"}>{t}</span>
            <span className="text-band-dot" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- MEDIA MARQUEE ---------- */
const medios = [
  "Antena 3", "El Español", "¡Hola!", "Semana",
  "Diario de Navarra", "Vozpópuli", "Infobae",
  "El Mundo", "El Periódico", "El Debate",
];
function MediaMarquee() {
  const loop = [...medios, ...medios];
  return (
    <section className="py-16 md:py-20 bg-card overflow-hidden">
      <div className="container-ddp">
        <h2 className="text-center font-display text-2xl md:text-4xl font-bold tracking-[-0.03em] mb-10 reveal">
          Vistos en medios
        </h2>
      </div>
      <div className="mask-fade-x">
        <div className="marquee marquee-slow">
          {loop.map((m, i) => (
            <div
              key={`${m}-${i}`}
              className="px-10 flex items-center justify-center text-foreground/80 hover:text-foreground hover:scale-110 transition-transform duration-300 font-display font-semibold text-lg md:text-xl whitespace-nowrap"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PURPOSE ---------- */
function Purpose() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-ddp max-w-3xl text-center reveal">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05]">
          Para pensar con criterio
        </h2>
        <p className="mt-7 text-lg text-muted-foreground leading-[1.8]">
          Aquí acercamos conversaciones de nivel a jóvenes con ambición.
          Expresidentes, CEOs globales y líderes que comparten su visión,
          experiencia y legado. Sin prisa, sin ruido, con profundidad.
        </p>
      </div>
    </section>
  );
}

/* ---------- FOUNDERS BAND ---------- */
function FoundersBand() {
  return (
    <section className="bg-card reveal">
      <div className="grid grid-cols-2 h-[360px] md:h-[500px]">
        <div className="relative overflow-hidden">
          <img src={founderAle} alt="Alejandro Sánchez" className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
        </div>
        <div className="relative overflow-hidden">
          <img src={founderVic} alt="Víctor Gandarilla" className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
}

/* ---------- GUESTS SLIDER ---------- */
const guests = [
  { name: "José María Aznar", role: "Expresidente de España", img: g1, url: "https://youtu.be/ZydPM-xkYvA" },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5, url: "https://youtu.be/2XZuIBfyBH0" },
  { name: "Andrés Rodríguez", role: "Presidente de Forbes España", img: g4, url: "https://youtu.be/nTtgtxG7UNs" },
  { name: "Mikel Echavarren", role: "CEO de Colliers", img: gEcha, url: "https://youtu.be/ARO5S1I5cg8" },
  { name: "Iván Duque", role: "Expresidente de Colombia", img: g2, url: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" },
  { name: "Javier Tebas", role: "Presidente de LaLiga", img: g3, url: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" },
  { name: "Esperanza Aguirre", role: "Expresidenta de Madrid", img: g7, url: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" },
  { name: "Martín Sellés", role: "CEO J&J España", img: g6, url: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" },
];

function GuestsSlider() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSel = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSel);
    onSel();
    return () => { embla.off("select", onSel); };
  }, [embla]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-ddp">
        <div className="flex items-end justify-between mb-10 reveal">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05]">
            Expresidentes, CEOs, líderes
          </h2>
          <div className="hidden md:flex gap-2">
            <button onClick={scrollPrev} aria-label="Anterior" className="w-11 h-11 border border-border hover:border-foreground transition-colors flex items-center justify-center"><ChevronLeft size={18} /></button>
            <button onClick={scrollNext} aria-label="Siguiente" className="w-11 h-11 border border-border hover:border-foreground transition-colors flex items-center justify-center"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {guests.map((g) => (
              <a
                key={g.name}
                href={g.url}
                target="_blank"
                rel="noreferrer"
                className="pl-5 shrink-0 grow-0 basis-[80%] sm:basis-[50%] lg:basis-[33.333%] group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-card hover-lift">
                  <img src={g.img} alt={`${g.name} — ${g.role}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-lg font-semibold">{g.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{g.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {guests.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-8 bg-foreground" : "w-1.5 bg-foreground/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EPISODES SLIDER ---------- */
const episodes = [
  { guest: "Andrés Rodríguez", role: "Presidente Forbes España", img: bts4, copy: "Forbes, lujo y poder desde la Forbes House. Una conversación sobre liderazgo editorial y construcción de marca.", url: "https://youtu.be/nTtgtxG7UNs" },
  { guest: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5, copy: "Gobernar en plena crisis. Decisiones difíciles, presión política y la responsabilidad de liderar un país.", url: "https://youtu.be/2XZuIBfyBH0" },
  { guest: "José María Aznar", role: "Expresidente de España", img: g1, copy: "Liderar un país. Aznar habla sin guion sobre poder, decisiones y legado político.", url: "https://youtu.be/ZydPM-xkYvA" },
  { guest: "Mikel Echavarren", role: "CEO de Colliers", img: gEcha, copy: "Real estate, ciclos y dinero inteligente. Una clase magistral sobre el negocio de los activos reales.", url: "https://youtu.be/ARO5S1I5cg8" },
];

function EpisodesSlider() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })],
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
    <section className="py-20 md:py-28 bg-card">
      <div className="container-ddp">
        <div className="flex items-end justify-between mb-10 reveal">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05] max-w-2xl">
            Episodios que marcaron diferencia
          </h2>
          <div className="hidden md:flex gap-2">
            <button onClick={() => embla?.scrollPrev()} aria-label="Anterior" className="w-11 h-11 border border-border bg-background hover:border-foreground transition-colors flex items-center justify-center"><ChevronLeft size={18} /></button>
            <button onClick={() => embla?.scrollNext()} aria-label="Siguiente" className="w-11 h-11 border border-border bg-background hover:border-foreground transition-colors flex items-center justify-center"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {episodes.map((e) => (
              <div key={e.guest} className="shrink-0 grow-0 basis-full">
                <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center bg-background p-6 md:p-10">
                  <a href={e.url} target="_blank" rel="noreferrer" className="block relative aspect-[4/5] overflow-hidden group">
                    <img src={e.img} alt={e.guest} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  </a>
                  <div>
                    <h3 className="font-display text-2xl md:text-4xl font-bold tracking-[-0.02em]">{e.guest}</h3>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">{e.role}</p>
                    <p className="mt-5 text-base text-muted-foreground leading-[1.7]">{e.copy}</p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={e.url} target="_blank" rel="noreferrer" className="btn-primary">YouTube</a>
                      <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" className="btn-ghost">Spotify</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {episodes.map((_, i) => (
            <button key={i} aria-label={`Episodio ${i + 1}`} onClick={() => embla?.scrollTo(i)} className={`h-1.5 rounded-full transition-all ${selected === i ? "w-8 bg-foreground" : "w-1.5 bg-foreground/25"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EVENTOS GRID ---------- */
const eventos = [
  { img: bts1, title: "Firma Aznar" },
  { img: bts2, title: "Encuentro Lasso" },
  { img: bts3, title: "Charla Jordi Urbea" },
  { img: bts4, title: "Forbes House" },
  { img: bts5, title: "Palco Metropolitano" },
  { img: bts6, title: "Estadio Metropolitano" },
  { img: bts7, title: "El Sadar" },
  { img: bts8, title: "FAES" },
];
function EventosGrid() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-ddp">
        <div className="max-w-2xl mb-12 reveal">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05]">
            Conversaciones en vivo
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Llevamos nuestras conversaciones a espacios reales, donde el criterio se comparte cara a cara.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 reveal-stagger reveal">
          {eventos.map((e) => (
            <Link key={e.title} to="/eventos" className="group relative overflow-hidden bg-card aspect-[3/2]">
              <img src={e.img} alt={e.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/45 transition-colors flex items-end p-4">
                <span className="text-background text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Ver evento →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center reveal">
          <Link to="/eventos" className="inline-flex items-center gap-2 font-semibold text-foreground hover:opacity-70 transition-opacity">
            Próximos eventos <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- JOIN FORM ---------- */
function JoinForm() {
  const [tab, setTab] = useState<"invitado" | "sponsor">("invitado");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = tab === "invitado" ? "Quiero ser invitado" : "Propuesta de sponsorship";
    const body = `Nombre: ${data.get("nombre")}\nEmail: ${data.get("email")}\n\n${data.get("mensaje")}`;
    window.location.href = `mailto:contactoeldiariodelpoder@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container-ddp max-w-2xl">
        <div className="text-center reveal">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05]">
            ¿Quieres participar?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">Bienvenido al club.</p>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {(["invitado", "sponsor"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 text-[12px] font-semibold tracking-[0.06em] uppercase border transition-colors ${
                tab === t ? "bg-foreground text-background border-foreground" : "border-border text-foreground hover:border-foreground"
              }`}
            >
              {t === "invitado" ? "Quiero ser invitado" : "Propuesta sponsorship"}
            </button>
          ))}
        </div>

        {sent ? (
          <p className="mt-10 text-center text-foreground">Gracias. Te responderemos en breve.</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 grid gap-4">
            <input name="nombre" required placeholder="Nombre" className="bg-background border border-border focus:border-foreground px-5 py-4 text-base focus:outline-none transition-colors" />
            <input name="email" type="email" required placeholder="Email" className="bg-background border border-border focus:border-foreground px-5 py-4 text-base focus:outline-none transition-colors" />
            <textarea name="mensaje" required rows={5} placeholder="Mensaje" className="bg-background border border-border focus:border-foreground px-5 py-4 text-base focus:outline-none transition-colors resize-none" />
            <button type="submit" className="btn-primary justify-center">Enviar</button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------- ROSTER MARQUEE ---------- */
const roster = [g1, g2, g3, g4, g5, g6, g7, g8, gEcha, gJordi];
function RosterMarquee() {
  const loop = [...roster, ...roster];
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container-ddp mb-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05] text-center reveal">
          Nuestro roster
        </h2>
      </div>
      <div className="mask-fade-x">
        <div className="marquee" style={{ animationDuration: "55s" }}>
          {loop.map((src, i) => (
            <div key={i} className="px-3 shrink-0">
              <div className="w-[260px] md:w-[320px] aspect-[4/5] overflow-hidden bg-card hover-lift">
                <img src={src} alt="Invitado Diario del Poder" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link to="/invitados" className="btn-ghost">Ver todos los invitados</Link>
      </div>
    </section>
  );
}
