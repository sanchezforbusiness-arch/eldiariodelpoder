import { describe, expect, test } from "bun:test";
import { ALEJANDRO_ID, VICTOR_ID, pressItems, pressPodcastSchema } from "./press";

describe("Radio UASLP press metadata", () => {
  const item = pressItems.find((entry) => entry.url === "https://open.spotify.com/episode/17vhnK9phFjTLaeAGl3B1g");

  test("external audio is a podcast episode, not an article", () => {
    expect(item?.kind).toBe("radio");
    expect(item && pressPodcastSchema(item)?.["@type"]).toBe("PodcastEpisode");
  });

  test("publication date and exact duration match the supplied recording", () => {
    const schema = item && pressPodcastSchema(item);
    expect(schema?.datePublished).toBe("2026-09-08");
    expect(schema?.duration).toBe("PT51M44S");
  });

  test("interview subjects and actors reuse the canonical founder identifiers", () => {
    const schema = item && pressPodcastSchema(item);
    expect(schema?.about).toEqual([{ "@id": ALEJANDRO_ID }, { "@id": VICTOR_ID }]);
    expect(schema?.actor).toEqual([{ "@id": ALEJANDRO_ID }, { "@id": VICTOR_ID }]);
  });

  test("the series belongs to Radio UASLP", () => {
    const schema = item && pressPodcastSchema(item);
    expect(schema?.partOfSeries.url).toBe("https://open.spotify.com/show/5TboOk08IDWFZBphQyZYit");
    expect(schema?.partOfSeries.publisher).toEqual({ "@type": "RadioStation", name: "Radio UASLP" });
  });

  test("new press links occur exactly once", () => {
    for (const fragment of ["17vhnK9phFjTLaeAGl3B1g", "6968857_0", "192656", "a71259234", "2814249"]) {
      expect(pressItems.filter((entry) => entry.url?.includes(fragment))).toHaveLength(1);
    }
  });
});