import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type NewsItem = {
  outlet: string;
  headline: string;
  url: string;
};

const items: NewsItem[] = [
  {
    outlet: "La Vanguardia",
    headline:
      "Jordi Juan, director de La Vanguardia, en Diario del Poder.",
    url: "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html",
  },
  {
    outlet: "Antena 3 · Espejo Público",
    headline:
      "El chascarrillo de la Reina Letizia con los jóvenes del podcast.",
    url: "https://www.antena3.com/programas/espejo-publico/noticias/chascarrillo-reina-letizia-dos-jovenes-que-pedian-entrevista-antes-delante-camara-era-inviable_202605116a01daefb5b06629960c3679.html",
  },
  {
    outlet: "El Español",
    headline:
      "La anécdota de la Reina Letizia con los chicos del podcast.",
    url: "https://www.elespanol.com/mujer/royals/20260508/anecdota-reina-letizia-chicos-querian-hablara-podcast-entrevistada-entrevistadora/1003744238033_0.html",
  },
];

export function NewsHome() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-white/5">
      <div className="container-ddp">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">Noticias</p>
            <h2 className="display-lg text-foreground">
              En los<br />medios
            </h2>
          </div>
          <Link
            to="/prensa"
            className="hidden sm:inline-flex btn-outline btn-sm items-center gap-2"
          >
            Ver toda la prensa
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/15 rounded-sm overflow-hidden">
          {items.map((it) => (
            <li key={it.url} className="bg-background">
              <a
                href={it.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between h-full p-6 md:p-8 min-h-[220px] hover:bg-card/40 transition-colors"
              >
                <div className="font-display font-black uppercase leading-[0.9] tracking-tight text-[clamp(1.4rem,2.6vw,2.2rem)] text-foreground">
                  {it.outlet}
                </div>
                <div className="mt-8">
                  <p className="text-sm md:text-base leading-snug text-foreground/80 mb-5">
                    {it.headline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.24em] uppercase text-foreground group-hover:translate-x-0.5 transition-transform">
                    Leer <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 sm:hidden">
          <Link
            to="/prensa"
            className="btn-outline btn-sm inline-flex items-center gap-2"
          >
            Ver toda la prensa
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}