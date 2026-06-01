import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_URL = "https://eldiariodelpoder.com";
const SITE_NAME = "Diario del Poder";
const SITE_TITLE = "Diario del Poder — La voz del legado | Podcast";
const SITE_DESCRIPTION =
  "Diario del Poder es el podcast premium en español con expresidentes, CEOs y líderes institucionales. Conversaciones con criterio, no ruido.";
const SITE_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: SITE_IMAGE,
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
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-ES",
    },
    {
      "@type": "PodcastSeries",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "es-ES",
      image: SITE_IMAGE,
      webFeed: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ",
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
      { name: "keywords", content: "Diario del Poder, eldiariodelpoder, podcast España, podcast política, podcast empresarial, CEOs, expresidentes, podcast premium, liderazgo" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: SITE_URL },
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
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Manrope:wght@400;500;600&display=swap",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whWMhyjornFLsS6V7w.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
      {
        children:
          "(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Manrope:wght@400;500;600&display=swap';l.media='print';l.onload=function(){this.media='all'};document.head.appendChild(l);})();",
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
  return <Outlet />;
}
