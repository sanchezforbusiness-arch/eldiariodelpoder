import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { CLUB_URL, CLUB_ID } from "./club";

describe("Club identity", () => {
  test("organization identity follows the configured external destination", () => {
    assert.equal(CLUB_URL, "https://elclubdelpoder.com");
    assert.equal(CLUB_ID, `${CLUB_URL}/#club`);
    assert.equal(new URL(CLUB_URL).protocol, "https:");
  });
});
