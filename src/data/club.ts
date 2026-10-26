export const CLUB_URL = "https://club-del-poder.vercel.app";
export const CLUB_ID = `${CLUB_URL}/#club`;

export type ClubProgram = "mesa" | "mentoria" | "launchpad" | "mentor";

export function clubApply(programa?: ClubProgram) {
  return `${CLUB_URL}/solicitud${programa ? `?programa=${programa}` : ""}`;
}

export const clubCopy = {
  title: "El Club del Poder",
  eyebrow: "El club privado de El Diario del Poder",
  motto: "Lo importante se decide en la sobremesa.",
  houseRule: "Aquí no se pregunta a qué te dedicas. Se pregunta qué estás a punto de decidir.",
  description: "Las conversaciones del Diario, sin micrófono. El Club del Poder reúne en Madrid a quienes deciden y a quienes van a decidir: cenas a puerta cerrada de doce a dieciséis personas, un programa de mentoría de seis meses con la generación que viene y un Launchpad para startups.",
  aperitivo: {
    title: "La puerta del Diario",
    description: "El Aperitivo by DDP: veinticinco jóvenes y tres o cuatro séniors que ya han pasado por el micrófono del Diario. Es la puerta de entrada al club para la audiencia de El Diario del Poder.",
    button: "Quiero estar",
    programa: "mentoria" as const,
  },
  visitButton: "Visitar el Club del Poder",
  mentorLink: "¿Quieres abrir una mesa como anfitrión o mentor?",
};

export const clubPrograms = [
  {
    programa: "mesa",
    title: "Las Mesas",
    description: "Cena sentada con un anfitrión y un tema. Doce a dieciséis personas, mensual en Madrid, por invitación. Lo que se dice se puede usar, nunca atribuir: la cena queda siempre fuera de micrófono.",
    button: "Solicitar una silla",
    attendees: { min: 12, max: 16 },
  },
  {
    programa: "mentoria",
    title: "Mentoría",
    description: "Seis meses, de febrero a junio de 2027: tres encuentros presenciales y tres mentorías online, con mentores en pareja por área. Veinte plazas y dos becas, por candidatura y entrevista.",
    button: "Presentar candidatura",
    durationMonths: 6,
    period: { from: "2027-02", to: "2027-06" },
    inPersonMeetings: 3,
    onlineMentoring: 3,
    places: 20,
    scholarships: 2,
  },
  {
    programa: "launchpad",
    title: "Launchpad",
    description: "Fundadores seleccionados presentan su compañía ante socios, inversores y directivos de la red del club: diez minutos de presentación y veinte de preguntas. Primera edición: 10 de diciembre de 2026. Sin cuota ni comisión.",
    button: "Presentar mi startup",
    presentationMinutes: 10,
    questionsMinutes: 20,
    firstEdition: "2026-12-10",
    fee: 0,
    commission: 0,
  },
] as const;