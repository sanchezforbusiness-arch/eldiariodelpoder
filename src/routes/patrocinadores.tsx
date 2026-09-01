import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { useReveal } from "@/hooks/use-reveal";
import hosts from "@/assets/bts-hosts-palco.webp";

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title: "Patrocinadores — Diario del Poder" },
      {
        name: "description",
        content:
          "Asocia tu marca a conversaciones que importan, con la audiencia de decisores que escucha Diario del Poder. Plata, Oro y Platino — hablemos.",
      },
      { property: "og:title", content: "Patrocinadores — Diario del Poder" },
      {
        property: "og:description",
        content:
          "Tu marca en conversaciones que importan. Asocia tu compañía al podcast premium de liderazgo en español.",
      },
      { property: "og:url", content: "https://eldiariodelpoder.com/patrocinadores" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/patrocinadores" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
            { "@type": "ListItem", position: 2, name: "Patrocinadores", item: "https://eldiariodelpoder.com/patrocinadores" },
          ],
        }),
      },
    ],
  }),
  component: PatrocinadoresPage,
});

const pillars = [
  {
    n: "01",
    t: "Audiencia que decide",
    d: "Ejecutivos, fundadores e inversores. Menos volumen, más relevancia.",
  },
  {
    n: "02",
    t: "Al lado del liderazgo",
    d: "Tu marca, junto a expresidentes, CEOs y referentes.",
  },
  {
    n: "03",
    t: "Editorial cuidada",
    d: "Sin ruido. Un entorno serio para tu mensaje.",
  },
];

const tiers = [
  {
    name: "Plata",
    pitch: "Presencia continuada",
    perks: [
      "Logo en web y newsletter",
      "1 mención por episodio",
      "Materiales de prensa",
    ],
  },
  {
    name: "Oro",
    pitch: "Asociación de marca",
    perks: [
      "Todo lo anterior",
      "Lectura al inicio de cada episodio",
      "Un episodio temático hecho contigo",
      "Acceso a un evento privado",
    ],
    featured: true,
  },
  {
    name: "Platino",
    pitch: "Patrocinador principal",
    perks: [
      "Todo lo anterior",
      "Presentación in-line en cada episodio",
      "Branded content de larga forma",
      
    ],
  },
];

function PatrocinadoresPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Tiers />
        <Contact />
      </main>
      <FooterGrid />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden grain">
      <img
        src={hosts}
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-20 ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      <div className="gold-glow w-[520px] h-[520px] -top-40 -right-40 float-slow" />

      <div className="container-ddp relative">
        <div className="max-w-4xl fade-up">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-14 bg-border" />
            <span className="eyebrow flex items-center gap-2">
              <span className="dot-gold" /> Patrocinadores
            </span>
          </div>
          <h1 className="text-2xl sm:text-display md:text-display lg:text-display leading-[0.95] font-medium tracking-tight">
            Sé parte de la conversación.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/80 leading-relaxed">
            El podcast en español sobre liderazgo e influencia. Tu marca, junto a los que deciden.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contacto" className="btn-primary">
              Hablar con el equipo
              <ArrowUpRight size={14} />
            </a>
            <a href="#opciones" className="btn-outline">
              Ver opciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
 <section className="py-16 md:py-32 border-t border-border">
      <div className="container-ddp">
        <div className="max-w-2xl mb-12 md:mb-16 reveal">
          <span className="eyebrow block mb-4">
            <span className="dot-gold mr-2" />
            Por qué DDP
          </span>
          <h2 className="text-2xl sm:text-2xl md:text-display leading-[1.05] font-medium tracking-tight">
            Un entorno con criterio.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border reveal-stagger">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10">
              <p className="text-2xs tracking-label uppercase text-muted-foreground mb-5">{p.n}</p>
              <h3 className="tracking-tight text-2xl md:text-2xl font-medium leading-tight mb-4">
                {p.t}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tiers() {
  return (
 <section id="opciones" className="py-16 md:py-32 border-t border-border bg-background-alt">
      <div className="container-ddp">
        <div className="max-w-2xl mb-12 md:mb-16 reveal">
          <span className="eyebrow block mb-4">
            <span className="dot-gold mr-2" />
            Opciones de patrocinio
          </span>
          <h2 className="text-2xl sm:text-2xl md:text-display leading-[1.05] font-medium tracking-tight">
            Tres formas de conversar con nuestra audiencia.
          </h2>
          <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
            Diseñamos cada acuerdo a medida. Estas son las tres formas en las que solemos trabajar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 reveal-stagger">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col bg-background border p-8 md:p-10 hover-lift transition-colors ${
                t.featured
                  ? "border-border"
                  : "border-border hover:border-foreground/40"
              }`}
            >
              {t.featured && (
                <span className="absolute top-0 right-0 -translate-y-1/2 bg-foreground text-background text-2xs tracking-label uppercase px-3 py-1">
                  Más solicitado
                </span>
              )}
              <p className="text-2xs tracking-label uppercase text-muted-foreground mb-3">
                {t.pitch}
              </p>
              <h3 className="tracking-tight text-2xl md:text-display font-medium mb-8">
                {t.name}
              </h3>
              <ul className="space-y-3 text-sm text-foreground/85 mb-8 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check size={14} className="text-foreground mt-1 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`group inline-flex items-center justify-between gap-3 w-full px-5 py-3.5 text-2xs tracking-label uppercase border transition-colors ${
                  t.featured
                    ? "bg-foreground text-background border-foreground hover:bg-foreground/90"
                    : "border-foreground/25 text-foreground hover:border-foreground/40 hover:text-signal"
                }`}
              >
                Solicitar info
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs tracking-label uppercase text-muted-foreground text-center">
          Acuerdos anuales o por temporada · cerramos detalles en una llamada
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
 <section id="contacto" className="relative py-16 md:py-32 border-t border-border overflow-hidden">
      <div className="gold-glow float-slow w-[460px] h-[460px] -bottom-40 left-1/2 -translate-x-1/2 opacity-30" />
      <div className="container-ddp relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="eyebrow block mb-5">
            <span className="dot-gold mr-2" />
            Hablemos
          </span>
          <h2 className="text-2xl md:text-display leading-[1.0] font-medium tracking-tight">
            Tu marca, en conversaciones que importan.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Cuéntanos tu compañía y tus objetivos. Te respondemos en menos de 48 horas con una propuesta a medida.
          </p>

          <div className="mt-10 inline-flex flex-col items-center gap-5">
            <Link to="/agenda" className="btn-primary">
              Agendar una llamada
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="mailto:patrocinios@eldiariodelpoder.com?subject=Patrocinadores%20%E2%80%94%20Diario%20del%20Poder"
              className="btn-outline"
            >
              <Mail size={14} />
              Hablar con nuestro equipo
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="mailto:patrocinios@eldiariodelpoder.com"
              className="text-sm text-muted-foreground hover:text-signal transition-colors"
            >
              patrocinios@eldiariodelpoder.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}