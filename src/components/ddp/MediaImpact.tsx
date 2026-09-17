import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { tvAppearances } from "@/data/tv";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const FEATURED_APPEARANCES = [
  tvAppearances.find((item) => item.id === "univision-directo"),
  tvAppearances.find((item) => item.id === "zapeando"),
  tvAppearances.find((item) => item.id === "espejo-publico-plato"),
  tvAppearances.find((item) => item.id === "univision-aznar"),
  tvAppearances.find((item) => item.id === "espejo-publico-protocolo"),
  tvAppearances.find((item) => item.id === "univision-entrevista"),
].filter((item): item is NonNullable<typeof item> => Boolean(item));

export function MediaImpact() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    if (!api || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => api.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section aria-labelledby="media-impact-title" className="overflow-hidden bg-teal text-primary-foreground">
      <div className="container-ddp py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-20">
          <div className="reveal">
            <p className="text-xs uppercase tracking-label text-primary-foreground/60">Impacto</p>
            <h2 id="media-impact-title" className="type-section mt-5 max-w-[11ch]">
              Han hablado de nosotros
            </h2>
            <p className="mt-5 max-w-[37ch] text-sm leading-relaxed text-primary-foreground/70">
              Conversaciones que han cruzado la mesa del podcast para llegar a la prensa y la televisión nacional e internacional.
            </p>
            <Link
              to="/prensa"
              className="tap mt-7 inline-flex items-center gap-2 border-b border-primary-foreground/40 text-sm font-medium transition-colors hover:border-primary-foreground"
            >
              Ver todas las apariciones
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          <div className="reveal min-w-0">
            <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} aria-label="Apariciones destacadas en televisión">
              <CarouselContent className="-ml-3">
                {FEATURED_APPEARANCES.map((item) => (
                  <CarouselItem key={item.id} className="basis-[88%] pl-3 sm:basis-[68%] lg:basis-[62%]">
                    <figure className="group relative overflow-hidden border border-primary-foreground/20 bg-primary-foreground/5">
                      <img
                        src={item.image}
                        alt={item.alt}
                        width={1280}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      />
                      <figcaption className="min-h-40 border-t border-primary-foreground/20 p-5 md:min-h-44 md:p-6">
                        <p className="notranslate text-xs uppercase tracking-label text-primary-foreground/60" translate="no">
                          {item.channel} · {item.program}
                        </p>
                        <h3 className="mt-4 line-clamp-3 text-xl leading-tight md:text-2xl">{item.title}</h3>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-5 flex items-center justify-between">
              <p className="tabular text-xs text-primary-foreground/60" aria-live="polite">
                {String(current + 1).padStart(2, "0")} / {String(FEATURED_APPEARANCES.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => api?.scrollPrev()}
                  className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-teal"
                  aria-label="Aparición anterior"
                >
                  <ArrowLeft aria-hidden />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => api?.scrollNext()}
                  className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-teal"
                  aria-label="Siguiente aparición"
                >
                  <ArrowRight aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}