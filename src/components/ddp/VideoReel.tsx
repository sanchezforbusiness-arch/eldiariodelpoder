import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { episodeList } from "@/data/podcast";

const clips = episodeList.filter((e) => e.youtubeId).slice(0, 5);

export function VideoReel() {
  const [playing, setPlaying] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="ver" className="section-pad overflow-hidden">
      <div className="container-ddp">
        <h2 className="reveal mx-auto max-w-[16ch] text-center text-xl font-medium leading-[1.02] tracking-tight md:text-2xl">
          Escucha a quienes deciden,<br className="hidden md:block" /> sin recortes
        </h2>
      </div>

      <div
        ref={trackRef}
        className="reveal mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 md:mt-14 md:gap-6 md:px-[max(1rem,calc((100vw-1100px)/2))]"
        style={{ scrollbarWidth: "none" }}
      >
        {clips.map((e) => (
          <article
            key={e.slug}
            className="group relative w-[86vw] shrink-0 snap-center md:w-[1100px] md:max-w-[86vw]"
          >
            <div className="media-zoom relative aspect-video overflow-hidden rounded-[20px] bg-card shadow-soft md:rounded-[28px]">
              {playing === e.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${e.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${e.guest} — ${e.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(e.youtubeId!)}
                  aria-label={`Reproducir ${e.guest} — ${e.title}`}
                  className="absolute inset-0 block h-full w-full cursor-pointer"
                >
                  <img
                    src={e.image}
                    alt={`${e.guest} — ${e.title}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,30,23,0.85),rgba(11,30,23,0.1)_55%,transparent)]" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 md:h-20 md:w-20">
                    <Play size={22} className="ml-1 fill-current" />
                  </span>
                  <span className="text-on-image absolute inset-x-0 bottom-0 block p-5 text-left md:p-8">
                    <span className="mono-label block">{e.guest}</span>
                    <span className="mt-2 block max-w-[28ch] text-base font-medium leading-[1.1] tracking-tight md:text-xl">
                      {e.title}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
