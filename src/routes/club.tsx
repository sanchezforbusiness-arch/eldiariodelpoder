import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { Masthead } from "@/components/ddp/Masthead";
import { CLUB_URL, CLUB_ID, clubApply, clubCopy, clubPrograms } from "@/data/club";
import { ALEJANDRO_ID } from "@/data/press";

const PAGE_URL = "https://eldiariodelpoder.com/club";
const DESCRIPTION = "El club privado de El Diario del Poder en Madrid: cenas a puerta cerrada, mentoría y Launchpad para startups.";
const DEFAULT_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: clubCopy.title },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: clubCopy.title },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: DEFAULT_IMAGE },
      { name: "twitter:image", content: DEFAULT_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
              { "@type": "ListItem", position: 2, name: clubCopy.title, item: PAGE_URL },
            ],
          },
          {
            "@type": "Organization",
            "@id": CLUB_ID,
            name: "Club del Poder",
            url: CLUB_URL,
            description: DESCRIPTION,
            parentOrganization: { "@id": "https://eldiariodelpoder.com/#organization" },
            founder: { "@id": ALEJANDRO_ID },
          },
        ],
      }),
    }],
  }),
  component: ClubPage,
});

function ClubPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="container-ddp py-16 md:py-24">
          <Masthead />
          <p className="mono-label mt-8">{clubCopy.eyebrow}</p>
          <h1 className="mt-6 text-2xl font-medium leading-tight">{clubCopy.title}</h1>
          <p className="mt-6 max-w-3xl font-serif text-xl leading-snug md:text-2xl">{clubCopy.motto}</p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{clubCopy.description}</p>
          <blockquote className="mt-10 max-w-3xl border-s-2 border-signal ps-6 text-lg leading-relaxed">{clubCopy.houseRule}</blockquote>
        </header>

        <section className="container-ddp pb-16 md:pb-24">
          <div className="grid border-t border-border md:grid-cols-3">
            {clubPrograms.map((program) => (
              <article key={program.programa} className="flex flex-col border-b border-border py-10 md:border-b-0 md:px-6 md:first:ps-0 md:last:pe-0 md:[&+article]:border-s">
                <h2 className="text-xl font-medium">{program.title}</h2>
                <p className="mb-8 mt-5 text-base leading-relaxed text-muted-foreground">{program.description}</p>
                <a href={clubApply(program.programa)} rel="noopener" className="btn-outline mt-auto w-full">{program.button}<ArrowRight size={16} aria-hidden /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border py-16 md:py-24">
          <div className="container-ddp grid gap-8 md:grid-cols-2 md:gap-16">
            <h2 className="text-2xl font-medium leading-tight">{clubCopy.aperitivo.title}</h2>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">{clubCopy.aperitivo.description}</p>
              <a href={clubApply(clubCopy.aperitivo.programa)} rel="noopener" className="btn-outline mt-8 w-full sm:w-fit">{clubCopy.aperitivo.button}<ArrowRight size={16} aria-hidden /></a>
            </div>
          </div>
        </section>

        <div className="container-ddp flex flex-col items-start gap-8 py-16 md:py-24">
          <a href={CLUB_URL} rel="noopener" className="btn-primary w-full sm:w-fit">{clubCopy.visitButton}<ArrowRight size={16} aria-hidden /></a>
          <a href={clubApply("mentor")} rel="noopener" className="tap max-w-full text-sm underline underline-offset-4 transition-colors hover:text-signal">{clubCopy.mentorLink}</a>
        </div>
      </main>
      <FooterGrid />
    </div>
  );
}