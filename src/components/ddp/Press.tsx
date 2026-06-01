import { ArrowUpRight } from "lucide-react";

type PressItem = {
  outlet: string;
  context?: string;
  url?: string;
  featured?: boolean;
};

const items: PressItem[] = [
  {
    outlet: "La Vanguardia",
    context: "Media Partner — entrevista a Jordi Juan",
    url: "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html",
    featured: true,
  },
  {
    outlet: "Antena 3 — Espejo Público",
    context: "Cobertura Reina Letizia / Universidad de Navarra",
    url: "https://www.antena3.com/programas/espejo-publico/noticias/chascarrillo-reina-letizia-dos-jovenes-que-pedian-entrevista-antes-delante-camara-era-inviable_202605116a01daefb5b06629960c3679.html",
  },
  {
    outlet: "La Sexta — Zapeando",
    context: "Clip en emisión",
  },
  {
    outlet: "El Español",
    url: "https://www.elespanol.com/mujer/royals/20260508/anecdota-reina-letizia-chicos-querian-hablara-podcast-entrevistada-entrevistadora/1003744238033_0.html",
  },
  {
    outlet: "Infobae",
    url: "https://www.infobae.com/espana/2026/05/08/la-elegante-forma-en-la-que-la-reina-letizia-evita-la-invitacion-al-podcast-de-unos-estudiantes-para-hacerles-ella-la-entrevista-sois-de-que-facultad/",
  },
  {
    outlet: "Voz Pópuli",
    url: "https://www.vozpopuli.com/dolcevita/la-reina-letizia-se-hace-viral-por-lo-que-le-dijo-a-unos-jovenes-que-querian-entrevistarla-en-su-podcast.html",
  },
  {
    outlet: "Diario de Navarra",
    url: "https://www.diariodenavarra.es/noticias/navarra/2026/05/07/reina-letizia-vuelve-pamplona-directo-acto-celebracion-dia-mundial-cruz-roja-819846-15.html",
  },
  { outlet: "El Mundo" },
  { outlet: "El Periódico" },
  { outlet: "El Debate" },
  {
    outlet: "Huffpost",
    url: "https://www.huffingtonpost.es/virales/le-piden-letizia-salir-podcast-respuesta-reina-esperan-nadie-f202605.html",
  },
  { outlet: "Navarra TV" },
  {
    outlet: "Univision",
    context: "La voz del mañana",
  },
];

export function Press() {
  const featured = items.find((i) => i.featured);
  const rest = items.filter((i) => !i.featured);

  return (
    <section id="prensa" className="relative py-28 md:py-40 border-t border-border">
      <div className="container-ddp">
        <div className="max-w-3xl mb-16 md:mb-20 reveal">
          <span className="eyebrow block mb-6">Prensa</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] font-light">
            Lo que cuentan <span className="italic shimmer-gold">de nosotros</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Algunos de los medios que han querido contar lo que hacemos. Gracias por sumar voz.
          </p>
        </div>

        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="group block mb-12 md:mb-16 reveal border border-border hover:border-gold transition-colors p-8 md:p-12 bg-card/30"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-[10px] tracking-[0.32em] uppercase text-gold mb-4 block">
                  Media Partner
                </span>
                <div className="font-serif text-3xl md:text-5xl text-foreground group-hover:text-gold transition-colors">
                  {featured.outlet}
                </div>
                {featured.context && (
                  <p className="mt-3 text-sm text-muted-foreground">{featured.context}</p>
                )}
              </div>
              <ArrowUpRight
                size={36}
                className="text-muted-foreground group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>
          </a>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border reveal">
          {rest.map((item) => {
            const Tag = item.url ? "a" : "div";
            return (
              <Tag
                key={item.outlet}
                {...(item.url
                  ? { href: item.url, target: "_blank", rel: "noreferrer" }
                  : {})}
                className={`relative bg-background p-6 md:p-8 min-h-[150px] flex flex-col justify-between ${
                  item.url ? "group hover:bg-card/60 transition-colors cursor-pointer" : "opacity-70"
                }`}
              >
                <div className="font-serif text-lg md:text-xl leading-tight group-hover:text-gold transition-colors">
                  {item.outlet}
                </div>
                <div className="mt-4 flex items-end justify-between gap-2">
                  <span className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                    {item.context ?? (item.url ? "Leer" : "Próximamente")}
                  </span>
                  {item.url && (
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-gold transition-colors shrink-0"
                    />
                  )}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
