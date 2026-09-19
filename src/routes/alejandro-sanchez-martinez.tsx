import { createFileRoute } from "@tanstack/react-router";
import { FounderProfile } from "@/components/ddp/FounderProfile";
import { useReveal } from "@/hooks/use-reveal";
import { pressArticles } from "@/data/press";
import alejandro from "@/assets/founder-alejandro.webp";

const URL = "https://eldiariodelpoder.com/alejandro-sanchez-martinez";
const NAME = "Alejandro Sánchez Martínez";
const DESC =
  "Alejandro Sánchez Martínez es co-fundador y host del podcast Diario del Poder, presidente de Kifaru Club y Talent Agent en Nova Talent. Ha entrevistado a José María Aznar, Guillermo Lasso y Andrés Rodríguez (Forbes).";

export const Route = createFileRoute("/alejandro-sanchez-martinez")({
  head: () => ({
    meta: [
      { title: "Alejandro Sánchez Martínez — Co-fundador de Diario del Poder" },
      { name: "description", content: DESC },
      { property: "og:title", content: `${NAME} — Diario del Poder` },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp" },
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
            "@id": "https://alejandrosanchezmartinez.com/#persona",
            name: NAME,
            alternateName: ["Alejandro Sánchez", "Alejandro Sanchez Martinez", "Alex Sánchez Martínez"],
            jobTitle: "Co-fundador y host de Diario del Poder",
            description: DESC,
            gender: "Male",
            nationality: "ES",
            birthPlace: {
              "@type": "Place",
              name: "A Coruña, Galicia, España",
              address: {
                "@type": "PostalAddress",
                addressLocality: "A Coruña",
                addressRegion: "Galicia",
                addressCountry: "ES",
              },
            },
            workLocation: {
              "@type": "Place",
              name: "Madrid, España",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
            },
            knowsLanguage: ["es", "en"],
            knowsAbout: ["Podcasting", "Liderazgo", "Entrevistas", "Comunicación", "Poder", "Empresa"],
            worksFor: { "@id": "https://eldiariodelpoder.com/#organization" },
            affiliation: [
              { "@type": "Organization", name: "Kifaru Club" },
              { "@type": "Organization", name: "Nova Talent" },
            ],
            url: URL,
            image: "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp",
            mainEntityOfPage: "https://alejandrosanchezmartinez.com",
            sameAs: [
              "https://alejandrosanchezmartinez.com",
              "https://www.linkedin.com/in/alejandrosanchezmartinez",
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
              name: "¿Quién es Alejandro Sánchez Martínez?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Alejandro Sánchez Martínez es co-fundador y host del podcast español Diario del Poder, presidente de Kifaru Club y Talent Agent en Nova Talent, donde es responsable de embajadores de la 111 List. Entrevista a expresidentes, CEOs y referentes internacionales.",
              },
            },
            {
              "@type": "Question",
              name: "¿A quién ha entrevistado Alejandro Sánchez Martínez?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Entre otros, a José María Aznar, Guillermo Lasso, Esperanza Aguirre, Javier Tebas, Andrés Rodríguez (Forbes España), Jordi Juan (La Vanguardia) y Tomás Villén (Porsche).",
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
      img={alejandro}
      linkedin="https://www.linkedin.com/in/alejandrosanchezmartinez"
      website="https://alejandrosanchezmartinez.com"
      lead="Co-fundador y host de Diario del Poder. Entrevista a quienes toman las decisiones que nos afectan: expresidentes, CEOs y referentes internacionales."
      paragraphs={[
        "Alejandro Sánchez Martínez (A Coruña, España) es co-fundador y host del podcast Diario del Poder, un formato de entrevistas largas en español con expresidentes de Gobierno, CEOs y grandes referentes empresariales y culturales.",
        "Es presidente de Kifaru Club, Talent Agent en Nova Talent y responsable de embajadores de la 111 List, el listado del talento joven europeo. Su trabajo se centra en trasladar el criterio y el legado de quienes ya han llegado a la próxima generación.",
        "Ha entrevistado, entre otros, a José María Aznar, Guillermo Lasso, Esperanza Aguirre, Javier Tebas, Andrés Rodríguez (Forbes España), Jordi Juan (La Vanguardia) y Tomás Villén (Porsche España).",
        "Su trabajo con Diario del Poder ha tenido cobertura en La Vanguardia, Antena 3, La Sexta, El Español, Infobae, HuffPost, Voz Pópuli y Diario de Navarra.",
        "Su trabajo, su trayectoria y su dosier de prensa completo están en su web personal, alejandrosanchezmartinez.com.",
      ]}
      facts={[
        { label: "Rol", value: "Co-fundador y host de Diario del Poder" },
        { label: "Base", value: "Madrid, España" },
        { label: "Origen", value: "A Coruña, Galicia" },
        { label: "Cargos", value: "Presidente de Kifaru Club · Talent Agent en Nova Talent · Responsable de embajadores de la 111 List" },
        { label: "Temas", value: "Liderazgo, poder, empresa, legado" },
        { label: "Web", value: "alejandrosanchezmartinez.com" },
        { label: "Contacto", value: "contacto@eldiariodelpoder.com" },
      ]}
    />
  );
}
