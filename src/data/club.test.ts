import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { CLUB_URL, CLUB_ID, clubApply, clubPrograms, type ClubProgram } from "./club";

describe("Club destinations", () => {
  test("organization identity follows the configured domain", () => {
    assert.equal(CLUB_ID, `${CLUB_URL}/#club`);
  });
  test("applications without a program go to solicitud", () => {
    assert.equal(clubApply(), `${CLUB_URL}/solicitud`);
  });
  for (const programa of ["mesa", "mentoria", "launchpad", "mentor"] satisfies ClubProgram[]) {
    test(`${programa} applications keep the requested program`, () => {
      assert.equal(clubApply(programa), `${CLUB_URL}/solicitud?programa=${programa}`);
    });
  }
});

describe("Approved club program rules", () => {
  const [mesa, mentoria, launchpad] = clubPrograms;
  test("Mesas have twelve to sixteen attendees", () => {
    assert.deepEqual(mesa.attendees, { min: 12, max: 16 });
  });
  test("mentoring lasts six months", () => assert.equal(mentoria.durationMonths, 6));
  test("mentoring runs from February to June 2027", () => assert.deepEqual(mentoria.period, { from: "2027-02", to: "2027-06" }));
  test("mentoring includes three in-person encounters", () => assert.equal(mentoria.inPersonMeetings, 3));
  test("mentoring includes three online sessions", () => assert.equal(mentoria.onlineMentoring, 3));
  test("mentoring has twenty places", () => assert.equal(mentoria.places, 20));
  test("mentoring has two scholarships", () => assert.equal(mentoria.scholarships, 2));
  test("Launchpad presentations last ten minutes", () => assert.equal(launchpad.presentationMinutes, 10));
  test("Launchpad questions last twenty minutes", () => assert.equal(launchpad.questionsMinutes, 20));
  test("first Launchpad is December 10 2026", () => assert.equal(launchpad.firstEdition, "2026-12-10"));
  test("Launchpad has no fee", () => assert.equal(launchpad.fee, 0));
  test("Launchpad has no commission", () => assert.equal(launchpad.commission, 0));
});