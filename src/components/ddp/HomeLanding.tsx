import { lazy, Suspense, type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { HeroNoir } from "./HeroNoir";
import { BrandsMarquee } from "./BrandsMarquee";
import { MediaImpact } from "./MediaImpact";
import { GuestSlider } from "./GuestSlider";
import { PartnerStrip } from "./PartnerStrip";
import { VideoReel } from "./VideoReel";
import { QuoteWall } from "./QuoteWall";
import { FloatingCta } from "./FloatingCta";
import { useReveal } from "@/hooks/use-reveal";
import { useLanding } from "@/i18n/LandingContext";

const ManifestoBand = lazy(() => import("./ManifestoBand").then((m) => ({ default: m.ManifestoBand })));
const FaqBand = lazy(() => import("./FaqBand").then((m) => ({ default: m.FaqBand })));
const FooterGrid = lazy(() => import("./FooterGrid").then((m) => ({ default: m.FooterGrid })));

export function HomeLanding({ afterHero, beforeFaq }: { afterHero?: ReactNode; beforeFaq?: ReactNode }) {
  const { lang, dir } = useLanding();
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main lang={lang} dir={dir}>
        <HeroNoir />
        {afterHero}
        <BrandsMarquee />
        <MediaImpact />
        <GuestSlider />
        <PartnerStrip />
        <VideoReel />
        <QuoteWall />
        <div className="cv-auto">
          <Suspense fallback={<div aria-hidden style={{ minHeight: 560, contain: "layout paint" }} />}>
            <ManifestoBand />
          </Suspense>
          {beforeFaq}
          <Suspense fallback={<div aria-hidden style={{ minHeight: 420, contain: "layout paint" }} />}>
            <FaqBand />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={null}>
        <FooterGrid />
      </Suspense>
      <FloatingCta />
    </div>
  );
}