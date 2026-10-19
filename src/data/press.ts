export type PressItem = {
  outlet: string;
  context?: string;
  url?: string;
  featured?: boolean;
  kind?: "print" | "tv" | "radio" | "digital";
  quote?: string;
  headline?: string;
  date?: string;
  summary?: string;
  /** Etiqueta de la tarjeta destacada */
  label?: string;
  /** Pie de fecha de la tarjeta destacada */
  dateLabel?: string;
  /** Línea de firma visible */
  byline?: string;
  /** Vídeo del panel derecho de la tarjeta destacada */
  embedUrl?: string;
  /** Imagen editorial de la tarjeta destacada */
  image?: string;
  imageAlt?: string;
  /** @id del nodo NewsArticle en los datos estructurados */
  schemaId?: string;
  /** @id de las personas que firman la pieza */
  authorIds?: string[];
  /** Cita literal del cuerpo que nombra a los fundadores con los dos apellidos */
  founderQuote?: string;
  /** Fuente en la que se basa la pieza */
  isBasedOn?: string;
  /** Metadatos de entrevistas de audio en medios externos. */
  podcast?: {
    duration: string;
    seriesName: string;
    seriesUrl: string;
    station: string;
    participantIds: string[];
  };
};

import rosaLaVanguardiaImage from "@/assets/la-vanguardia-rosa-lagarrigue.png.asset.json";
import aguirreLaVanguardiaImage from "@/assets/guest-esperanza-aguirre.jpg.asset.json";
import jcghImage from "@/assets/guest-jc-gonzalez-hurtado.png.asset.json";
import bastosImage from "@/assets/guest-miguel-anxo-bastos.jpg.asset.json";

export const ALEJANDRO_ID = "https://alejandrosanchezmartinez.com/#persona";
export const VICTOR_ID = "https://eldiariodelpoder.com/victor-hugo-gandarilla-de-andres#persona";
export const ALEJANDRO_INSTAGRAM = "https://www.instagram.com/alejandro.sanchez.martinez/";

/** Marcado de audio compartido por prensa y las fichas de los entrevistados. */
export function pressPodcastSchema(item: PressItem) {
  const podcast = item.podcast;
  if (!podcast) return undefined;
  return {
    "@type": "PodcastEpisode",
    name: item.headline,
    url: item.url,
    datePublished: item.date,
    description: item.summary,
    duration: podcast.duration,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: podcast.seriesName,
      url: podcast.seriesUrl,
      publisher: { "@type": "RadioStation", name: podcast.station },
    },
    about: podcast.participantIds.map((id) => ({ "@id": id })),
    actor: podcast.participantIds.map((id) => ({ "@id": id })),
  };
}

export const ROSA_LAVANGUARDIA_ID = "https://eldiariodelpoder.com/prensa#lavanguardia-rosa-lagarrigue";
export const ROSA_LAVANGUARDIA_URL =
  "https://www.lavanguardia.com/podcast/20260922/11641554/rosa-lagarrigue-mujer-abrio-camino-industria-musical-dominada-hombres-ambicioso-sano.html";

export const AGUIRRE_LAVANGUARDIA_ID = "https://eldiariodelpoder.com/prensa#lavanguardia-esperanza-aguirre";
export const AGUIRRE_LAVANGUARDIA_URL =
  "https://www.lavanguardia.com/podcast/el-diario-del-poder/20260928/11645564/esperanza-aguirre-cuatro-decadas-politica-conviccion-hijos-son-padres-regimen.html";

export const BASTOS_LAVANGUARDIA_ID = "https://eldiariodelpoder.com/prensa#lavanguardia-miguel-anxo-bastos";
export const BASTOS_LAVANGUARDIA_URL =
  "https://www.lavanguardia.com/podcast/el-diario-del-poder/20261005/11651520/miguel-anxo-bastos-economista-quieres-puedes-mito-destruye-vidas.html";

export const JCGH_LAVANGUARDIA_ID = "https://eldiariodelpoder.com/prensa#lavanguardia-jose-carlos-gonzalez-hurtado";
export const JCGH_LAVANGUARDIA_URL =
  "https://www.lavanguardia.com/podcast/el-diario-del-poder/20261013/11657651/jose-carlos-gonzalez-cupula-empresarial-television-catolica.html";

