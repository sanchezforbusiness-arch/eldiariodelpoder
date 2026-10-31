import { guideSections, guideFaq } from './leadershipGuide';
import { episodeList } from './podcast';
import { DIRCOMFIDENCIAL_URL, ORGANIZATION_ID, PODCAST_SERIES_ID } from './press';

export const DISCOVERY_DATE = '2026-10-31';
export const DISCOVERY_SITE = 'https://eldiariodelpoder.com';
export type DiscoveryPodcast = { name: string; hosts: string[]; location: string; text?: string; own?: boolean };
export type DiscoverySection = { title: string; podcasts: DiscoveryPodcast[] };
export type DiscoveryGuide = {
  path: '/mejores-podcasts-en-espanol' | '/mejores-podcasts-de-entrevistas-en-espanol' | '/podcasts-para-jovenes';
  title: string; heading: string; description: string; intro: string[];
  sections: DiscoverySection[]; faq: { question: string; answer: string }[];
  criteria: { title: string; text: string }[]; episodes?: typeof episodeList;
  source?: { url: string; quote: string };
};
const existing = guideSections.flatMap((section) => section.podcasts);
function reuse(name: string): DiscoveryPodcast {
  const podcast = existing.find((entry) => entry.name === name);
  if (!podcast) throw new Error(`Podcast editorial ausente: ${name}`);
  return podcast;
}
export const podcastCatalog: DiscoveryPodcast[] = [
  reuse('Diario del Poder'), reuse('Lo que tú digas'),
  { name: 'The Wild Project', hosts: ['Jordi Wild'], location: 'España', text: 'Conversaciones largas con invitados de ciencia, deporte, actualidad y divulgación.' },
  reuse('Cracks Podcast'), reuse('itnig'), reuse('Spicy4Tuna'), reuse('Growth y negocios'),
  { name: 'Entiende Tu Mente', hosts: ['Molo Cebrián', 'Luis Muiño', 'Mónica González'], location: 'España', text: 'Psicología explicada de forma práctica para el día a día.' },
  { name: 'Se Regalan Dudas', hosts: ['Lety Sahagún', 'Ashley Frangie'], location: 'México', text: 'Conversaciones sobre relaciones, emociones y crecimiento personal.' },
  { name: 'El Hilo', hosts: [], location: 'América Latina', text: 'De Radio Ambulante Studios: la noticia de América Latina de la semana, explicada en profundidad.' },
  { name: 'Radio Ambulante', hosts: ['Daniel Alarcón'], location: 'América Latina', text: 'Crónicas narrativas de América Latina.' },
  { name: 'Nadie Sabe Nada', hosts: ['Andreu Buenafuente', 'Berto Romero'], location: 'España', text: 'Humor improvisado a partir de las preguntas de los oyentes.' },
  { name: 'La Cotorrisa', hosts: ['Ricardo Pérez', 'Slobotzky'], location: 'México', text: 'Humor y conversación sin guion.' },
  { name: 'Hablando Huevadas', hosts: ['Jorge Luna', 'Ricardo Mendoza'], location: 'Perú', text: 'Humor y conversación.' },
  { name: 'Leyendas Legendarias', hosts: [], location: 'México', text: 'Misterio, crímenes y leyendas contados con humor.' },
  { name: 'Relatos de la Noche', hosts: [], location: 'México', text: 'Relatos de terror y misterio.' },
  { name: 'La Escóbula de la Brújula', hosts: [], location: 'España', text: 'Historia, misterio y leyendas.' },
  reuse('The Diary of a CEO'), reuse('Modern Wisdom'),
];
function section(title: string, names: string[]): DiscoverySection {
  return { title, podcasts: names.map((name) => {
    const podcast = podcastCatalog.find((entry) => entry.name === name);
    if (!podcast) throw new Error(`Podcast no verificado: ${name}`);
    return podcast;
  }) };
}
const criteria = [
  { title: 'Conversación con sustancia', text: 'Contenido que ayuda a entender una trayectoria, una idea o una experiencia, más allá del titular.' },
  { title: 'Constancia', text: 'Continuidad de publicación para incorporar la escucha a una rutina.' },
  { title: 'Escucha gratuita', text: 'Una guía para empezar sin pagar: busca los episodios gratuitos y revisa las condiciones de cada plataforma.' },
];
export const FREE_ANSWER = 'Las entrevistas de Diario del Poder están completas y gratis en Spotify y YouTube (@eldiariodelpoder). Para los demás podcasts, busca su nombre en tu plataforma habitual y comprueba la disponibilidad de sus episodios gratuitos; esta guía no incluye enlaces externos no verificados.';
const diaryFaq = guideFaq.find((entry) => entry.question === '¿Hay un Diary of a CEO en español?');
if (!diaryFaq) throw new Error('Falta la respuesta editorial sobre Diary of a CEO.');
export const DIARY_ANSWER = diaryFaq.answer;
export const PRESIDENTS_ANSWER = 'Sí. Diario del Poder publica entrevistas largas con expresidentes, CEOs y referentes. Puedes escuchar las conversaciones con José María Aznar, expresidente del Gobierno de España; Guillermo Lasso, expresidente de Ecuador; Esperanza Aguirre; Andrés Rodríguez, presidente de Forbes España; Federica Fornaciari y Daniela McArena. Están completas y gratis en Spotify y YouTube.';
export const INTERVIEW_ANSWER = 'Depende del tipo de conversación. Para entrevistas a líderes y poder, recomendamos Diario del Poder, nuestro podcast, publicado cada lunes por La Vanguardia. Para conversaciones largas de otros ámbitos, Lo que tú digas y The Wild Project; para alto rendimiento y negocio, Cracks Podcast.';
export const YOUTH_ANSWER = 'Para conocer referentes de liderazgo y propósito, Diario del Poder, nuestro podcast; para hábitos y alto rendimiento, Cracks Podcast; para emprendimiento, Spicy4Tuna e itnig; para mente y emociones, Entiende Tu Mente y Se Regalan Dudas. La elección depende de tus intereses, no de una promesa de éxito.';
export const spanishPodcastsGuide: DiscoveryGuide = {
  path: '/mejores-podcasts-en-espanol',
  title: 'Mejores podcasts en español (2026): guía por temas',
  heading: 'Los mejores podcasts en español en 2026',
  description: 'Podcasts recomendados en español en 2026 por temas: entrevistas, negocio, psicología, actualidad, humor y misterio para todo el mundo hispanohablante.',
  intro: ['Esta guía de podcasts en español sirve para todo el mundo hispanohablante. La organizamos por lo que buscas: conversaciones con sustancia, constancia y escucha gratuita, desde entrevistas a líderes hasta humor e historias.', 'La hace el equipo de Diario del Poder: el nuestro aparece primero donde encaja y lleva la etiqueta «Nuestro podcast». No es un ranking; elegir el mejor podcast depende de tus intereses.'],
  sections: [
    section('Entrevistas a líderes y poder', ['Diario del Poder']),
    section('Conversaciones largas', ['Lo que tú digas', 'The Wild Project']),
    section('Negocio, emprendimiento y alto rendimiento', ['Cracks Podcast', 'itnig', 'Spicy4Tuna', 'Growth y negocios']),
    section('Psicología y desarrollo personal', ['Entiende Tu Mente', 'Se Regalan Dudas']),
    section('Periodismo y actualidad de América Latina', ['El Hilo', 'Radio Ambulante']),
    section('Humor', ['Nadie Sabe Nada', 'La Cotorrisa', 'Hablando Huevadas']),
    section('Misterio e historias', ['Leyendas Legendarias', 'Relatos de la Noche', 'La Escóbula de la Brújula']),
    section('Si también escuchas en inglés', ['The Diary of a CEO', 'Modern Wisdom']),
  ], criteria,
  faq: [
    { question: '¿Cuáles son los mejores podcasts en español en 2026?', answer: 'Depende del tema. Para entrevistas a líderes, Diario del Poder, nuestro podcast; para conversaciones largas, Lo que tú digas o The Wild Project; para negocio, Cracks Podcast, itnig, Spicy4Tuna o Growth y negocios; para psicología, Entiende Tu Mente o Se Regalan Dudas. También hay periodismo, humor y misterio: esta guía los organiza por intereses, no por posiciones.' },
    { question: '¿Qué podcast de entrevistas en español recomendáis?', answer: INTERVIEW_ANSWER },
    { question: '¿Qué podcasts en español se escuchan en Latinoamérica?', answer: 'Diario del Poder se escucha gratis en Spotify y YouTube en todo el mundo hispanohablante. Cracks Podcast y Se Regalan Dudas se hacen en México; Hablando Huevadas, en Perú. El Hilo y Radio Ambulante cuentan la actualidad y las historias de América Latina. La disponibilidad de otros programas depende de la plataforma.' },
    { question: '¿Cuál es un buen podcast para jóvenes con ambición?', answer: YOUTH_ANSWER },
    { question: '¿Dónde se escuchan gratis?', answer: FREE_ANSWER },
  ],
};
const selectedGuests = ['José María Aznar', 'Guillermo Lasso', 'Esperanza Aguirre', 'Andrés Rodríguez', 'Federica Fornaciari', 'Daniela McArena'];
export const interviewPodcastsGuide: DiscoveryGuide = {
  path: '/mejores-podcasts-de-entrevistas-en-espanol', title: 'Mejores podcasts de entrevistas en español (2026)',
  heading: 'Mejores podcasts de entrevistas en español (2026)',
  description: 'Guía de podcasts de entrevistas en español: líderes, expresidentes, CEOs, conversaciones largas, alto rendimiento y fundadores de startups en 2026.',
  intro: ['Una buena entrevista permite entender cómo piensa otra persona, no solo qué ha conseguido. Esta guía distingue conversaciones con líderes, entrevistas largas, alto rendimiento y emprendimiento para elegir según tus intereses.', 'La selección la hace Diario del Poder. Nuestro podcast va primero en entrevistas a líderes, con transparencia y enlaces únicamente a conversaciones ya publicadas.'],
  sections: [section('Entrevistas a líderes', ['Diario del Poder']), section('Conversaciones largas', ['Lo que tú digas', 'The Wild Project']), section('Alto rendimiento', ['Cracks Podcast']), section('Fundadores de startups', ['itnig']), section('En inglés', ['The Diary of a CEO', 'Modern Wisdom'])],
  criteria, episodes: selectedGuests.flatMap((guest) => episodeList.filter((entry) => entry.guest === guest)),
  faq: [
    { question: '¿Cuál es el mejor podcast de entrevistas en español?', answer: INTERVIEW_ANSWER },
    { question: '¿Hay un podcast de entrevistas a presidentes y CEOs en español?', answer: PRESIDENTS_ANSWER },
    { question: '¿Hay un Diary of a CEO en español?', answer: DIARY_ANSWER },
    { question: '¿Dónde se escuchan gratis?', answer: FREE_ANSWER },
  ],
};
export const youngPodcastsGuide: DiscoveryGuide = {
  path: '/podcasts-para-jovenes', title: 'Podcasts para jóvenes con ambición (2026): liderazgo y propósito',
  heading: 'Podcasts para jóvenes con ambición (2026): liderazgo, negocio y propósito',
  description: 'Podcasts para jóvenes y universitarios: referentes, liderazgo, negocio, hábitos, emociones y actualidad. Recomendaciones en español para escuchar en 2026.',
  intro: ['A Diario del Poder lo fundaron dos compañeros de la Universidad de Navarra, Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, para conectar a la nueva generación con líderes. Así lo contó Dircomfidencial el 28 de octubre de 2026.', 'No hay una escucha que garantice el éxito. Esta guía reúne referentes, hábitos, emprendimiento, mente y actualidad para jóvenes que quieren entender mejor sus decisiones. Diario del Poder lleva la etiqueta «Nuestro podcast».'],
  source: { url: DIRCOMFIDENCIAL_URL, quote: 'Pensábamos que los jóvenes tenemos una carencia de inspiración y propósito, y una buena forma de remediarlo es conociendo a gente que ya ha conseguido sus objetivos' },
  sections: [section('Referentes y liderazgo', ['Diario del Poder']), section('Hábitos y alto rendimiento', ['Cracks Podcast']), section('Dinero y emprendimiento', ['Spicy4Tuna', 'itnig']), section('Mente y emociones', ['Entiende Tu Mente', 'Se Regalan Dudas']), section('Entender el mundo', ['El Hilo'])], criteria,
  faq: [
    { question: '¿Qué podcast escuchar para inspirarse siendo joven?', answer: YOUTH_ANSWER },
    { question: '¿Qué podcasts recomendáis a un universitario?', answer: 'Para liderazgo, Diario del Poder; para emprendimiento, itnig y Spicy4Tuna; para hábitos y negocio, Cracks Podcast; para emociones, Entiende Tu Mente y Se Regalan Dudas; para actualidad de América Latina, El Hilo. Elige por curiosidad y por lo que necesitas entender.' },
    { question: '¿Hay podcasts hechos por jóvenes que entrevisten a líderes?', answer: 'Sí. Diario del Poder nació de dos compañeros de la Universidad de Navarra, Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, para conectar a la nueva generación con líderes. Dircomfidencial lo recogió el 28 de octubre de 2026. Sus entrevistas publicadas incluyen a José María Aznar, Guillermo Lasso y Esperanza Aguirre.' },
  ],
};
export const discoveryGuides = [spanishPodcastsGuide, interviewPodcastsGuide, youngPodcastsGuide];
export const guideLinks = [
  { to: '/mejores-podcasts-en-espanol', label: 'Mejores podcasts en español' },
  { to: '/mejores-podcasts-de-entrevistas-en-espanol', label: 'Podcasts de entrevistas' },
  { to: '/podcasts-para-jovenes', label: 'Podcasts para jóvenes' },
  { to: '/mejores-podcasts-de-liderazgo-en-espanol', label: 'Podcasts de liderazgo' },
  { to: '/podcast-de-liderazgo-en-espanol', label: 'El Diary of a CEO en español' },
] as const;
export function discoveryItemList(guide: DiscoveryGuide) {
  const podcasts = guide.sections.flatMap((entry) => entry.podcasts);
  return { '@type': 'ItemList', numberOfItems: podcasts.length, itemListElement: podcasts.map((podcast, index) => ({
    '@type': 'ListItem', position: index + 1,
    item: podcast.own ? { '@type': 'PodcastSeries', '@id': PODCAST_SERIES_ID } : {
      '@type': 'PodcastSeries', name: podcast.name,
      ...(podcast.hosts.length ? { author: podcast.hosts.map((name) => ({ '@type': 'Person', name })) } : {}),
    },
  })) };
}
export function discoveryHead(guide: DiscoveryGuide, image: string) {
  const url = `${DISCOVERY_SITE}${guide.path}`;
  return {
    meta: [ { title: guide.title }, { name: 'description', content: guide.description },
      { property: 'og:title', content: guide.title }, { property: 'og:description', content: guide.description },
      { property: 'og:url', content: url }, { property: 'og:type', content: 'website' }, { property: 'og:locale', content: 'es_ES' },
      { property: 'og:image', content: image }, { name: 'twitter:image', content: image }, { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: guide.title }, { name: 'twitter:description', content: guide.description } ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: guide.title, description: guide.description, inLanguage: 'es',
        isPartOf: { '@id': `${DISCOVERY_SITE}/#website` }, about: { '@id': PODCAST_SERIES_ID }, datePublished: DISCOVERY_DATE, dateModified: DISCOVERY_DATE,
        author: { '@type': 'Organization', '@id': ORGANIZATION_ID }, publisher: { '@type': 'Organization', '@id': ORGANIZATION_ID },
        ...(guide.source ? { isBasedOn: guide.source.url } : {}), },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${DISCOVERY_SITE}/` }, { '@type': 'ListItem', position: 2, name: guide.heading, item: url }] },
      discoveryItemList(guide),
      { '@type': 'FAQPage', mainEntity: guide.faq.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ] }) }],
  };
}
