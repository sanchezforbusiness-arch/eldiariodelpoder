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
      "Logo en web",
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
    <section className="p-2 pt-16 md:p-3 md:pt-20">
      <div className="surface-dark relative overflow-hidden rounded-[28px] border border-border shadow-lift grain md:rounded-[36px]">
        <img
          src={hosts}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,21,15,0.94),rgba(7,21,15,0.55)_60%,rgba(7,21,15,0.35))]" />

        <div className="container-ddp relative flex min-h-[62dvh] flex-col justify-end py-16 md:min-h-[70dvh] md:py-24">
          <div className="max-w-4xl fade-up">
            <span className="mono-label">Patrocinadores</span>
            <h1 className="mt-5 text-2xl font-medium leading-[0.95] tracking-tight sm:text-display md:text-display lg:text-display">
              Sé parte de la conversación.
            </h1>
            <p className="mt-7 max-w-[46ch] text-base leading-relaxed text-foreground/80 md:text-lg">
              El podcast en español sobre liderazgo e influencia. Tu marca, junto a los que deciden.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#contacto" className="btn-primary w-full sm:w-auto">
                Hablar con el equipo
                <ArrowUpRight size={14} />
              </a>
              <a href="#opciones" className="btn-outline w-full sm:w-auto">
                Ver opciones
              </a>
            </div>
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
          <span className="mono-label">Por qué DDP</span>
          <h2 className="mt-4 text-2xl sm:text-2xl md:text-display leading-[1.05] font-medium tracking-tight">
            Un entorno con criterio.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 reveal-stagger">
          {pillars.map((p) => (
            <div key={p.n} className="card-clean p-8 md:p-10">
              <p className="text-2xs tracking-label uppercase text-muted-foreground mb-5 tabular-nums">{p.n}</p>
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
          <span className="mono-label">Opciones de patrocinio</span>
          <h2 className="mt-4 text-2xl sm:text-2xl md:text-display leading-[1.05] font-medium tracking-tight">
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
              className={`card-clean relative flex flex-col p-8 md:p-10 ${
                t.featured ? "ring-1 ring-signal/40" : ""
              }`}
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-signal px-3 py-1 text-2xs uppercase tracking-label text-white">
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
                className={`group inline-flex w-full items-center justify-between gap-3 rounded-full border px-5 py-3.5 text-2xs uppercase tracking-label transition-colors ${
                  t.featured
                    ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
                    : "border-foreground/25 text-foreground hover:border-foreground/45 hover:text-signal"
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
 <section id="contacto" className="relative overflow-hidden border-t border-border py-16 md:py-32">
      <div className="container-ddp relative">
        <div className="panel mx-auto max-w-3xl px-6 py-14 text-center reveal md:px-12 md:py-20">
          <span className="mono-label block mb-5">Hablemos</span>
          <h2 className="text-2xl md:text-display leading-[1.0] font-medium tracking-tight">
            Tu marca, en conversaciones que importan.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Cuéntanos tu compañía y tus objetivos. Te respondemos en menos de 48 horas con una propuesta a medida.
          </p>

          <div className="mt-10 flex w-full max-w-full flex-col items-center gap-5">
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