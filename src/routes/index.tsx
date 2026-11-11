import { createFileRoute } from "@tanstack/react-router";
import { HomeLanding } from "@/components/ddp/HomeLanding";
import { LandingProvider } from "@/i18n/LandingContext";
import { landingEs } from "@/i18n/landing";
import { faqSchema } from "@/data/faqSchema";
import { landingAlternates } from "@/i18n/landingHead";
import { homeWebPage, ogImageMeta } from "@/data/siteImages";

const HOME_DESCRIPTION = "Diario del Poder es el podcast de entrevistas largas con jefes de Estado, CEOs y referentes: Álvaro Uribe, Guillermo Lasso, Esperanza Aguirre, Katalin Karikó o Javier Tebas. Cada lunes con La Vanguardia, en YouTube y Spotify.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#FFFAF0" },
      { title: landingEs.meta.title },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: landingEs.meta.ogTitle },
      { property: "og:description", content: HOME_DESCRIPTION },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: landingEs.meta.ogLocale },
      { property: "og:url", content: "https://eldiariodelpoder.com/" },
      ...ogImageMeta,
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/" }, ...landingAlternates],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", ...homeWebPage("https://eldiariodelpoder.com/", "https://eldiariodelpoder.com/#webpage", landingEs.meta.title, HOME_DESCRIPTION, "es") }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingProvider dict={landingEs}><HomeLanding /></LandingProvider>;
}
