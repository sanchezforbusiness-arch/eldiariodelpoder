import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { episodeList, getGuestBySlug, FEATURED_EPISODE_SLUGS, featuredEpisodes } from "./podcast";
import { episodeClips, episodeId, guestId, isoDuration, guestOrganization, guestBooks, personalInterviewUrl } from "./episodeSchema";

describe("Daniela verified episode data", () => {
  const ep = episodeList.find((entry) => entry.episodeNumber === 11);
  const guest = getGuestBySlug("daniela-macarena");
  test("duration is exactly 3667 seconds", () => {
    assert.equal(ep?.durationSeconds, 3667);
    assert.equal(isoDuration(ep?.duration), "PT1H1M7S");
  });
  test("all 29 official chapter boundaries and links are exact", () => {
    assert.ok(ep);
    const starts = [0,179,319,390,531,631,736,856,1067,1163,1267,1306,1460,1575,1656,1793,1902,2033,2193,2395,2472,2566,2723,2874,3000,3153,3274,3339,3439];
    const clips = episodeClips(ep);
    assert.deepEqual(clips.map((c) => c.startOffset), starts);
    assert.deepEqual(clips.map((c) => c.endOffset), [...starts.slice(1), 3667]);
    assert.deepEqual(clips.map((c) => c.url), starts.map((start) => `https://www.youtube.com/watch?v=t0ivuqdA4js&t=${start}s`));
  });
  test("eleven quotations have their supplied timestamps", () => {
    assert.deepEqual(ep?.quotes?.map((q) => q.start), [743,235,472,1159,1403,1427,2370,2486,3015,3434,3574]);
  });
  test("six FAQ references use the supplied moments and do not duplicate guest questions", () => {
    assert.equal(ep?.faq?.length, 6);
    assert.deepEqual(ep?.faq?.map((q) => q.start), [3000,2370,531,1306,1575,2472]);
    assert.equal(ep?.faq?.some((q) => guest?.qa?.some((g) => g.q === q.question)), false);
  });
  test("canonical guest, company and book identities are preserved", () => {
    assert.ok(ep); assert.ok(guest);
    assert.equal(episodeId(ep), "https://eldiariodelpoder.com/episodios/daniela-mcarena-crear-un-proyecto-viral-desde-cero#episode");
    assert.equal(guestId(guest.slug), "https://eldiariodelpoder.com/invitados/daniela-macarena#person");
    assert.deepEqual(guest.alternateName, ["Daniela Macarena", "Daniela Álvarez"]);
    assert.equal(guest.birthDate, "1996");
    assert.equal(guest.birthPlace, "Torrelodones, Comunidad de Madrid, España");
    assert.equal(guestOrganization(guest)?.foundingDate, "2020");
    assert.deepEqual(guestOrganization(guest)?.founder, { "@id": guestId(guest.slug) });
    assert.equal(guestBooks(guest)[0]?.isbn, "978-84-670-7794-0");
    assert.equal(guestBooks(guest)[0]?.datePublished, "2025-10-29");
  });
  test("episode 12 (Uribe) carries its verified chapters, quotes and FAQ", () => {
    const uribe = episodeList.find((entry) => entry.episodeNumber === 12);
    assert.equal(uribe?.slug, "alvaro-uribe-soy-superviviente-por-milagro");
    assert.equal(uribe?.durationSeconds, 933);
    assert.equal(uribe?.chapters?.length, 12);
    assert.equal(uribe?.quotes?.length, 10);
    assert.equal(uribe?.faq?.length, 5);
    assert.equal(episodeList.length, 14);
  });
  test("other ten episodes do not gain optional sections", () => {
    const others = episodeList.filter((entry) => entry.episodeNumber < 11);
    assert.equal(others.length, 10);
    for (const other of others) {
      assert.equal(other.chapters, undefined);
      assert.equal(other.quotes, undefined);
      assert.equal(other.faq, undefined);
      assert.deepEqual(episodeClips(other), []);
    }
  });
});

describe("featured episodes of /episodios", () => {
  test("the selection is an explicit, hand-maintained slug list", () => {
    assert.deepEqual([...FEATURED_EPISODE_SLUGS], [
      "andres-rodriguez-forbes-lujo-y-poder",
      "jose-maria-aznar-liderar-un-pais",
      "guillermo-lasso-gobernar-en-crisis",
      "alvaro-uribe-soy-superviviente-por-milagro",
    ]);
  });
  test("exactly those four episodes resolve, in that order, with their visible names", () => {
    assert.deepEqual(featuredEpisodes.map((e) => e.slug), [...FEATURED_EPISODE_SLUGS]);
    assert.deepEqual(featuredEpisodes.map((e) => e.guest), [
      "Andrés Rodríguez", "José María Aznar", "Guillermo Lasso", "Álvaro Uribe",
    ]);
    assert.deepEqual(featuredEpisodes.map((e) => e.title), [
      "Forbes, lujo y poder desde la Forbes House",
      "Liderar un país",
      "Gobernar en plena crisis",
      "Soy superviviente por milagro",
    ]);
  });
  test("every featured slug exists in the archive, so the hand list cannot silently drop one", () => {
    assert.equal(featuredEpisodes.length, FEATURED_EPISODE_SLUGS.length);
  });
});

