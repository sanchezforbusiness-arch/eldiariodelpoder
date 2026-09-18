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
        text: "Diario del Poder es un podcast en español de entrevistas largas con expresidentes, CEOs y grandes referentes internacionales. Conversaciones con criterio sobre liderazgo, poder y legado, producidas en Madrid.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién está detrás de Diario del Poder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una redacción independiente fundada por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, con un patronato de apoyo y La Vanguardia como media partner.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde puedo escuchar Diario del Poder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Spotify (open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ), en YouTube (@eldiariodelpoder) y en eldiariodelpoder.com.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quiénes han sido invitados en el podcast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre otros: José María Aznar, Guillermo Lasso, Esperanza Aguirre, Javier Tebas, Andrés Rodríguez (Forbes), Jordi Juan (La Vanguardia), Rosa Lagarrigue, José Carlos González Hurtado (EWTN), Martín Sellés (Farmaindustria), Arturo Coello, Miguel Anxo Bastos y Mikel Echavarren.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo contactar con Diario del Poder para prensa o patrocinios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escribiendo a contacto@eldiariodelpoder.com.",
      },
    },
  ],
};
