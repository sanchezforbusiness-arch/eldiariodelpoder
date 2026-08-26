import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/ddp/Navbar";
import { HeroNoir } from "@/components/ddp/HeroNoir";
import { GuestSlider } from "@/components/ddp/GuestSlider";
import { PartnerStrip } from "@/components/ddp/PartnerStrip";
import { LatestEpisode } from "@/components/ddp/LatestEpisode";
import { BrandsMarquee } from "@/components/ddp/BrandsMarquee";
import { useReveal } from "@/hooks/use-reveal";

const ManifestoBand = lazy(() => import("@/components/ddp/ManifestoBand").then((m) => ({ default: m.ManifestoBand })));
const FaqBand = lazy(() => import("@/components/ddp/FaqBand").then((m) => ({ default: m.FaqBand })));
const FooterGrid = lazy(() => import("@/components/ddp/FooterGrid").then((m) => ({ default: m.FooterGrid })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0A0A0A" },
      { title: "Diario del Poder — Entrevistas con jefes de Estado y CEOs" },
      { name: "description", content: "Entrevistas largas con jefes de Estado, CEOs y altos directivos. Conversaciones sin guion, grabadas en Madrid y publicadas sin recortes." },
      { property: "og:title", content: "Diario del Poder — Entrevistas con jefes de Estado y CEOs" },
      { property: "og:description", content: "Entrevistas largas con jefes de Estado, CEOs y altos directivos. Sin guion, sin recortes." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diario del Poder" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: "https://eldiariodelpoder.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <HeroNoir />
        <BrandsMarquee />
        <PartnerStrip />
        <LatestEpisode />
        <GuestSlider />
        <div className="cv-auto">
          <Suspense fallback={<div aria-hidden style={{ minHeight: 560, contain: "layout paint" }} />}>
            <ManifestoBand />
          </Suspense>
          <Suspense fallback={<div aria-hidden style={{ minHeight: 420, contain: "layout paint" }} />}>
            <FaqBand />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={null}>
        <FooterGrid />
      </Suspense>
    </div>
  );
}
