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
  { "@context": "https://schema.org", "@type": "Person", name: "Alejandro Sánchez Martínez", jobTitle: "Editorial Director & Fundador", affiliation: { "@type": "Organization", name: "Diario del Poder" }, url: `${SITE}/equipo` },
  { "@context": "https://schema.org", "@type": "Person", name: "Víctor Gandarilla", jobTitle: "Co-Fundador & Dirección de Operaciones", affiliation: { "@type": "Organization", name: "Diario del Poder" }, url: `${SITE}/equipo` },
  { "@context": "https://schema.org", "@type": "Person", name: "Federica Fornaciari", jobTitle: "Advisor · Estrategia & Marca", affiliation: { "@type": "Organization", name: "Diario del Poder" }, url: `${SITE}/equipo` },
  { "@context": "https://schema.org", "@type": "Person", name: "Iñigo Rivero", jobTitle: "Advisor · M&A & Patrimonios", affiliation: { "@type": "Organization", name: "Diario del Poder" }, url: `${SITE}/equipo` },
];

export const Route = createFileRoute("/equipo")({
  head: () => ({
    meta: [
      { title: "Equipo — Diario del Poder | Fundadores y advisors" },
      { name: "description", content: "Conoce a los fundadores Alejandro Sánchez Martínez y Víctor Gandarilla, y a los advisors Federica Fornaciari e Iñigo Rivero." },
      { property: "og:title", content: "Equipo — Diario del Poder" },
      { property: "og:description", content: "Fundadores y advisors detrás del podcast." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/equipo` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/equipo` }],
    scripts: peopleLd.map((p) => ({ type: "application/ld+json", children: JSON.stringify(p) })),
  }),
  component: EquipoPage,
});

const founders = [
  { img: alejandroImg, name: "Alejandro Sánchez Martínez", role: "Editorial Director & Fundador", bio: "Periodista y estratega de comunicación. Cree que la próxima generación de líderes necesita espacios serios para conversar y aprender de los que vinieron antes.", links: [{ icon: Linkedin, href: "https://www.linkedin.com/in/alejandrosanchezmartinez/", label: "LinkedIn" }, { icon: Instagram, href: "https://www.instagram.com/alejandrosanchezmartinez/", label: "Instagram" }] },
  { img: victorImg, name: "Víctor Gandarilla", role: "Co-Fundador & Dirección de Operaciones", bio: "Dirige la estrategia operativa y comercial de Diario del Poder. Su obsesión: que cada episodio sea impecable y que cada decisión sirva a la misión del proyecto.", links: [{ icon: Linkedin, href: "https://www.linkedin.com/in/victorgandarilla/", label: "LinkedIn" }, { icon: Instagram, href: "https://www.instagram.com/victorgandarilla/", label: "Instagram" }] },
];

const advisors = [
  { img: federicaImg, name: "Federica Fornaciari", role: "Advisor · Estrategia & Marca", bio: "Founder de SenYours y NoBrainer Partners. Ex-Bain. Profesora en IE, IESE y Bocconi. Forbes Top 100.", links: [{ icon: Linkedin, href: "https://www.linkedin.com/in/federica-ilaria-fornaciari-mba", label: "LinkedIn" }] },
  { img: inigoImg, name: "Iñigo Rivero", role: "Advisor · M&A & Patrimonios", bio: "Managing Partner de Paterberg y Lejeune. Asesora a family offices, consejos y grandes patrimonios.", links: [{ icon: Linkedin, href: "https://www.linkedin.com/in/iñigo-rivero-iruretagoyena-88351b30", label: "LinkedIn" }] },
];

function PersonCard({ p }: { p: typeof founders[number] }) {
  return (
    <article>
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
  );
}

function EquipoPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden grain">
          <div className="gold-glow w-[480px] h-[480px] -top-32 -right-32 float-slow opacity-40" />
          <div className="container-ddp relative">
            <div className="flex items-center gap-4 mb-7 fade-up">
              <span className="h-px w-12 bg-gold/70" />
              <span className="eyebrow">Equipo</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] font-light tracking-[-0.04em] max-w-4xl fade-up">
              Quién está <span className="italic shimmer-gold">detrás</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-base md:text-[1.1rem] text-foreground/75 leading-[1.7] fade-up">
              Dos fundadores y dos advisors. Madrid y Pamplona.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-border bg-card/20">
          <div className="container-ddp">
            <div className="reveal mb-10 max-w-2xl">
              <span className="eyebrow block mb-5">Fundadores</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 reveal reveal-stagger">
              {founders.map((p) => <PersonCard key={p.name} p={p} />)}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-border">
          <div className="container-ddp">
            <div className="reveal mb-10 max-w-2xl">
              <span className="eyebrow block mb-5">Advisors</span>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Dos perfiles con recorrido real que validan criterio editorial y estrategia.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 reveal reveal-stagger">
              {advisors.map((p) => <PersonCard key={p.name} p={p} />)}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-t border-border">
          <div className="container-ddp grid md:grid-cols-2 gap-8">
            <Link to="/manifiesto" className="group block border border-border hover:border-gold p-10 transition-colors">
              <span className="eyebrow block mb-4">Lo que creemos</span>
              <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Lee el manifiesto</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">Ir al manifiesto <ArrowUpRight size={14} /></span>
            </Link>
            <Link to="/invitados" className="group block border border-border hover:border-gold p-10 transition-colors">
              <span className="eyebrow block mb-4">Roster</span>
              <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Conoce a los invitados</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">Ir a invitados <ArrowUpRight size={14} /></span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}