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
};

export const pressItems: PressItem[] = [
  {
    outlet: "La Vanguardia",
    context: "Media Partner — entrevista a Jordi Juan",
    url: "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html",
    featured: true,
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

export const pressArticles = pressItems.filter((i) => i.url && i.headline);
