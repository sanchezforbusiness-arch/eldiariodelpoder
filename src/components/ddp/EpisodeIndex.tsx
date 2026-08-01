import { Link } from "@tanstack/react-router";
import { episodeList } from "@/data/podcast";

export function EpisodeIndex() {
  return (
    <section id="episodios" className="border-b border-border py-20 md:py-32">
      <div className="container-ddp">
        <header className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-8">
            <span className="section-index pt-2">04</span>
            <h2 className="text-[10vw] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[6vw] lg:text-[4vw]">
              Índice de episodios
            </h2>
          </div>
          <Link to="/episodios" className="link-rule font-mono text-[11px] uppercase tracking-[0.12em]">
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
                className="row-index grid-cols-1 md:grid-cols-[64px_1.1fr_1.1fr_120px_100px]"
              >
                <span className="font-mono text-[11px] tracking-[0.12em]">{e.n}</span>
                <span className="min-w-0">
                  <span className="block text-lg font-medium tracking-[-0.02em] md:text-xl">{e.guest}</span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.12em] opacity-60">{e.role}</span>
                </span>
                <span className="font-serif text-[17px] leading-snug opacity-90">{e.title}</span>
                <span className="font-mono text-[11px] tracking-[0.12em] opacity-70">{e.date}</span>
                <span className="font-mono text-[11px] tracking-[0.12em] opacity-70 md:text-right">{e.duration}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
