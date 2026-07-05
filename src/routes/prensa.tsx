import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { useReveal } from "@/hooks/use-reveal";
import extra2 from "@/assets/backstage-extra-2.jpeg.asset.json";

const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/prensa")({
  head: () => ({
    meta: [
      { title: "Prensa — Diario del Poder" },
      { name: "description", content: "Cobertura de prensa de Diario del Poder: medios, televisión y referencias digitales que están hablando del podcast en España." },
      { property: "og:title", content: "Prensa — Diario del Poder" },
      { property: "og:description", content: "Cobertura, partners y apariciones en prensa." },
      { property: "og:url", content: "https://eldiariodelpoder.com/prensa" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/prensa" }],
  }),
  component: PrensaPage,
});

type Clip = { outlet: string; headline?: string; date?: string; url?: string };

const vanguardiaLinks: Clip[] = [
  {
    outlet: "La Vanguardia",
    headline: "Jordi Juan, director de La Vanguardia, en Diario del Poder",
    date: "Mayo 2026",
    url: "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html",
  },
];

const clips: Clip[] = [
  {
    outlet: "Antena 3",
    headline: "Espejo Público — Cobertura Reina Letizia / Universidad de Navarra",
    url: "https://www.antena3.com/programas/espejo-publico/noticias/chascarrillo-reina-letizia-dos-jovenes-que-pedian-entrevista-antes-delante-camara-era-inviable_202605116a01daefb5b06629960c3679.html",
  },
  { outlet: "La Sexta", headline: "Zapeando — Clip en emisión" },
  { outlet: "Univision", headline: "La voz del mañana" },
  { outlet: "El Mundo" },
  {
    outlet: "El Español",
    headline: "La anécdota de la Reina Letizia con los jóvenes del podcast",
    url: "https://www.elespanol.com/mujer/royals/20260508/anecdota-reina-letizia-chicos-querian-hablara-podcast-entrevistada-entrevistadora/1003744238033_0.html",
  },
  { outlet: "Forbes España" },
  { outlet: "¡Hola!" },
  { outlet: "El Debate" },
  {
    outlet: "Infobae",
    headline: "La elegante forma en la que la Reina Letizia responde a los jóvenes del podcast",
    url: "https://www.infobae.com/espana/2026/05/08/la-elegante-forma-en-la-que-la-reina-letizia-evita-la-invitacion-al-podcast-de-unos-estudiantes-para-hacerles-ella-la-entrevista-sois-de-que-facultad/",
  },
  {
    outlet: "Diario de Navarra",
    headline: "La Reina Letizia vuelve a Pamplona",
    url: "https://www.diariodenavarra.es/noticias/navarra/2026/05/07/reina-letizia-vuelve-pamplona-directo-acto-celebracion-dia-mundial-cruz-roja-819846-15.html",
  },
];

function PrensaPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main className="pt-40 md:pt-44">
        <div className="container-ddp pt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Volver
          </Link>
        </div>

        {/* Cabecera */}
        <header className="container-ddp pt-10 pb-16 md:pb-24">
          <div className="text-[11px] tracking-[0.32em] uppercase text-primary mb-6">
            Prensa — Diario del Poder en los medios
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] max-w-5xl">
            Lo que dicen <span className="italic">de nosotros.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed font-serif">
            Cobertura nacional e internacional de un proyecto que acerca a los grandes referentes a la nueva generación.
          </p>
        </header>

        {/* Bloque destacado La Vanguardia */}
        <section className="border-t border-foreground">
          <div className="container-ddp py-16 md:py-24">
            <div className="text-[10px] tracking-[0.36em] uppercase text-primary mb-8">
              Sección 01 — Media Partner oficial
            </div>
            <div className="filete-double p-6 md:p-12">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                <div className="md:col-span-5">
                  <div className="font-serif uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(2.2rem,6vw,4.5rem)]">
                    La Vanguardia
                  </div>
                  <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-foreground/60">
                    Grupo Godó · Barcelona
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="font-serif text-2xl md:text-3xl leading-[1.25] tracking-[-0.01em]">
                    Media Partner oficial de Diario del Poder. Cada episodio se amplifica en La Vanguardia, dando a cada conversación alcance, permanencia y autoridad a nivel nacional.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-foreground/40">
                <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/60 mb-4">
                  Publicado en La Vanguardia
                </div>
                <ul className="divide-y divide-foreground/20">
                  {vanguardiaLinks.map((c) => (
                    <li key={c.url}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-baseline justify-between gap-6 py-4 hover:text-primary transition-colors"
                      >
                        <div className="min-w-0">
                          <div className="font-serif text-lg md:text-xl leading-snug">{c.headline}</div>
                          {c.date && (
                            <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-foreground/55">{c.date}</div>
                          )}
                        </div>
                        <span className="shrink-0 inline-flex items-center gap-1 text-[11px] tracking-[0.24em] uppercase text-primary">
                          Leer <ArrowUpRight size={14} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Apariciones — recortes */}
        <section className="border-t border-foreground">
          <div className="container-ddp py-16 md:py-24">
            <div className="text-[10px] tracking-[0.36em] uppercase text-primary mb-8">
              Sección 02 — Apariciones y entrevistas
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] max-w-3xl mb-14">
              Recortes de <span className="italic">prensa.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/20 border border-foreground/30">
              {clips.map((c, i) => {
                const Tag = c.url ? "a" : "div";
                // asimetría: filas alternas de altura
                const tall = i % 5 === 0 || i % 7 === 0;
                return (
                  <Tag
                    key={c.outlet + i}
                    {...(c.url ? { href: c.url, target: "_blank", rel: "noreferrer" } : {})}
                    className={`bg-background p-6 md:p-8 flex flex-col justify-between ${
                      tall ? "min-h-[240px] md:min-h-[280px]" : "min-h-[180px] md:min-h-[220px]"
                    } ${c.url ? "group hover:bg-card/40 transition-colors" : ""}`}
                  >
                    <div className="font-serif uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(1.6rem,3.2vw,2.6rem)]">
                      {c.outlet}
                    </div>
                    <div className="mt-6">
                      {c.headline ? (
                        <>
                          <p className="font-serif text-lg md:text-xl leading-snug text-foreground/85">
                            {c.headline}
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            {c.date ? (
                              <span className="text-[10px] tracking-[0.28em] uppercase text-foreground/55">{c.date}</span>
                            ) : <span />}
                            {c.url && (
                              <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.24em] uppercase text-primary group-hover:translate-x-0.5 transition-transform">
                                Leer <ArrowUpRight size={14} />
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="text-[10px] tracking-[0.3em] uppercase text-foreground/55">
                          Aparición en medios
                        </div>
                      )}
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reconocimiento institucional */}
        <section className="border-t border-foreground">
          <div className="container-ddp py-16 md:py-24">
            <div className="text-[10px] tracking-[0.36em] uppercase text-primary mb-8">
              Sección 03 — Reconocimiento institucional
            </div>
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
              <figure className="md:col-span-8">
                <img
                  src={extra2.url}
                  alt="Encuentro con S.M. la Reina Doña Letizia en la Universidad de Navarra"
                  className="w-full h-auto object-cover grayscale"
                  loading="lazy"
                />
              </figure>
              <div className="md:col-span-4">
                <p className="font-serif text-2xl md:text-3xl leading-[1.2] tracking-[-0.01em]">
                  Reconocimiento de S.M. la Reina Doña Letizia en la Universidad de Navarra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Colofón — contacto prensa */}
        <section className="border-t border-foreground">
          <div className="container-ddp py-16 md:py-24 text-center">
            <div className="text-[10px] tracking-[0.36em] uppercase text-foreground/60 mb-6">
              Colofón — Contacto de prensa
            </div>
            <p className="font-serif text-2xl md:text-4xl leading-[1.2] tracking-[-0.01em] max-w-3xl mx-auto">
              Para entrevistas, medios y colaboraciones editoriales:{" "}
              <a
                href="mailto:contactoeldiariodelpoder@gmail.com"
                className="text-primary underline decoration-primary/40 underline-offset-[6px] hover:decoration-primary"
              >
                contactoeldiariodelpoder@gmail.com
              </a>
            </p>
            <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl mx-auto">
              O si lo prefiere,{" "}
              <a
                href="https://cal.com/el-diario-del-poder-wwdlhf"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline decoration-primary/40 underline-offset-[4px] hover:decoration-primary"
              >
                reserve directamente una llamada con nuestro equipo
              </a>
              .
            </p>
          </div>
        </section>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}