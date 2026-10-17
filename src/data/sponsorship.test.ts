import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { sponsorshipSchema, sponsorshipServerSchema, sponsorshipOrigin, SPONSOR_COUNTRIES, SPONSOR_MARKETS, SPONSOR_BUDGETS } from "./sponsorship";

const valid = { nombre: "PRUEBA — borrar", empresa: "Empresa", cargo: "Dirección", email: "prueba@example.org", web: "https://example.org", pais: "España", mercados: ["España"], presupuesto: "Aún no lo sé", objetivo: "Conocer formatos para una campaña.", acepta: true, website_url: "", origen: "" };

describe("Sponsorship validation", () => {
  test("accepts a complete request", () => assert.equal(sponsorshipSchema.safeParse(valid).success, true));
  for (const field of ["nombre", "empresa", "cargo"]) {
    test(`${field} permits 120 characters but not 121`, () => {
      assert.equal(sponsorshipSchema.safeParse({ ...valid, [field]: "a".repeat(120) }).success, true);
      assert.equal(sponsorshipSchema.safeParse({ ...valid, [field]: "a".repeat(121) }).success, false);
    });
  }
  test("email permits 200 characters but not 201", () => {
    assert.equal(sponsorshipSchema.safeParse({ ...valid, email: `${"a".repeat(188)}@example.org` }).success, true);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, email: `${"a".repeat(189)}@example.org` }).success, false);
  });
  test("email must have valid format", () => assert.equal(sponsorshipSchema.safeParse({ ...valid, email: "invalid" }).success, false));
  test("objective has a minimum of 10 characters", () => {
    assert.equal(sponsorshipSchema.safeParse({ ...valid, objetivo: "a".repeat(10) }).success, true);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, objetivo: "a".repeat(9) }).success, false);
  });
  test("objective has a maximum of 2000 characters", () => {
    assert.equal(sponsorshipSchema.safeParse({ ...valid, objetivo: "a".repeat(2000) }).success, true);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, objetivo: "a".repeat(2001) }).success, false);
  });
  test("markets are required and cannot exceed 22", () => {
    assert.equal(sponsorshipSchema.safeParse({ ...valid, mercados: [] }).success, false);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, mercados: Array(23).fill("España") }).success, false);
  });
  test("data treatment consent is required", () => assert.equal(sponsorshipSchema.safeParse({ ...valid, acepta: false }).success, false));
  test("country options include the 22 supplied countries and Otro", () => {
    assert.equal(SPONSOR_COUNTRIES.length, 23);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, pais: "Otro" }).success, true);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, pais: "Invalid" }).success, false);
  });
  test("only specified markets and budget options are accepted", () => {
    assert.equal(SPONSOR_MARKETS.length, 9);
    assert.equal(SPONSOR_BUDGETS.length, 5);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, mercados: ["Invalid"] }).success, false);
    assert.equal(sponsorshipSchema.safeParse({ ...valid, presupuesto: "Invalid" }).success, false);
  });
  test("honeypot strips submission data before success", () => assert.deepEqual(sponsorshipServerSchema.parse({ ...valid, website_url: "bot" }), { website_url: "bot" }));
  test("company URL cannot execute scripts", () => assert.equal(sponsorshipSchema.safeParse({ ...valid, web: "javascript:alert(1)" }).success, false));
  test("origin records referrer and only utm query parameters", () => assert.equal(sponsorshipOrigin("https://example.org/", "?utm_source=linkedin&utm_campaign=patrocinio&token=private"), "https://example.org/ | utm_source=linkedin&utm_campaign=patrocinio"));
});