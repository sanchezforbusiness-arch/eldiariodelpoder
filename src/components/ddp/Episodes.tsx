import { Play } from "lucide-react";
import { featuredEpisodes } from "@/data/podcast";

export function Episodes() {
  const [featured, ...rest] = featuredEpisodes;
  const featuredNumber = String(1).padStart(2, "0");
  return (
    <section id="episodes" className="py-16 md:py-32 border-t border-border">
      <div className="container-ddp">

        {/* Featured episode */}
        <a
          href={featured.url}
          target="_blank"
          rel="noreferrer"
          className="group block relative overflow-hidden rounded-sm mb-10 md:mb-12 reveal"
        >
          <div className="text-on-image relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[24px] bg-card md:rounded-[32px]">
            <img
              src={featured.image}
              alt={featured.guest}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1100ms]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,26,26,0.92),rgba(10,26,26,0.25)_60%,transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,26,26,0.55),transparent_60%)]" />

            <div className="absolute top-5 left-5 md:top-8 md:left-8 flex items-center gap-3">
              <span className="text-2xs sm:text-2xs tracking-label sm:tracking-label uppercase text-foreground border border-border px-2.5 sm:px-3 py-1 sm:py-1.5">
                Destacados
              </span>
              <span className="font-serif text-2xl sm:text-2xl text-muted-foreground">{featuredNumber}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-12">
              <p className="text-2xs md:text-2xs tracking-label md:tracking-label uppercase text-muted-foreground mb-2 md:mb-3">{featured.guest}</p>
              <h3 className="tracking-tight text-xl sm:text-2xl md:text-[3.25rem] leading-[1.05] md:leading-[1.02] font-medium max-w-3xl">
                {featured.title}
              </h3>
              <div className="mt-4 md:mt-6 inline-flex items-center gap-3 text-2xs md:text-2xs tracking-label md:tracking-label uppercase text-foreground group-hover:text-signal transition-colors">
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="fill-current ml-0.5" />
                </span>
                Reproducir
              </div>
            </div>
          </div>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 reveal-stagger">
          {rest.map((e, index) => (
            <a key={e.slug} href={e.url} target="_blank" rel="noreferrer" className="group block">
              <div className="text-on-image relative aspect-[4/5] overflow-hidden rounded-[20px] bg-card hover-lift">
                <img
                  src={e.image}
                  alt={e.guest}
                  width={512}
                  height={640}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover contrast-110 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,26,26,0.9),rgba(10,26,26,0.15)_55%,transparent)]" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <span className="font-serif text-2xl text-muted-foreground">{String(index + 2).padStart(2, "0")}</span>
                </div>
                <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={14} className="fill-current ml-0.5" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                  <p className="text-2xs sm:text-2xs tracking-label sm:tracking-label uppercase text-muted-foreground mb-1.5 sm:mb-2">{e.guest}</p>
                  <h3 className="tracking-tight text-xl sm:text-2xl md:text-lg leading-tight">
                    {e.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
