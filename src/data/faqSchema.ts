import { CONTACT_EMAIL } from "@/data/contact";
const SITE_URL = "https://eldiariodelpoder.com";

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Diario del Poder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un podcast de entrevistas largas, fundado en 2025 en Madrid por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés. La Vanguardia es nuestro media partner.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay un podcast como The Diary of a CEO en español?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí: Diario del Poder sigue ese formato de conversaciones largas y sin guion con líderes de primer nivel, desde el mundo hispano y con foco en el poder y el legado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién está detrás?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una redacción independiente fundada por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, con un patronato de apoyo y La Vanguardia como media partner.",
      },
    },
    {
      "@type": "Question",
      name: "¿A quién entrevistáis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quien ha tenido que decidir: jefes de Estado, presidentes, CEOs y referentes. Han pasado José María Aznar, Guillermo Lasso, Marcos de Quinto, Jordi Juan o Esperanza Aguirre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde se escucha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En YouTube y en Spotify, completo y sin recortes. También publicamos entrevistas con La Vanguardia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo os escribo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `A ${CONTACT_EMAIL}: prensa, patrocinios o propuestas de invitados. Leemos todo y contestamos.`,
      },
    },
  ],
};
