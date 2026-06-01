import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/ddp/Navbar";
import { Hero } from "@/components/ddp/Hero";
import { About } from "@/components/ddp/About";
import { Episodes } from "@/components/ddp/Episodes";
import { GuestsCarousel } from "@/components/ddp/GuestsCarousel";
import { useReveal } from "@/hooks/use-reveal";

// Below-the-fold sections — lazy-loaded to reduce initial JS bundle
const Manifesto = lazy(() => import("@/components/ddp/Manifesto").then((m) => ({ default: m.Manifesto })));
const Backstage = lazy(() => import("@/components/ddp/Backstage").then((m) => ({ default: m.Backstage })));
const Club = lazy(() => import("@/components/ddp/Club").then((m) => ({ default: m.Club })));
const Sponsors = lazy(() => import("@/components/ddp/Sponsors").then((m) => ({ default: m.Sponsors })));
const Team = lazy(() => import("@/components/ddp/Team").then((m) => ({ default: m.Team })));
const Newsletter = lazy(() => import("@/components/ddp/Newsletter").then((m) => ({ default: m.Newsletter })));
const Publications = lazy(() => import("@/components/ddp/Publications").then((m) => ({ default: m.Publications })));
const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

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
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <GuestsCarousel />
        <About />
        <Suspense fallback={<div style={{ minHeight: "150vh" }} />}>
          <Manifesto />
          <Episodes />
          <Backstage />
          <Publications />
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
