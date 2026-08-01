import { episodeList } from "@/data/podcast";

const LINES = ["La voz", "del legado."];

export function HeroNoir() {
  return (
    <section id="top" className="relative min-h-[92svh] border-b border-border grain">
      <div className="container-ddp relative flex min-h-[92svh] flex-col justify-end pb-16 pt-40 md:pb-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-sans text-[16vw] font-medium leading-[0.88] tracking-[-0.04em] sm:text-[13vw] lg:text-[9vw]">
              {LINES.map((l, i) => (
                <span key={l} className="line-mask">
                  <span className="line-inner" style={{ "--i": i } as React.CSSProperties}>
                    {l}
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-12 max-w-[52ch]">
              <p className="prose-editorial">
                Entrevistas largas con jefes de Estado, presidentes de compañías y
                referentes que rara vez hablan sin guion. Grabadas en Madrid, publicadas
                sin recortes.
              </p>
              <a href="#episodios" className="link-rule mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.12em]">
                Ver el índice de episodios
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
            <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-1">
              <Meta k="Episodios" v={String(episodeList.length).padStart(2, "0")} />
              <Meta k="Fundado" v="2025" />
              <Meta k="Base" v="Madrid, ES" />
              <Meta k="Idioma" v="Español" />
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="mono-label">{k}</dt>
      <dd className="mt-1 font-mono text-sm tracking-[0.02em]">{v}</dd>
    </div>
  );
}
