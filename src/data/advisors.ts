import federica from "@/assets/guest-8.webp";
import inigo from "@/assets/advisor-inigo.webp";
import david from "@/assets/advisor-david.webp";
import jordi from "@/assets/jordi-urbea.png.asset.json";

export const ADVISOR_SITE = "https://eldiariodelpoder.com";
export const ADVISOR_ORGANIZATION_ID = `${ADVISOR_SITE}/#organization`;
export type AdvisorEntry = {
  slug: string; name: string; fullName: string; alternateName?: string;
  area: string; role: string; bio: string; paragraphs: string[]; jobTitle: string;
  img: string; ln: string; guestSlug?: string; description: string;
  knowsAbout: string[]; worksFor?: string[]; alumniOf?: string[]; why: string;
};

export const advisors: AdvisorEntry[] = [
  {
    slug: "federica-fornaciari", guestSlug: "federica-fornaciari",
    name: "Federica Fornaciari", fullName: "Federica Ilaria Fornaciari", alternateName: "Federica Ilaria Fornaciari",
    area: "Estrategia & Marca", role: "Advisor · Estrategia & Marca",
    bio: "Founder de SenYours y NoBrainer Partners. Ex-Bain. Profesora en IE, IESE y Bocconi. Forbes Top 100.",
    paragraphs: [
      "Federica Ilaria Fornaciari es empresaria y profesora. Fundó NoBrainer Partners, dedicada a M&A, captación de fondos y asesoría de liderazgo, y SenYours Consulting.",
      "Trabajó en Bain & Company, Jakala, Yoox Net-a-Porter, Havas y VML (WPP); fue VP ejecutiva global de Marketing y Estrategia de WAM Global. Es profesora en IE, IESE y Bocconi. Forbes Top 100.",
    ],
    jobTitle: "Empresaria y profesora; fundadora de NoBrainer Partners y SenYours Consulting",
    img: federica, ln: "https://www.linkedin.com/in/federica-ilaria-fornaciari-mba",
    description: "Federica Ilaria Fornaciari, fundadora de NoBrainer Partners y SenYours Consulting, es advisor de Diario del Poder en Estrategia & Marca.",
    knowsAbout: ["Estrategia", "Marca", "M&A", "Captación de fondos", "Liderazgo"],
    worksFor: ["NoBrainer Partners", "SenYours Consulting"],
    alumniOf: ["Bain & Company", "Jakala", "Yoox Net-a-Porter", "Havas", "VML (WPP)", "WAM Global"],
    why: "Asesora a Diario del Poder en estrategia y marca.",
  },
  {
    slug: "david-garcia-nunez", name: "David García Núñez", fullName: "David García Núñez",
    area: "Comunicación & Relaciones Institucionales", role: "Advisor · Comunicación & Relaciones Institucionales",
    bio: "Director de Comunicación y Marketing del Grupo FCC. Presidente de Madrid Capital Mundial y fundador del Club Español de Directores de Relaciones Institucionales y Comunicación. Profesor en IE University. Forbes Best Dircom.",
    paragraphs: [
      "David García Núñez es director de Comunicación y Marketing del Grupo FCC y presidente de Madrid Capital Mundial. Es fundador y presidente del Club Español de Directores de Relaciones Institucionales y Comunicación.",
      "Es profesor en IE University y consejero de la Asociación Española de Anunciantes. Forbes Best Dircom y entre los 100 directores más innovadores y creativos de España según Forbes.",
    ],
    jobTitle: "Director de Comunicación y Marketing del Grupo FCC",
    img: david, ln: "https://www.linkedin.com/in/dgarcian/",
    description: "David García Núñez, director de Comunicación y Marketing del Grupo FCC, es advisor de Diario del Poder en Comunicación & Relaciones Institucionales.",
    knowsAbout: ["Comunicación", "Relaciones institucionales", "Marketing"], worksFor: ["Grupo FCC"],
    why: "Asesora a Diario del Poder en comunicación y relaciones institucionales.",
  },
  {
    slug: "inigo-rivero-iruretagoyena", name: "Iñigo Rivero", fullName: "Iñigo Rivero Iruretagoyena", alternateName: "Iñigo Rivero",
    area: "M&A & Patrimonios", role: "Advisor · M&A & Patrimonios",
    bio: "Managing Partner de Paterberg y Lejeune. Asesora a family offices, consejos y grandes patrimonios.",
    paragraphs: ["Iñigo Rivero Iruretagoyena es Managing Partner de Paterberg y Lejeune.", "Asesora a family offices, consejos y grandes patrimonios."],
    jobTitle: "Managing Partner de Paterberg y Lejeune", img: inigo,
    ln: "https://www.linkedin.com/in/iñigo-rivero-iruretagoyena-88351b30",
    description: "Iñigo Rivero Iruretagoyena, Managing Partner de Paterberg y Lejeune, es advisor de Diario del Poder en M&A & Patrimonios. Asesora a family offices.",
    knowsAbout: ["M&A", "Patrimonios", "Family offices", "Consejos"], worksFor: ["Paterberg", "Lejeune"],
    why: "Asesora a Diario del Poder en M&A y patrimonios.",
  },
  {
    slug: "jordi-urbea", name: "Jordi Urbea", fullName: "Jordi Urbea",
    area: "Comunicación & Reputación", role: "Advisor · Comunicación & Reputación",
    bio: "27 años en Ogilvy (WPP), donde llegó a CEO de Ogilvy Spain. Asesor en estrategia de marca, reputación y narrativa institucional.",
    paragraphs: [
      "Jordi Urbea pasó veintisiete años en Ogilvy (grupo WPP), donde llegó a consejero delegado de Ogilvy Spain. Antes fue director general de Ogilvy Interactive y CEO de Ogilvy Barcelona.",
      "Fue pionero de internet en España en Servicom, Intercom y EresMas. Es profesor universitario, autor y ponente, y graduado por la Universitat Pompeu Fabra.",
    ],
    jobTitle: "Asesor en estrategia de marca, reputación y narrativa institucional", img: jordi.url,
    ln: "https://www.linkedin.com/in/jordiurbea/",
    description: "Jordi Urbea, asesor en estrategia de marca, reputación y narrativa institucional, es advisor de Diario del Poder en Comunicación & Reputación.",
    knowsAbout: ["Comunicación", "Reputación", "Estrategia de marca", "Narrativa institucional"],
    alumniOf: ["Ogilvy (WPP)", "Servicom", "Intercom", "EresMas", "Universitat Pompeu Fabra"],
    why: "Asesora a Diario del Poder en comunicación y reputación.",
  },
];

