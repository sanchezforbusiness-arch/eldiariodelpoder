import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { ALEJANDRO_ID, VICTOR_ID, pressItems, pressPodcastSchema } from "./press";

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