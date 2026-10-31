import { countryList } from "./countries";
import { ALEJANDRO_ID, VICTOR_ID, ALEJANDRO_INSTAGRAM } from "./press";
import { COUNTRY_SITE, COUNTRY_SOCIAL_IMAGE } from "./countryPage";

export const founderAlejandro = {
  "@type": "Person",
  "@id": ALEJANDRO_ID,
  name: "Alejandro Sánchez Martínez",
  url: "https://alejandrosanchezmartinez.com",
  jobTitle: "Co-fundador y host",
  birthPlace: {
    "@type": "Place", name: "A Coruña, Galicia, España",
    address: { "@type": "PostalAddress", addressLocality: "A Coruña", addressRegion: "Galicia", addressCountry: "ES" },
  },
  workLocation: { "@type": "Place", name: "Madrid, España" },
  affiliation: { "@type": "Organization", name: "Nova Talent" },
  sameAs: ["https://alejandrosanchezmartinez.com", "https://eldiariodelpoder.com/alejandro-sanchez-martinez", "https://www.linkedin.com/in/alejandrosanchezmartinez", ALEJANDRO_INSTAGRAM],
};

export const founderVictor = {
  "@type": "Person", "@id": VICTOR_ID,
  name: "Víctor Hugo Gandarilla de Andrés",
  url: "https://eldiariodelpoder.com/victor-hugo-gandarilla-de-andres",
  jobTitle: "Co-fundador y host",
  sameAs: ["https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres"],
};

// The home and every country publish the same complete, canonical series.
export const podcastSeriesSchema = {
  "@type": "PodcastSeries",
  "@id": `${COUNTRY_SITE}/#podcastseries`,
  name: "Diario del Poder",
  url: COUNTRY_SITE,
  description: "El podcast de liderazgo en español: expresidentes, CEOs y referentes en entrevistas largas. Cada lunes con La Vanguardia. Gratis en Spotify y YouTube.",
  inLanguage: "es",
  genre: ["Entrevistas", "Liderazgo", "Negocios", "Política", "Sociedad"],
  image: COUNTRY_SOCIAL_IMAGE,
  alternateName: ["El Diario del Poder", "Diary of Power"],
  countryOfOrigin: { "@type": "Country", name: "España" },
  audience: { "@type": "Audience", geographicArea: countryList.map((country) => ({ "@type": "Country", name: country.name })) },
  publisher: { "@type": "Organization", "@id": `${COUNTRY_SITE}/#organization` },
  founder: [founderAlejandro, founderVictor],
  author: { "@type": "Person", "@id": ALEJANDRO_ID },
  creator: [{ "@type": "Person", "@id": ALEJANDRO_ID }, { "@type": "Person", "@id": VICTOR_ID }],
  isPartOf: { "@id": `${COUNTRY_SITE}/#website` },
  sameAs: ["https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ", "https://www.youtube.com/@eldiariodelpoder"],
  about: ["Liderazgo", "Poder", "Política", "Empresa", "CEOs", "Expresidentes", "Legado", "Toma de decisiones"],
  keywords: "podcast de éxito, podcast en español, expresidentes, CEOs, liderazgo, entrevistas, Diario del Poder",
};