export const FORNACIARI_LAVANGUARDIA_ID = "https://eldiariodelpoder.com/prensa#lavanguardia-federica-fornaciari";
export const FORNACIARI_LAVANGUARDIA_URL =
  "https://www.lavanguardia.com/podcast/el-diario-del-poder/20261019/11662685/federica-fornaciari-experta-liderazgo-estrategia-empresarial-verdadero-hacerse-prescindible.html";

/** Piezas publicadas en medios a partir de las entrevistas, indexadas por invitado (publicadas bajo la firma de El Diario del Poder). */
export const guestArticleBySlug: Record<string, { url: string; schemaId: string }> = {
  "rosa-lagarrigue": { url: ROSA_LAVANGUARDIA_URL, schemaId: ROSA_LAVANGUARDIA_ID },
  "esperanza-aguirre": { url: AGUIRRE_LAVANGUARDIA_URL, schemaId: AGUIRRE_LAVANGUARDIA_ID },
  "miguel-anxo-bastos": { url: BASTOS_LAVANGUARDIA_URL, schemaId: BASTOS_LAVANGUARDIA_ID },
  "federica-fornaciari": { url: FORNACIARI_LAVANGUARDIA_URL, schemaId: FORNACIARI_LAVANGUARDIA_ID },
  "jose-carlos-gonzalez-hurtado": { url: JCGH_LAVANGUARDIA_URL, schemaId: JCGH_LAVANGUARDIA_ID },
};

