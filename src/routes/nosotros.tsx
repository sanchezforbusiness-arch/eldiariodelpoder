import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";
import alejandroImg from "@/assets/founder-alejandro.jpg";
import victorImg from "@/assets/founder-victor.jpg";
import federicaImg from "@/assets/guest-8.jpg";
import inigoImg from "@/assets/advisor-inigo.jpg";

const SITE = "https://eldiariodelpoder.com";

const peopleLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alejandro Sánchez Martínez",
    jobTitle: "Editorial Director & Fundador",
    affiliation: { "@type": "Organization", name: "Diario del Poder" },
    url: `${SITE}/nosotros`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Víctor Gandarilla",
    jobTitle: "Co-Fundador & Dirección de Operaciones",
    affiliation: { "@type": "Organization", name: "Diario del Poder" },
    url: `${SITE}/nosotros`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Federica Fornaciari",
    jobTitle: "Advisor · Estrategia & Marca",
    affiliation: { "@type": "Organization", name: "Diario del Poder" },
    url: `${SITE}/nosotros`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Iñigo Rivero",
    jobTitle: "Advisor · M&A & Patrimonios",
    affiliation: { "@type": "Organization", name: "Diario del Poder" },
    url: `${SITE}/nosotros`,
  },
];

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Diario del Poder | Quiénes están detrás" },
      { name: "description", content: "Diario del Poder lo fundaron Alejandro Sánchez Martínez y Víctor Gandarilla. Conoce el propósito, el equipo y los números detrás del proyecto." },
      { property: "og:title", content: "Nosotros — Diario del Poder" },
      { property: "og:description", content: "Conoce a Alejandro y Víctor, los fundadores de Diario del Poder." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/nosotros` },
      { name: "twitter:title", content: "Nosotros — Diario del Poder" },
      { name: "twitter:description", content: "Los fundadores y el propósito detrás del podcast." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/nosotros` }],
    scripts: peopleLd.map((p) => ({ type: "application/ld+json", children: JSON.stringify(p) })),
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Numeros />
        <Hub />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden grain">
      <div className="gold-glow w-[480px] h-[480px] -top-32 -right-32 float-slow opacity-40" />
      <div className="container-ddp relative">
        <div className="flex items-center gap-4 mb-7 fade-up">
          <span className="h-px w-12 bg-gold/70" />
          <span className="eyebrow">Nosotros</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] font-light tracking-[-0.04em] max-w-5xl fade-up">
          Somos <span className="italic shimmer-gold">convicción</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-[1.1rem] text-foreground/75 leading-[1.7] fade-up">
          Diario del Poder nace de la creencia de que la nueva generación merece
          conversaciones con nivel, criterio y profundidad. Por eso hacemos esto.
        </p>
      </div>
    </section>
  );
}

function Numeros() {
  const stats = [
    { v: "500K+", l: "Alcance mensual" },
    { v: "110K", l: "Vistas Instagram / mes" },
    { v: "7", l: "Medios nacionales" },
  ];
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp">
        <div className="reveal mb-12 max-w-2xl">
          <span className="eyebrow block mb-5">Números</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
            Prueba de que <span className="italic text-gold">funciona</span>.
          </h2>
        </div>
        <div className="reveal grid md:grid-cols-3 gap-px bg-border border border-border reveal-stagger">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-10 md:p-14 text-center">
              <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-gold font-light">{s.v}</p>
              <p className="mt-4 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hub() {
  const cards = [
    { to: "/equipo" as const, label: "Equipo", title: "Fundadores y advisors" },
    { to: "/manifiesto" as const, label: "Manifiesto", title: "Propósito y valores" },
    { to: "/invitados" as const, label: "Roster", title: "Invitados publicados" },
    { to: "/prensa" as const, label: "Prensa", title: "Cobertura mediática" },
  ];
  return (
    <section className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="container-ddp">
        <div className="reveal mb-12 max-w-2xl">
          <span className="eyebrow block mb-5">Sigue explorando</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-light tracking-[-0.02em]">
            Cuatro caminos, un <span className="italic text-gold">proyecto</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal reveal-stagger">
          {cards.map((c) => (
            <Link key={c.to} to={c.to} className="group block border border-border hover:border-gold p-7 transition-colors">
              <span className="eyebrow block mb-4">{c.label}</span>
              <p className="font-serif text-2xl md:text-[1.7rem] leading-tight group-hover:text-gold transition-colors">{c.title}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">Ir <ArrowUpRight size={13} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}