import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/ddp/Navbar";
import { Hero } from "@/components/ddp/Hero";
import { TextBand } from "@/components/ddp/TextBand";
import { GuestsCarousel } from "@/components/ddp/GuestsCarousel";
import { Episodes } from "@/components/ddp/Episodes";
import { useReveal } from "@/hooks/use-reveal";

// Below-the-fold — lazy-loaded
const Backstage = lazy(() => import("@/components/ddp/Backstage").then((m) => ({ default: m.Backstage })));
const AboutTeaser = lazy(() => import("@/components/ddp/AboutTeaser").then((m) => ({ default: m.AboutTeaser })));
const ClubTeaser = lazy(() => import("@/components/ddp/ClubTeaser").then((m) => ({ default: m.ClubTeaser })));
const Newsletter = lazy(() => import("@/components/ddp/Newsletter").then((m) => ({ default: m.Newsletter })));
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
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main>
        <Hero />
        <TextBand />
        <GuestsCarousel />
        <Episodes />
        <Suspense fallback={<div style={{ minHeight: "120vh" }} />}>
          <Backstage />
          <AboutTeaser />
          <ClubTeaser />
          <Newsletter />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
