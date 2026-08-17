import { ArrowUpRight, Quote, Radio, Tv, Newspaper, Globe2 } from "lucide-react";
import { pressItems } from "@/data/press";

const items = pressItems;

const kindIcon = {
  print: Newspaper,
  tv: Tv,
  radio: Radio,
  digital: Globe2,
} as const;

const stats = [
  { value: "13+", label: "Medios" },
  { value: "4", label: "Cadenas TV" },
  { value: "1", label: "Media Partner" },
  { value: "M+", label: "Alcance" },
];

export function Press() {
  const featured = items.find((i) => i.featured);
  const rest = items.filter((i) => !i.featured);
  

  return (
 <section id="prensa" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 60%)" }}
      />

      <div className="container-ddp">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-16 md:mb-24 reveal">
          <div className="md:col-span-8">
            <span className="eyebrow block mb-6"><span className="dot-gold mr-2" />Prensa & Media</span>
            <h2 className="font-serif text-display md:text-display lg:text-display leading-[0.98] tracking-tight font-light">
              Lo que cuentan
              <br />
              <span className="italic shimmer-gold">de nosotros</span>.
            </h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground text-base md:text-xs leading-relaxed">
            Prensa, televisión y digitales. Lo que dicen fuera del podcast.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border mb-20 md:mb-28 reveal">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group py-8 md:py-10 px-6 ${i !== 0 ? "md:border-l border-border" : ""} ${i === 1 ? "border-l border-border" : ""} hover:bg-card/40 transition-colors`}
            >
              <div className="font-serif text-display md:text-display font-light text-gold leading-none">
                {s.value}
              </div>
              <div className="mt-4 text-2xs tracking-label uppercase text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="group relative block mb-20 md:mb-28 reveal overflow-hidden rounded-sm border border-border hover:border-gold/60 transition-colors"
          >
            <div className="grid md:grid-cols-5">
              {/* Left: pull-quote */}
              <div className="md:col-span-3 p-8 md:p-14 lg:p-16 bg-card/30 relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-2xs tracking-label uppercase text-gold">
                    Portada · Media Partner
                  </span>
                </div>
                <Quote className="text-gold/40 mb-4" size={36} />
                <p className="font-serif text-2xl md:text-2xl lg:text-2xl leading-[1.2] font-light tracking-tight text-foreground/90">
                  {featured.quote}
                </p>
                <div className="mt-10 flex items-end justify-between gap-6">
                  <div>
                    <div className="font-serif text-2xl md:text-2xl text-foreground group-hover:text-gold transition-colors">
                      {featured.outlet}
                    </div>
                    <p className="mt-1 text-2xs tracking-label uppercase text-muted-foreground">
                      Mayo 2026 · Podcast
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-2xs tracking-label uppercase text-foreground group-hover:text-gold transition-colors">
                    Leer <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
              {/* Right: visual */}
              <div className="md:col-span-2 relative min-h-[260px] md:min-h-0 overflow-hidden bg-background">
                <iframe
                  src="https://www.youtube.com/embed/onHImjPIYJI?controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&autoplay=0"
                  title="Jordi Juan — La Vanguardia"
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                  loading="lazy"
                  allow="autoplay; encrypted-media"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-2xs tracking-label uppercase text-gold/90 border border-gold/40 px-3 py-1.5 bg-background/60 backdrop-blur">
                    Ver pieza
                  </span>
                  <ArrowUpRight size={28} className="text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10 reveal">
          <span className="text-2xs tracking-label uppercase text-gold">Aparecidos en</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 reveal">
          {rest.map((item) => {
            const Tag = item.url ? "a" : "div";
            const Icon = kindIcon[item.kind ?? "digital"];
            return (
              <Tag
                key={item.outlet}
                {...(item.url ? { href: item.url, target: "_blank", rel: "noreferrer" } : {})}
                className={`relative bg-card/40 p-6 md:p-8 min-h-[180px] flex flex-col justify-between overflow-hidden rounded-sm border border-border ${
                  item.url ? "group hover:bg-card/70 hover:border-gold/50 transition-colors cursor-pointer" : "opacity-60"
                }`}
              >
                {/* Hover sweep */}
                {item.url && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
                  />
                )}
                <div className="flex items-start justify-between gap-3">
                  <Icon size={16} className="text-muted-foreground group-hover:text-gold transition-colors shrink-0 mt-1" />
                  {item.url && (
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                    />
                  )}
                </div>
                <div>
                  <div className="font-serif text-xl md:text-2xl leading-[1.1] group-hover:text-gold transition-colors">
                    {item.outlet}
                  </div>
                  <div className="mt-3 text-2xs tracking-label uppercase text-muted-foreground">
                    {item.context ?? (item.url ? "Leer pieza" : "Próximamente")}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>


        {/* Press contact */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal">
          <div>
            <span className="eyebrow block mb-4">Contacto prensa</span>
            <h3 className="font-serif text-2xl md:text-2xl font-light leading-[1.1] tracking-tight">
              ¿Escribes <span className="italic text-gold">sobre nosotros</span>?
            </h3>
          </div>
          <a
            href="mailto:prensa@eldiariodelpoder.com"
            className="group inline-flex items-center justify-between gap-6 border border-border hover:border-gold rounded-sm p-6 md:p-8 transition-colors"
          >
            <div>
              <p className="text-2xs tracking-label uppercase text-muted-foreground mb-2">Email</p>
              <p className="font-serif text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors">
                prensa@eldiariodelpoder.com
              </p>
            </div>
            <ArrowUpRight size={28} className="text-muted-foreground group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
