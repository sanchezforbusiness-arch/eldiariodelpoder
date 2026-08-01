export type EpisodeEntry = {
  n: string;
  guest: string;
  title: string;
  url: string;
  description: string;
  role?: string;
  date?: string;
  duration?: string;
};

export const episodeList: EpisodeEntry[] = [
  {
    n: "01",
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
    n: "02",
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
    n: "03",
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
    n: "04",
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
    n: "05",
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

export type GuestEntry = { name: string; role: string; bio: string };

export const guestList: GuestEntry[] = [
  { name: "José María Aznar", role: "Expresidente del Gobierno de España", bio: "Presidente del Gobierno entre 1996 y 2004. Habla de liderazgo político, reformas y legado." },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", bio: "Banquero y presidente de Ecuador (2021-2023). Gobernar en crisis y decisiones de Estado." },
  { name: "Esperanza Aguirre", role: "Expresidenta de la Comunidad de Madrid", bio: "Referente político español. Poder, prensa y convicciones." },
  { name: "Marcos de Quinto", role: "Exvicepresidente mundial de Coca-Cola", bio: "Directivo y empresario. Marca, marketing global y liderazgo corporativo." },
  { name: "Javier Tebas", role: "Presidente de LaLiga", bio: "El negocio del fútbol español, derechos audiovisuales y gestión deportiva." },
  { name: "Andrés Rodríguez", role: "Presidente y editor de Forbes España", bio: "Medios, lujo y la construcción de una marca de prestigio." },
  { name: "Arturo Coello", role: "Número 1 del mundo de pádel", bio: "Alto rendimiento, presión y mentalidad de campeón desde muy joven." },
  { name: "Martín Sellés", role: "Presidente de Farmaindustria · ex CEO Johnson & Johnson España", bio: "Industria farmacéutica, innovación y salud." },
  { name: "Jordi Juan", role: "Director de La Vanguardia", bio: "Periodismo, poder y el futuro de los medios en español." },
  { name: "Rosa Lagarrigue", role: "Fundadora de RLM · Manager de artistas", bio: "La manager más influyente de la música en España." },
  { name: "José Carlos González Hurtado", role: "Presidente de EWTN · ex CEO en P&G", bio: "Autor de 'Nuevas evidencias científicas de la existencia de Dios'. Fe, ciencia y empresa." },
  { name: "Federica Fornaciari", role: "Founder de SenYours y NoBrainer Partners", bio: "Ex-Bain, profesora en IE, IESE y Bocconi. Estrategia y marca." },
  { name: "Miguel Anxo Bastos", role: "Economista y profesor", bio: "Escuela austriaca, libertad económica y análisis del poder." },
  { name: "Daniela Macarena", role: "Co-fundadora de Ac2ality", bio: "Nueva generación de medios y comunicación para jóvenes." },
  { name: "Sonsoles Ónega", role: "Periodista, presentadora y escritora", bio: "Premio Planeta. Televisión, literatura y oficio periodístico." },
];
