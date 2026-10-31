import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { countryList, getCountryBySlug, releaseTimeIn } from "./countries";
import { countryPageData } from "./countryPage";
import { CONTACT_EMAIL } from "./contact";
import { BOOKING_EMAIL } from "./booking";

describe("Country publication rules", () => {
  test("the supplied directory has exactly 22 unique countries", () => {
    assert.equal(countryList.length, 22);
    assert.equal(new Set(countryList.map((country) => country.slug)).size, 22);
    assert.equal(getCountryBySlug("nonexistent"), undefined);
  });

  test("weekly release is Monday at 15:00 in Madrid", () => {
    assert.deepEqual(releaseTimeIn("Europe/Madrid", new Date("2026-10-17T22:55:00Z")), { weekday: "lunes", time: "15:00" });
  });

  test("local schedules respect Madrid and US daylight saving changes", () => {
    const dates = ["2026-10-17T22:55:00Z", "2026-10-24T22:55:00Z", "2026-10-31T22:55:00Z"];
    assert.deepEqual(dates.map((date) => releaseTimeIn("America/New_York", new Date(date)).time), ["09:00", "10:00", "09:00"]);
    assert.deepEqual(dates.map((date) => releaseTimeIn("America/Mexico_City", new Date(date)).time), ["07:00", "08:00", "08:00"]);
  });

  test("only published episodes are recommended, and missing slugs are ignored", () => {
    const country = getCountryBySlug("mexico");
    assert.ok(country);
    const data = countryPageData(country, new Date("2026-10-17T22:55:00Z"));
    assert.deepEqual(data.episodes.map((episode) => episode.episodeNumber), [1, 4, 9, 6]);
    const modified = countryPageData({ ...country, episodes: [...country.episodes, { slug: "unpublished", why: "Not published" }] });
    assert.equal(modified.episodes.length, 4);
    for (const entry of countryList) {
      assert.equal(countryPageData(entry).episodes.length, entry.episodes.length);
    }
  });

  test("all contact and booking uses the supplied working mailbox", () => {
    assert.equal(CONTACT_EMAIL, "contactoeldiariodelpoder@gmail.com");
    assert.equal(BOOKING_EMAIL, CONTACT_EMAIL);
  });

  test("all 22 countries keep the four existing FAQ answers after the new discovery question", () => {
    for (const country of countryList) {
      const { faq, zones } = countryPageData(country);
      assert.equal(faq.length, 6);
      assert.equal(faq[2].answer, country.listenNote ?? "Gratis en Spotify y en YouTube (@eldiariodelpoder), y en eldiariodelpoder.com.");
      assert.equal(faq[3].answer, `Cada ${zones[0]?.weekday} a las ${zones[0]?.time} (${zones[0]?.label}), cuando La Vanguardia publica la conversación de la semana.`);
      assert.equal(faq[4].answer, country.guestsAnswer);
      assert.equal(faq[5].answer, `${country.sponsor} Las opciones y el formulario están en eldiariodelpoder.com/patrocinadores.`);
    }
  });

  test("Cuba recommends YouTube only in the discovery answer", () => {
    const country = getCountryBySlug("cuba");
    assert.ok(country);
    assert.ok(countryPageData(country).faq[1]?.answer.includes("En Cuba se escucha gratis en YouTube."));
  });

  test("Mexico recommends Spotify and YouTube in the discovery answer", () => {
    const country = getCountryBySlug("mexico");
    assert.ok(country);
    assert.ok(countryPageData(country).faq[1]?.answer.includes("En México se escucha gratis en Spotify y YouTube."));
  });
});