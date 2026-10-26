import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanding } from "@/i18n/LandingContext";

export function ClubBand() {
  const { dict } = useLanding();
  return (
    <section className="border-y border-border py-16 md:py-24">
      <div className="container-ddp grid items-start gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-medium leading-tight">{dict.club.heading}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{dict.club.description}</p>
        </div>
        <Link to="/club" className="btn-primary w-full sm:w-fit">{dict.club.button}<ArrowRight size={16} aria-hidden /></Link>
      </div>
    </section>
  );
}