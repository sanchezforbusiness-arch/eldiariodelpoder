import jordiJuanAssetEp from "@/assets/guest-jordi-juan.png.asset.json";
import andresImg from "@/assets/bts-andres-rodriguez.webp";
import lassoImg from "@/assets/bts-guillermo-lasso.webp";
import aznarImg from "@/assets/bts-aznar-dialogos.webp";
import echavarrenImg from "@/assets/guest-echavarren.webp";

const jordiJuanImg = jordiJuanAssetEp.url;

export type EpisodeEntry = {
  /** Número de orden mostrado en la interfaz (calculado por fecha, 01 = más reciente) */
  n: string;
  /** Número real y permanente del episodio en la serie (1 = el primero grabado) */
  episodeNumber: number;
  /** Imagen de portada del episodio */
  image: string;
  /** URL slug: /episodios/<slug> */
  slug: string;
  /** ID del vídeo de YouTube del episodio, si está en el canal */
  youtubeId?: string;
  /** Slug del invitado en /invitados/<guestSlug> */
  guestSlug?: string;
  /** Transcripción en párrafos (pendiente de rellenar) */
  transcript?: string[];
  guest: string;
  title: string;
  url: string;
  description: string;
  role?: string;
  date?: string;
  duration?: string;
};

const episodesRaw: Omit<EpisodeEntry, "n">[] = [
  {
    episodeNumber: 5,
    image: jordiJuanImg,
    slug: "jordi-juan-la-teoria-de-los-cajones",
    youtubeId: "onHImjPIYJI",
    guestSlug: "jordi-juan",
    transcript: [],
    guest: "Jordi Juan",
    role: "Director de La Vanguardia",
    date: "2026-05-27",
    duration: "1h 04m",
    title: "La teoría de los cajones para afrontar la crisis",
    url: "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html",
    description:
      "El director de La Vanguardia explica cómo se dirige un periódico centenario en plena crisis de los medios, su método de los cajones para tomar decisiones y el futuro del periodismo en español.",
  },
  {
    episodeNumber: 4,
    image: andresImg,
    slug: "andres-rodriguez-forbes-lujo-y-poder",
    youtubeId: "nTtgtxG7UNs",
    guestSlug: "andres-rodriguez",
    transcript: [],
    guest: "Andrés Rodríguez",
    role: "Presidente de Forbes España",
    date: "2026-04-18",
    duration: "1h 12m",
    title: "Forbes, lujo y poder desde la Forbes House",
    url: "https://youtu.be/nTtgtxG7UNs",
    description:
      "El presidente de Forbes España habla de construir un imperio editorial, del negocio del lujo y de qué separa a quien tiene dinero de quien tiene influencia.",
  },
  {
    episodeNumber: 3,
    image: lassoImg,
    slug: "guillermo-lasso-gobernar-en-crisis",
    youtubeId: "2XZuIBfyBH0",
    guestSlug: "guillermo-lasso",
    transcript: [],
    guest: "Guillermo Lasso",
    role: "Expresidente de Ecuador",
    date: "2026-03-06",
    duration: "58m",
    title: "Gobernar en plena crisis",
    url: "https://youtu.be/2XZuIBfyBH0",
    description:
      "El expresidente de Ecuador relata cómo se toman decisiones de Estado bajo presión, la reforma económica de su gobierno y el precio personal del poder.",
  },
  {
    episodeNumber: 2,
    image: aznarImg,
    slug: "jose-maria-aznar-liderar-un-pais",
    youtubeId: "ZydPM-xkYvA",
    guestSlug: "jose-maria-aznar",
    transcript: [],
    guest: "José María Aznar",
    role: "Expresidente del Gobierno de España",
    date: "2026-02-11",
    duration: "1h 21m",
    title: "Liderar un país",
    url: "https://youtu.be/ZydPM-xkYvA",
    description:
      "El expresidente del Gobierno de España repasa el liderazgo político, la relación con Europa y Estados Unidos y los consejos que daría a la nueva generación.",
  },
  {
    episodeNumber: 1,
    image: echavarrenImg,
    slug: "mikel-echavarren-real-estate-ciclos",
    youtubeId: "ARO5S1I5cg8",
    guestSlug: "mikel-echavarren",
    transcript: [],
    guest: "Mikel Echavarren",
    role: "CEO de Colliers España",
    date: "2026-01-22",
    duration: "1h 05m",
    title: "Real estate, ciclos y dinero inteligente",
    url: "https://youtu.be/ARO5S1I5cg8",
    description:
      "El CEO de Colliers España analiza los ciclos inmobiliarios, dónde está hoy el dinero inteligente y cómo leer el mercado antes de que gire.",
  },
];

