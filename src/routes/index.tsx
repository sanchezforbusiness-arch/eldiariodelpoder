import { createFileRoute } from "@tanstack/react-router";
import { DDPLanding } from "@/components/ddp/DDPLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0A0A0B" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diario del Poder" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://eldiariodelpoder.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return <DDPLanding />;
}
