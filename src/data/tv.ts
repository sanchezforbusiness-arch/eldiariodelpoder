import zapeando from "@/assets/tv-zapeando-lasexta.jpg.asset.json";
import espejoProtocolo from "@/assets/tv-espejo-publico-protocolo.jpg.asset.json";
import espejoPlato from "@/assets/tv-espejo-publico-plato.jpg.asset.json";
import univisionAznar from "@/assets/tv-univision-aznar-faes.jpg.asset.json";
import univisionFaes from "@/assets/tv-univision-entrevista-faes.jpg.asset.json";
import univisionDirecto from "@/assets/tv-univision-directo-fundadores.jpg.asset.json";
import univisionEntrevista from "@/assets/tv-univision-entrevista-directo.jpg.asset.json";
import laVoz from "@/assets/tv-lavoz-univision.jpg.asset.json";

export const SITE_URL = "https://eldiariodelpoder.com";

export type TvAppearance = {
  id: string;
  channel: string;
  program: string;
  country: string;
  date: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
};

export const tvAppearances: TvAppearance[] = [
  {
    id: "univision-aznar",
    channel: "Univision",
    program: "Noticias 24/7",
    country: "Estados Unidos",
    date: "2026-05-09",
    title: "Univision: “El podcast Diario del Poder revela el lado humano de las mentes más influyentes”",
    caption:
      "Univision emite en directo la entrevista de Diario del Poder al expresidente español José María Aznar, grabada en la Fundación FAES.",
    image: univisionAznar.url,
    alt: "José María Aznar en la entrevista de Diario del Poder emitida por Univision",
  },
  {
    id: "univision-directo",
    channel: "Univision",
    program: "Noticias 24/7 — En vivo",
    country: "Estados Unidos",
    date: "2026-05-09",
    title: "Entrevista en directo a los fundadores de Diario del Poder en Univision",
    caption:
      "Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, en directo desde Madrid para la audiencia hispana de Estados Unidos.",
    image: univisionDirecto.url,
    alt: "Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés en directo en Univision",
  },
  {
    id: "univision-entrevista",
    channel: "Univision",
    program: "Noticias 24/7 — En vivo",
    country: "Estados Unidos",
    date: "2026-05-09",
    title: "Los hosts de Diario del Poder explican cómo consiguen sus entrevistas",
    caption:
      "Conexión en directo con Univision para contar cómo se prepara una conversación con un jefe de Estado.",
    image: univisionEntrevista.url,
    alt: "Conexión en directo de Diario del Poder con Univision",
  },
  {
    id: "univision-faes",
    channel: "Univision",
    program: "Noticias 24/7",
    country: "Estados Unidos",
    date: "2026-05-09",
    title: "Univision: la entrevista a José María Aznar y el momento viral con la Reina Letizia",
    caption:
      "El informativo repasa la entrevista al expresidente Aznar y el encuentro viral con la Reina Letizia en Pamplona.",
    image: univisionFaes.url,
    alt: "Fundador de Diario del Poder entrevistando en la Fundación FAES, emitido por Univision",
  },
  {
    id: "lavoz-univision",
    channel: "Univision",
    program: "La Voz",
    country: "Estados Unidos",
    date: "2026-05-09",
    title: "La Voz (Univision) se hace eco de Diario del Poder",
    caption: "Cobertura del podcast español en la señal internacional de Univision.",
    image: laVoz.url,
    alt: "Plató de La Voz, Univision, durante la cobertura sobre Diario del Poder",
  },
  {
    id: "zapeando",
    channel: "La Sexta",
    program: "Zapeando",
    country: "España",
    date: "2026-05-11",
    title: "Zapeando (La Sexta) comenta el momento viral de Diario del Poder",
    caption:
      "Dani Mateo y el equipo de Zapeando repasan en directo el vídeo de los fundadores pidiendo una entrevista a la Reina Letizia.",
    image: zapeando.url,
    alt: "Plató de Zapeando en La Sexta comentando el vídeo de Diario del Poder",
  },
  {
    id: "espejo-publico-plato",
    channel: "Antena 3",
    program: "Espejo Público — Susanna Griso",
    country: "España",
    date: "2026-05-11",
    title: "Espejo Público (Antena 3) analiza la respuesta de la Reina Letizia",
    caption:
      "El programa de Susanna Griso dedica una mesa al encuentro entre la Reina Letizia y los creadores de Diario del Poder.",
    image: espejoPlato.url,
    alt: "Plató de Espejo Público en Antena 3 durante el debate sobre Diario del Poder",
  },
  {
    id: "espejo-publico-protocolo",
    channel: "Antena 3",
    program: "Más Espejo — Protocolo",
    country: "España",
    date: "2026-05-11",
    title: "Más Espejo: el protocolo de la Casa Real y la petición de entrevista",
    caption:
      "Un experto en protocolo analiza en Antena 3 la petición de entrevista de Diario del Poder a la Reina Letizia.",
    image: espejoProtocolo.url,
    alt: "Análisis de protocolo en Más Espejo, Antena 3, sobre Diario del Poder",
  },
];