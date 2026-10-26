import { CONTACT_EMAIL } from "@/data/contact";
import { landingEs, type LandingDict } from "./landing";

// النسخة العربية من الصفحة الرئيسية. ترجمة يدوية؛ المقابلات نفسها باللغة الإسبانية.
// الأسماء العلم تُترك بحروفها اللاتينية.
export const landingAr: LandingDict = {
  meta: {
    title: "Diario del Poder — بودكاست القيادة باللغة الإسبانية",
    description: "مقابلات مطوّلة باللغة الإسبانية مع رؤساء دول سابقين ورؤساء تنفيذيين وشخصيات مؤثرة. تُسجَّل في مدريد وتُنشر كل يوم اثنين بالشراكة مع صحيفة La Vanguardia.",
    ogTitle: "Diario del Poder — بودكاست القيادة باللغة الإسبانية",
    ogDescription: "رؤساء دول سابقون ورؤساء تنفيذيون وشخصيات مؤثرة في حوارات مطوّلة بلا نص مُعدّ مسبقًا. تُسجَّل في مدريد باللغة الإسبانية.",
    ogLocale: "ar_AR",
  },
  hero: {
    lines: ["صوت", "الإرث."], imageAlt: "تسجيل إحدى حلقات Diario del Poder في الاستوديو", confirmedGuests: "أكثر من 77 ضيفًا مؤكَّدًا",
    description: "نجلس مع أبرز القادة في العالم ليتركوا إرثهم للأجيال الشابة. حوارات مطوّلة تُسجَّل باللغة الإسبانية في مدريد.",
    episodeButton: "شاهد الحلقة", guestsButton: "ضيوفنا", faceNames: landingEs.hero.faceNames, videoTitle: "",
  },
  brands: { ariaLabel: "العلامات الشريكة", heading: "شركاؤنا", names: landingEs.brands.names, logoAlt: "" },
  media: {
    heading: "في وسائل الإعلام", allButton: "جميع الظهورات الإعلامية", carouselLabel: "أبرز الظهورات التلفزيونية", previousLabel: "الظهور السابق", nextLabel: "الظهور التالي", counter: "{current} / {total}",
    appearanceById: {
      "univision-aznar": { channel: "Univision", program: "Noticias 24/7", title: "Univision: «بودكاست Diario del Poder يكشف الجانب الإنساني لأكثر العقول تأثيرًا»", alt: "José María Aznar في مقابلة Diario del Poder كما بثّتها قناة Univision" },
      "univision-directo": { channel: "Univision", program: "Noticias 24/7 — بث مباشر", title: "مقابلة مباشرة مع مؤسِّسَي Diario del Poder على قناة Univision", alt: "Alejandro Sánchez Martínez وVíctor Hugo Gandarilla de Andrés في بث مباشر على Univision" },
      "univision-faes": { channel: "Univision", program: "Noticias 24/7", title: "Univision: مقابلة José María Aznar واللحظة التي انتشرت مع الملكة ليتيثيا", alt: "أحد مؤسِّسَي Diario del Poder يُجري مقابلة في مؤسسة FAES، كما بثّتها Univision" },
      zapeando: { channel: "La Sexta", program: "Zapeando", title: "برنامج Zapeando على قناة La Sexta يناقش لحظة Diario del Poder التي انتشرت", alt: "استوديو برنامج Zapeando على La Sexta أثناء مناقشة مقطع Diario del Poder" },
      "espejo-publico-plato": { channel: "Antena 3", program: "Espejo Público — Susanna Griso", title: "برنامج Espejo Público على Antena 3 يحلّل ردّ الملكة ليتيثيا", alt: "استوديو Espejo Público على Antena 3 خلال النقاش حول Diario del Poder" },
      "espejo-publico-protocolo": { channel: "Antena 3", program: "Más Espejo — البروتوكول", title: "Más Espejo: بروتوكول القصر الملكي وطلب المقابلة", alt: "تحليل البروتوكول في برنامج Más Espejo على Antena 3 حول Diario del Poder" },
    },
  },
  guests: { ariaLabel: "الضيوف", allButton: "جميع الضيوف", roleFormat: "«{role}»" },
  partner: { ariaLabel: "الشركاء", badge: "الشركاء", heading: "حليفنا", description: "تُوسّع صحيفة La Vanguardia نطاق وصولنا وتحمل هذه الحوارات إلى ملايين القرّاء.", items: [{ label: "الشريك الإعلامي", name: "La Vanguardia", line: "«صحيفة تأسست في برشلونة عام 1881، وإحدى المرجعيات التاريخية للصحافة الناطقة بالإسبانية.»", cta: "زيارة الموقع" }], arrow: "←" },
  reel: { heading: "استمع إلى أصحاب القرار،", headingEnd: "دون اقتطاع", playLabel: "تشغيل {guest} — {title}", previewTitle: "معاينة {guest}", episodeLabel: "{guest} — {title}" },
  quotes: {
    ariaLabel: "ما يقوله ضيوفنا", label: "أصوات", heading: "تأمّلات", description: "ما قاله ضيوفنا بعد حواراتهم، والأثر الذي تتركه هذه المقابلات.",
    linesBySlug: {
      "jose-maria-aznar": "يجب ألّا تكون السلطة غايةً في حدّ ذاتها أبدًا.",
      "guillermo-lasso": "عليكم أن تطمحوا إلى ضيوف من أعلى المستويات في البودكاست. ما أحوجنا إلى ترك إرث للأجيال القادمة.",
      "esperanza-aguirre": "أنتم الشباب من عليكم تغيير البلاد.",
      "marcos-de-quinto": "لكي تُسهم في المجتمع، عليك أن تعمل على إحداث التغيير.",
      "jordi-juan": "حين يجهز البودكاست أرسلوه إليّ، أريد أن أُريه لأبنائي.",
      "rosa-lagarrigue": "أحببتُ المقابلة، وأكثر ما أحببتُه أنني أجريتها مع شباب يمثّلون جيلهم.",
      "jose-carlos-gonzalez-hurtado": "الإيمان أساسيّ لتجد غايتك في الحياة.",
      "federica-fornaciari": "الشباب هم مفتاح المستقبل، وهذان الشابان خير دليل على ذلك.",
      "miguel-anxo-bastos": "الرأسمالية والادّخار والعمل الجاد. الطاقة التي تملكونها في شبابكم لن تعود إليكم أبدًا.",
      "daniela-macarena": "لكي تكون صاحب سلطة، عليك أن تُظهرها.",
      "andres-rodriguez": "أودّ أن أُلهم الشباب ليدركوا أنهم قادرون على تحقيق كل ما يعزمون عليه.",
      "martin-selles": "أرى كثيرًا من الشباب لديهم مشروع حياة واضح، ممتنّين لفرصتهم الأولى ومستعدّين لبذل الجهد. الشباب الحقيقيون ليسوا تلك الصورة الكاريكاتورية الفاترة التي يحاول البعض تسويقها.",
      "mikel-echavarren": "مقابلة ممتازة مع شابّين لطيفين ومتمكّنين.",
    },
    osasuna: { name: "Club Osasuna", role: "الراعي الرسمي", line: "تجربة رائعة في تنظيم أول لقاء يجمع رجال الأعمال بالشباب، جنبًا إلى جنب مع هؤلاء الشباب." },
    quoteFormat: "«{line}»",
  },
  manifesto: { heading: "البيان", lead: "نحن المنصّة التي يترك فيها أبرز القادة في العالم إرثهم للأجيال القادمة.", blocks: ["نريد أن نفهم الإنسان الكامن خلف الشخصية العامة التي يعرفها الجميع.", "نُعيد للسلطة معناها: لا بوصفها قوة، بل بوصفها القدرة على التأثير الإيجابي في المجتمع."], button: "اقرأ البيان" },
  faq: {
    heading: "الأسئلة الشائعة", founderLinkText: "Alejandro Sánchez Martínez",
    items: [
      { q: "ما هو Diario del Poder؟", a: "بودكاست باللغة الإسبانية يقدّم مقابلات مطوّلة مع رؤساء دول سابقين ورؤساء تنفيذيين وشخصيات مؤثرة، أسّسه في مدريد عام 2025 كلٌّ من Alejandro Sánchez Martínez وVíctor Hugo Gandarilla de Andrés. اسمه بالإنجليزية Diary of Power، وشريكه الإعلامي صحيفة La Vanguardia." },
      { q: "هل توجد نسخة إسبانية من بودكاست The Diary of a CEO؟", a: "Diario del Poder هو الأقرب إلى ذلك: حوارات مطوّلة بلا نص مُعدّ مسبقًا مع قادة من الصف الأول، من العالم الناطق بالإسبانية، مع تركيز على السلطة والإرث." },
      { q: "هل المقابلات متاحة باللغة العربية؟", a: "لا. تُسجَّل الحوارات وتُنشر باللغة الإسبانية. تعرّف هذه الصفحة بالبرنامج للمستمعين والشركاء والرعاة الناطقين بالعربية." },
      { q: "من هم أبرز الضيوف؟", a: "من بينهم رئيس الحكومة الإسبانية الأسبق José María Aznar، ورئيس الإكوادور السابق Guillermo Lasso، والرئيسة السابقة لحكومة إقليم مدريد Esperanza Aguirre، ورئيس مجلة فوربس إسبانيا Andrés Rodríguez، ورئيس تحرير صحيفة La Vanguardia السيد Jordi Juan." },
      { q: "أين يمكنني الاستماع؟", a: "على YouTube وSpotify، كاملةً ودون اقتطاع. كما تنشر صحيفة La Vanguardia أحد حواراتنا كل يوم اثنين." },
      { q: "كيف يمكن لعلامتي التجارية التعاون مع Diario del Poder؟", a: `راسلونا على ${CONTACT_EMAIL} أو احجزوا مكالمة مدتها 30 دقيقة. نعمل مع العلامات التي تريد الوصول إلى صنّاع القرار والشباب الطموحين في إسبانيا وأمريكا اللاتينية والسوق الناطقة بالإسبانية في الولايات المتحدة.` },
    ],
  },
  floatingCta: { label: "لنتحدّث" },
  nav: {
    brand: "Diario del Poder", labels: { "/episodios": "الحلقات", "/invitados": "الضيوف", "/nosotros": "من نحن", "/manifiesto": "البيان", "/newsletter": "النشرة", "club": "النادي", "/prensa": "الصحافة", "/patrocinadores": "الرعاة", "/agenda": "احجز مكالمة" },
    menuLabel: "القائمة", languageLabel: "تغيير اللغة", languageNames: landingEs.nav.languageNames,
  },
  footer: {
    contactHeading: "لنتحدّث؟", contactDescription: "اقتراحات الضيوف والصحافة والرعاية.", callButton: "احجز مكالمة", emailButton: "راسلنا", contactLabel: "التواصل", email: CONTACT_EMAIL, location: "مدريد، إسبانيا", navLabel: "تصفّح",
    labels: { "/podcast-de-liderazgo-en-espanol": "البودكاست", "/episodios": "الحلقات", "/invitados": "الضيوف", "/newsletter": "النشرة", "club": "Club del Poder", "/nosotros": "من نحن", "/manifiesto": "البيان", "/prensa": "الصحافة", "/patrocinadores": "الرعاة", "/agenda": "احجز مكالمة" },
    listenLabel: "استمع", socialLabels: landingEs.footer.socialLabels, countriesLabel: "الدول الناطقة بالإسبانية", allCountries: "جميع الدول",
    countryNames: { mexico: "المكسيك", colombia: "كولومبيا", argentina: "الأرجنتين", espana: "إسبانيا", "estados-unidos": "الولايات المتحدة", peru: "بيرو", chile: "تشيلي", venezuela: "فنزويلا" },
    copyright: "Diario del Poder", copyrightSymbol: "©", alejandro: "Alejandro Sánchez Martínez", victor: "Víctor Hugo Gandarilla de Andrés", founderSeparator: " · ",
  },
  linkPrefix: "/ar",
  guestRoleBySlug: {
    "jose-maria-aznar": "رئيس الحكومة الإسبانية الأسبق", "guillermo-lasso": "رئيس الإكوادور السابق", "esperanza-aguirre": "الرئيسة السابقة لحكومة إقليم مدريد", "marcos-de-quinto": "نائب الرئيس العالمي السابق لشركة Coca-Cola", "javier-tebas": "رئيس رابطة الدوري الإسباني LaLiga", "andres-rodriguez": "رئيس مجلة Forbes إسبانيا وناشرها", "arturo-coello": "المصنَّف الأول عالميًا في رياضة البادل", "martin-selles": "رئيس Farmaindustria · الرئيس التنفيذي السابق لـ Johnson & Johnson إسبانيا", "jordi-juan": "رئيس تحرير صحيفة La Vanguardia", "rosa-lagarrigue": "مؤسِّسة RLM · مديرة أعمال فنانين", "jose-carlos-gonzalez-hurtado": "رئيس شبكة EWTN · الرئيس التنفيذي السابق في P&G", "federica-fornaciari": "مؤسِّسة SenYours وNoBrainer Partners", "miguel-anxo-bastos": "خبير اقتصادي · أستاذ في جامعة سانتياغو دي كومبوستيلا", "daniela-macarena": "شريكة مؤسِّسة في Ac2ality", "mikel-echavarren": "الرئيس التنفيذي لشركة Colliers إسبانيا", "sonsoles-onega": "صحفية ومقدّمة برامج وروائية", "massimiliano-squillace": "الرئيس التنفيذي ومؤسس Contents.com", "rocio-monasterio": "مهندسة معمارية ونائبة إقليمية سابقة", "arturo-de-las-heras": "رئيس مجموعة CEF.- UDIMA التعليمية", "anne-lange": "عضوة مستقلة في مجلس إدارة INDITEX", "eduardo-martinez-cardona": "مدير سابق في ZARA", "laura-gonzalez-molero": "رئيسة DKV", "narcis-rebollo": "رئيس شركة التسجيلات GTS", "katalin-kariko": "حائزة جائزة نوبل في الطب 2023", "baroness-kingsmill": "عضوة مجلس إدارة INDITEX · عضوة مجلس اللوردات البريطاني", "manuel-falco": "رئيس Citigroup إسبانيا · ماركيز Castel-Moncayo", "mariano-barbacid": "عالم كيمياء حيوية · أحد مكتشفي أول جين ورمي بشري", "alvaro-uribe": "رئيس كولومبيا الأسبق",
  },
  guestBioBySlug: {},
  episodeTitleBySlug: {
    "jose-carlos-gonzalez-hurtado-el-poder-es-hacer-el-bien": "السلطة هي فعل الخير", "miguel-anxo-bastos-si-quieres-puedes-es-un-mito": "«إن أردتَ استطعتَ» مجرّد خرافة", "esperanza-aguirre-cuatro-decadas-en-politica": "أربعة عقود في السياسة", "rosa-lagarrigue-ser-ambicioso-es-sano": "الطموح أمر صحّي", "jordi-juan-la-teoria-de-los-cajones": "نظرية الأدراج لمواجهة الأزمات", "andres-rodriguez-forbes-lujo-y-poder": "فوربس والفخامة والسلطة من دار فوربس", "guillermo-lasso-gobernar-en-crisis": "الحكم في قلب الأزمة", "jose-maria-aznar-liderar-un-pais": "قيادة بلد", "mikel-echavarren-real-estate-ciclos": "العقارات والدورات الاقتصادية والمال الذكي",
  },
  episodeDescriptionBySlug: {},
};
