import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/ddp/Navbar";
import { Hero } from "@/components/ddp/Hero";
import { GuestsCarousel } from "@/components/ddp/GuestsCarousel";
import { Episodes } from "@/components/ddp/Episodes";
import { BrandsMarquee } from "@/components/ddp/BrandsMarquee";
import { useReveal } from "@/hooks/use-reveal";
import heroDesktop from "@/assets/hero-portada-nueva.jpg.asset.json";
import heroMobile from "@/assets/hero-mobile.jpg.asset.json";

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
      { property: "og:url", content: "https://eldiariodelpoder.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://eldiariodelpoder.com/" },
      { rel: "preload", as: "image", href: heroMobile.url, media: "(max-width: 639px)", fetchpriority: "high" },
      { rel: "preload", as: "image", href: heroDesktop.url, media: "(min-width: 640px)", fetchpriority: "high" },
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
        <GuestsCarousel />
        <BrandsMarquee />
        <Episodes />
        <div className="cv-auto">
          <Suspense fallback={<div aria-hidden style={{ minHeight: 900, contain: "layout paint" }} />}>
            <Backstage />
          </Suspense>
          <Suspense fallback={<div aria-hidden style={{ minHeight: 720, contain: "layout paint" }} />}>
            <AboutTeaser />
          </Suspense>
          <Suspense fallback={<div aria-hidden style={{ minHeight: 720, contain: "layout paint" }} />}>
            <ClubTeaser />
          </Suspense>
          <Suspense fallback={<div aria-hidden style={{ minHeight: 520, contain: "layout paint" }} />}>
            <Newsletter />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
