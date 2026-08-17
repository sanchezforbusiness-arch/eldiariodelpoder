import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MONTHS_ES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

export function formatDateEs(iso?: string) {
  const m = iso ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso) : null;
  if (!m) return iso ?? "";
  const [, y, mo, d] = m as unknown as [string, string, string, string];
  return `${Number(d)} de ${MONTHS_ES[Number(mo) - 1]} de ${y}`;
}
