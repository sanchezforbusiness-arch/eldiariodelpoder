import { episodeList } from "@/data/podcast";
import andresImg from "@/assets/bts-andres-rodriguez.webp";
import { useParallax } from "@/hooks/use-parallax";

const ep = episodeList[1];

export function LatestEpisode() {
  const ref = useParallax(0.12);
  return (
    <section id="ultimo" className="relative border-b border-border">
      <div className="grid lg:grid-cols-12">
        <a
          href={ep.url}
          target="_blank"
          rel="noreferrer"
          data-cursor="view"
          className="group relative block overflow-hidden lg:col-span-8"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[80svh]">
            <img
              ref={ref}
              src={jordiAsset.url}
              alt={`${ep.guest} — ${ep.title}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-[124%] w-full -translate-y-[12%] object-cover object-top grayscale transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.9),rgba(10,10,10,0.15)_55%,transparent)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
              <p className="mono-label text-signal">Último episodio</p>
              <h2 className="mt-4 max-w-3xl text-[8vw] font-medium leading-[0.94] tracking-[-0.035em] sm:text-[5vw] lg:text-[3.4vw]">
                {ep.title}
              </h2>
            </div>
          </div>
        </a>

        <aside className="flex flex-col justify-between gap-10 border-t border-border p-6 md:p-12 lg:col-span-4 lg:border-l lg:border-t-0">
          <div>
            <p className="section-index">{ep.n}</p>
            <p className="mt-6 text-2xl font-medium tracking-[-0.03em]">{ep.guest}</p>
            <p className="mono-label mt-2">{ep.role}</p>
            <p className="prose-editorial mt-8 text-[17px]">{ep.description}</p>
          </div>
          <div>
            <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6">
              <div>
                <dt className="mono-label">Fecha</dt>
                <dd className="mt-1 font-mono text-sm">{ep.date}</dd>
              </div>
              <div>
                <dt className="mono-label">Duración</dt>
                <dd className="mt-1 font-mono text-sm">{ep.duration}</dd>
              </div>
            </dl>
            <a href={ep.url} target="_blank" rel="noreferrer" className="link-rule mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.12em]">
              Escuchar la conversación
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
