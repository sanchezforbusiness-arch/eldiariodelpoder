import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { episodeList } from "@/data/podcast";
import aznarLandscape from "@/assets/bts-aznar-faes.webp";

const ORDER = [
  "andres-rodriguez-forbes-lujo-y-poder",
  "jose-maria-aznar-liderar-un-pais",
];

const IMAGE_OVERRIDE: Record<string, string> = {
  "jose-maria-aznar-liderar-un-pais": aznarLandscape,
};

const withVideo = episodeList.filter((e) => e.youtubeId);
const clips = [
  ...ORDER.map((slug) => withVideo.find((e) => e.slug === slug)).filter(Boolean),
  ...withVideo.filter((e) => !ORDER.includes(e.slug)),
].slice(0, 5) as typeof withVideo;

export function VideoReel() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [previewing, setPreviewing] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((en) => en.isIntersecting && en.intersectionRatio > 0.75)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setPreviewing((visible.target as HTMLElement).dataset.video ?? null);
        }
      },
      { root: track, threshold: [0, 0.75, 1] },
    );
    track.querySelectorAll("[data-video]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
        {clips.map((e) => {
          const poster = IMAGE_OVERRIDE[e.slug] ?? e.image;
          const isPlaying = playing === e.youtubeId;
          const isPreviewing = !isPlaying && previewing === e.youtubeId;
          return (
            <article
              key={e.slug}
              data-video={e.youtubeId}
              className="group relative w-[86vw] shrink-0 snap-center md:w-[1100px] md:max-w-[86vw]"
            >
              <div className="media-zoom relative aspect-video overflow-hidden rounded-[20px] bg-card shadow-soft md:rounded-[28px]">
                {isPlaying ? (
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
                      src={poster}
                      alt={`${e.guest} — ${e.title}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    {isPreviewing && (
                      <iframe
                        src={`https://www.youtube.com/embed/${e.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${e.youtubeId}&rel=0&modestbranding=1&playsinline=1`}
                        title={`Vista previa de ${e.guest}`}
                        allow="autoplay; encrypted-media"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[calc(100%+140px)] w-[calc(100%+2px)] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-700 [animation:fade-in_0.8s_ease_forwards]"
                        style={{ opacity: 1 }}
                      />
                    )}
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,30,23,0.85),rgba(11,30,23,0.1)_55%,transparent)]" />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 md:h-20 md:w-20">
                      <Play size={22} className="ml-1 fill-current" />
                    </span>
                    <span className="text-on-image pointer-events-none absolute inset-x-0 bottom-0 block p-5 text-left md:p-8">
                      <span className="mono-label block">{e.guest}</span>
                      <span className="mt-2 block max-w-[28ch] text-base font-medium leading-[1.1] tracking-tight md:text-xl">
                        {e.title}
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
