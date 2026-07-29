import { createFileRoute } from "@tanstack/react-router";
import { FounderProfile } from "@/components/ddp/FounderProfile";
import { useReveal } from "@/hooks/use-reveal";
import { pressArticles } from "@/data/press";
import victor from "@/assets/founder-victor.webp";

const URL = "https://eldiariodelpoder.com/victor-hugo-gandarilla-de-andres";
const NAME = "Víctor Hugo Gandarilla de Andrés";
const DESC =
  "Víctor Hugo Gandarilla de Andrés es co-fundador y host del podcast Diario del Poder. Top 10 de España en Marketing y Comunicación (Nova 111) y estudiante en la Universidad de Navarra.";

export const Route = createFileRoute("/victor-hugo-gandarilla-de-andres")({
  head: () => ({
    meta: [
      { title: "Víctor Hugo Gandarilla de Andrés — Diario del Poder" },
      { name: "description", content: DESC },
      { property: "og:title", content: `${NAME} — Diario del Poder` },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${URL}#profilepage`,
          url: URL,
          inLanguage: "es-ES",
          name: `${NAME} — Co-fundador y host de Diario del Poder`,
          mainEntity: {
            "@type": "Person",
            "@id": `${URL}#person`,
            name: NAME,
            alternateName: [
              "Víctor Hugo Gandarilla",
              "Victor Hugo Gandarilla de Andres",
              "Víctor Gandarilla",
            ],
            jobTitle: "Co-fundador y host de Diario del Poder",
            description: DESC,
            gender: "Male",
            nationality: "ES",
            knowsLanguage: ["es", "en"],
            knowsAbout: ["Marketing", "Comunicación", "Podcasting", "Entrevistas", "Liderazgo"],
            worksFor: { "@id": "https://eldiariodelpoder.com/#organization" },
            alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Navarra" },
            affiliation: [{ "@type": "Organization", name: "Nova 111" }],
            url: URL,
            sameAs: [
              "https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres",
              "https://www.youtube.com/@eldiariodelpoder",
              "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ",
            ],
            subjectOf: pressArticles.map((a) => ({
              "@type": "NewsArticle",
              headline: a.headline,
              url: a.url,
              datePublished: a.date,
              publisher: { "@type": "NewsMediaOrganization", name: a.outlet },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
            { "@type": "ListItem", position: 2, name: NAME, item: URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Quién es Víctor Hugo Gandarilla de Andrés?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Víctor Hugo Gandarilla de Andrés es co-fundador y host del podcast español Diario del Poder. Está en el Top 10 de España en Marketing y Comunicación según Nova 111 y estudia en la Universidad de Navarra.",
              },
            },
            {
              "@type": "Question",
              name: "¿Qué es Diario del Poder?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Diario del Poder es un podcast en español de entrevistas largas con expresidentes, CEOs y referentes, co-fundado por Víctor Hugo Gandarilla de Andrés y Alejandro Sánchez Martínez.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  useReveal();
  return (
    <FounderProfile
      name={NAME}
      role="Co-fundador · Host"
      img={victor}
      linkedin="https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres"
      lead="Co-fundador y host de Diario del Poder. Marketing, comunicación y conversaciones con quienes deciden."
      paragraphs={[
        "Víctor Hugo Gandarilla de Andrés (España) es co-fundador y host del podcast Diario del Poder, formato de entrevistas largas en español con expresidentes, CEOs y referentes internacionales.",
        "Está reconocido en el Top 10 de España en Marketing y Comunicación por Nova 111 y estudia en la Universidad de Navarra. Dirige la estrategia de marca y comunicación del proyecto.",
        "Ha participado en entrevistas a José María Aznar, Guillermo Lasso, Esperanza Aguirre, Javier Tebas, Andrés Rodríguez (Forbes España) y Jordi Juan (La Vanguardia).",
        "El proyecto ha sido cubierto por La Vanguardia, Antena 3, La Sexta, El Español, Infobae, HuffPost, Voz Pópuli y Diario de Navarra.",
      ]}
      facts={[
        { label: "Rol", value: "Co-fundador y host de Diario del Poder" },
        { label: "Base", value: "España" },
        { label: "Reconocimiento", value: "Top 10 España en Marketing y Comunicación (Nova 111)" },
        { label: "Formación", value: "Universidad de Navarra" },
        { label: "Contacto", value: "contactoeldiariodelpoder@gmail.com" },
      ]}
    />
  );
}
