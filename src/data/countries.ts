// Páginas por país: /paises/<slug>. Contenido editorial propio de cada país.
// Regla: solo se citan como entrevistas los episodios publicados en src/data/podcast.ts.

export type CountryRegion =
  | "Norteamérica"
  | "Centroamérica y Caribe"
  | "Sudamérica"
  | "Europa"
  | "África";

export type CountryEntry = {
  slug: string;
  name: string;
  /** ISO 3166-1 alfa-2 */
  iso: string;
  /** Código de idioma-región para inLanguage / og:locale */
  locale: string;
  region: CountryRegion;
  /** Zonas horarias para calcular la hora de estreno (lunes 15:00 en Madrid) */
  timeZones: { label: string; tz: string }[];
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string[];
  keys: { t: string; d: string }[];
  episodes: { slug: string; why: string }[];
  sponsor: string;
  guestsAnswer: string;
  listenNote?: string;
};

const JCGH = "jose-carlos-gonzalez-hurtado-el-poder-es-hacer-el-bien";
const BASTOS = "miguel-anxo-bastos-si-quieres-puedes-es-un-mito";
const AGUIRRE = "esperanza-aguirre-cuatro-decadas-en-politica";
const ROSA = "rosa-lagarrigue-ser-ambicioso-es-sano";
const JJ = "jordi-juan-la-teoria-de-los-cajones";
const ANDRES = "andres-rodriguez-forbes-lujo-y-poder";
const LASSO = "guillermo-lasso-gobernar-en-crisis";
const AZNAR = "jose-maria-aznar-liderar-un-pais";
const MIKEL = "mikel-echavarren-real-estate-ciclos";

const pending = (name: string) =>
  `Todavía no. Es una ausencia que queremos corregir: si conoces a un líder de ${name} que deba sentarse en esta mesa, propónnoslo desde esta misma página.`;

