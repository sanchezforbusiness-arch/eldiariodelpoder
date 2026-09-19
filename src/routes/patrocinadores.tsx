import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { BrandMark, BRANDS } from "@/components/ddp/BrandsMarquee";
import { useReveal } from "@/hooks/use-reveal";
import hosts from "@/assets/bts-hosts-palco.webp";

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title: "Patrocinadores — Diario del Poder" },
        {
          name: "description",
          content:
            "Asocia tu marca a conversaciones que importan, con la audiencia de decisores que escucha Diario del Poder. Hablemos.",
        },
      { property: "og:title", content: "Patrocinadores — Diario del Poder" },
      {
        property: "og:description",
        content:
          "Tu marca en conversaciones que importan. Asocia tu compañía al podcast premium de liderazgo en español.",
      },
      { property: "og:url", content: "https://eldiariodelpoder.com/patrocinadores" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp" },
      { name: "twitter:card", content: "summary_large_image" },
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


function PatrocinadoresPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main>
        <Hero />
        <Collaborators />
        <Pillars />
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
              <Link to="/agenda" className="btn-primary w-full sm:w-auto">
                Reservar una llamada
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collaborators() {
  return (
    <section className="border-t border-border py-16 md:py-24" aria-labelledby="collaborators-heading">
      <div className="container-ddp">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-12 md:items-end md:gap-12 md:pb-14">
          <div className="md:col-span-8 reveal">
            <span className="mono-label">Marcas colaboradoras</span>
            <h2 id="collaborators-heading" className="mt-4 max-w-[18ch] text-2xl font-medium leading-[1.05] tracking-tight md:text-display">
              Ya han formado parte de la conversación.
            </h2>
          </div>
          <p className="max-w-[38ch] text-sm leading-relaxed text-muted-foreground md:col-span-4 md:text-base">
            Medios, instituciones y compañías que han colaborado con El Diario del Poder.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5 reveal-stagger">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="flex min-h-32 items-center justify-center gap-3 border-b border-r border-border px-4 py-8 transition-colors hover:bg-background-alt md:min-h-40 md:px-6"
            >
              <BrandMark domain={brand.domain} logo={brand.logo} name={brand.name} className="h-7 md:h-8" />
              <span className="notranslate text-center text-sm font-medium leading-tight tracking-tight md:text-base" translate="no">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <p className="max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
            Si tu marca comparte esta forma de entender la influencia, veamos cómo integrarla con criterio.
          </p>
          <Link to="/agenda" className="btn-primary shrink-0">
            Reservar una llamada
            <ArrowUpRight size={14} />
          </Link>
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

function Contact() {
  return (
    <section id="contacto" className="border-t border-border py-16 md:py-24">
      <div className="container-ddp">
        <div className="panel flex flex-col gap-6 p-6 reveal md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="mono-label">¿Hablamos?</p>
            <p className="mt-3 max-w-[30ch] text-lg font-medium leading-[1.15] tracking-tight md:text-xl">
              Reserva 30 minutos y vemos el encaje de tu marca.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/agenda" className="btn-primary w-full sm:w-auto">
              Reservar una llamada
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="mailto:patrocinios@eldiariodelpoder.com?subject=Patrocinadores%20%E2%80%94%20Diario%20del%20Poder"
              className="text-sm text-muted-foreground hover:text-signal transition-colors sm:text-right"
            >
              patrocinios@eldiariodelpoder.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}