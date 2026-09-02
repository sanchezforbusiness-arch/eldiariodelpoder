import g1 from "@/assets/guest-1.webp";
import g3 from "@/assets/guest-3.webp";
import g4 from "@/assets/guest-4.webp";
import g5 from "@/assets/guest-5.webp";
import g6 from "@/assets/guest-6.webp";
import g8 from "@/assets/guest-8.webp";
import coelloAsset from "@/assets/guest-coello.png.asset.json";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";
import rosaAsset from "@/assets/guest-rosa-lagarrigue.png.asset.json";
import jcghAsset from "@/assets/guest-jc-gonzalez-hurtado.png.asset.json";
import aguirreAsset from "@/assets/guest-esperanza-aguirre.jpg.asset.json";
import miguelAsset from "@/assets/guest-miguel-anxo-bastos.png.asset.json";
import danielaAsset from "@/assets/guest-daniela-macarena.png.asset.json";
import marcosAsset from "@/assets/guest-marcos-de-quinto.png.asset.json";
import sonsolesAsset from "@/assets/guest-sonsoles-onega.png.asset.json";
import massimilianoAsset from "@/assets/guest-massimiliano-squillace.png.asset.json";
import echavarrenImg from "@/assets/guest-echavarren.webp";
import rocioAsset from "@/assets/guest-rocio-monasterio.png.asset.json";
import arturoHerasAsset from "@/assets/guest-arturo-de-las-heras.png.asset.json";

/** Retratos alojados de forma estable (URL absoluta válida para og:image). */
export const guestImageBySlug: Record<string, string> = {
  "arturo-coello": coelloAsset.url,
  "jordi-juan": jordiAsset.url,
  "rosa-lagarrigue": rosaAsset.url,
  "jose-carlos-gonzalez-hurtado": jcghAsset.url,
  "esperanza-aguirre": aguirreAsset.url,
  "miguel-anxo-bastos": miguelAsset.url,
  "daniela-macarena": danielaAsset.url,
  "marcos-de-quinto": marcosAsset.url,
  "sonsoles-onega": sonsolesAsset.url,
  "massimiliano-squillace": massimilianoAsset.url,
  "mikel-echavarren": echavarrenImg,
  "rocio-monasterio": rocioAsset.url,
  "arturo-de-las-heras": arturoHerasAsset.url,
};

/** Retratos para las tarjetas de los carruseles (incluye los locales). */
export const guestCardImageBySlug: Record<string, string> = {
  ...guestImageBySlug,
  "jose-maria-aznar": g1,
  "guillermo-lasso": g5,
  "javier-tebas": g3,
  "andres-rodriguez": g4,
  "martin-selles": g6,
  "federica-fornaciari": g8,
};
