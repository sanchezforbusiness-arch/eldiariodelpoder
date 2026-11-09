import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { advisors, advisorPath, advisorPersonId, advisorPerson, advisorMembers, advisorFaq } from "./advisors";

describe("verified advisor identities", () => {
  test("four advisors retain the requested order", () => {
    assert.deepEqual(advisors.map((advisor) => advisor.name), ["Federica Fornaciari", "David García Núñez", "Iñigo Rivero", "Jordi Urbea"]);
  });
  test("only the three requested advisor slugs produce new pages", () => {
    assert.deepEqual(advisors.filter((advisor) => !advisor.guestSlug).map(advisorPath), ["/advisors/david-garcia-nunez", "/advisors/inigo-rivero-iruretagoyena", "/advisors/jordi-urbea"]);
  });
  test("Federica reuses her guest page and existing Person ID", () => {
    const federica = advisors.find((advisor) => advisor.name === "Federica Fornaciari");
    assert.ok(federica);
    assert.equal(advisorPath(federica), "/invitados/federica-fornaciari");
    assert.equal(advisorPersonId(federica), "https://eldiariodelpoder.com/invitados/federica-fornaciari#person");
    assert.equal(advisorPerson(federica).alternateName, "Federica Ilaria Fornaciari");
  });
  test("Jordi's Ogilvy role is historical, never his present employer", () => {
    const jordi = advisors.find((advisor) => advisor.slug === "jordi-urbea");
    assert.ok(jordi);
    assert.equal(jordi.role, "Advisor · Comunicación & Reputación");
    assert.equal(jordi.bio, "27 años en Ogilvy (WPP), donde llegó a CEO de Ogilvy Spain. Asesor en estrategia de marca, reputación y narrativa institucional.");
    assert.equal(advisorPerson(jordi).worksFor, undefined);
    assert.ok(advisorPerson(jordi).alumniOf?.some((organization) => organization.name === "Ogilvy (WPP)"));
    assert.doesNotMatch(JSON.stringify(advisors), /(?:es|actual|actualmente|Advisor · Comunicación &) CEO de Ogilvy Spain/);
  });
  test("organization roles reference the same four canonical people", () => {
    assert.deepEqual(advisorMembers.map((role) => role.member["@id"]), advisors.map(advisorPersonId));
    for (const advisor of advisors) {
      assert.equal(advisorPerson(advisor).memberOf.memberOf["@id"], "https://eldiariodelpoder.com/#organization");
      assert.equal(advisorPerson(advisor).memberOf.roleName, `Advisor · ${advisor.area}`);
      assert.deepEqual(advisorPerson(advisor).sameAs, [advisor.ln]);
      if (!advisor.guestSlug) assert.ok(advisorPersonId(advisor).endsWith("#persona"));
    }
  });
  test("each profile has three FAQ sourced from the advisor data", () => {
    for (const advisor of advisors) {
      assert.equal(advisorFaq(advisor).length, 3);
      assert.equal(advisorFaq(advisor)[1]?.a, `${advisor.fullName} es advisor en ${advisor.area} del consejo asesor de Diario del Poder.`);
    }
  });
});