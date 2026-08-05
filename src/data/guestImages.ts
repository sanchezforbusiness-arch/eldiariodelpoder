import coelloAsset from "@/assets/guest-coello.png.asset.json";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";
import rosaAsset from "@/assets/guest-rosa-lagarrigue.png.asset.json";
import jcghAsset from "@/assets/guest-jc-gonzalez-hurtado.png.asset.json";
import aguirreAsset from "@/assets/guest-esperanza-aguirre.jpg.asset.json";
import miguelAsset from "@/assets/guest-miguel-anxo-bastos.png.asset.json";
import danielaAsset from "@/assets/guest-daniela-macarena.png.asset.json";
import marcosAsset from "@/assets/guest-marcos-de-quinto.png.asset.json";
import sonsolesAsset from "@/assets/guest-sonsoles-onega.png.asset.json";

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
};
