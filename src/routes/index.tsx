import { createFileRoute } from "@tanstack/react-router";
import { HomeLanding } from "@/components/ddp/HomeLanding";
import { LandingProvider } from "@/i18n/LandingContext";
import { landingEs } from "@/i18n/landing";
import { faqSchema } from "@/data/faqSchema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#FFFAF0" },
      { title: landingEs.meta.title },
      { name: "description", content: landingEs.meta.description },
      { property: "og:title", content: landingEs.meta.ogTitle },
      { property: "og:description", content: landingEs.meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diario del Poder" },
      { property: "og:locale", content: landingEs.meta.ogLocale },
      { property: "og:url", content: "https://eldiariodelpoder.com/" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingProvider dict={landingEs}><HomeLanding /></LandingProvider>;
}
