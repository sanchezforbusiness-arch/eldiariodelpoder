import type { LandingDict } from "./landing";
import { COUNTRY_SITE, COUNTRY_SOCIAL_IMAGE } from "@/data/countryPage";

export const landingAlternates = [
  { rel: "alternate", hrefLang: "es", href: `${COUNTRY_SITE}/` },
  { rel: "alternate", hrefLang: "en", href: `${COUNTRY_SITE}/en` },
  { rel: "alternate", hrefLang: "ar", href: `${COUNTRY_SITE}/ar` },
  { rel: "alternate", hrefLang: "x-default", href: `${COUNTRY_SITE}/` },
];

export function localizedLandingHead(dict: LandingDict, lang: "en" | "ar") {
  const url = `${COUNTRY_SITE}/${lang}`;
  return {
    meta: [
      { title: dict.meta.title },
      { name: "description", content: dict.meta.description },
      { property: "og:title", content: dict.meta.ogTitle },
      { property: "og:description", content: dict.meta.ogDescription },
      { property: "og:locale", content: dict.meta.ogLocale },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: COUNTRY_SOCIAL_IMAGE },
      { name: "twitter:image", content: COUNTRY_SOCIAL_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: dict.meta.ogTitle },
      { name: "twitter:description", content: dict.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: url }, ...landingAlternates],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebPage", "@id": `${url}#webpage`, url, name: dict.meta.title, description: dict.meta.description,
            inLanguage: lang, isPartOf: { "@id": `${COUNTRY_SITE}/#website` }, about: { "@id": `${COUNTRY_SITE}/#podcastseries` } },
          { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: dict.faq.items.map(({ q, a }) => ({
            "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a },
          })) },
        ],
      }),
    }],
  };
}