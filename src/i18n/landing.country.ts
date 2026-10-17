import { landingEs, type LandingDict } from "./landing";
import { releaseTimeIn, type CountryEntry } from "@/data/countries";

// Landing de portada adaptada a un país: misma página, con metadatos, héroe y FAQ del país.
// España no usa esto: su página de país se queda como está.
export function landingForCountry(c: CountryEntry): LandingDict {
  const first = c.timeZones[0];
  if (!first) throw new Error("El país necesita una zona horaria.");
  const { weekday, time } = releaseTimeIn(first.tz);
  const listen = c.listenNote ?? "Gratis en Spotify y en YouTube (@eldiariodelpoder), y en eldiariodelpoder.com.";
  return {
    ...landingEs,
    meta: { title: c.metaTitle, description: c.metaDescription, ogTitle: c.metaTitle, ogDescription: c.metaDescription, ogLocale: c.locale.replace("-", "_") },
    hero: { ...landingEs.hero, description: `Nos sentamos con los mayores referentes del mundo para que dejen su legado a la juventud. Desde Madrid, para ${c.name}.` },
    partner: { ...landingEs.partner, description: `La Vanguardia amplifica nuestro alcance y hace llegar estas conversaciones a millones de lectores, también en ${c.name}.` },
    faq: {
      ...landingEs.faq,
      items: [
        landingEs.faq.items[0],
        { q: `¿Dónde se puede escuchar Diario del Poder en ${c.name}?`, a: listen },
        { q: `¿A qué hora se publican los episodios en ${c.name}?`, a: `Cada ${weekday} a las ${time} (${first.label}), cuando La Vanguardia publica la conversación de la semana.` },
        { q: `¿Ha pasado algún invitado de ${c.name} por Diario del Poder?`, a: c.guestsAnswer },
        { q: `¿Cómo puede una marca patrocinar Diario del Poder en ${c.name}?`, a: `${c.sponsor} Las opciones y el formulario están en eldiariodelpoder.com/patrocinadores.` },
      ],
    },
  };
}