describe("Isaac Querub episode 13 is published", () => {
  test("guest is no longer recorded-only and episode 13 exists", () => {
    const guest = getGuestBySlug("isaac-querub");
    assert.ok(guest);
    assert.equal(guest.interviewStatus, undefined);
    assert.deepEqual(guest.alternateName, ["Isaac Querub Caro"]);
    const ep = episodeList.find((e) => e.episodeNumber === 13);
    assert.equal(ep?.slug, "isaac-querub-las-3-reglas-de-oro-para-triunfar-en-los-negocios");
    assert.equal(ep?.youtubeId, "e4SucwXWQ9U");
    assert.equal(ep?.durationSeconds, 3161);
    assert.equal(ep?.chapters?.length, 19);
    assert.equal(ep?.quotes?.length, 11);
    assert.equal(ep?.faq?.length, 5);
    assert.equal(episodeList.length, 14);
  });
  test("quotes use the corrected seconds", () => {
    const ep = episodeList.find((e) => e.episodeNumber === 13);
    assert.deepEqual(ep?.quotes?.map((q) => q.start), [575, 700, 930, 1120, 1145, 1325, 1430, 1595, 1890, 2280, 3090]);
  });
});

describe("Manolo Falcó episode 14", () => {
  const ep = episodeList.find((e) => e.episodeNumber === 14);
  test("episode 14 is the most recent with the verified date, video and duration", () => {
    assert.ok(ep);
    assert.equal(episodeList[0], ep);
    assert.equal(ep.slug, "manolo-falco-como-construir-una-carrera-de-exito-sin-perder-tus-valores");
    assert.equal(ep.date, "2026-11-16");
    assert.equal(ep.youtubeId, "SOnC06oWQ0w");
    assert.equal(ep.durationSeconds, 3630);
    assert.equal(isoDuration(ep.duration), "PT1H0M30S");
    assert.equal(ep.videoUploadDate, "2026-11-16T06:00:55-08:00");
  });
  test("the 26 official clips have exact start and end boundaries", () => {
    assert.ok(ep);
    const starts = [0,123,154,288,415,583,740,879,945,1102,1290,1429,1574,1645,1800,1961,2024,2143,2429,2531,2700,2750,3071,3167,3414,3534];
    const clips = episodeClips(ep);
    assert.deepEqual(clips.map((c) => c.startOffset), starts);
    assert.deepEqual(clips.map((c) => c.endOffset), [...starts.slice(1),3630]);
    assert.deepEqual(clips.map((c) => c.url), starts.map((start) => `https://www.youtube.com/watch?v=SOnC06oWQ0w&t=${start}s`));
  });
  test("eleven verified quotes retain their supplied seconds and five FAQ exist", () => {
    assert.deepEqual(ep?.quotes?.map((q) => q.start), [886,898,1500,1563,532,1690,1949,2051,3297,3438,3538]);
    assert.equal(ep?.quotes?.[0]?.text, "Es la oportunidad de hacer cosas y de hacerlas a tu manera; es una responsabilidad obviamente, porque si te equivocas es culpa tuya y no debes esconderte");
    assert.equal(ep?.faq?.length, 5);
  });
  test("the existing guest identity has no birth year and only verified affiliations", () => {
    const guest = getGuestBySlug("manuel-falco");
    assert.ok(guest);
    assert.equal(guest.name, "Manolo Falcó");
    assert.deepEqual(guest.alternateName, ["Manuel Falcó y Girod", "Manuel Falcó Girod"]);
    assert.equal(guest.birthDate, undefined);
    assert.equal(guest.birthPlace, "California");
    assert.deepEqual(guest.sameAs, ["https://es.wikipedia.org/wiki/Manuel_Falc%C3%B3_Girod", "https://www.wikidata.org/wiki/Q88587621"]);
    assert.deepEqual(guest.affiliation, [{ name: "Citi" }]);
    assert.deepEqual(guest.alumniOf, { name: "Universidad CEU San Pablo" });
    assert.equal(guest.interviewStatus, undefined);
    assert.equal(guest.youtubeId, "SOnC06oWQ0w");
  });
});

describe("personal interview links", () => {
  test("uses the guest slug with a trailing slash", () => {assert.equal(personalInterviewUrl("isaac-querub"), "https://alejandrosanchezmartinez.com/entrevistas/isaac-querub/");});
  test("Falcó uses manolo-falco", () => {assert.equal(personalInterviewUrl("manuel-falco"), "https://alejandrosanchezmartinez.com/entrevistas/manolo-falco/");});
  test("Daniela uses daniela-mcarena", () => {assert.equal(personalInterviewUrl("daniela-macarena"), "https://alejandrosanchezmartinez.com/entrevistas/daniela-mcarena/");});
  test("no guest means no personal link", () => {assert.equal(personalInterviewUrl(), undefined);});
});
