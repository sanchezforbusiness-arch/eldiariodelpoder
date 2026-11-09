import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { NEWSLETTER_ENABLED, disabledNewsletterResponse, isNewsletterPath } from "./newsletter";

describe("Temporary newsletter availability", () => {
  test("the single flag disables the newsletter", () => assert.equal(NEWSLETTER_ENABLED, false));
  test("all newsletter paths temporarily redirect to home with noindex", () => {
    for (const path of ["/newsletter", "/newsletter/", "/newsletter/edicion", "/newsletter/imagen/foto.webp", "/newsletter/feed.json", "/newsletter/rss.xml", "/newsletter/otra/ruta"]) {
      const response = disabledNewsletterResponse(path);
      assert.equal(response?.status, 302);
      assert.equal(response?.headers.get("Location"), "/");
      assert.equal(response?.headers.get("X-Robots-Tag"), "noindex");
      assert.equal(response?.headers.get("Cache-Control"), "no-store");
    }
  });
  test("enabling the flag restores access to every newsletter path", () => {
    assert.equal(disabledNewsletterResponse("/newsletter", true), undefined);
    assert.equal(disabledNewsletterResponse("/newsletter/edicion", true), undefined);
  });
  test("unrelated routes are unaffected", () => {
    for (const path of ["/", "/nosotros", "/en", "/ar", "/invitados/daniela-macarena", "/episodios", "/newsletter-other"]) {
      assert.equal(isNewsletterPath(path), false);
      assert.equal(disabledNewsletterResponse(path), undefined);
    }
  });
});