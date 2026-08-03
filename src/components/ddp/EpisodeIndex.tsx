import { Link } from "@tanstack/react-router";
import { episodeList } from "@/data/podcast";

export function EpisodeIndex() {
  return (
    <section id="episodios" className="border-b border-border py-16 md:py-24">
      <div className="container-ddp">
        <header className="reveal-stagger mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-5 md:gap-8">
            <span className="section-index pt-2">04</span>
            <h2 className="type-section font-medium">
              Índice de episodios
            </h2>
          </div>
          <Link to="/episodios" className="link-rule tap self-start font-mono text-[11px] uppercase tracking-[0.12em]">
            Archivo completo
          </Link>
        </header>

        <div className="hairline" />
        <div className="mono-label hidden grid-cols-[64px_1.1fr_1.1fr_120px_100px] gap-4 px-4 py-4 md:grid">
          <span>Nº</span>
          <span>Invitado</span>
          <span>Conversación</span>
          <span>Fecha</span>
          <span className="text-right">Duración</span>
        </div>

        <ul>
          {episodeList.map((e) => (
            <li key={e.n}>
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                className="row-index tap grid-cols-1 md:grid-cols-[64px_1.1fr_1.1fr_120px_100px]"
              >
                <span className="flex items-baseline gap-3 md:block">
                  <span className="font-mono text-[11px] tracking-[0.12em] opacity-70">{e.n}</span>
                  <span className="text-lg font-medium tracking-[-0.02em] md:hidden">{e.guest}</span>
                </span>
                <span className="hidden min-w-0 md:block">
                  <span className="block text-lg font-medium tracking-[-0.02em] md:text-xl">{e.guest}</span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.12em] opacity-60">{e.role}</span>
                </span>
                <span className="hidden font-serif text-[17px] leading-snug opacity-90 md:block">{e.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-60 md:hidden">
                  {e.role} — {e.date}
                </span>
                <span className="hidden font-mono text-[11px] tracking-[0.12em] opacity-70 md:block">{e.date}</span>
                <span className="hidden font-mono text-[11px] tracking-[0.12em] opacity-70 md:block md:text-right">{e.duration}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
