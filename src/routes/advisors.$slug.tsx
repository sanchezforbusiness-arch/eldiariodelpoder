import { createFileRoute, notFound } from "@tanstack/react-router";
import { AdvisorProfile } from "@/components/ddp/AdvisorProfile";
import { ADVISOR_SITE, advisors, advisorFaq, advisorImage, advisorPath, advisorPerson } from "@/data/advisors";

export const Route = createFileRoute("/advisors/$slug")({
  loader: ({ params }) => {
    const advisor = advisors.find((entry) => entry.slug === params.slug && !entry.guestSlug);
    if (!advisor) throw notFound();
    return { advisor };
  },
  head: ({ loaderData }) => {
    const advisor = loaderData?.advisor;
    if (!advisor) return { meta: [{ title: "Advisor no encontrado — Diario del Poder" }, { name: "robots", content: "noindex" }] };
    const title = `${advisor.fullName} — Advisor de Diario del Poder | ${advisor.area}`;
    const url = `${ADVISOR_SITE}${advisorPath(advisor)}`;
    const image = advisorImage(advisor);
    return {
      meta: [
        { title }, { name: "description", content: advisor.description },
        { property: "og:title", content: title }, { property: "og:description", content: advisor.description },
        { property: "og:type", content: "profile" }, { property: "og:url", content: url },
        { property: "og:image", content: image }, { name: "twitter:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title }, { name: "twitter:description", content: advisor.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { "@type": "ProfilePage", url, name: title, description: advisor.description, inLanguage: "es", mainEntity: advisorPerson(advisor) },
        { "@type": "FAQPage", mainEntity: advisorFaq(advisor).map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${ADVISOR_SITE}/` },
          { "@type": "ListItem", position: 2, name: "Nosotros", item: `${ADVISOR_SITE}/nosotros` },
          { "@type": "ListItem", position: 3, name: advisor.fullName, item: url },
        ] },
      ].map((schema) => ({ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", ...schema }) })),
    };
  },
  component: AdvisorPage,
});

function AdvisorPage() {
  const { advisor } = Route.useLoaderData();
  return <AdvisorProfile advisor={advisor} />;
}