export const advisorPath = (advisor: AdvisorEntry) => advisor.guestSlug ? `/invitados/${advisor.guestSlug}` : `/advisors/${advisor.slug}`;
export const advisorPersonId = (advisor: AdvisorEntry) => `${ADVISOR_SITE}${advisorPath(advisor)}#${advisor.guestSlug ? "person" : "persona"}`;
export const advisorImage = (advisor: AdvisorEntry) => advisor.img.startsWith("https://") ? advisor.img : `${ADVISOR_SITE}${advisor.img}`;
export const advisorMembership = (advisor: AdvisorEntry) => ({
  "@type": "OrganizationRole", roleName: advisor.role, memberOf: { "@id": ADVISOR_ORGANIZATION_ID },
});
export const advisorMembers = advisors.map((advisor) => ({
  "@type": "OrganizationRole", roleName: advisor.role, member: { "@id": advisorPersonId(advisor) },
}));
export const advisorFaq = (advisor: AdvisorEntry) => [
  { q: `¿Quién es ${advisor.fullName}?`, a: advisor.paragraphs.join(" ") },
  { q: `¿Qué hace ${advisor.fullName} en Diario del Poder?`, a: `${advisor.fullName} es advisor en ${advisor.area} del consejo asesor de Diario del Poder.` },
  { q: `¿A qué se dedica ${advisor.fullName}?`, a: advisor.bio },
];
export const advisorPerson = (advisor: AdvisorEntry) => ({
  "@type": "Person", "@id": advisorPersonId(advisor), name: advisor.guestSlug ? advisor.name : advisor.fullName,
  ...(advisor.alternateName ? { alternateName: advisor.alternateName } : {}),
  jobTitle: advisor.jobTitle, description: advisor.paragraphs.join(" "), image: advisorImage(advisor),
  url: `${ADVISOR_SITE}${advisorPath(advisor)}`, sameAs: [advisor.ln], knowsAbout: advisor.knowsAbout,
  ...(advisor.worksFor ? { worksFor: advisor.worksFor.map((name) => ({ "@type": "Organization", name })) } : {}),
  ...(advisor.alumniOf ? { alumniOf: advisor.alumniOf.map((name) => ({ "@type": name === "Universitat Pompeu Fabra" ? "CollegeOrUniversity" : "Organization", name })) } : {}),
  memberOf: advisorMembership(advisor),
});