export function localeForPath(pathname: string): "es" | "en" | "ar" {
  if (/^\/en(?:\/|$)/.test(pathname)) return "en";
  if (/^\/ar(?:\/|$)/.test(pathname)) return "ar";
  return "es";
}

export function staticLanguageHref(code: string, pathname: string): string | undefined {
  if (code === "en") return "/en";
  if (code === "ar") return "/ar";
  if (code === "es") return localeForPath(pathname) === "es" ? pathname : "/";
  return undefined;
}