import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  ALEJANDRO_ID,
  VICTOR_ID,
  ORGANIZATION_ID,
  PODCAST_SERIES_ID,
  DIARIO_EXTRA_URL,
  pressItems,
  pressPodcastSchema,
  pressArticleSchema,
  vanguardiaAnswer,
} from "./press";

describe("Diario Extra founders report", () => {
  const item = pressItems.find((entry) => entry.url === DIARIO_EXTRA_URL);

  test("it is the first and only featured press piece", () => {
    assert.equal(pressItems[0]?.url, DIARIO_EXTRA_URL);
    assert.deepEqual(pressItems.filter((entry) => entry.featured).map((entry) => entry.url), [DIARIO_EXTRA_URL]);
  });

  test("the NewsArticle is signed by Valeria Alvear, not by the founders or the brand", () => {
    const schema = item && pressArticleSchema(item);
    assert.deepEqual(schema?.author, {
      "@type": "Person",
      name: "Valeria Alvear",
      url: "https://www.extra.ec/autores/valeria-alvear/",
    });
  });

  test("the article is about the founders and the podcast, and mentions Lasso and La Vanguardia", () => {
    const schema = item && pressArticleSchema(item);
    assert.deepEqual(schema?.about, [
      { "@id": ALEJANDRO_ID },
      { "@id": VICTOR_ID },
      { "@id": PODCAST_SERIES_ID },
      { "@id": ORGANIZATION_ID },
    ]);
    assert.deepEqual(schema?.mentions, [
      { "@type": "Person", name: "Guillermo Lasso", jobTitle: "Expresidente de Ecuador" },
      { "@type": "NewsMediaOrganization", name: "La Vanguardia", url: "https://www.lavanguardia.com/" },
    ]);
    assert.deepEqual(schema?.publisher, { "@type": "NewsMediaOrganization", name: "Diario Extra (Ecuador)", areaServed: "Ecuador" });
  });

  test("the La Vanguardia FAQ still counts exactly three pieces", () => {
    assert.match(vanguardiaAnswer("Alejandro Sánchez Martínez"), /Cuatro de esas piezas/);
    assert.match(vanguardiaAnswer("Alejandro Sánchez Martínez"), /Daniela McArena \(27\/10\/2026\)/);
    assert.doesNotMatch(vanguardiaAnswer("Alejandro Sánchez Martínez"), /Tres de esas|En las tres/);
  });
});

describe("Radio UASLP press metadata", () => {
  const item = pressItems.find((entry) => entry.url === "https://open.spotify.com/episode/17vhnK9phFjTLaeAGl3B1g");

  test("external audio is a podcast episode, not an article", () => {
    assert.equal(item?.kind, "radio");
    assert.equal(item && pressPodcastSchema(item)?.["@type"], "PodcastEpisode");
  });

  test("publication date and exact duration match the supplied recording", () => {
    const schema = item && pressPodcastSchema(item);
    assert.equal(schema?.datePublished, "2026-09-08");
    assert.equal(schema?.duration, "PT51M44S");
  });

  test("interview subjects and actors reuse the canonical founder identifiers", () => {
    const schema = item && pressPodcastSchema(item);
    assert.deepEqual(schema?.about, [{ "@id": ALEJANDRO_ID }, { "@id": VICTOR_ID }]);
    assert.deepEqual(schema?.actor, [{ "@id": ALEJANDRO_ID }, { "@id": VICTOR_ID }]);
  });

  test("the series belongs to Radio UASLP", () => {
    const schema = item && pressPodcastSchema(item);
    assert.equal(schema?.partOfSeries.url, "https://open.spotify.com/show/5TboOk08IDWFZBphQyZYit");
    assert.deepEqual(schema?.partOfSeries.publisher, { "@type": "RadioStation", name: "Radio UASLP" });
  });

  test("new press links occur exactly once", () => {
    for (const fragment of ["17vhnK9phFjTLaeAGl3B1g", "6968857_0", "192656", "a71259234", "2814249"]) {
      assert.equal(pressItems.filter((entry) => entry.url?.includes(fragment)).length, 1);
    }
  });
});