export const countryList: CountryEntry[] = [
  {
    slug: "mexico",
    name: "México",
    iso: "MX",
    locale: "es-MX",
    region: "Norteamérica",
    timeZones: [
      { label: "Ciudad de México", tz: "America/Mexico_City" },
      { label: "Tijuana", tz: "America/Tijuana" },
    ],
    metaTitle: "Podcast de liderazgo en México | Diario del Poder",
    metaDescription:
      "El podcast en español con expresidentes, CEOs y referentes, para quien lidera en México. Entrevistas largas sobre poder, empresa y legado.",
    headline: "Diario del Poder en México",
    intro: [
      "México es el país con más hispanohablantes del mundo y, para cualquier medio en español, la audiencia que decide si una conversación trasciende o se queda en casa. Diario del Poder se graba en Madrid, pero se piensa para quien dirige equipos, empresas o instituciones a ambos lados del Atlántico.",
      "La relación entre España y México es, sobre todo, empresarial: capital español en banca, energía, infraestructuras y hoteles, y capital mexicano cada vez más presente en Madrid. Nuestras conversaciones cruzan ese puente: cómo se decide, cómo se construye una marca y qué separa al que tiene dinero del que tiene influencia.",
    ],
    keys: [
      { t: "Empresa sin intermediarios", d: "Directivos que han llevado compañías globales cuentan cómo se decide de verdad, sin el filtro de la nota de prensa." },
      { t: "Madrid como plaza", d: "Para el inversor y el directivo mexicano que mira a España: inmobiliario, medios y redes de poder explicados desde dentro." },
      { t: "Formato largo", d: "Una hora o más por conversación. Para escuchar en el tráfico de la ciudad o en un vuelo a Madrid." },
    ],
    episodes: [
      { slug: MIKEL, why: "Inversión inmobiliaria y ciclos: el mercado de Madrid al que mira buena parte del capital mexicano." },
      { slug: ANDRES, why: "Medios, lujo e influencia contados por quien preside Forbes en España." },
      { slug: JCGH, why: "De Procter & Gamble y Carrefour a presidir EWTN: liderazgo empresarial con propósito." },
      { slug: ROSA, why: "La industria musical en español, el mercado que México y España comparten." },
    ],
    sponsor:
      "Para marcas mexicanas que quieren entrar en España y para marcas españolas con negocio en México: una audiencia de directivos, fundadores y jóvenes con ambición a los dos lados.",
    guestsAnswer: pending("México"),
  },
  {
    slug: "colombia",
    name: "Colombia",
    iso: "CO",
    locale: "es-CO",
    region: "Sudamérica",
    timeZones: [{ label: "Bogotá", tz: "America/Bogota" }],
    metaTitle: "Podcast de liderazgo en Colombia | Diario del Poder",
    metaDescription:
      "Entrevistas largas en español con expresidentes, CEOs y referentes. El podcast de liderazgo y poder para quien decide en Colombia.",
    headline: "Diario del Poder en Colombia",
    intro: [
      "Colombia tiene una de las comunidades latinoamericanas más numerosas de España y un ecosistema emprendedor que en Bogotá y Medellín ha dejado de ser promesa. Es una audiencia que conoce bien el coste de gobernar en crisis y el valor de las instituciones que aguantan.",
      "En Diario del Poder hablamos de eso: de decisiones de Estado tomadas bajo presión, de empresas que crecen fuera de su país y de lo que la generación que viene puede aprender de quien ya ha pasado por la primera línea.",
    ],
    keys: [
      { t: "Gobernar en crisis", d: "Expresidentes latinoamericanos explican cómo se decide cuando no hay margen de error." },
      { t: "Empresa que cruza fronteras", d: "Directivos con carrera en multinacionales cuentan cómo se dirige en varios países a la vez." },
      { t: "Para la nueva generación", d: "Conversaciones pensadas para jóvenes profesionales y emprendedores con ambición." },
    ],
    episodes: [
      { slug: LASSO, why: "Un expresidente andino sobre seguridad, reforma económica y el precio personal del poder." },
      { slug: JCGH, why: "Liderazgo empresarial y propósito: de P&G y Carrefour a presidir EWTN." },
      { slug: ROSA, why: "Cómo se construye una carrera larga en la música en español." },
      { slug: JJ, why: "El método de los cajones para decidir en plena crisis, de un director de periódico." },
    ],
    sponsor:
      "Para marcas con operación en Colombia y España que buscan asociarse a contenido serio, en un entorno sin ruido y ante una audiencia de decisores.",
    guestsAnswer: pending("Colombia"),
  },
  {
    slug: "argentina",
    name: "Argentina",
    iso: "AR",
    locale: "es-AR",
    region: "Sudamérica",
    timeZones: [{ label: "Buenos Aires", tz: "America/Argentina/Buenos_Aires" }],
    metaTitle: "Podcast de liderazgo en Argentina | Diario del Poder",
    metaDescription:
      "Economía, poder y empresa en conversaciones largas en español. Expresidentes, CEOs y pensadores en el podcast Diario del Poder.",
    headline: "Diario del Poder en Argentina",
    intro: [
      "Pocos países discuten de economía con la intensidad de Argentina. El debate sobre la escuela austriaca, el gasto público y la estabilidad del dinero ha salido de las aulas y ha llegado a la Casa Rosada, y hay una audiencia joven que quiere entenderlo de primera mano.",
      "Diario del Poder lleva ese debate a una conversación larga, sin consignas: qué es el poder, quién lo ejerce y qué hace falta para construir algo que dure más que un ciclo político.",
    ],
    keys: [
      { t: "Economía con nombre propio", d: "Economistas y empresarios explican sus ideas sin recortes, con tiempo para matizar." },
      { t: "Dinero y libertad", d: "Inflación, monedas digitales de bancos centrales y bitcoin, discutidos con argumentos." },
      { t: "Sin guion", d: "Entrevistas de una hora o más: lo contrario del corte de quince segundos." },
    ],
    episodes: [
      { slug: BASTOS, why: "Escuela austriaca, capitalismo y dinero programable con uno de sus divulgadores más escuchados en español." },
      { slug: LASSO, why: "Reforma económica y crisis vistas desde la presidencia de un país latinoamericano." },
      { slug: JCGH, why: "Carrefour, P&G y el liderazgo empresarial entendido como responsabilidad." },
      { slug: JJ, why: "Periodismo, poder y cómo se dirige un diario centenario en plena crisis del sector." },
    ],
    sponsor:
      "Para marcas financieras, tecnológicas y educativas que quieren hablarle a una audiencia argentina exigente, interesada en economía y en emprender.",
    guestsAnswer: pending("Argentina"),
  },
  {
    slug: "peru",
    name: "Perú",
    iso: "PE",
    locale: "es-PE",
    region: "Sudamérica",
    timeZones: [{ label: "Lima", tz: "America/Lima" }],
    metaTitle: "Podcast de liderazgo en Perú | Diario del Poder",
    metaDescription:
      "El podcast en español sobre liderazgo, poder y empresa. Expresidentes, CEOs y referentes en entrevistas largas. Para quien decide en Perú.",
    headline: "Diario del Poder en Perú",
    intro: [
      "Perú ha visto pasar a varios presidentes en pocos años mientras su economía mantenía una disciplina que muchos vecinos envidian. Esa distancia entre la política y la gestión es justo el tipo de tensión que exploramos en Diario del Poder.",
      "Nuestros invitados han estado al frente de gobiernos, empresas y medios. Les preguntamos cómo se toman las decisiones difíciles y qué le dirían a quien empieza hoy en Lima, Arequipa o Trujillo.",
    ],
    keys: [
      { t: "Instituciones y crisis", d: "Qué sostiene a un país cuando la política se tambalea, contado por quien ha gobernado." },
      { t: "Gestión empresarial", d: "Directivos de multinacionales sobre cómo se dirige con equipos en decenas de países." },
      { t: "Criterio antes que ruido", d: "Conversaciones para formarse una opinión propia, no para confirmar la de siempre." },
    ],
    episodes: [
      { slug: LASSO, why: "Gobernar un país andino en plena crisis política y económica." },
      { slug: BASTOS, why: "Esfuerzo, capitalismo y dinero: el debate económico sin consignas." },
      { slug: JCGH, why: "La carrera de un directivo que llegó a la cúpula de P&G y Carrefour." },
    ],
    sponsor:
      "Para marcas con presencia en Perú y en España que buscan un entorno editorial serio y una audiencia de profesionales y emprendedores.",
    guestsAnswer: pending("Perú"),
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    iso: "VE",
    locale: "es-VE",
    region: "Sudamérica",
    timeZones: [{ label: "Caracas", tz: "America/Caracas" }],
    metaTitle: "Podcast de liderazgo para Venezuela | Diario del Poder",
    metaDescription:
      "Poder, libertad económica y empresa en entrevistas largas en español. El podcast Diario del Poder, para venezolanos dentro y fuera del país.",
    headline: "Diario del Poder en Venezuela",
    intro: [
      "La audiencia venezolana vive hoy repartida entre Caracas, Madrid, Miami, Bogotá y medio continente. Madrid, en particular, se ha convertido en hogar de una comunidad venezolana que emprende, invierte y opina. Para muchos, Diario del Poder es una conversación que se escucha entre dos ciudades.",
      "Pocos públicos saben mejor lo que significa perder la estabilidad del dinero o la separación de poderes. Por eso hablamos de libertad económica, de instituciones y de cómo se reconstruye lo que se rompe.",
    ],
    keys: [
      { t: "El valor del dinero", d: "Inflación, monedas digitales de los bancos centrales y bitcoin, explicados sin tecnicismos." },
      { t: "Diáspora que emprende", d: "Empresa, inversión y vida entre continentes, con Madrid como plaza." },
      { t: "Poder con contrapesos", d: "Expresidentes y referentes sobre qué separa gobernar de mandar." },
    ],
    episodes: [
      { slug: BASTOS, why: "Dinero programable y libertad: «El problema no es si lo van a hacer, es que pueden hacerlo»." },
      { slug: LASSO, why: "Reforma económica y crisis de seguridad desde la presidencia de Ecuador." },
      { slug: MIKEL, why: "Ciclos inmobiliarios en Madrid, la ciudad donde invierte buena parte de la diáspora." },
    ],
    sponsor:
      "Para marcas que quieren llegar a la comunidad venezolana en España y en América: profesionales, inversores y emprendedores con alto poder de decisión.",
    guestsAnswer: pending("Venezuela"),
  },
  {
    slug: "chile",
    name: "Chile",
    iso: "CL",
    locale: "es-CL",
    region: "Sudamérica",
    timeZones: [{ label: "Santiago", tz: "America/Santiago" }],
    metaTitle: "Podcast de liderazgo en Chile | Diario del Poder",
    metaDescription:
      "Entrevistas largas en español con expresidentes, CEOs y referentes. Liderazgo, economía y empresa para quien decide en Chile.",
    headline: "Diario del Poder en Chile",
    intro: [
      "Chile lleva décadas siendo el caso de estudio de la economía abierta en América Latina, y también el país donde ese modelo se ha discutido con más fuerza. Es una audiencia acostumbrada a debatir de política económica en serio.",
      "En Diario del Poder escuchará a quienes han dirigido gobiernos, empresas y medios, con tiempo para explicar por qué decidieron lo que decidieron y qué harían distinto.",
    ],
    keys: [
      { t: "Economía abierta, en debate", d: "Mercado, Estado y esfuerzo individual, discutidos con argumentos y sin consignas." },
      { t: "Empresa global", d: "Directivos con carrera internacional sobre cómo se gestiona a escala." },
      { t: "Formato largo", d: "Conversaciones para escuchar enteras, no para recortar." },
    ],
    episodes: [
      { slug: BASTOS, why: "Capitalismo y cálculo económico frente a la planificación central." },
      { slug: LASSO, why: "Gobernar en crisis: decisiones de Estado con el país mirando." },
      { slug: MIKEL, why: "Inversión inmobiliaria y cómo leer el mercado antes de que gire." },
    ],
    sponsor:
      "Para marcas financieras, de inversión y de educación ejecutiva con negocio en Chile y en España.",
    guestsAnswer: pending("Chile"),
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    iso: "EC",
    locale: "es-EC",
    region: "Sudamérica",
    timeZones: [{ label: "Quito", tz: "America/Guayaquil" }],
    metaTitle: "Podcast de liderazgo en Ecuador | Diario del Poder",
    metaDescription:
      "Guillermo Lasso, expresidente de Ecuador, en el podcast Diario del Poder. Entrevistas largas en español con líderes, CEOs y referentes.",
    headline: "Diario del Poder en Ecuador",
    intro: [
      "Ecuador tiene una relación especial con Diario del Poder: Guillermo Lasso, presidente del país entre 2021 y 2023, se sentó con nosotros para contar cómo se gobierna en plena crisis. Fue una de las primeras conversaciones del podcast y sigue siendo de las más escuchadas.",
      "La comunidad ecuatoriana es además una de las más numerosas de América Latina en España, y en Madrid es parte de la vida diaria. Para esa audiencia, a los dos lados del océano, hacemos entrevistas sobre poder, empresa y legado.",
    ],
    keys: [
      { t: "La presidencia por dentro", d: "Lasso explica decisiones de Estado, seguridad y reforma económica, sin guion." },
      { t: "De la banca a la política", d: "Qué se aprende del sector privado y qué no sirve al llegar a Carondelet." },
      { t: "Entre Quito y Madrid", d: "Conversaciones que conectan a la comunidad ecuatoriana en España con su país." },
    ],
    episodes: [
      { slug: LASSO, why: "El expresidente de Ecuador sobre gobernar en crisis y el precio personal del poder." },
      { slug: BASTOS, why: "Dinero, dolarización y libertad: el debate económico que Ecuador conoce bien." },
      { slug: JCGH, why: "Liderazgo empresarial y fe desde la presidencia de EWTN." },
    ],
    sponsor:
      "Para marcas con negocio en Ecuador y España: una audiencia de profesionales y emprendedores que siguen de cerca la política y la empresa.",
    guestsAnswer:
      "Sí. Guillermo Lasso, presidente de Ecuador entre 2021 y 2023, es el invitado del episodio 3, «Gobernar en plena crisis».",
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    iso: "GT",
    locale: "es-GT",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "Ciudad de Guatemala", tz: "America/Guatemala" }],
    metaTitle: "Podcast de liderazgo en Guatemala | Diario del Poder",
    metaDescription:
      "El podcast en español con expresidentes, CEOs y referentes. Liderazgo, empresa e instituciones para quien decide en Guatemala.",
    headline: "Diario del Poder en Guatemala",
    intro: [
      "Guatemala es la mayor economía de Centroamérica y una de las que más jóvenes tiene. Esa combinación —un mercado grande y una generación que empieza— es exactamente la audiencia para la que nació Diario del Poder.",
      "Llevamos a la conversación a quienes han dirigido gobiernos y compañías para preguntarles lo que casi nunca se pregunta: cómo deciden, qué les costó y qué le dirían a un joven que quiere llegar lejos.",
    ],
    keys: [
      { t: "Instituciones que aguantan", d: "Qué sostiene a un país en crisis, contado por quien ha gobernado." },
      { t: "Empresa familiar y global", d: "Cómo se profesionaliza una compañía y se lleva fuera de su mercado." },
      { t: "Para quien empieza", d: "Consejos reales de quien ya estuvo en la primera línea." },
    ],
    episodes: [
      { slug: LASSO, why: "Seguridad y reforma económica desde una presidencia latinoamericana." },
      { slug: JCGH, why: "Una carrera en la cúpula de P&G y Carrefour y lo que enseña sobre liderar." },
      { slug: BASTOS, why: "Esfuerzo, capitalismo y por qué el «si quieres, puedes» se queda corto." },
    ],
    sponsor:
      "Para marcas con presencia en Centroamérica que quieren asociarse a contenido de liderazgo serio ante una audiencia joven y profesional.",
    guestsAnswer: pending("Guatemala"),
  },
  {
    slug: "cuba",
    name: "Cuba",
    iso: "CU",
    locale: "es-CU",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "La Habana", tz: "America/Havana" }],
    metaTitle: "Podcast de liderazgo para Cuba | Diario del Poder",
    metaDescription:
      "Entrevistas largas en español sobre poder, libertad y empresa. Diario del Poder, para cubanos en la isla, Miami y Madrid. Gratis en YouTube.",
    headline: "Diario del Poder en Cuba",
    intro: [
      "La conversación cubana se reparte entre La Habana, Miami y Madrid. Diario del Poder llega a esa audiencia con entrevistas largas sobre lo que significa ejercer el poder, cómo se construye una empresa y qué papel tienen las instituciones en la vida de un país.",
      "Son temas que en Cuba se viven de forma muy concreta. Por eso nuestras entrevistas están completas y gratis en YouTube, la vía más accesible desde la isla.",
    ],
    keys: [
      { t: "Libertad e instituciones", d: "Qué separa gobernar de mandar, explicado por quien ha estado en el poder." },
      { t: "Emprender", d: "Cómo se levanta una empresa y qué aprendieron quienes llegaron a dirigir multinacionales." },
      { t: "Accesible", d: "Entrevistas completas y gratuitas en YouTube, sin registro." },
    ],
    episodes: [
      { slug: BASTOS, why: "Capitalismo, planificación central y por qué nadie puede controlar todas las variables." },
      { slug: AGUIRRE, why: "Libertad de elección educativa: «Los hijos son de los padres, no del régimen»." },
      { slug: LASSO, why: "Gobernar en crisis desde la presidencia de Ecuador." },
    ],
    sponsor:
      "Para marcas que quieren llegar a la comunidad cubana de Miami y Madrid con contenido serio sobre liderazgo y empresa.",
    guestsAnswer: pending("Cuba"),
    listenNote:
      "Spotify no ofrece servicio en Cuba. Todas las entrevistas están completas y gratis en el canal de YouTube @eldiariodelpoder.",
  },
  {
    slug: "bolivia",
    name: "Bolivia",
    iso: "BO",
    locale: "es-BO",
    region: "Sudamérica",
    timeZones: [{ label: "La Paz", tz: "America/La_Paz" }],
    metaTitle: "Podcast de liderazgo en Bolivia | Diario del Poder",
    metaDescription:
      "Economía, poder y empresa en entrevistas largas en español. Expresidentes, CEOs y referentes en el podcast Diario del Poder, para Bolivia.",
    headline: "Diario del Poder en Bolivia",
    intro: [
      "En Bolivia el debate sobre la economía se ha vuelto cotidiano: el acceso al dólar, el papel del Estado y la estabilidad del dinero están en todas las conversaciones. Es un buen momento para escuchar a quien ha pensado y decidido sobre esas cuestiones.",
      "Diario del Poder reúne a expresidentes, economistas y directivos para hablar con calma de lo que suele discutirse a gritos.",
    ],
    keys: [
      { t: "Estabilidad del dinero", d: "Inflación, moneda y bancos centrales, explicados con argumentos." },
      { t: "Gobernar en crisis", d: "Cómo se decide cuando el margen es mínimo y el país mira." },
      { t: "Esfuerzo y oportunidad", d: "Qué hace falta para prosperar, más allá del eslogan." },
    ],
    episodes: [
      { slug: BASTOS, why: "Dinero, capitalismo y libertad económica sin tecnicismos." },
      { slug: LASSO, why: "Reforma económica y crisis desde la presidencia de un país andino." },
      { slug: JCGH, why: "Liderazgo empresarial y propósito, de P&G a EWTN." },
    ],
    sponsor:
      "Para marcas financieras y educativas que quieren llegar a profesionales bolivianos dentro y fuera del país.",
    guestsAnswer: pending("Bolivia"),
  },
  {
    slug: "republica-dominicana",
    name: "República Dominicana",
    iso: "DO",
    locale: "es-DO",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "Santo Domingo", tz: "America/Santo_Domingo" }],
    metaTitle: "Podcast de liderazgo en República Dominicana | DDP",
    metaDescription:
      "El podcast en español con expresidentes, CEOs y referentes. Empresa, inversión y liderazgo para quien decide en República Dominicana.",
    headline: "Diario del Poder en República Dominicana",
    intro: [
      "República Dominicana lleva décadas entre las economías que más crecen de América Latina, con un sector turístico donde las grandes cadenas hoteleras españolas tienen un peso enorme. Pocos países tienen una relación empresarial tan estrecha con España.",
      "Diario del Poder habla a esa comunidad de negocios: directivos, inversores y jóvenes profesionales que quieren entender cómo se decide en las grandes compañías y en los gobiernos.",
    ],
    keys: [
      { t: "Inversión y ciclos", d: "Inmobiliario, turismo y cómo leer un mercado antes de que gire." },
      { t: "Puente con España", d: "Empresa española en el Caribe y capital caribeño en Madrid." },
      { t: "Liderazgo con propósito", d: "Directivos que llegaron arriba y cuentan qué aprendieron." },
    ],
    episodes: [
      { slug: MIKEL, why: "Ciclos inmobiliarios y dónde está hoy el dinero inteligente." },
      { slug: ANDRES, why: "Lujo, medios e influencia desde la presidencia de Forbes España." },
      { slug: ROSA, why: "La música en español como industria: carreras largas frente a éxitos rápidos." },
    ],
    sponsor:
      "Para marcas de turismo, inversión e inmobiliario con negocio entre el Caribe y España: una audiencia de decisores a ambos lados.",
    guestsAnswer: pending("República Dominicana"),
  },
  {
    slug: "honduras",
    name: "Honduras",
    iso: "HN",
    locale: "es-HN",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "Tegucigalpa", tz: "America/Tegucigalpa" }],
    metaTitle: "Podcast de liderazgo en Honduras | Diario del Poder",
    metaDescription:
      "Entrevistas largas en español con expresidentes, CEOs y referentes. Liderazgo, instituciones y empresa para Honduras y su diáspora.",
    headline: "Diario del Poder en Honduras",
    intro: [
      "La comunidad hondureña en España crece año a año, y con ella una generación que trabaja, estudia y emprende entre Tegucigalpa, San Pedro Sula, Madrid y Estados Unidos. Para ellos hacemos entrevistas que no se quedan en el titular.",
      "En Diario del Poder escuchará a quienes han dirigido países y empresas contar cómo se toman las decisiones difíciles y qué consejo darían a quien empieza.",
    ],
    keys: [
      { t: "Seguridad y Estado", d: "Cómo se gobierna con la seguridad como urgencia, contado desde la presidencia." },
      { t: "Esfuerzo", d: "Trabajo, oportunidad y por qué el atajo casi nunca funciona." },
      { t: "Entre países", d: "Conversaciones para una audiencia que vive entre continentes." },
    ],
    episodes: [
      { slug: LASSO, why: "Seguridad, reforma y el precio personal del poder." },
      { slug: BASTOS, why: "«El esfuerzo es fundamental en la vida. No hay que buscar los atajos»." },
      { slug: JCGH, why: "«Eres el producto de tus decisiones»: liderazgo y responsabilidad individual." },
    ],
    sponsor:
      "Para marcas que quieren llegar a la comunidad hondureña en España y Estados Unidos con contenido de valor.",
    guestsAnswer: pending("Honduras"),
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    iso: "PY",
    locale: "es-PY",
    region: "Sudamérica",
    timeZones: [{ label: "Asunción", tz: "America/Asuncion" }],
    metaTitle: "Podcast de liderazgo en Paraguay | Diario del Poder",
    metaDescription:
      "Economía, empresa y poder en entrevistas largas en español. Expresidentes, CEOs y referentes en el podcast Diario del Poder, para Paraguay.",
    headline: "Diario del Poder en Paraguay",
    intro: [
      "Paraguay se ha hecho un nombre como una de las economías con impuestos más bajos de la región, y eso atrae a emprendedores e inversores de todo el continente. Es una audiencia práctica, que valora a quien explica cómo se crea riqueza.",
      "En Diario del Poder hablamos de empresa, de economía y de liderazgo con quienes lo han ejercido, en conversaciones largas y sin guion.",
    ],
    keys: [
      { t: "Crear riqueza", d: "Capitalismo, impuestos y emprendimiento, discutidos con argumentos." },
      { t: "Inversión", d: "Cómo se lee un mercado y dónde se mueve el dinero inteligente." },
      { t: "Sin guion", d: "Entrevistas completas para escuchar enteras." },
    ],
    episodes: [
      { slug: BASTOS, why: "«Todos somos empresarios; el problema es saber de qué»." },
      { slug: MIKEL, why: "Ciclos inmobiliarios y dinero inteligente." },
      { slug: LASSO, why: "Gobernar en crisis desde la experiencia de la banca y la presidencia." },
    ],
    sponsor:
      "Para marcas financieras, agroindustriales y de inversión que buscan una audiencia de emprendedores y decisores paraguayos.",
    guestsAnswer: pending("Paraguay"),
  },
  {
    slug: "el-salvador",
    name: "El Salvador",
    iso: "SV",
    locale: "es-SV",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "San Salvador", tz: "America/El_Salvador" }],
    metaTitle: "Podcast de liderazgo en El Salvador | Diario del Poder",
    metaDescription:
      "Bitcoin, dinero y poder en entrevistas largas en español. Expresidentes, CEOs y economistas en el podcast Diario del Poder, para El Salvador.",
    headline: "Diario del Poder en El Salvador",
    intro: [
      "El Salvador fue en 2021 el primer país del mundo en dar a bitcoin curso legal. Desde entonces, el debate sobre qué es el dinero y quién debe controlarlo dejó de ser teórico para los salvadoreños.",
      "Diario del Poder entra en esa discusión con economistas, expresidentes y directivos, y con una pregunta que atraviesa todas nuestras conversaciones: qué hace uno con el poder cuando lo tiene.",
    ],
    keys: [
      { t: "Bitcoin y dinero", d: "Monedas digitales, bancos centrales y libertad, explicados sin tecnicismos." },
      { t: "Seguridad y Estado", d: "Cómo se decide cuando la seguridad es la prioridad del país." },
      { t: "Generación joven", d: "Entrevistas pensadas para quien empieza y quiere llegar lejos." },
    ],
    episodes: [
      { slug: BASTOS, why: "Bitcoin, stablecoins y dinero programable de los bancos centrales." },
      { slug: LASSO, why: "Seguridad y reforma económica desde la presidencia." },
      { slug: JCGH, why: "Liderazgo empresarial y responsabilidad individual." },
    ],
    sponsor:
      "Para marcas tecnológicas, financieras y cripto que quieren llegar a una audiencia salvadoreña que ya vive el debate sobre el dinero.",
    guestsAnswer: pending("El Salvador"),
  },
  {
    slug: "nicaragua",
    name: "Nicaragua",
    iso: "NI",
    locale: "es-NI",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "Managua", tz: "America/Managua" }],
    metaTitle: "Podcast de liderazgo para Nicaragua | Diario del Poder",
    metaDescription:
      "Entrevistas largas en español sobre poder, instituciones y empresa. Diario del Poder, para nicaragüenses en el país, Costa Rica, Miami y Madrid.",
    headline: "Diario del Poder en Nicaragua",
    intro: [
      "Buena parte de la audiencia nicaragüense vive hoy fuera: en Costa Rica, en Miami, en Madrid. Es una comunidad que conoce de cerca el valor de las instituciones y de la libertad de prensa, y que busca conversaciones con criterio.",
      "Diario del Poder ofrece eso: entrevistas largas con quienes han ejercido el poder en gobiernos, empresas y medios, sobre cómo se decide y qué se deja detrás.",
    ],
    keys: [
      { t: "Prensa y poder", d: "La relación entre medios e instituciones, contada por un director de periódico." },
      { t: "Instituciones", d: "Qué separa gobernar de mandar." },
      { t: "Diáspora", d: "Conversaciones para una audiencia repartida entre varios países." },
    ],
    episodes: [
      { slug: JJ, why: "Periodismo y poder: cómo se dirige un diario independiente en plena crisis." },
      { slug: AGUIRRE, why: "Libertad de elección y cuatro décadas de vida política." },
      { slug: LASSO, why: "Gobernar en crisis desde la presidencia de Ecuador." },
    ],
    sponsor:
      "Para marcas que quieren llegar a la comunidad nicaragüense en Centroamérica, Estados Unidos y España.",
    guestsAnswer: pending("Nicaragua"),
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    iso: "CR",
    locale: "es-CR",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "San José", tz: "America/Costa_Rica" }],
    metaTitle: "Podcast de liderazgo en Costa Rica | Diario del Poder",
    metaDescription:
      "El podcast en español con expresidentes, CEOs y referentes. Liderazgo, empresa e instituciones para quien decide en Costa Rica.",
    headline: "Diario del Poder en Costa Rica",
    intro: [
      "Costa Rica abolió su ejército en 1948 y ha construido desde entonces una de las democracias más estables de América Latina, además de un polo de inversión extranjera en tecnología y dispositivos médicos. Es una audiencia con alta formación y mirada internacional.",
      "Diario del Poder le ofrece conversaciones largas con líderes de gobiernos, empresas y medios sobre cómo se decide y cómo se construye algo que dure.",
    ],
    keys: [
      { t: "Instituciones estables", d: "Qué hace que un país aguante, contado por quien ha gobernado." },
      { t: "Empresa multinacional", d: "Directivos con carrera global sobre cómo se dirige a escala." },
      { t: "Salud e innovación", d: "Liderazgo en sectores regulados, con tiempo para explicarlo." },
    ],
    episodes: [
      { slug: JCGH, why: "La cúpula de P&G y Carrefour vista por dentro." },
      { slug: LASSO, why: "Decisiones de Estado bajo presión." },
      { slug: JJ, why: "El método de los cajones para decidir sin bloquearse." },
    ],
    sponsor:
      "Para marcas tecnológicas, de salud y de educación ejecutiva con presencia en Costa Rica y en España.",
    guestsAnswer: pending("Costa Rica"),
  },
  {
    slug: "panama",
    name: "Panamá",
    iso: "PA",
    locale: "es-PA",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "Ciudad de Panamá", tz: "America/Panama" }],
    metaTitle: "Podcast de liderazgo en Panamá | Diario del Poder",
    metaDescription:
      "Finanzas, empresa y poder en entrevistas largas en español. Expresidentes, CEOs y referentes en el podcast Diario del Poder, para Panamá.",
    headline: "Diario del Poder en Panamá",
    intro: [
      "Panamá es el centro logístico y financiero de la región y la sede regional de muchas multinacionales. Allí trabajan directivos que dirigen equipos en diez países a la vez y que necesitan contexto, no titulares.",
      "Diario del Poder les ofrece conversaciones largas con quienes han estado al frente de grandes compañías, gobiernos y medios.",
    ],
    keys: [
      { t: "Sede regional", d: "Cómo se dirige en varios países a la vez, contado por directivos globales." },
      { t: "Finanzas e inversión", d: "Ciclos, capital y dónde se mueve el dinero inteligente." },
      { t: "Lujo e influencia", d: "Qué separa al que tiene dinero del que tiene influencia." },
    ],
    episodes: [
      { slug: MIKEL, why: "Ciclos inmobiliarios y dinero inteligente." },
      { slug: ANDRES, why: "Forbes, lujo y poder desde la Forbes House." },
      { slug: JCGH, why: "Liderazgo en multinacionales: P&G, Carrefour, EWTN." },
    ],
    sponsor:
      "Para marcas financieras, logísticas y de lujo con sede regional en Panamá que quieren llegar a decisores de toda la región.",
    guestsAnswer: pending("Panamá"),
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    iso: "UY",
    locale: "es-UY",
    region: "Sudamérica",
    timeZones: [{ label: "Montevideo", tz: "America/Montevideo" }],
    metaTitle: "Podcast de liderazgo en Uruguay | Diario del Poder",
    metaDescription:
      "Entrevistas largas en español con expresidentes, CEOs y referentes. Liderazgo, instituciones y empresa para quien decide en Uruguay.",
    headline: "Diario del Poder en Uruguay",
    intro: [
      "Uruguay es sinónimo de estabilidad institucional en la región, y su audiencia valora la conversación pausada frente a la polémica. Encaja con lo que hacemos.",
      "En Diario del Poder, expresidentes, directivos y referentes explican con tiempo cómo se toman las decisiones que importan y qué legado quieren dejar.",
    ],
    keys: [
      { t: "Instituciones", d: "Qué sostiene a un país cuando llegan las crisis." },
      { t: "Periodismo", d: "Prensa, poder y el futuro de los medios en español." },
      { t: "Conversación pausada", d: "Entrevistas largas, sin interrupciones ni consignas." },
    ],
    episodes: [
      { slug: JJ, why: "Cómo se dirige un periódico centenario en plena crisis del sector." },
      { slug: LASSO, why: "Gobernar en crisis desde la presidencia de Ecuador." },
      { slug: BASTOS, why: "Economía y libertad, explicadas con argumentos." },
    ],
    sponsor:
      "Para marcas financieras, tecnológicas y educativas con negocio en Uruguay y en España.",
    guestsAnswer: pending("Uruguay"),
  },
  {
    slug: "puerto-rico",
    name: "Puerto Rico",
    iso: "PR",
    locale: "es-PR",
    region: "Centroamérica y Caribe",
    timeZones: [{ label: "San Juan", tz: "America/Puerto_Rico" }],
    metaTitle: "Podcast de liderazgo en Puerto Rico | Diario del Poder",
    metaDescription:
      "Música, empresa e inversión en entrevistas largas en español. Expresidentes, CEOs y referentes en el podcast Diario del Poder, para Puerto Rico.",
    headline: "Diario del Poder en Puerto Rico",
    intro: [
      "Puerto Rico vive entre dos idiomas y dos mercados, y ha exportado al mundo buena parte de la música que hoy se escucha en español. También atrae a inversores con sus incentivos fiscales.",
      "Diario del Poder habla a esa audiencia bilingüe y emprendedora con conversaciones largas sobre industria, inversión y liderazgo, en español.",
    ],
    keys: [
      { t: "La industria de la música", d: "Cómo se construye y se protege la carrera de un artista." },
      { t: "Inversión", d: "Capital, ciclos y cómo leer un mercado." },
      { t: "Entre dos mercados", d: "Liderazgo en español para una audiencia que vive entre Estados Unidos y América Latina." },
    ],
    episodes: [
      { slug: ROSA, why: "La mánager de algunas de las grandes figuras de la música en español." },
      { slug: MIKEL, why: "Ciclos inmobiliarios y dinero inteligente." },
      { slug: ANDRES, why: "Lujo, medios e influencia desde Forbes España." },
    ],
    sponsor:
      "Para marcas de entretenimiento, inversión y consumo premium que quieren llegar al público hispano de Puerto Rico y Estados Unidos.",
    guestsAnswer: pending("Puerto Rico"),
  },
  {
    slug: "guinea-ecuatorial",
    name: "Guinea Ecuatorial",
    iso: "GQ",
    locale: "es-GQ",
    region: "África",
    timeZones: [{ label: "Malabo", tz: "Africa/Malabo" }],
    metaTitle: "Podcast en español en Guinea Ecuatorial | Diario del Poder",
    metaDescription:
      "Diario del Poder, el podcast de liderazgo en español, también para Guinea Ecuatorial, el único país africano con el español como lengua oficial.",
    headline: "Diario del Poder en Guinea Ecuatorial",
    intro: [
      "Guinea Ecuatorial es el único país de África con el español como lengua oficial, y mantiene con España lazos históricos, universitarios y familiares. Para su audiencia, el contenido de calidad en español sobre liderazgo y empresa no abunda.",
      "Diario del Poder pone a su alcance conversaciones largas con expresidentes, directivos y referentes, gratis en YouTube y Spotify.",
    ],
    keys: [
      { t: "Español en África", d: "Contenido de liderazgo en la lengua oficial del país." },
      { t: "Formación", d: "Entrevistas pensadas para estudiantes y jóvenes profesionales." },
      { t: "Gratis", d: "Todas las entrevistas completas en YouTube y Spotify." },
    ],
    episodes: [
      { slug: JCGH, why: "Liderazgo y propósito: de las multinacionales a EWTN." },
      { slug: LASSO, why: "Cómo se gobierna en plena crisis." },
      { slug: JJ, why: "El método de los cajones para tomar decisiones." },
    ],
    sponsor:
      "Para instituciones y empresas con presencia en Guinea Ecuatorial que quieren apoyar contenido formativo en español.",
    guestsAnswer: pending("Guinea Ecuatorial"),
  },
  {
    slug: "estados-unidos",
    name: "Estados Unidos",
    iso: "US",
    locale: "es-US",
    region: "Norteamérica",
    timeZones: [
      { label: "Nueva York y Miami", tz: "America/New_York" },
      { label: "Chicago y Houston", tz: "America/Chicago" },
      { label: "Los Ángeles", tz: "America/Los_Angeles" },
    ],
    metaTitle: "Podcast de liderazgo en español en EE. UU. | DDP",
    metaDescription:
      "El podcast de liderazgo en español para la audiencia hispana de Estados Unidos. Expresidentes, CEOs y referentes en entrevistas largas.",
    headline: "Diario del Poder en Estados Unidos",
    intro: [
      "Más de cuarenta millones de personas hablan español en casa en Estados Unidos. Es la segunda comunidad hispanohablante del mundo y, en ciudades como Miami, Houston o Los Ángeles, la que concentra buena parte del dinero, la música y los medios en español.",
      "Diario del Poder ya ha aparecido en Univision. Hacemos entrevistas largas, en español, con quienes han dirigido gobiernos y compañías globales, para una audiencia hispana que quiere referentes de su lengua.",
    ],
    keys: [
      { t: "Liderazgo en tu idioma", d: "Expresidentes y CEOs en español, sin traducción ni doblaje." },
      { t: "Miami como capital", d: "Negocio, música y medios hispanos: la industria que se decide en Florida." },
      { t: "Visto en Univision", d: "El trabajo de Diario del Poder ha salido en la televisión hispana de Estados Unidos." },
    ],
    episodes: [
      { slug: JCGH, why: "Preside EWTN, la cadena católica con sede en Alabama, tras una carrera en P&G y Carrefour." },
      { slug: ROSA, why: "La música en español, una industria con su centro de gravedad en Miami." },
      { slug: LASSO, why: "Un expresidente latinoamericano sobre crisis, seguridad y la relación con Estados Unidos." },
      { slug: AZNAR, why: "La relación de España con Europa y Estados Unidos, contada por un expresidente." },
    ],
    sponsor:
      "Para marcas que quieren llegar al público hispano de alto poder adquisitivo en Estados Unidos con contenido premium en español.",
    guestsAnswer:
      "Todavía ningún invitado estadounidense, aunque José Carlos González Hurtado preside EWTN, cadena con sede en Alabama. Si conoces a un líder hispano de Estados Unidos que deba sentarse en esta mesa, propónnoslo.",
  },
  {
    slug: "espana",
    name: "España",
    iso: "ES",
    locale: "es-ES",
    region: "Europa",
    timeZones: [
      { label: "Madrid", tz: "Europe/Madrid" },
      { label: "Canarias", tz: "Atlantic/Canary" },
    ],
    metaTitle: "Podcast de liderazgo en España | Diario del Poder",
    metaDescription:
      "El podcast español de entrevistas con expresidentes, CEOs y referentes, publicado con La Vanguardia. Liderazgo, poder y legado desde Madrid.",
    headline: "Diario del Poder en España",
    intro: [
      "Diario del Poder nació en España y se graba en Madrid. La Vanguardia es nuestro media partner y publica cada lunes una de nuestras conversaciones, y nuestro trabajo ha salido en La Sexta, Antena 3 y Univision.",
      "Por la mesa han pasado un expresidente del Gobierno, la expresidenta de la Comunidad de Madrid, el presidente de Forbes España o el director de La Vanguardia. Les preguntamos lo que casi nadie pregunta: cómo deciden y qué quieren dejar.",
    ],
    keys: [
      { t: "Con La Vanguardia", d: "Cada lunes, una conversación de Diario del Poder en La Vanguardia." },
      { t: "Política y empresa", d: "Expresidentes, directivos del IBEX y referentes de la cultura y el deporte." },
      { t: "Para la nueva generación", d: "Nacido en la universidad, pensado para jóvenes profesionales con ambición." },
    ],
    episodes: [
      { slug: AZNAR, why: "Liderar un país, por el presidente del Gobierno entre 1996 y 2004." },
      { slug: AGUIRRE, why: "Cuatro décadas en política y la libertad de elección educativa." },
      { slug: JJ, why: "Cómo se dirige La Vanguardia en plena crisis de los medios." },
      { slug: ANDRES, why: "Forbes, lujo y poder desde la Forbes House de Madrid." },
    ],
    sponsor:
      "Para marcas españolas que quieren asociarse al podcast de liderazgo de referencia, con la difusión de La Vanguardia y proyección en toda América.",
    guestsAnswer:
      "Sí, la mayoría: José María Aznar, Esperanza Aguirre, Andrés Rodríguez (Forbes), Jordi Juan (La Vanguardia), Rosa Lagarrigue, José Carlos González Hurtado, Miguel Anxo Bastos y Mikel Echavarren, entre otros.",
  },
];

