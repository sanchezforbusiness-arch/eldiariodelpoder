import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { landingEs } from "./landing";
import { landingHref } from "./LandingContext";

describe("Landing destination rules", () => {
  test("Spanish destinations have no locale prefix", () => {
    assert.equal(landingEs.linkPrefix, "");
    assert.equal(landingHref(landingEs, "/episodios"), "/episodios");
  });

  test("a translated landing falls back to Spanish for missing destinations", () => {
    const dict = { ...landingEs, linkPrefix: "/en" };
    assert.equal(landingHref(dict, "/episodios"), "/episodios");
    assert.equal(landingHref(dict, "/episodios", new Set(["/episodios"])), "/en/episodios");
  });
});