/** Ordenados por fecha descendente; el número visible se calcula, no se mantiene a mano. */
export const episodeList: EpisodeEntry[] = [...episodesRaw]
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
  .map((e, i) => ({ ...e, n: String(i + 1).padStart(2, "0") }));

export type GuestEntry = {
  /** URL slug: /invitados/<slug> */
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** ID del vídeo de YouTube de la entrevista, si está publicada */
  youtubeId?: string;
  /** Enlace alternativo a la entrevista (medio externo) */
  externalUrl?: string;
  /** Resumen largo de la conversación, en párrafos */
  summary: string[];
  /** Temas tratados (también usados como keywords) */
  topics: string[];
  /** Ideas clave extraídas de la conversación (contenido real, no inventado) */
  keyIdeas?: string[];
  /** Capítulos del vídeo: marca de tiempo en segundos + título */
  chapters?: { seconds: number; title: string }[];
  /** Preguntas y respuestas reales de la conversación */
  qa?: { q: string; a: string }[];
  /** Transcripción en párrafos */
  transcript?: string[];
  /** Slugs de invitados relacionados (enlazado interno) */
  relatedSlugs?: string[];
};

/** Formatea segundos como 12:34 o 1:02:03 */
export const formatTimecode = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
};


export const guestList: GuestEntry[] = [
  {
    slug: "jose-maria-aznar",
    name: "José María Aznar",
    role: "Expresidente del Gobierno de España",
    bio: "Presidente del Gobierno entre 1996 y 2004. Habla de liderazgo político, reformas y legado.",
    youtubeId: "ZydPM-xkYvA",
    topics: ["liderazgo político", "España", "Europa", "reformas económicas", "legado"],
    summary: [
      "José María Aznar fue presidente del Gobierno de España entre 1996 y 2004. En esta conversación con Diario del Poder repasa cómo se toman las decisiones cuando no hay margen de error y qué cambia en una persona cuando pasa por La Moncloa.",
      "Hablamos del papel de España en Europa y en su relación con Estados Unidos, de la disciplina que exige gobernar y de la diferencia entre gestionar el día a día y dejar algo detrás.",
      "Cierra con lo que le diría hoy a una generación que empieza: formarse, tener criterio propio y no confundir ruido con influencia.",
    ],
  },
  {
    slug: "guillermo-lasso",
    name: "Guillermo Lasso",
    role: "Expresidente de Ecuador",
    bio: "Banquero y presidente de Ecuador (2021-2023). Gobernar en crisis y decisiones de Estado.",
    youtubeId: "2XZuIBfyBH0",
    topics: ["Ecuador", "gobernar en crisis", "banca", "decisiones de Estado", "América Latina"],
    summary: [
      "Guillermo Lasso llegó a la presidencia de Ecuador en 2021 después de una carrera en la banca. Nos cuenta cómo se gobierna un país en plena crisis y qué se siente al firmar decisiones que afectan a millones de personas.",
      "Repasa la reforma económica de su gobierno, la seguridad, y lo que aprendió pasando del sector privado a la primera línea política.",
      "También habla del precio personal del poder: la familia, el desgaste y la vida después de dejar el cargo.",
    ],
  },
  {
    slug: "esperanza-aguirre",
    name: "Esperanza Aguirre",
    role: "Expresidenta de la Comunidad de Madrid",
    bio: "Referente político español. Poder, prensa y convicciones.",
    topics: ["Madrid", "política española", "libertad", "prensa", "liderazgo"],
    summary: [
      "Esperanza Aguirre fue presidenta de la Comunidad de Madrid y una de las voces más reconocibles de la política española. En Diario del Poder habla sin rodeos de convicciones, de prensa y de lo que cuesta sostener una posición impopular.",
      "Repasa su forma de entender la libertad, la gestión de Madrid y cómo ha cambiado la conversación pública en España.",
    ],
  },
  {
    slug: "marcos-de-quinto",
    name: "Marcos de Quinto",
    role: "Exvicepresidente mundial de Coca-Cola",
    bio: "Directivo y empresario. Marca, marketing global y liderazgo corporativo.",
    topics: ["marketing", "Coca-Cola", "marca", "liderazgo corporativo", "empresa"],
    summary: [
      "Marcos de Quinto llegó a ser vicepresidente mundial y director de marketing de Coca-Cola. Nos explica cómo se construye y se protege una de las marcas más conocidas del planeta.",
      "Hablamos de publicidad, de la diferencia entre vender y construir marca, y de cómo se dirige a equipos en decenas de países a la vez.",
      "También de su salto a la política y de por qué el criterio empresarial y el político casi nunca se parecen.",
    ],
  },
  {
    slug: "javier-tebas",
    name: "Javier Tebas",
    role: "Presidente de LaLiga",
    bio: "El negocio del fútbol español, derechos audiovisuales y gestión deportiva.",
    topics: ["LaLiga", "fútbol", "derechos audiovisuales", "negocio del deporte"],
    summary: [
      "Javier Tebas preside LaLiga y ha transformado el negocio del fútbol español. En esta conversación explica cómo se venden los derechos audiovisuales y por qué el control económico de los clubes cambió la industria.",
      "Hablamos de la competencia con la Premier League, de la internacionalización del producto y de dirigir una organización con intereses enfrentados dentro.",
    ],
  },
  {
    slug: "andres-rodriguez",
    name: "Andrés Rodríguez",
    role: "Presidente y editor de Forbes España",
    bio: "Medios, lujo y la construcción de una marca de prestigio.",
    youtubeId: "nTtgtxG7UNs",
    topics: ["Forbes", "medios", "lujo", "revistas", "marca personal"],
    summary: [
      "Andrés Rodríguez es presidente y editor de Forbes España y fundador de Spainmedia. Desde la Forbes House nos cuenta cómo se levanta un grupo editorial en un sector que llevaba años en caída.",
      "Hablamos del negocio del lujo, de por qué el papel sigue teniendo sentido y de qué separa a quien tiene dinero de quien tiene influencia.",
    ],
  },
  {
    slug: "arturo-coello",
    name: "Arturo Coello",
    role: "Número 1 del mundo de pádel",
    bio: "Alto rendimiento, presión y mentalidad de campeón desde muy joven.",
    topics: ["pádel", "alto rendimiento", "mentalidad", "deporte de élite"],
    summary: [
      "Arturo Coello llegó al número 1 del mundo de pádel siendo muy joven. Nos cuenta cómo se convive con esa presión y qué rutina hay detrás de cada torneo.",
      "Hablamos de la cabeza más que del físico: derrotas, expectativas y sostener el nivel cuando todo el circuito te estudia.",
    ],
  },
  {
    slug: "martin-selles",
    name: "Martín Sellés",
    role: "Presidente de Farmaindustria · ex CEO Johnson & Johnson España",
    bio: "Industria farmacéutica, innovación y salud.",
    topics: ["farmacéutica", "innovación", "salud", "Farmaindustria"],
    summary: [
      "Martín Sellés preside Farmaindustria tras dirigir Johnson & Johnson en España. Explica cómo funciona de verdad la investigación de un medicamento: los años, el dinero y los fracasos que no se ven.",
      "Hablamos de la relación entre industria y sistema público de salud y de qué haría falta para que España atraiga más ensayos clínicos.",
    ],
  },
  {
    slug: "jordi-juan",
    name: "Jordi Juan",
    role: "Director de La Vanguardia",
    bio: "Periodismo, poder y el futuro de los medios en español.",
    youtubeId: "onHImjPIYJI",
    externalUrl:
      "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html",
    topics: ["periodismo", "La Vanguardia", "medios", "poder"],
    summary: [
      "Jordi Juan dirige La Vanguardia. Nos cuenta cómo se dirige un periódico centenario en plena crisis del sector y explica su método de los cajones para tomar decisiones sin bloquearse.",
      "Hablamos de la relación entre prensa y poder, de suscripciones frente a publicidad y de qué será del periodismo en español en la próxima década.",
    ],
  },
  {
    slug: "rosa-lagarrigue",
    name: "Rosa Lagarrigue",
    role: "Fundadora de RLM · Manager de artistas",
    bio: "La manager más influyente de la música en España.",
    topics: ["música", "management", "industria musical", "giras"],
    summary: [
      "Rosa Lagarrigue fundó RLM y ha representado a algunos de los artistas más grandes en español. Nos explica en qué consiste realmente el trabajo de una manager y dónde está el negocio de la música hoy.",
      "Hablamos de carreras largas frente a éxitos rápidos, de giras y de cómo se protege a un artista cuando todo se acelera.",
    ],
  },
  {
    slug: "jose-carlos-gonzalez-hurtado",
    name: "José Carlos González Hurtado",
    role: "Presidente de EWTN · ex CEO en P&G",
    bio: "Autor de 'Nuevas evidencias científicas de la existencia de Dios'. Fe, ciencia y empresa.",
    topics: ["EWTN", "fe y ciencia", "empresa", "P&G", "medios religiosos"],
    summary: [
      "José Carlos González Hurtado dirigió negocios en Procter & Gamble antes de presidir EWTN, la mayor red de medios católicos del mundo. Es autor de 'Nuevas evidencias científicas de la existencia de Dios'.",
      "Conversamos sobre ciencia y fe sin caricaturas, sobre cómo se gestiona un grupo de medios global y sobre qué le hizo cambiar de vida a mitad de carrera.",
    ],
  },
  {
    slug: "federica-fornaciari",
    name: "Federica Fornaciari",
    role: "Founder de SenYours y NoBrainer Partners",
    bio: "Ex-Bain, profesora en IE, IESE y Bocconi. Estrategia y marca.",
    topics: ["estrategia", "consultoría", "marca", "emprendimiento"],
    summary: [
      "Federica Fornaciari pasó por Bain y hoy dirige SenYours y NoBrainer Partners, además de dar clase en IE, IESE y Bocconi.",
      "Hablamos de estrategia aplicada, de cómo se construye una marca desde cero y de la diferencia entre asesorar y decidir.",
    ],
  },
  {
    slug: "miguel-anxo-bastos",
    name: "Miguel Anxo Bastos",
    role: "Economista y profesor",
    bio: "Escuela austriaca, libertad económica y análisis del poder.",
    topics: ["escuela austriaca", "economía", "libertad", "análisis del poder"],
    summary: [
      "Miguel Anxo Bastos es profesor y una de las voces más singulares de la escuela austriaca en español. Analiza el poder desde la teoría, sin consignas.",
      "Hablamos de Estado, incentivos, burocracia y de por qué muchas políticas producen justo lo contrario de lo que prometen.",
    ],
  },
  {
    slug: "daniela-macarena",
    name: "Daniela Macarena",
    role: "Co-fundadora de Ac2ality",
    bio: "Nueva generación de medios y comunicación para jóvenes.",
    topics: ["medios digitales", "Ac2ality", "TikTok", "comunicación", "emprendimiento joven"],
    summary: [
      "Daniela Macarena co-fundó Ac2ality, el medio que explica la actualidad a millones de jóvenes en vertical.",
      "Nos cuenta cómo se monta un medio desde una habitación, qué funciona de verdad en redes y cómo se sostiene un negocio informativo con audiencia joven.",
    ],
  },
  {
    slug: "mikel-echavarren",
    name: "Mikel Echavarren",
    role: "CEO de Colliers España",
    bio: "Muy buena entrevista con unos jóvenes muy simpáticos y preparados",
    youtubeId: "ARO5S1I5cg8",
    topics: ["real estate", "inversión inmobiliaria", "ciclos económicos", "mercado inmobiliario"],
    summary: [
      "Mikel Echavarren es CEO de Colliers España. En este episodio habla de ciclos inmobiliarios, dónde está el dinero inteligente y cómo leer el mercado antes de que gire.",
    ],
  },
  {
    slug: "sonsoles-onega",
    name: "Sonsoles Ónega",
    role: "Periodista, presentadora y escritora",
    bio: "Premio Planeta. Televisión, literatura y oficio periodístico.",
    topics: ["periodismo", "televisión", "literatura", "Premio Planeta"],
    summary: [
      "Sonsoles Ónega compagina la televisión en directo con la escritura, y ganó el Premio Planeta. Nos habla del oficio: escuchar, preguntar y contar.",
      "Hablamos de cómo se prepara un directo, de la disciplina de escribir novelas en paralelo y de lo que la exposición pública te quita.",
    ],
  },
  {
    slug: "massimiliano-squillace",
    name: "Massimiliano Squillace",
    role: "CEO y fundador de Contents.com",
    bio: "Emprendedor, inversor y mentor de startups. Construye la próxima ola de la IA.",
    topics: ["IA", "Contents.com", "emprendimiento", "inversión", "startups"],
    summary: [
      "Massimiliano Squillace fundó Contents.com, la plataforma de generación de contenidos multilingüe impulsada por inteligencia artificial.",
      "Con más de 50 inversiones a sus espaldas y una trayectoria de exited founder, hablamos de cómo se construye una startup escalable, qué aprendió vendiendo una compañía y por qué cree que la IA va a redefinir cómo se produce el conocimiento.",
    ],
  },
  {
    slug: "rocio-monasterio",
    name: "Rocío Monasterio",
    role: "Arquitecta y exdiputada autonómica",
    bio: "Política, empresaria y arquitecta. Liderazgo con convicción y gestión pública.",
    topics: ["política española", "liderazgo", "gestión pública", "arquitectura", "empresa"],
    summary: [
      "Rocío Monasterio combina una trayectoria en arquitectura y empresa con años de responsabilidad política en la Asamblea de Madrid.",
      "En Diario del Poder habla de cómo se toman decisiones bajo presión mediática, de la relación entre convicción y gestión, y de lo que aprendió dirigiendo equipos en sectores tan distintos.",
      "Cierra con una reflexión sobre el papel de las nuevas generaciones en la política y la empresa.",
    ],
  },
  {
    slug: "arturo-de-las-heras",
    name: "Arturo de las Heras",
    role: "Presidente del Grupo Educativo CEF.- UDIMA",
    bio: "Educación superior, emprendimiento y formación de las nuevas generaciones.",
    topics: ["educación", "universidad", "emprendimiento", "talento joven", "gestión empresarial"],
    summary: [
      "Arturo de las Heras dirige uno de los grupos educativos privados de referencia en España, con miles de estudiantes formándose cada año.",
      "En Diario del Poder analiza cómo ha cambiado la educación superior, el peso real de la formación online y qué competencias marcan hoy la diferencia al entrar en el mercado laboral.",
      "Comparte además su visión sobre el emprendimiento y el papel de las instituciones educativas en la creación de talento.",
    ],
  },
];

export const getGuestBySlug = (slug: string) => guestList.find((g) => g.slug === slug);

export const getEpisodeBySlug = (slug: string) => episodeList.find((e) => e.slug === slug);
