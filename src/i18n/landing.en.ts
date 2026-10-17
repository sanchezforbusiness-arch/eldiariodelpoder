import { CONTACT_EMAIL } from "@/data/contact";
import { landingEs, type LandingDict } from "./landing";

// English edition of the home landing. Hand-translated; the interviews themselves are in Spanish.
export const landingEn: LandingDict = {
  meta: {
    title: "Diario del Poder — The Spanish-language leadership podcast",
    description: "Long-form interviews in Spanish with former heads of state, CEOs and leading figures. Recorded in Madrid, published every Monday with La Vanguardia.",
    ogTitle: "Diario del Poder (Diary of Power) — Leadership podcast in Spanish",
    ogDescription: "Former heads of state, CEOs and leading figures in long-form, unscripted conversations. Recorded in Madrid, in Spanish.",
    ogLocale: "en_US",
  },
  hero: {
    lines: ["The voice", "of legacy."],
    imageAlt: "Diario del Poder recording session in the studio",
    confirmedGuests: "77+ confirmed guests",
    description: "We sit down with the world's most influential leaders so they can pass their legacy on to the next generation. Long-form conversations, recorded in Spanish in Madrid.",
    episodeButton: "Watch the episode", guestsButton: "Our guests",
    faceNames: landingEs.hero.faceNames, videoTitle: "",
  },
  brands: { ariaLabel: "Partner brands", heading: "Our partners", names: landingEs.brands.names, logoAlt: "" },
  media: {
    heading: "In the media", allButton: "See all appearances", carouselLabel: "Featured television appearances",
    previousLabel: "Previous appearance", nextLabel: "Next appearance", counter: "{current} / {total}",
    appearanceById: {
      "univision-aznar": { channel: "Univision", program: "Noticias 24/7", title: "Univision: “The Diario del Poder podcast reveals the human side of the most influential minds”", alt: "José María Aznar in the Diario del Poder interview broadcast by Univision" },
      "univision-directo": { channel: "Univision", program: "Noticias 24/7 — Live", title: "Live interview with the founders of Diario del Poder on Univision", alt: "Alejandro Sánchez Martínez and Víctor Hugo Gandarilla de Andrés live on Univision" },
      "univision-faes": { channel: "Univision", program: "Noticias 24/7", title: "Univision: the José María Aznar interview and the viral moment with Queen Letizia", alt: "Diario del Poder founder interviewing at the FAES Foundation, broadcast by Univision" },
      zapeando: { channel: "La Sexta", program: "Zapeando", title: "Zapeando (La Sexta) discusses the Diario del Poder viral moment", alt: "The Zapeando set on La Sexta discussing the Diario del Poder video" },
      "espejo-publico-plato": { channel: "Antena 3", program: "Espejo Público — Susanna Griso", title: "Espejo Público (Antena 3) analyses Queen Letizia's reply", alt: "The Espejo Público set on Antena 3 during the debate about Diario del Poder" },
      "espejo-publico-protocolo": { channel: "Antena 3", program: "Más Espejo — Protocol", title: "Más Espejo: Royal Household protocol and the interview request", alt: "Protocol analysis on Más Espejo, Antena 3, about Diario del Poder" },
    },
  },
  guests: { ariaLabel: "Guests", allButton: "All guests", roleFormat: "“{role}”" },
  partner: { ariaLabel: "Partners", badge: "Partners", heading: "Our ally", description: "La Vanguardia amplifies our reach and brings these conversations to millions of readers.", items: [{ label: "Media partner", name: "La Vanguardia", line: "“Founded in Barcelona in 1881. One of the historic benchmarks of the Spanish-language press.”", cta: "Visit" }], arrow: "→" },
  reel: { heading: "Hear from those who decide,", headingEnd: "uncut", playLabel: "Play {guest} — {title}", previewTitle: "Preview of {guest}", episodeLabel: "{guest} — {title}" },
  quotes: {
    ariaLabel: "What our guests say", label: "Voices", heading: "Reflections",
    description: "What our guests have said after their conversation, and the impact these interviews are having.",
    linesBySlug: {
      "jose-maria-aznar": "Power must never be an end in itself.",
      "guillermo-lasso": "You should aim for more top-level guests on your podcast. Leaving a legacy to future generations is badly needed.",
      "esperanza-aguirre": "You young people have to change the country.",
      "marcos-de-quinto": "To contribute to society, you have to work to bring about change.",
      "jordi-juan": "When the podcast is ready, send it to me. I want to show it to my children.",
      "rosa-lagarrigue": "I loved the interview, and above all doing it with young people who represent their generation.",
      "jose-carlos-gonzalez-hurtado": "Faith is essential to finding your purpose in life.",
      "federica-fornaciari": "Young people are the key to the future, and these two are proof of it.",
      "miguel-anxo-bastos": "Capitalism, saving and hard work. The energy you have while you're young will never come back.",
      "daniela-macarena": "To be a person with power, you have to show it.",
      "andres-rodriguez": "I'd like to inspire young people to realise they can achieve whatever they set out to do.",
      "martin-selles": "I see many young people with a clear life plan, grateful for their first opportunity and willing to work hard. Real young people are not the listless caricature we are sometimes sold.",
      "mikel-echavarren": "A very good interview with two very friendly, well-prepared young people.",
    },
    osasuna: { name: "Club Osasuna", role: "Official sponsor", line: "A great experience organising, together with these young people, the first event bringing business leaders and young people together." },
    quoteFormat: "“{line}”",
  },
  manifesto: {
    heading: "Manifesto", lead: "We are the platform where the world's most influential leaders pass their legacy on to future generations.",
    blocks: ["We want to understand the person behind the public figure everyone knows.", "We reclaim the meaning of power: not as force, but as the capacity to influence society for the better."],
    button: "Read the manifesto",
  },
  faq: {
    heading: "Frequently asked questions", founderLinkText: "Alejandro Sánchez Martínez",
    items: [
      { q: "What is Diario del Poder?", a: "A Spanish-language podcast of long-form interviews with former heads of state, CEOs and leading figures, founded in Madrid in 2025 by Alejandro Sánchez Martínez and Víctor Hugo Gandarilla de Andrés. Its English name is Diary of Power, and La Vanguardia is its media partner." },
      { q: "Is there a Spanish-language version of The Diary of a CEO?", a: "Diario del Poder is the closest equivalent: long-form, unscripted conversations with top-level leaders, from the Spanish-speaking world and with a focus on power and legacy." },
      { q: "Are the interviews in English?", a: "No. The conversations are recorded and published in Spanish. This page explains the show to English-speaking listeners, partners and sponsors." },
      { q: "Who has been interviewed?", a: "Former Spanish Prime Minister José María Aznar, former President of Ecuador Guillermo Lasso, former President of the Community of Madrid Esperanza Aguirre, Forbes Spain chairman Andrés Rodríguez and La Vanguardia editor-in-chief Jordi Juan, among others." },
      { q: "Where can I listen?", a: "On YouTube and Spotify, in full and uncut. La Vanguardia also publishes one of our conversations every Monday." },
      { q: "How can my brand work with Diario del Poder?", a: `Write to ${CONTACT_EMAIL} or book a 30-minute call. We work with brands that want to reach decision-makers and ambitious young professionals across Spain, Latin America and the US Hispanic market.` },
    ],
  },
  floatingCta: { label: "Let's talk" },
  nav: {
    brand: "Diario del Poder",
    labels: { "/episodios": "Episodes", "/invitados": "Guests", "/nosotros": "About us", "/manifiesto": "Manifesto", "/newsletter": "Newsletter", "/prensa": "Press", "/patrocinadores": "Sponsors", "/agenda": "Book a call" },
    menuLabel: "Menu", languageLabel: "Change language", languageNames: landingEs.nav.languageNames,
  },
  footer: {
    contactHeading: "Shall we talk?", contactDescription: "Guest proposals, press and sponsorship.", callButton: "Book a call", emailButton: "Email us", contactLabel: "Contact", email: CONTACT_EMAIL, location: "Madrid, Spain", navLabel: "Explore",
    labels: { "/podcast-de-liderazgo-en-espanol": "The podcast", "/episodios": "Episodes", "/invitados": "Guests", "/newsletter": "Newsletter", "/nosotros": "About us", "/manifiesto": "Manifesto", "/prensa": "Press", "/patrocinadores": "Sponsors", "/agenda": "Book a call" },
    listenLabel: "Listen", socialLabels: landingEs.footer.socialLabels, countriesLabel: "Spanish-speaking countries", allCountries: "All countries",
    countryNames: { mexico: "Mexico", colombia: "Colombia", argentina: "Argentina", espana: "Spain", "estados-unidos": "United States", peru: "Peru", chile: "Chile", venezuela: "Venezuela" },
    copyright: "Diario del Poder", copyrightSymbol: "©", alejandro: "Alejandro Sánchez Martínez", victor: "Víctor Hugo Gandarilla de Andrés", founderSeparator: " · ",
  },
  linkPrefix: "/en",
  guestRoleBySlug: {
    "jose-maria-aznar": "Former Prime Minister of Spain", "guillermo-lasso": "Former President of Ecuador", "esperanza-aguirre": "Former President of the Community of Madrid", "marcos-de-quinto": "Former global Vice President of Coca-Cola", "javier-tebas": "President of LaLiga", "andres-rodriguez": "Chairman and publisher of Forbes Spain", "arturo-coello": "World number one in padel", "martin-selles": "President of Farmaindustria · former CEO of Johnson & Johnson Spain", "jordi-juan": "Editor-in-chief of La Vanguardia", "rosa-lagarrigue": "Founder of RLM · Artist manager", "jose-carlos-gonzalez-hurtado": "President of EWTN · former CEO at P&G", "federica-fornaciari": "Founder of SenYours and NoBrainer Partners", "miguel-anxo-bastos": "Economist · Professor at the University of Santiago de Compostela", "daniela-macarena": "Co-founder of Ac2ality", "mikel-echavarren": "CEO of Colliers Spain", "sonsoles-onega": "Journalist, presenter and novelist", "massimiliano-squillace": "CEO and founder of Contents.com", "rocio-monasterio": "Architect and former regional MP", "arturo-de-las-heras": "Chairman of the CEF.- UDIMA Education Group", "anne-lange": "Independent director at INDITEX", "eduardo-martinez-cardona": "Former Director at ZARA", "laura-gonzalez-molero": "Chair of DKV", "narcis-rebollo": "President of the GTS record label", "katalin-kariko": "Nobel Prize in Medicine 2023", "baroness-kingsmill": "INDITEX board member · Member of the House of Lords", "manuel-falco": "Chairman of Citigroup Spain · Marquis of Castel-Moncayo", "mariano-barbacid": "Biochemist · Co-discoverer of the first human oncogene", "alvaro-uribe": "Former President of Colombia",
  },
  guestBioBySlug: {},
  episodeTitleBySlug: {
    "jose-carlos-gonzalez-hurtado-el-poder-es-hacer-el-bien": "Power is doing good", "miguel-anxo-bastos-si-quieres-puedes-es-un-mito": "“If you want it, you can do it” is a myth", "esperanza-aguirre-cuatro-decadas-en-politica": "Four decades in politics", "rosa-lagarrigue-ser-ambicioso-es-sano": "Ambition is healthy", "jordi-juan-la-teoria-de-los-cajones": "The drawer theory for facing a crisis", "andres-rodriguez-forbes-lujo-y-poder": "Forbes, luxury and power from the Forbes House", "guillermo-lasso-gobernar-en-crisis": "Governing in the middle of a crisis", "jose-maria-aznar-liderar-un-pais": "Leading a country", "mikel-echavarren-real-estate-ciclos": "Real estate, cycles and smart money",
  },
  episodeDescriptionBySlug: {},
};
