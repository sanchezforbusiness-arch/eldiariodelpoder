import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/nosotros", label: "Nosotros" },
  
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
    <footer id="contact" className="relative border-t border-border">
      <div className="container-ddp pt-16 md:pt-24">
        <div className="panel mb-14 flex flex-col gap-6 p-6 md:mb-20 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="mono-label">¿Hablamos?</p>
            <p className="mt-3 max-w-[24ch] text-lg font-medium leading-[1.1] tracking-tight md:text-xl">
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
              className="link-rule tap mt-4 flex items-center break-all font-mono text-2xs"
            >
              redaccion@eldiariodelpoder.com
            </a>
            <p className="mono-label mt-8">Madrid, España</p>
          </div>

          <nav className="md:col-span-4">
            <p className="mono-label">Navegar</p>
            <ul className="mt-2 grid grid-cols-2">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="tap flex items-center text-sm tracking-tight transition-colors hover:text-signal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="mono-label">Escuchar</p>
            <ul className="mt-2 grid grid-cols-2">
              {SOCIAL.map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className="tap flex items-center text-sm tracking-tight transition-colors hover:text-signal">
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
    </footer>
  );
}
