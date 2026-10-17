import { createFileRoute } from "@tanstack/react-router";
import { HomeLanding } from "@/components/ddp/HomeLanding";
import { LandingProvider } from "@/i18n/LandingContext";
import { landingAr } from "@/i18n/landing.ar";
import { localizedLandingHead } from "@/i18n/landingHead";

export const Route = createFileRoute("/ar/")({
  head: () => localizedLandingHead(landingAr, "ar"),
  component: ArabicLanding,
});

function ArabicLanding() {
  return <LandingProvider dict={landingAr} lang="ar" dir="rtl"><HomeLanding /></LandingProvider>;
}