import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/data/contact";

const MAIN_COUNTRIES = [
  { slug: "mexico", name: "México" },
  { slug: "colombia", name: "Colombia" },
  { slug: "argentina", name: "Argentina" },
  { slug: "espana", name: "España" },
  { slug: "estados-unidos", name: "Estados Unidos" },
  { slug: "peru", name: "Perú" },
  { slug: "chile", name: "Chile" },
  { slug: "venezuela", name: "Venezuela" },
];

const NAV = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/newsletter", label: "Newsletter" },
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
    <footer
      id="contact"
      className="surface-dark relative mx-2 mb-2 overflow-hidden rounded-[28px] md:mx-3 md:mb-3 md:rounded-[36px]"
    >
      <div className="container-ddp pt-16 md:pt-24">
        <div className="panel surface-light mb-14 flex flex-col gap-6 p-6 md:mb-20 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="mono-label">¿Hablamos?</p>
            <p className="mt-3 max-w-[24ch] text-lg font-medium leading-[1.1] tracking-tight md:text-xl">
              Propuestas de invitado, prensa y patrocinios.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:items-center">
            <Link to="/agenda" className="btn-primary w-full md:w-auto">
              Agendar una llamada
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline w-full md:w-auto">
              Escríbenos
            </a>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mono-label">Contacto</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-rule tap mt-4 flex items-center break-all font-mono text-2xs"
            >
              {CONTACT_EMAIL}
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

        <nav aria-label="En tu país" className="mt-12 border-t border-border pt-8">
          <p className="mono-label">En tu país</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-5">
            <li><Link to="/paises" className="tap flex items-center text-sm transition-colors hover:text-signal">Todos los países</Link></li>
            {MAIN_COUNTRIES.map((country) => <li key={country.slug}><Link to="/paises/$slug" params={{ slug: country.slug }} className="tap flex items-center text-sm transition-colors hover:text-signal">{country.name}</Link></li>)}
          </ul>
        </nav>

        <div className="mt-16 flex flex-col gap-3 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="mono-label">© {new Date().getFullYear()} Diario del Poder</p>
          <p className="mono-label">
            <a
              href="https://alejandrosanchezmartinez.com"
              rel="me noreferrer"
              className="transition-colors hover:text-signal"
            >
              Alejandro Sánchez Martínez
            </a>
            {" · "}Víctor Hugo Gandarilla de Andrés
          </p>
        </div>
      </div>
    </footer>
  );
}
