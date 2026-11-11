// Imágenes oficiales de la marca, servidas desde public/og en el dominio propio.
const SITE = "https://eldiariodelpoder.com";
export const OG_IMAGE = `${SITE}/og/ddp-portada-1200x630.jpg`;
export const OG_IMAGE_16X9 = `${SITE}/og/ddp-portada-16x9.jpg`;
export const OG_IMAGE_4X3 = `${SITE}/og/ddp-portada-4x3.jpg`;
export const OG_IMAGE_1X1 = `${SITE}/og/ddp-portada-1x1.jpg`;
export const OG_IMAGE_ALT = "Diario del Poder: Guillermo Lasso, Esperanza Aguirre y Javier Tebas, invitados del podcast";
export const BRAND_IMAGES = [OG_IMAGE_16X9, OG_IMAGE_4X3, OG_IMAGE_1X1];
export const ALL_OG_IMAGES = [OG_IMAGE, OG_IMAGE_16X9, OG_IMAGE_4X3, OG_IMAGE_1X1];
export const BRAND_LOGO = { "@type": "ImageObject", url: `${SITE}/icon-512.png`, width: 512, height: 512 };

export const ogImageMeta = [
  { property: "og:image", content: OG_IMAGE },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:type", content: "image/jpeg" },
  { property: "og:image:alt", content: OG_IMAGE_ALT },
  { name: "twitter:image", content: OG_IMAGE },
  { name: "twitter:image:alt", content: OG_IMAGE_ALT },
  { name: "twitter:card", content: "summary_large_image" },
  { property: "og:site_name", content: "Diario del Poder" },
];

export function homeWebPage(url: string, id: string, name: string, description: string, inLanguage: string) {
  return {
    "@type": "WebPage", "@id": id, url, name, description, inLanguage,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE_16X9, contentUrl: OG_IMAGE_16X9, width: 1200, height: 675, caption: OG_IMAGE_ALT },
    thumbnailUrl: OG_IMAGE_1X1,
  };
}
