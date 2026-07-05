import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/ddp/Navbar";
import { Hero } from "@/components/ddp/Hero";
import { Statement } from "@/components/ddp/Statement";
import { MovingMosaic } from "@/components/ddp/MovingMosaic";
import { TopEpisodes } from "@/components/ddp/TopEpisodes";
import { SubscribePlatforms } from "@/components/ddp/SubscribePlatforms";
import { NewsHome } from "@/components/ddp/NewsHome";
import heroDesktop from "@/assets/hero-hosts-set.jpg.asset.json";
import heroMobile from "@/assets/hero-hosts-set.jpg.asset.json";

const TeamHome = lazy(() =>
  import("@/components/ddp/TeamHome").then((m) => ({ default: m.TeamHome })),
);
const ClubTeaser = lazy(() =>
  import("@/components/ddp/ClubTeaser").then((m) => ({ default: m.ClubTeaser })),
);
const Newsletter = lazy(() =>
  import("@/components/ddp/Newsletter").then((m) => ({ default: m.Newsletter })),
);
const Footer = lazy(() =>
  import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0C0C0E" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diario del Poder" },
      { property: "og:locale", content: "es_ES" },
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
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <MovingMosaic />
        <TopEpisodes />
        <SubscribePlatforms />
        <div className="cv-auto">
          <Suspense fallback={<div style={{ minHeight: "40vh" }} />}>
            <TeamHome />
          </Suspense>
          <NewsHome />
          <Suspense fallback={<div style={{ minHeight: "40vh" }} />}>
            <ClubTeaser />
          </Suspense>
          <Suspense fallback={<div style={{ minHeight: "30vh" }} />}>
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
