import { CONTACT_EMAIL } from "@/data/contact";

export type LandingDict = {
  "meta": {
    "title": string;
    "description": string;
    "ogTitle": string;
    "ogDescription": string;
    "ogLocale": string;
  };
  "hero": {
    "lines": string[];
    "imageAlt": string;
    "confirmedGuests": string;
    "description": string;
    "episodeButton": string;
    "guestsButton": string;
    "faceNames": Record<string, string>;
    "videoTitle": string;
  };
  "brands": {
    "ariaLabel": string;
    "heading": string;
    "names": Record<string, string>;
    "logoAlt": string;
  };
  "media": {
    "heading": string;
    "allButton": string;
    "carouselLabel": string;
    "previousLabel": string;
    "nextLabel": string;
    "counter": string;
    "appearanceById": Record<string, {
      "channel": string;
      "program": string;
      "title": string;
      "alt": string;
    }>;
  };
  "guests": {
    "ariaLabel": string;
    "allButton": string;
    "roleFormat": string;
  };
  "partner": {
    "ariaLabel": string;
    "badge": string;
    "heading": string;
    "description": string;
    "items": {
      "label": string;
      "name": string;
      "line": string;
      "cta": string;
    }[];
    "arrow": string;
  };
  "reel": {
    "heading": string;
    "headingEnd": string;
    "playLabel": string;
    "previewTitle": string;
    "episodeLabel": string;
  };
  "quotes": {
    "ariaLabel": string;
    "label": string;
    "heading": string;
    "description": string;
    "linesBySlug": Record<string, string>;
    "osasuna": {
      "name": string;
      "role": string;
      "line": string;
    };
    "quoteFormat": string;
  };
  "manifesto": {
    "heading": string;
    "lead": string;
    "blocks": string[];
    "button": string;
  };
  "faq": {
    "heading": string;
    "founderLinkText": string;
    "items": {
      "q": string;
      "a": string;
    }[];
  };
  "floatingCta": {
    "label": string;
  };
  "nav": {
    "brand": string;
    "labels": Record<string, string>;
    "menuLabel": string;
    "languageLabel": string;
    "languageNames": Record<string, string>;
  };
  "footer": {
    "contactHeading": string;
    "contactDescription": string;
    "callButton": string;
    "emailButton": string;
    "contactLabel": string;
    "email": string;
    "location": string;
    "navLabel": string;
    "labels": Record<string, string>;
    "listenLabel": string;
    "socialLabels": Record<string, string>;
    "countriesLabel": string;
    "allCountries": string;
    "countryNames": Record<string, string>;
    "copyright": string;
    "copyrightSymbol": string;
    "alejandro": string;
    "victor": string;
    "founderSeparator": string;
  };
} & {
  linkPrefix: string;
  guestRoleBySlug?: Record<string, string>;
  guestBioBySlug?: Record<string, string>;
  episodeTitleBySlug?: Record<string, string>;
  episodeDescriptionBySlug?: Record<string, string>;
};

