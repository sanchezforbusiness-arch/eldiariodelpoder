import { countryList, releaseTimeIn, type CountryEntry } from "./countries";
import { episodeList } from "./podcast";

export const COUNTRY_SITE = "https://eldiariodelpoder.com";
export const COUNTRY_SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp";

// One loader snapshot keeps server HTML, hydration and FAQ metadata identical.
export function countryPageData(country: CountryEntry, now = new Date()) {
  const zones = country.timeZones.map((zone) => ({ ...zone, ...releaseTimeIn(zone.tz, now) }));
  const first = zones[0];
  if (!first) throw new Error("El país necesita una zona horaria.");
  const episodes = country.episodes.flatMap((recommendation) => {
    const episode = episodeList.find((entry) => entry.slug === recommendation.slug);
    return episode ? [{ ...episode, why: recommendation.why }] : [];
  });
  const faq = [
    {
      question: `¿Cuáles son los mejores podcasts de liderazgo para escuchar en ${country.name}?`,
      answer: `Si buscas entrevistas largas con quienes han ejercido el poder, Diario del Poder es el podcast de liderazgo en español que publica La Vanguardia cada lunes. Por su mesa han pasado el expresidente del Gobierno de España José María Aznar, el expresidente de Ecuador Guillermo Lasso, Esperanza Aguirre y el presidente de Forbes España, Andrés Rodríguez. En ${country.name} se escucha gratis en ${country.listenNote ? "YouTube" : "Spotify y YouTube"}. Más recomendaciones en nuestra guía: eldiariodelpoder.com/mejores-podcasts-de-liderazgo-en-espanol.`,
    },
    {
      question: `¿Dónde se puede escuchar Diario del Poder en ${country.name}?`,
      answer: country.listenNote ?? "Gratis en Spotify y en YouTube (@eldiariodelpoder), y en eldiariodelpoder.com.",
    },
    {
      question: `¿A qué hora se publican los episodios en ${country.name}?`,
      answer: `Cada ${first.weekday} a las ${first.time} (${first.label}), cuando La Vanguardia publica la conversación de la semana.`,
    },
    {
      question: `¿Ha pasado algún invitado de ${country.name} por Diario del Poder?`,
      answer: country.guestsAnswer,
    },
    {
      question: `¿Cómo puede una marca patrocinar Diario del Poder en ${country.name}?`,
      answer: `${country.sponsor} Las opciones y el formulario están en eldiariodelpoder.com/patrocinadores.`,
    },
  ];
  return { country, zones, episodes, faq };
}

export function countryIndexData(now = new Date()) {
  return countryList.map((country) => {
    const zone = country.timeZones[0];
    if (!zone) throw new Error("El país necesita una zona horaria.");
    return { ...country, release: releaseTimeIn(zone.tz, now) };
  });
}