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
        <Proposito />
        <Equipo />
        <Advisors />
        <Numeros />
        <Valores />
        <CTA />
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

function Proposito() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp max-w-3xl reveal">
        <span className="eyebrow block mb-5">Propósito</span>
        <div className="space-y-6 font-serif text-2xl md:text-3xl lg:text-[2rem] leading-[1.3] font-light text-foreground/90">
          <p>No entendemos el poder como imposición.</p>
          <p>Lo entendemos como la capacidad de influir, de generar impacto, de dejar <span className="italic text-gold">huella</span>.</p>
          <p>Reunimos a líderes reales con jóvenes ambiciosos. No buscamos virales fáciles.</p>
          <p>Buscamos conversaciones que cambien la forma de pensar.</p>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  const team = [
    {
      img: alejandroImg,
      name: "Alejandro Sánchez Martínez",
      role: "Editorial Director & Fundador",
      bio: "Periodista y estratega de comunicación. Cree que la próxima generación de líderes necesita espacios serios para conversar y aprender de los que vinieron antes.",
      links: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/alejandrosanchezmartinez/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/alejandrosanchezmartinez/", label: "Instagram" },
      ],
    },
    {
      img: victorImg,
      name: "Víctor Gandarilla",
      role: "Co-Fundador & Dirección de Operaciones",
      bio: "Dirige la estrategia operativa y comercial de Diario del Poder. Su obsesión: que cada episodio sea impecable y que cada decisión sirva a la misión del proyecto.",
      links: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/victorgandarilla/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/victorgandarilla/", label: "Instagram" },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="container-ddp">
        <div className="reveal mb-14 max-w-2xl">
          <span className="eyebrow block mb-5">El equipo</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
            Los que están <span className="italic text-gold">detrás</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 reveal reveal-stagger">
          {team.map((p) => (
            <article key={p.name}>
              <div className="relative aspect-[4/5] overflow-hidden bg-card hover-cinema">
                <img src={p.img} alt={`${p.name}, ${p.role} de Diario del Poder`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="mt-7 font-serif text-3xl md:text-4xl">{p.name}</h3>
              <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-gold">{p.role}</p>
              <p className="mt-5 text-base text-muted-foreground leading-[1.75] max-w-md">{p.bio}</p>
              <div className="mt-5 flex items-center gap-4 text-muted-foreground">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={`${p.name} en ${l.label}`} className="hover:text-gold transition-colors">
                    <l.icon size={18} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advisors() {
  const advisors = [
    {
      img: federicaImg,
      name: "Federica Fornaciari",
      role: "Advisor · Estrategia & Marca",
      bio: "Founder de SenYours y NoBrainer Partners. Ex-Bain. Profesora en IE, IESE y Bocconi. Forbes Top 100.",
      links: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/federica-ilaria-fornaciari-mba", label: "LinkedIn" },
      ],
    },
    {
      img: inigoImg,
      name: "Iñigo Rivero",
      role: "Advisor · M&A & Patrimonios",
      bio: "Managing Partner de Paterberg y Lejeune. Asesora a family offices, consejos y grandes patrimonios.",
      links: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/iñigo-rivero-iruretagoyena-88351b30", label: "LinkedIn" },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp">
        <div className="reveal mb-14 max-w-2xl">
          <span className="eyebrow block mb-5">Advisors</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
            Quienes nos <span className="italic text-gold">aconsejan</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Dos perfiles con recorrido real que validan criterio editorial y estrategia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 reveal reveal-stagger">
          {advisors.map((p) => (
            <article key={p.name}>
              <div className="relative aspect-[4/5] overflow-hidden bg-card hover-cinema">
                <img src={p.img} alt={`${p.name}, ${p.role} de Diario del Poder`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="mt-7 font-serif text-3xl md:text-4xl">{p.name}</h3>
              <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-gold">{p.role}</p>
              <p className="mt-5 text-base text-muted-foreground leading-[1.75] max-w-md">{p.bio}</p>
              <div className="mt-5 flex items-center gap-4 text-muted-foreground">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={`${p.name} en ${l.label}`} className="hover:text-gold transition-colors">
                    <l.icon size={18} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
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

function Valores() {
  const lines = [
    "Criterio sobre ruido.",
    "Profundidad sobre clicks.",
    "Largo plazo sobre tendencia.",
    "Conversación sobre monólogo.",
    "Elegancia sobre espectáculo.",
  ];
  return (
    <section className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="container-ddp max-w-3xl reveal">
        <span className="eyebrow block mb-5">Valores</span>
        <ul className="space-y-3 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-light">
          {lines.map((l, i) => (
            <li key={l} className={i === lines.length - 1 ? "italic text-gold" : ""}>{l}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp grid md:grid-cols-2 gap-8">
        <Link to="/invitados" className="group block border border-border hover:border-gold p-10 transition-colors">
          <span className="eyebrow block mb-4">Roster</span>
          <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Conoce a los invitados</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">Ir a invitados <ArrowUpRight size={14} /></span>
        </Link>
        <Link to="/contacto" className="group block border border-border hover:border-gold p-10 transition-colors">
          <span className="eyebrow block mb-4">Hablamos</span>
          <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Contacta con nosotros</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">Ir a contacto <ArrowUpRight size={14} /></span>
        </Link>
      </div>
    </section>
  );
}