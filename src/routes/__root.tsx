import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { SiteChrome } from "@/components/ddp/SiteChrome";

import appCss from "../styles.css?url";

const SITE_URL = "https://eldiariodelpoder.com";
const SITE_NAME = "Diario del Poder";
const SITE_TITLE = "Diario del Poder — Podcast de éxito con expresidentes y CEOs";
const SITE_DESCRIPTION =
  "Diario del Poder: el podcast donde expresidentes, CEOs y referentes dejan su legado. Conversaciones con criterio y sin ruido. Escúchalo en Spotify y YouTube.";
const SITE_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp";

const founderAlejandro = {
  "@type": "Person",
  name: "Alejandro Sánchez Martínez",
  url: "https://alejandrosanchezmartinez.com",
  jobTitle: "Co-fundador y host",
  sameAs: [
    "https://alejandrosanchezmartinez.com",
    "https://eldiariodelpoder.com/alejandro-sanchez-martinez",
    "https://www.linkedin.com/in/alejandrosanchezmartinez",
  ],
};

const founderVictor = {
  "@type": "Person",
  name: "Víctor Hugo Gandarilla de Andrés",
  url: "https://eldiariodelpoder.com/victor-hugo-gandarilla-de-andres",
  jobTitle: "Co-fundador y host",
  sameAs: ["https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres"],
};


const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "NewsMediaOrganization"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: SITE_IMAGE,
      foundingDate: "2025",
      foundingLocation: "Madrid, España",
      email: "redaccion@eldiariodelpoder.com",
      description:
        "Diario del Poder es un medio español de entrevistas de liderazgo fundado en 2025 por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, con La Vanguardia como media partner oficial.",
      affiliation: {
        "@type": "NewsMediaOrganization",
        name: "La Vanguardia",
        url: "https://www.lavanguardia.com",
        description: "Media partner oficial de Diario del Poder.",
      },
      founder: [founderAlejandro, founderVictor],
      sameAs: [
        "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ",
        "https://www.youtube.com/@eldiariodelpoder",
        "https://www.instagram.com/eldiariodelpoder/",
        "https://www.linkedin.com/company/eldiariodelpoder",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["DDP", "El Diario del Poder"],
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-ES",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/episodios?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "PodcastSeries",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "es-ES",
      image: SITE_IMAGE,
      webFeed: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ",
      publisher: { "@id": `${SITE_URL}/#organization` },
      founder: [founderAlejandro, founderVictor],
      sameAs: [
        "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ",
        "https://www.youtube.com/@eldiariodelpoder",
      ],
      about: [
        "Liderazgo", "Poder", "Política", "Empresa", "CEOs", "Expresidentes", "Legado", "Toma de decisiones",
      ],
      keywords:
        "podcast de éxito, podcast en español, expresidentes, CEOs, liderazgo, entrevistas, Diario del Poder",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es Diario del Poder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Diario del Poder es un podcast en español de entrevistas largas con expresidentes, CEOs y grandes referentes internacionales. Conversaciones con criterio sobre liderazgo, poder y legado, producidas en Madrid.",
          },
        },
        {
          "@type": "Question",
          name: "¿Quién está detrás de Diario del Poder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una redacción independiente fundada por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, con un patronato de apoyo y La Vanguardia como media partner.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde puedo escuchar Diario del Poder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En Spotify (open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ), en YouTube (@eldiariodelpoder) y en eldiariodelpoder.com.",
          },
        },
        {
          "@type": "Question",
          name: "¿Quiénes han sido invitados en el podcast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre otros: José María Aznar, Guillermo Lasso, Esperanza Aguirre, Javier Tebas, Andrés Rodríguez (Forbes), Jordi Juan (La Vanguardia), Rosa Lagarrigue, José Carlos González Hurtado (EWTN), Martín Sellés (Farmaindustria), Arturo Coello, Miguel Anxo Bastos y Mikel Echavarren.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo puedo contactar con Diario del Poder para prensa o patrocinios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Escribiendo a redaccion@eldiariodelpoder.com.",
          },
        },
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: SITE_NAME },
      { name: "google-site-verification", content: "m2Mn29bOhpHxtZMGx_Nsy0bQXUtJfmf5XdRwwL4110w" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "keywords", content: "Diario del Poder, eldiariodelpoder, podcast de éxito, mejores podcast España, podcast en español, podcast política, podcast empresarial, podcast liderazgo, CEOs, expresidentes, podcast premium" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "es_ES" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: SITE_IMAGE },
    ],
    links: [
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/inter-tight-var-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/newsreader-var-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <SiteChrome routeKey={pathname} />
      <Outlet />
    </>
  );
}
