import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/club", label: "Club" },
  { to: "/manifiesto", label: "Manifiesto" },
  { to: "/prensa", label: "Prensa" },
  { to: "/patrocinadores", label: "Patrocinadores" },
  { to: "/agenda", label: "Agenda" },
] as const;

const SOCIAL = [
  ["Spotify", "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"],
  ["YouTube", "https://www.youtube.com/@eldiariodelpoder"],
  ["Instagram", "https://www.instagram.com/eldiariodelpoder/"],
  ["LinkedIn", "https://www.linkedin.com/company/eldiariodelpoder"],
  ["TikTok", "https://www.tiktok.com/@eldiariodelpoder"],
] as const;

export function FooterGrid() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border">
      <div className="container-ddp pt-16 md:pt-24">
        <div className="panel mb-14 flex flex-col gap-6 p-6 md:mb-20 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="mono-label">¿Hablamos?</p>
            <p className="mt-3 max-w-[24ch] text-[22px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[30px]">
              Propuestas, prensa y patrocinios.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:items-center">
            <Link to="/agenda" className="btn-primary w-full md:w-auto">
              Agendar una llamada
            </Link>
            <a href="mailto:redaccion@eldiariodelpoder.com" className="btn-outline w-full md:w-auto">
              Escríbenos
            </a>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mono-label">Contacto</p>
            <a
              href="mailto:redaccion@eldiariodelpoder.com"
              className="link-rule mt-4 block break-all font-mono text-[12px] tracking-[0.02em]"
            >
              redaccion@eldiariodelpoder.com
            </a>
            <p className="mono-label mt-8">Madrid, España</p>
          </div>

          <nav className="md:col-span-4">
            <p className="mono-label">Navegar</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-signal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="mono-label">Escuchar</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3">
              {SOCIAL.map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-signal">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="mono-label">© {new Date().getFullYear()} Diario del Poder</p>
          <p className="mono-label">Alejandro Sánchez Martínez · Víctor Hugo Gandarilla de Andrés</p>
        </div>
      </div>

      {/* Oversized typographic wordmark, cropped by the bottom edge */}
      <div aria-hidden className="select-none overflow-hidden">
        <svg
          viewBox="0 0 1000 120"
          preserveAspectRatio="xMidYMin meet"
          className="block h-auto w-full translate-y-[14%]"
          role="presentation"
        >
          <text
            x="500"
            y="100"
            textAnchor="middle"
            textLength="980"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="var(--font-sans)"
            fontSize="128"
            fontWeight="500"
            letterSpacing="-6"
            fill="currentColor"
            className="text-foreground/10"
          >
            DIARIO DEL PODER
          </text>
        </svg>
      </div>
    </footer>
  );
}
