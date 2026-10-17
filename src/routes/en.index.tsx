import { createFileRoute } from "@tanstack/react-router";
import { HomeLanding } from "@/components/ddp/HomeLanding";
import { LandingProvider } from "@/i18n/LandingContext";
import { landingEn } from "@/i18n/landing.en";
import { localizedLandingHead } from "@/i18n/landingHead";

export const Route = createFileRoute("/en/")({
  head: () => localizedLandingHead(landingEn, "en"),
  component: EnglishLanding,
});

function EnglishLanding() {
  return <LandingProvider dict={landingEn} lang="en" dir="ltr"><HomeLanding /></LandingProvider>;
}