export const getCountryBySlug = (slug: string) => countryList.find((c) => c.slug === slug);

export const COUNTRY_REGIONS: CountryRegion[] = [
  "Norteamérica",
  "Centroamérica y Caribe",
  "Sudamérica",
  "Europa",
  "África",
];

/**
 * Hora local del estreno semanal (lunes 15:00 en Madrid) en una zona horaria.
 * Se calcula sobre el próximo lunes para respetar los cambios de horario.
 */
export function releaseTimeIn(tz: string, now = new Date()): { weekday: string; time: string } {
  const madridParts = (d: Date) =>
    Object.fromEntries(
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Madrid",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
        weekday: "short",
      })
        .formatToParts(d)
        .map((p) => [p.type, p.value]),
    );
  // Próximo lunes en Madrid a las 15:00
  const p = madridParts(now);
  const dow = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(p.weekday);
  const daysAhead = (7 - dow) % 7;
  const base = Date.UTC(+p.year, +p.month - 1, +p.day + daysAhead, 15, 0);
  // Corrige el desfase de Madrid respecto a UTC en esa fecha
  const guess = new Date(base);
  const g = madridParts(guess);
  const offsetMin = (+g.hour * 60 + +g.minute) - 15 * 60;
  const instant = new Date(base - offsetMin * 60_000);
  const weekday = new Intl.DateTimeFormat("es-ES", { timeZone: tz, weekday: "long" }).format(instant);
  const time = new Intl.DateTimeFormat("es-ES", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(instant);
  return { weekday, time };
}
