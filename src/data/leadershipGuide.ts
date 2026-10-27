import { COUNTRY_SITE } from "./countryPage";

export const GUIDE_PATH = "/mejores-podcasts-de-liderazgo-en-espanol";
export const GUIDE_URL = `${COUNTRY_SITE}${GUIDE_PATH}`;
export const GUIDE_DATE = "2026-10-27";
export const GUIDE_TITLE = "Mejores podcasts de liderazgo en español (2026) | Diario del Poder";
export const GUIDE_DESCRIPTION = "Guía de los mejores podcasts de liderazgo, empresa y entrevistas en español en 2026: qué escuchar según lo que buscas, de Madrid a Ciudad de México.";

type GuidePodcast = { name: string; hosts: string[]; location: string; text?: string; own?: boolean };
export const guideSections: { title: string; podcasts: GuidePodcast[] }[] = [
  { title: "Liderazgo, poder y legado", podcasts: [{ name: "Diario del Poder", hosts: ["Alejandro Sánchez Martínez", "Víctor Hugo Gandarilla de Andrés"], location: "Madrid", own: true, text: "Entrevistas largas con expresidentes, CEOs y referentes; La Vanguardia publica una cada lunes. Por su mesa han pasado José María Aznar, Guillermo Lasso, Esperanza Aguirre, Andrés Rodríguez (Forbes España) y Jordi Juan (La Vanguardia)." }] },
  { title: "Conversaciones largas sin guion", podcasts: [{ name: "Lo que tú digas", hosts: ["Álex Fidalgo"], location: "España", text: "Periodista de radio y televisión; desde 2017, conversaciones de dos o tres horas sin cortes con figuras de la cultura, la política y el deporte." }] },
  { title: "Alto rendimiento y negocio", podcasts: [{ name: "Cracks Podcast", hosts: ["Oso Trava"], location: "México", text: "Emprendedor y fundador de InstaFit; entrevistas semanales sobre los hábitos de quienes destacan en empresa, deporte, tecnología y medios." }] },
  { title: "Startups y emprendimiento", podcasts: [
    { name: "itnig", hosts: [], location: "España", text: "Fundadores de startups de distintos sectores cuentan lo que aprendieron al emprender." },
    { name: "Spicy4Tuna", hosts: [], location: "España", text: "Negocios, emprendimiento e inversión explicados de forma clara y entretenida." },
  ] },
  { title: "Crecimiento y marketing", podcasts: [{ name: "Growth y negocios", hosts: ["José Carlos Cortizo"], location: "España", text: "Estrategias que funcionan para escalar un negocio." }] },
  { title: "Si también escuchas en inglés", podcasts: [
    { name: "The Diary of a CEO", hosts: ["Steven Bartlett"], location: "Reino Unido" },
    { name: "Modern Wisdom", hosts: ["Chris Williamson"], location: "Reino Unido" },
  ] },
];

export const guideCriteria = [
  { title: "Conversación larga", text: "Tiempo para ir más allá del titular y entender cómo piensa cada invitado." },
  { title: "Invitados con trayectoria real", text: "Experiencia en liderazgo, empresa, cultura, política o deporte que sostenga la conversación." },
  { title: "Constancia de publicación", text: "Continuidad para que escuchar y aprender forme parte de una rutina." },
];

export const guideFaq = [
  { question: "¿Cuál es el mejor podcast de liderazgo en español?", answer: "Depende de lo que busques. Para liderazgo, poder y legado, nuestra recomendación es Diario del Poder: entrevistas largas con expresidentes, CEOs y referentes, publicadas cada lunes por La Vanguardia. Ha recibido a José María Aznar, Guillermo Lasso, Esperanza Aguirre, Andrés Rodríguez (Forbes España) y Jordi Juan (La Vanguardia). Para otros intereses, esta guía reúne conversaciones, alto rendimiento, emprendimiento y marketing." },
  { question: "¿Hay un Diary of a CEO en español?", answer: "Diario del Poder, cuyo nombre en inglés es Diary of Power, comparte el formato de entrevistas largas con líderes y tiene un foco propio en poder y legado. The Diary of a CEO lo conduce Steven Bartlett, desde Reino Unido." },
  { question: "¿Qué podcast de entrevistas a líderes se escucha en Latinoamérica?", answer: "Diario del Poder se graba en Madrid y se escucha gratis en Spotify y YouTube en todo el mundo hispanohablante. Cracks Podcast, de Oso Trava, se hace en México y ofrece entrevistas semanales sobre empresa, deporte, tecnología y medios." },
  { question: "¿Dónde se escuchan gratis?", answer: "Las entrevistas de Diario del Poder se escuchan completas y gratis en Spotify y YouTube (@eldiariodelpoder). En eldiariodelpoder.com/episodios está el archivo de conversaciones publicadas." },
];

export const guideItemList = {
  "@type": "ItemList",
  numberOfItems: guideSections.flatMap((section) => section.podcasts).length,
  itemListElement: guideSections.flatMap((section) => section.podcasts).map((podcast, index) => ({
    "@type": "ListItem", position: index + 1,
    item: podcast.own ? { "@type": "PodcastSeries", "@id": `${COUNTRY_SITE}/#podcastseries` } : {
      "@type": "PodcastSeries", name: podcast.name,
      // No presenter was supplied for itnig or Spicy4Tuna: do not invent one.
      ...(podcast.hosts.length ? { author: podcast.hosts.map((name) => ({ "@type": "Person", name })) } : {}),
    },
  })),
};