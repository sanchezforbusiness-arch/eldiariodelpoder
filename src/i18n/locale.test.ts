import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { localeForPath, staticLanguageHref } from "./locale";
import { landingForCountry } from "./landing.country";
import { countryList, getCountryBySlug } from "@/data/countries";
import { countryPageData } from "@/data/countryPage";

describe("Static language URLs", () => {
  test("English and Arabic document languages follow only their own URL segments", () => {
    assert.equal(localeForPath("/en"), "en");
    assert.equal(localeForPath("/en/episodios"), "en");
    assert.equal(localeForPath("/ar"), "ar");
    assert.equal(localeForPath("/ar/episodios"), "ar");
    assert.equal(localeForPath("/agenda"), "es");
    assert.equal(localeForPath("/paises/mexico"), "es");
  });
  test("static choices lead to English, Arabic, or the current Spanish page", () => {
    assert.equal(staticLanguageHref("en", "/paises/mexico"), "/en");
    assert.equal(staticLanguageHref("ar", "/en"), "/ar");
    assert.equal(staticLanguageHref("es", "/ar"), "/");
    assert.equal(staticLanguageHref("es", "/paises/mexico"), "/paises/mexico");
    assert.equal(staticLanguageHref("fr", "/en"), undefined);
  });
});

describe("Country landing publication rules", () => {
  test("the 21 non-Spain countries keep their canonical metadata and first-zone schedule", () => {
    const countries = countryList.filter((country) => country.slug !== "espana");
    assert.equal(countries.length, 21);
    for (const country of countries) {
      const dict = landingForCountry(country);
      const snapshot = countryPageData(country);
      assert.equal(dict.meta.title, country.metaTitle);
      assert.equal(dict.faq.items.length, 5);
      assert.equal(dict.faq.items[2].a, snapshot.faq[1].answer);
    }
  });
  test("Mexico uses its supplied editorial answers and sponsorship text", () => {
    const country = getCountryBySlug("mexico");
    assert.ok(country);
    const dict = landingForCountry(country);
    assert.equal(dict.faq.items[3].a, country.guestsAnswer);
    assert.equal(dict.faq.items[4].a, `${country.sponsor} Las opciones y el formulario están en eldiariodelpoder.com/patrocinadores.`);
  });
});