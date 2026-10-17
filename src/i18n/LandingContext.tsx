import { createContext, useContext, type ReactNode } from "react";
import { landingEs, type LandingDict } from "./landing";

type LandingValue = { dict: LandingDict; lang: string; dir: "ltr" | "rtl" };
const LandingContext = createContext<LandingValue>({ dict: landingEs, lang: "es", dir: "ltr" });

export function LandingProvider({ dict, lang = "es", dir = "ltr", children }: {
  dict: LandingDict; lang?: string; dir?: "ltr" | "rtl"; children: ReactNode;
}) {
  return <LandingContext.Provider value={{ dict, lang, dir }}>{children}</LandingContext.Provider>;
}

export function useLanding() {
  return useContext(LandingContext);
}

export function landingText(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** Only opt into a prefix once the equivalent route actually exists. */
export function landingHref(dict: LandingDict, path: string, translatedPaths: ReadonlySet<string> = new Set()) {
  return dict.linkPrefix && translatedPaths.has(path) ? `${dict.linkPrefix}${path}` : path;
}