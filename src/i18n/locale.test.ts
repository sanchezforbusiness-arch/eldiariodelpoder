import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { localeForPath, staticLanguageHref } from "./locale";

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
