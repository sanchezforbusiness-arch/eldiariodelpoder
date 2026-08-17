// Enlace público de reservas (Calendly o Google Calendar "Programar cita").
// Cambia esta URL por la tuya y toda la web se actualiza sola.
export const BOOKING_URL = "";

export const BOOKING_EMAIL = "contactoeldiariodelpoder@gmail.com";

export function isCalendly(url: string) {
  return /(^|\.)calendly\.com/.test(url);
}
