// Enlace público de reservas (Calendly o Google Calendar "Programar cita").
// Cambia esta URL por la tuya y toda la web se actualiza sola.
export const BOOKING_URL: string = "https://calendly.com/sanchezmtnezalejandro/30min";

export const BOOKING_EMAIL = "contacto@eldiariodelpoder.com";

export function isCalendly(url: string) {
  return /(^|\.)calendly\.com/.test(url);
}