export const pressItems: PressItem[] = [
  {
    outlet: "La Vanguardia",
    context: "Publicado en La Vanguardia — Federica Fornaciari",
    url: FORNACIARI_LAVANGUARDIA_URL,
    featured: true,
    kind: "print",
    label: "Portada · Publicado en La Vanguardia",
    dateLabel: "Octubre 2026 · Podcast",
    byline: "Publicado bajo la firma de El Diario del Poder",
    embedUrl: "https://www.youtube-nocookie.com/embed/03FllesvHxc",
    founderQuote: "afirma en una entrevista con ‘El Diario del Poder’, conducida por Víctor Hugo Gandarilla de Andrés y Alejandro Sánchez Martínez",
    quote: "Federica Fornaciari, experta en liderazgo y estrategia empresarial: “El verdadero poder es saber hacerse imprescindible”",
    headline: "Federica Fornaciari, experta en liderazgo y estrategia empresarial: “El verdadero poder es saber hacerse imprescindible”",
    date: "2026-10-19T15:00:00+02:00",
    summary:
      "La fundadora de NoBrainer Partners y SenYours Consulting defiende un liderazgo basado en la ética, la claridad y la capacidad de impulsar a otros sin ponerse por encima de ellos",
    schemaId: FORNACIARI_LAVANGUARDIA_ID,
    isBasedOn: "https://eldiariodelpoder.com/episodios/federica-fornaciari-la-maravilla-de-ser-prescindible",
  },
  {
    outlet: "La Vanguardia",
    context: "Publicado en La Vanguardia — José Carlos González Hurtado",
    url: JCGH_LAVANGUARDIA_URL,
    kind: "print",
    label: "Portada · Publicado en La Vanguardia",
    dateLabel: "Octubre 2026 · Podcast",
    byline: "Publicado bajo la firma de El Diario del Poder",
    image: jcghImage.url,
    imageAlt: "José Carlos González Hurtado, presidente de EWTN y expresidente de Procter & Gamble en España, invitado del podcast Diario del Poder",
    quote: "José Carlos González, de la cúpula empresarial a la televisión católica: «El poder es hacer el bien»",
    headline: "José Carlos González, de la cúpula empresarial a la televisión católica: «El poder es hacer el bien»",
    date: "2026-10-13",
    summary:
      "El expresidente de Procter & Gamble en España y exdirectivo de Carrefour explica cómo entiende el liderazgo, la responsabilidad individual y el propósito vital",
    schemaId: JCGH_LAVANGUARDIA_ID,
    isBasedOn: "https://eldiariodelpoder.com/episodios/jose-carlos-gonzalez-hurtado-el-poder-es-hacer-el-bien",
  },
  {
    outlet: "La Vanguardia",
    context: "Publicado en La Vanguardia — Miguel Anxo Bastos",
    url: BASTOS_LAVANGUARDIA_URL,
    kind: "print",
    label: "Portada · Publicado en La Vanguardia",
    dateLabel: "Octubre 2026 · Podcast",
    byline: "Publicado bajo la firma de El Diario del Poder",
    image: bastosImage.url,
    imageAlt:
      "Miguel Anxo Bastos, economista y profesor de la Universidad de Santiago de Compostela, invitado del podcast Diario del Poder",
    quote: "Miguel Anxo Bastos, economista: «El “si quieres, puedes” es un mito que destruye vidas»",
    headline: "Miguel Anxo Bastos, economista: «El “si quieres, puedes” es un mito que destruye vidas»",
    date: "2026-10-05",
    summary:
      "El profesor de Economía de la Universidad de Santiago de Compostela defiende el valor del esfuerzo, reivindica el capitalismo y alerta sobre los riesgos del dinero digital controlado por los bancos centrales.",
    schemaId: BASTOS_LAVANGUARDIA_ID,
    isBasedOn: "https://eldiariodelpoder.com/episodios/miguel-anxo-bastos-si-quieres-puedes-es-un-mito",
  },
  {
    outlet: "La Vanguardia",
    context: "Publicado en La Vanguardia — Esperanza Aguirre",
    url: AGUIRRE_LAVANGUARDIA_URL,
    kind: "print",
    label: "Portada · Publicado en La Vanguardia",
    dateLabel: "Septiembre 2026 · Podcast",
    byline: "Entrevista de Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés",
    founderQuote: "en una entrevista con ‘El Diario del Poder’, conducida por Víctor Hugo Gandarilla de Andrés y Alejandro Sánchez Martínez",
    image: aguirreLaVanguardiaImage.url,
    imageAlt: "Esperanza Aguirre, expresidenta de la Comunidad de Madrid, invitada del podcast Diario del Poder en La Vanguardia",
    quote:
      "Esperanza Aguirre, cuatro décadas en política y una convicción: «Los hijos son de los padres, no del régimen»",
    headline:
      "Esperanza Aguirre, cuatro décadas en política y una convicción: «Los hijos son de los padres, no del régimen»",
    date: "2026-09-28",
    summary:
      "La expresidenta de la Comunidad de Madrid repasa su trayectoria política, reivindica la libertad de elección educativa y recuerda algunos de los errores y decisiones que han marcado su carrera política",
    schemaId: AGUIRRE_LAVANGUARDIA_ID,
    isBasedOn: "https://eldiariodelpoder.com/invitados/esperanza-aguirre",
  },
  {
    outlet: "La Vanguardia",
    context: "Publicado en La Vanguardia — Rosa Lagarrigue",
    url: ROSA_LAVANGUARDIA_URL,
    kind: "print",
    label: "Portada · Publicado en La Vanguardia",
    dateLabel: "Septiembre 2026 · Podcast",
    byline: "Publicado bajo la firma de El Diario del Poder · Entrevista conducida por Víctor Hugo Gandarilla de Andrés y Alejandro Sánchez Martínez",
    founderQuote: "en una entrevista fruto del podcast ‘El Diario del Poder’, conducido por Víctor Hugo Gandarilla de Andrés y Alejandro Sánchez Martínez",
    image: rosaLaVanguardiaImage.url,
    imageAlt: "Artículo de La Vanguardia sobre Rosa Lagarrigue, a partir de su entrevista en el podcast Diario del Poder",
    quote:
      "Rosa Lagarrigue, la mujer que abrió camino en una industria musical dominada por hombres: «Ser ambicioso es sano»",
    headline:
      "Rosa Lagarrigue, la mujer que abrió camino en una industria musical dominada por hombres: «Ser ambicioso es sano»",
    date: "2026-09-22",
    summary:
      "La legendaria mánager ha sido representante de algunos de los grandes nombres de la música española como Alejandro Sanz",
    schemaId: ROSA_LAVANGUARDIA_ID,
    isBasedOn: "https://eldiariodelpoder.com/invitados/rosa-lagarrigue",
  },
  {
    outlet: "Radio UASLP · 2 x 1",
    context: "Entrevista en podcast · Audio",
    label: "Entrevista en podcast · Audio",
    url: "https://open.spotify.com/episode/17vhnK9phFjTLaeAGl3B1g",
    headline: "La nueva generación frente al poder",
    date: "2026-09-08",
    kind: "radio",
    summary: "Entrevista de 52 minutos a Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, cofundadores y hosts de El Diario del Poder, sobre lo que han aprendido entrevistando a líderes: humildad, capacidad de escuchar, empatía, propósito y el valor de atreverse a pedir.",
    podcast: {
      duration: "PT51M44S",
      seriesName: "2 x 1",
      seriesUrl: "https://open.spotify.com/show/5TboOk08IDWFZBphQyZYit",
      station: "Radio UASLP",
      participantIds: [ALEJANDRO_ID, VICTOR_ID],
    },
  },
  {
    outlet: "La Vanguardia",
    context: "Media Partner — entrevista a Jordi Juan",
    url: "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html",
    kind: "print",
    quote: "Una nueva entrega del podcast 'El diario del poder' entrevista al director del diario del Grupo Godó.",
    headline: "Jordi Juan, director de La Vanguardia, en el podcast Diario del Poder",
    date: "2026-05-27",
    summary:
      "La Vanguardia publica la entrevista de Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés a Jordi Juan, director del diario del Grupo Godó, dentro del podcast Diario del Poder.",
  },

  {
    outlet: "Antena 3 — Espejo Público",
    context: "Cobertura Reina Letizia / Universidad de Navarra",
    url: "https://www.antena3.com/programas/espejo-publico/noticias/chascarrillo-reina-letizia-dos-jovenes-que-pedian-entrevista-antes-delante-camara-era-inviable_202605116a01daefb5b06629960c3679.html",
    kind: "tv",
    headline: "El chascarrillo de la Reina Letizia con dos jóvenes que le pedían una entrevista",
    date: "2026-05-11",
    summary:
      "Espejo Público (Antena 3) cubre el momento viral entre la Reina Letizia y los fundadores de Diario del Poder en la Universidad de Navarra.",
  },
  {
    outlet: "La Sexta — Zapeando",
    context: "En emisión · plató",
    kind: "tv",
    headline: "Zapeando comenta el momento viral de la Reina Letizia con Diario del Poder",
    date: "2026-05-11",
    summary: "La Sexta emite el clip de los fundadores de Diario del Poder pidiendo una entrevista a la Reina Letizia.",
  },
  {
    outlet: "20minutos",
    kind: "digital",
    date: "2026-05-11",
    headline: "La reina Letizia les devuelve la pregunta a los estudiantes que querían entrevistarla: «Vosotros, ¿sobre qué preguntáis?»",
    url: "https://www.20minutos.es/gente/reina-letizia-les-devuelve-pregunta-los-estudiantes-que-querian-entrevistarla-vosotros-sobre-que-preguntais_6968857_0.html",
  },
  {
    outlet: "Lecturas",
    kind: "digital",
    date: "2026-05-11",
    headline: "Una experta en realeza, sobre la reina Letizia: «Tiene una gran habilidad para reconducir situaciones inesperadas»",
    url: "https://www.lecturas.com/realeza/experta-sobre-video-viral-reina-letizia-tiene-gran-habilidad-para-reconducir-situaciones-inesperadas-sin-generar-incomodidad-ni-humillacion-otra-persona_192656",
  },
  {
    outlet: "Diez Minutos",
    kind: "digital",
    date: "2026-05-09",
    headline: "La Reina Letizia se hace viral tras su reacción a una petición de entrevista: «Lo estáis consiguiendo»",
    url: "https://www.diezminutos.es/familia-real/monarquia-espanola/a71259234/reina-letizia-reaccion-viral-entrevista-lo-estais-consiguiendo/",
  },
  {
    outlet: "Semana",
    kind: "digital",
    date: "2026-05-09",
    headline: "La Reina Letizia se vuelve viral por su reacción a una propuesta de entrevista: «Yo creo que lo estáis consiguiendo»",
    url: "https://www.semana.es/realeza/reina-letizia-se-vuelve-viral-por-su-reaccion-propuesta-entrevista-yo-creo-que-estais-consiguiendo_2814249",
  },
  {
    outlet: "El Español",
    url: "https://www.elespanol.com/mujer/royals/20260508/anecdota-reina-letizia-chicos-querian-hablara-podcast-entrevistada-entrevistadora/1003744238033_0.html",
    kind: "digital",
    headline: "La anécdota de la Reina Letizia con los chicos que querían que hablara en su podcast",
    date: "2026-05-08",
    summary:
      "El Español recoge la respuesta de la Reina Letizia a Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, fundadores de Diario del Poder.",
  },
  {
    outlet: "Infobae",
    url: "https://www.infobae.com/espana/2026/05/08/la-elegante-forma-en-la-que-la-reina-letizia-evita-la-invitacion-al-podcast-de-unos-estudiantes-para-hacerles-ella-la-entrevista-sois-de-que-facultad/",
    kind: "digital",
    headline: "La elegante forma en la que la Reina Letizia responde a la invitación a un podcast de estudiantes",
    date: "2026-05-08",
    summary: "Infobae España narra el intercambio entre la Reina Letizia y los hosts de Diario del Poder.",
  },
  {
    outlet: "Voz Pópuli",
    url: "https://www.vozpopuli.com/dolcevita/la-reina-letizia-se-hace-viral-por-lo-que-le-dijo-a-unos-jovenes-que-querian-entrevistarla-en-su-podcast.html",
    kind: "digital",
    headline: "La Reina Letizia se hace viral por lo que dijo a unos jóvenes que querían entrevistarla en su podcast",
    date: "2026-05-08",
    summary: "Voz Pópuli cubre la viralidad del encuentro con los fundadores de Diario del Poder.",
  },
  {
    outlet: "Diario de Navarra",
    url: "https://www.diariodenavarra.es/noticias/navarra/2026/05/07/reina-letizia-vuelve-pamplona-directo-acto-celebracion-dia-mundial-cruz-roja-819846-15.html",
    kind: "print",
    headline: "La Reina Letizia vuelve a Pamplona: acto por el Día Mundial de la Cruz Roja",
    date: "2026-05-07",
    summary: "Diario de Navarra sigue en directo el acto en el que participaron los hosts de Diario del Poder.",
  },
  { outlet: "El Mundo", kind: "print" },
  { outlet: "El Periódico", kind: "print" },
  { outlet: "El Debate", kind: "digital" },
  {
    outlet: "Huffpost",
    url: "https://www.huffingtonpost.es/virales/le-piden-letizia-salir-podcast-respuesta-reina-esperan-nadie-f202605.html",
    kind: "digital",
    headline: "Le piden a Letizia salir en su podcast y la respuesta de la Reina no la espera nadie",
    date: "2026-05-08",
    summary: "HuffPost España recoge el momento entre la Reina Letizia y Diario del Poder.",
  },
  { outlet: "Navarra TV", kind: "tv" },
  { outlet: "Univision", context: "Entrevista en directo · EE. UU.", kind: "tv" },
];

/** Piezas cuyo cuerpo nombra a los fundadores con los dos apellidos. */
export const founderNamedArticles = (): PressItem[] => pressItems.filter((i) => i.founderQuote);

/** Respuesta compartida (FAQ visible, JSON-LD y llms.txt) sobre La Vanguardia. */
export function vanguardiaAnswer(name: string) {
  return `Sí. La Vanguardia, media partner de El Diario del Poder, publica las conversaciones del podcast bajo la firma de El Diario del Poder. Tres de esas piezas le nombran con los dos apellidos como entrevistador —las de Rosa Lagarrigue (22/09/2026), Esperanza Aguirre (28/09/2026) y Federica Fornaciari (19/10/2026)—. En las tres, La Vanguardia les presenta como quienes conducen la entrevista: “conducida por Víctor Hugo Gandarilla de Andrés y Alejandro Sánchez Martínez” (en la de Rosa Lagarrigue, “conducido”, referido al podcast).`;
}

export const pressArticles = pressItems.filter((i) => i.url && i.headline);