export const landingEs: LandingDict = {
  "meta": {
    "title": "Diario del Poder — Entrevistas con jefes de Estado y CEOs",
    "description": "Entrevistas largas con jefes de Estado, CEOs y altos directivos. Conversaciones sin guion, grabadas en Madrid y publicadas sin recortes.",
    "ogTitle": "Diario del Poder — Entrevistas con jefes de Estado y CEOs",
    "ogDescription": "Entrevistas largas con jefes de Estado, CEOs y altos directivos. Sin guion, sin recortes.",
    "ogLocale": "es_ES"
  },
  "hero": {
    "lines": [
      "La voz",
      "del legado."
    ],
    "imageAlt": "Grabación de Diario del Poder en estudio",
    "confirmedGuests": "+77 invitados confirmados",
    "description": "Nos sentamos con los mayores referentes del mundo para que dejen su legado a la juventud.",
    "episodeButton": "Ver el episodio",
    "guestsButton": "Nuestros invitados",
    "faceNames": {
      "jose-maria-aznar": "José María Aznar",
      "guillermo-lasso": "Guillermo Lasso",
      "marcos-de-quinto": "Marcos de Quinto",
      "sonsoles-onega": "Sonsoles Ónega"
    },
    "videoTitle": ""
  },
  "brands": {
    "ariaLabel": "Marcas colaboradoras",
    "heading": "Nuestros colaboradores",
    "names": {
      "Forbes": "Forbes",
      "La Vanguardia": "La Vanguardia",
      "Fundación La Caixa": "Fundación La Caixa",
      "Telefónica": "Telefónica",
      "Atlético de Madrid": "Atlético de Madrid",
      "Osasuna": "Osasuna",
      "EWTN": "EWTN",
      "APD": "APD",
      "IESE": "IESE",
      "Grupo PROEDUCA": "Grupo PROEDUCA",
      "Contents.com": "Contents.com",
      "Metlabs": "Metlabs"
    },
    "logoAlt": ""
  },
  "media": {
    "heading": "Apariciones en medios",
    "allButton": "Ver todas las apariciones",
    "carouselLabel": "Apariciones destacadas en televisión",
    "previousLabel": "Aparición anterior",
    "nextLabel": "Siguiente aparición",
    "counter": "{current} / {total}",
    "appearanceById": {
      "univision-aznar": {
        "channel": "Univision",
        "program": "Noticias 24/7",
        "title": "Univision: “El podcast Diario del Poder revela el lado humano de las mentes más influyentes”",
        "alt": "José María Aznar en la entrevista de Diario del Poder emitida por Univision"
      },
      "univision-directo": {
        "channel": "Univision",
        "program": "Noticias 24/7 — En vivo",
        "title": "Entrevista en directo a los fundadores de Diario del Poder en Univision",
        "alt": "Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés en directo en Univision"
      },
      "univision-faes": {
        "channel": "Univision",
        "program": "Noticias 24/7",
        "title": "Univision: la entrevista a José María Aznar y el momento viral con la Reina Letizia",
        "alt": "Fundador de Diario del Poder entrevistando en la Fundación FAES, emitido por Univision"
      },
      "zapeando": {
        "channel": "La Sexta",
        "program": "Zapeando",
        "title": "Zapeando (La Sexta) comenta el momento viral de Diario del Poder",
        "alt": "Plató de Zapeando en La Sexta comentando el vídeo de Diario del Poder"
      },
      "espejo-publico-plato": {
        "channel": "Antena 3",
        "program": "Espejo Público — Susanna Griso",
        "title": "Espejo Público (Antena 3) analiza la respuesta de la Reina Letizia",
        "alt": "Plató de Espejo Público en Antena 3 durante el debate sobre Diario del Poder"
      },
      "espejo-publico-protocolo": {
        "channel": "Antena 3",
        "program": "Más Espejo — Protocolo",
        "title": "Más Espejo: el protocolo de la Casa Real y la petición de entrevista",
        "alt": "Análisis de protocolo en Más Espejo, Antena 3, sobre Diario del Poder"
      }
    }
  },
  "guests": {
    "ariaLabel": "Invitados",
    "allButton": "Todos los invitados",
    "roleFormat": "«{role}»"
  },
  "partner": {
    "ariaLabel": "Partners",
    "badge": "Partners",
    "heading": "Nuestro aliado",
    "description": "La Vanguardia amplifica nuestro alcance y hace llegar estas conversaciones a millones de lectores.",
    "items": [
      {
        "label": "Media partner",
        "name": "La Vanguardia",
        "line": "«Diario fundado en 1881 en Barcelona. Uno de los referentes históricos de la prensa en castellano.»",
        "cta": "Ver medio"
      }
    ],
    "arrow": "→"
  },
  "reel": {
    "heading": "Escucha a quienes deciden,",
    "headingEnd": "sin recortes",
    "playLabel": "Reproducir {guest} — {title}",
    "previewTitle": "Vista previa de {guest}",
    "episodeLabel": "{guest} — {title}"
  },
  "quotes": {
    "ariaLabel": "Lo que cuentan nuestros invitados",
    "label": "Voces",
    "heading": "Reflexiones",
    "description": "Lo que han dicho quienes han pasado por el programa. Y el impacto que estas conversaciones están teniendo.",
    "linesBySlug": {
      "jose-maria-aznar": "El poder nunca debe ser un fin en sí mismo.",
      "guillermo-lasso": "Tenéis que aspirar a más invitados de nivel para vuestro podcast. Hace mucha falta dejar un legado a las futuras generaciones.",
      "esperanza-aguirre": "Los jóvenes tenéis que cambiar el país.",
      "marcos-de-quinto": "Para aportar a la sociedad tienes que trabajar para generar un cambio.",
      "jordi-juan": "Cuando tengáis el podcast, pasádmelo que se lo quiero enseñar a mis hijos.",
      "rosa-lagarrigue": "Me ha encantado la entrevista y sobre todo hacerla con jóvenes que representan a su generación.",
      "jose-carlos-gonzalez-hurtado": "La fe es esencial para encontrar tu propósito en la vida.",
      "federica-fornaciari": "Los jóvenes son la clave para el futuro y estos chicos son una muestra de ello.",
      "miguel-anxo-bastos": "Capitalismo, ahorro y trabajo duro. La energía que tenéis siendo jóvenes no la volveréis a tener.",
      "daniela-macarena": "Para ser una persona con poder tienes que manifestarlo.",
      "andres-rodriguez": "Me gustaría ilusionar a los jóvenes para que se den cuenta de que son capaces de hacer lo que se propongan.",
      "martin-selles": "Yo veo a muchos jóvenes con un proyecto de vida claro, agradecidos por su primera oportunidad y dispuestos a esforzarse. Los jóvenes reales no son la caricatura desganada que a veces nos quieren vender.",
      "mikel-echavarren": "Muy buena entrevista con unos jóvenes muy simpáticos y preparados"
    },
    "osasuna": {
      "name": "Club Osasuna",
      "role": "Patrocinador oficial",
      "line": "Increíble experiencia organizando junto con estos jóvenes el primer evento entre empresarios y jóvenes."
    },
    "quoteFormat": "“{line}”"
  },
  "manifesto": {
    "heading": "Manifiesto",
    "lead": "Somos el medio donde los mayores referentes del mundo dejan su legado a las futuras generaciones.",
    "blocks": [
      "Queremos comprender quién es la persona detrás del personaje que todos conocen.",
      "Reivindicamos el sentido del poder: no como fuerza, sino como la capacidad de influir positivamente en la sociedad."
    ],
    "button": "Leer el manifiesto"
  },
  "faq": {
    "heading": "Preguntas frecuentes",
    "founderLinkText": "Alejandro Sánchez Martínez",
    "items": [
      {
        "q": "¿Qué es Diario del Poder?",
        "a": "Un podcast en español de entrevistas largas con expresidentes, CEOs y referentes, fundado en 2025 en Madrid por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés. La Vanguardia es nuestro media partner."
      },
      {
        "q": "¿Hay un podcast como The Diary of a CEO en español?",
        "a": "Sí: Diario del Poder sigue ese formato de conversaciones largas y sin guion con líderes de primer nivel, desde el mundo hispano y con foco en el poder y el legado."
      },
      {
        "q": "¿Quién está detrás?",
        "a": "Una redacción independiente fundada por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés, con un patronato de apoyo y La Vanguardia como media partner."
      },
      {
        "q": "¿A quién entrevistáis?",
        "a": "A quien ha tenido que decidir: jefes de Estado, presidentes, CEOs y referentes. Han pasado José María Aznar, Guillermo Lasso, Esperanza Aguirre, Andrés Rodríguez (Forbes) o Jordi Juan (La Vanguardia)."
      },
      {
        "q": "¿Dónde se escucha?",
        "a": "En YouTube y en Spotify, completo y sin recortes. También publicamos entrevistas con La Vanguardia."
      },
      {
        "q": "¿Cómo os escribo?",
        "a": `A ${CONTACT_EMAIL}: prensa, patrocinios o propuestas de invitados. Leemos todo y contestamos.`
      }
    ]
  },
  "floatingCta": {
    "label": "Hablemos"
  },
  "nav": {
    "brand": "Diario del Poder",
    "labels": {
      "/episodios": "Episodios",
      "/invitados": "Invitados",
      "/nosotros": "Nosotros",
      "/manifiesto": "Manifiesto",
      "/newsletter": "Newsletter",
      "club": "Club",
      "/prensa": "Prensa",
      "/patrocinadores": "Patrocinadores",
      "/agenda": "Agenda"
    },
    "menuLabel": "Menú",
    "languageLabel": "Cambiar idioma",
    "languageNames": {
      "es": "Español",
      "en": "English",
      "fr": "Français",
      "it": "Italiano",
      "pt": "Português",
      "de": "Deutsch",
      "ca": "Català",
      "zh-CN": "中文",
      "ar": "العربية"
    }
  },
  "footer": {
    "contactHeading": "¿Hablamos?",
    "contactDescription": "Propuestas de invitado, prensa y patrocinios.",
    "callButton": "Agendar una llamada",
    "emailButton": "Escríbenos",
    "contactLabel": "Contacto",
    "email": CONTACT_EMAIL,
    "location": "Madrid, España",
    "navLabel": "Navegar",
    "labels": {
      "/podcast-de-liderazgo-en-espanol": "El podcast",
      "/episodios": "Episodios",
      "/invitados": "Invitados",
      "/newsletter": "Newsletter",
      "club": "El Club del Poder",
      "/nosotros": "Nosotros",
      "/manifiesto": "Manifiesto",
      "/prensa": "Prensa",
      "/patrocinadores": "Patrocinadores",
      "/agenda": "Agenda"
    },
    "listenLabel": "Escuchar",
    "socialLabels": {
      "Spotify": "Spotify",
      "YouTube": "YouTube",
      "Instagram": "Instagram",
      "LinkedIn": "LinkedIn",
      "TikTok": "TikTok"
    },
    "countriesLabel": "En tu país",
    "allCountries": "Todos los países",
    "countryNames": {
      "mexico": "México",
      "colombia": "Colombia",
      "argentina": "Argentina",
      "espana": "España",
      "estados-unidos": "Estados Unidos",
      "peru": "Perú",
      "chile": "Chile",
      "venezuela": "Venezuela"
    },
    "copyright": "Diario del Poder",
    "copyrightSymbol": "©",
    "alejandro": "Alejandro Sánchez Martínez",
    "victor": "Víctor Hugo Gandarilla de Andrés",
    "founderSeparator": " · "
  },
  "linkPrefix": "",
  "guestRoleBySlug": {},
  "guestBioBySlug": {},
  "episodeTitleBySlug": {},
  "episodeDescriptionBySlug": {}
};
