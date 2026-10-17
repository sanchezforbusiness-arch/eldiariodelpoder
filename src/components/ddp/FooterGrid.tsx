import { useLanding, landingText } from "@/i18n/LandingContext";
import { Link } from "@tanstack/react-router";

export function FooterGrid() {
  const { dict } = useLanding();
const MAIN_COUNTRIES = [
  { slug: "mexico", name: dict.footer.countryNames["mexico"] },
  { slug: "colombia", name: dict.footer.countryNames["colombia"] },
  { slug: "argentina", name: dict.footer.countryNames["argentina"] },
  { slug: "espana", name: dict.footer.countryNames["espana"] },
  { slug: "estados-unidos", name: dict.footer.countryNames["estados-unidos"] },
  { slug: "peru", name: dict.footer.countryNames["peru"] },
  { slug: "chile", name: dict.footer.countryNames["chile"] },
  { slug: "venezuela", name: dict.footer.countryNames["venezuela"] },
];

const NAV = [
  { to: "/podcast-de-liderazgo-en-espanol", label: dict.footer.labels["/podcast-de-liderazgo-en-espanol"] },
  { to: "/episodios", label: dict.footer.labels["/episodios"] },
  { to: "/invitados", label: dict.footer.labels["/invitados"] },
  { to: "/newsletter", label: dict.footer.labels["/newsletter"] },
  { to: "/nosotros", label: dict.footer.labels["/nosotros"] },
  { to: "/manifiesto", label: dict.footer.labels["/manifiesto"] },
  { to: "/prensa", label: dict.footer.labels["/prensa"] },
  { to: "/patrocinadores", label: dict.footer.labels["/patrocinadores"] },
  { to: "/agenda", label: dict.footer.labels["/agenda"] },
] as const;

const SOCIAL = [
  [dict.footer.socialLabels["Spotify"], "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"],
  [dict.footer.socialLabels["YouTube"], "https://www.youtube.com/@eldiariodelpoder"],
  [dict.footer.socialLabels["Instagram"], "https://www.instagram.com/eldiariodelpoder/"],
  [dict.footer.socialLabels["LinkedIn"], "https://www.linkedin.com/company/eldiariodelpoder"],
  [dict.footer.socialLabels["TikTok"], "https://www.tiktok.com/@eldiariodelpoder"],
] as const;


  return (
    <footer
      id="contact"
      className="surface-dark relative mx-2 mb-2 overflow-hidden rounded-[28px] md:mx-3 md:mb-3 md:rounded-[36px]"
    >
      <div className="container-ddp pt-16 md:pt-24">
        <div className="panel surface-light mb-14 flex flex-col gap-6 p-6 md:mb-20 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="mono-label">{dict.footer.contactHeading}</p>
            <p className="mt-3 max-w-[24ch] text-lg font-medium leading-[1.1] tracking-tight md:text-xl">
              {dict.footer.contactDescription}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:items-center">
            <Link to="/agenda" className="btn-primary w-full md:w-auto">
              {dict.footer.callButton}
            </Link>
            <a href={`mailto:${dict.footer.email}`} className="btn-outline w-full md:w-auto">
              {dict.footer.emailButton}
            </a>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mono-label">{dict.footer.contactLabel}</p>
            <a
              href={`mailto:${dict.footer.email}`}
              className="link-rule tap mt-4 flex items-center break-all font-mono text-2xs"
            >
              {dict.footer.email}
            </a>
            <p className="mono-label mt-8">{dict.footer.location}</p>
          </div>

          <nav className="md:col-span-4">
            <p className="mono-label">{dict.footer.navLabel}</p>
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
            <p className="mono-label">{dict.footer.listenLabel}</p>
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

        <nav aria-label={dict.footer.countriesLabel} className="mt-12 border-t border-border pt-8">
          <p className="mono-label">{dict.footer.countriesLabel}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-5">
            <li><Link to="/paises" className="tap flex items-center text-sm transition-colors hover:text-signal">{dict.footer.allCountries}</Link></li>
            {MAIN_COUNTRIES.map((country) => <li key={country.slug}><Link to="/paises/$slug" params={{ slug: country.slug }} className="tap flex items-center text-sm transition-colors hover:text-signal">{country.name}</Link></li>)}
          </ul>
        </nav>

        <div className="mt-16 flex flex-col gap-3 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="mono-label">{dict.footer.copyrightSymbol} {new Date().getFullYear()} {dict.footer.copyright}</p>
          <p className="mono-label">
            <a
              href="https://alejandrosanchezmartinez.com"
              rel="me noreferrer"
              className="transition-colors hover:text-signal"
            >
              {dict.footer.alejandro}
            </a>
            {dict.footer.founderSeparator}{dict.footer.victor}
          </p>
        </div>
      </div>
    </footer>
  );
}
