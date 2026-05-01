import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/ddp/Navbar";
import { Hero } from "@/components/ddp/Hero";
import { About } from "@/components/ddp/About";
import { Guests } from "@/components/ddp/Guests";
import { Episodes } from "@/components/ddp/Episodes";
import { useReveal } from "@/hooks/use-reveal";

// Below-the-fold sections — lazy-loaded to reduce initial JS bundle
const Manifesto = lazy(() => import("@/components/ddp/Manifesto").then((m) => ({ default: m.Manifesto })));
const Backstage = lazy(() => import("@/components/ddp/Backstage").then((m) => ({ default: m.Backstage })));
const Club = lazy(() => import("@/components/ddp/Club").then((m) => ({ default: m.Club })));
const Sponsors = lazy(() => import("@/components/ddp/Sponsors").then((m) => ({ default: m.Sponsors })));
const Team = lazy(() => import("@/components/ddp/Team").then((m) => ({ default: m.Team })));
const Newsletter = lazy(() => import("@/components/ddp/Newsletter").then((m) => ({ default: m.Newsletter })));
const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diario del Poder — La voz del legado | Podcast" },
      { name: "description", content: "Diario del Poder: el podcast premium en español con expresidentes, CEOs y líderes institucionales. Conversaciones con criterio, no ruido." },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0A0A0B" },
      { property: "og:title", content: "Diario del Poder — La voz del legado | Podcast" },
      { property: "og:description", content: "El podcast premium en español con expresidentes, CEOs y líderes institucionales." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diario del Poder" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: "https://eldiariodelpoder.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diario del Poder — La voz del legado | Podcast" },
      { name: "twitter:description", content: "El podcast premium en español con expresidentes, CEOs y líderes institucionales." },
    ],
    links: [
      { rel: "canonical", href: "https://eldiariodelpoder.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div style={{ minHeight: "150vh" }} />}>
          <Manifesto />
          <Episodes />
          <Guests />
          <Backstage />
          <Club />
          <Sponsors />
          <Team />
          <Newsletter />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
