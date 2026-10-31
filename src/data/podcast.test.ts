import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { episodeList, getGuestBySlug } from "./podcast";
import { episodeClips, episodeId, guestId, isoDuration, guestOrganization, guestBooks } from "./episodeSchema";

describe("Daniela verified episode data", () => {
  const ep = episodeList.find((entry) => entry.episodeNumber === 11);
  const guest = getGuestBySlug("daniela-macarena");
  test("duration is exactly 3667 seconds", () => {
    assert.equal(ep?.durationSeconds, 3667);
    assert.equal(isoDuration(ep?.duration), "PT1H1M7S");
  });
  test("all 29 official chapter boundaries and links are exact", () => {
    assert.ok(ep);
    const starts = [0,179,319,390,531,631,736,856,1067,1163,1267,1306,1460,1575,1656,1793,1902,2033,2193,2395,2472,2566,2723,2874,3000,3153,3274,3339,3439];
    const clips = episodeClips(ep);
    assert.deepEqual(clips.map((c) => c.startOffset), starts);
    assert.deepEqual(clips.map((c) => c.endOffset), [...starts.slice(1), 3667]);
    assert.deepEqual(clips.map((c) => c.url), starts.map((start) => `https://www.youtube.com/watch?v=t0ivuqdA4js&t=${start}s`));
  });
  test("eleven quotations have their supplied timestamps", () => {
    assert.deepEqual(ep?.quotes?.map((q) => q.start), [743,235,472,1159,1403,1427,2370,2486,3015,3434,3574]);
  });
  test("six FAQ references use the supplied moments and do not duplicate guest questions", () => {
    assert.equal(ep?.faq?.length, 6);
    assert.deepEqual(ep?.faq?.map((q) => q.start), [3000,2370,531,1306,1575,2472]);
    assert.equal(ep?.faq?.some((q) => guest?.qa?.some((g) => g.q === q.question)), false);
  });
  test("canonical guest, company and book identities are preserved", () => {
    assert.ok(ep); assert.ok(guest);
    assert.equal(episodeId(ep), "https://eldiariodelpoder.com/episodios/daniela-mcarena-crear-un-proyecto-viral-desde-cero#episode");
    assert.equal(guestId(guest.slug), "https://eldiariodelpoder.com/invitados/daniela-macarena#person");
    assert.deepEqual(guest.alternateName, ["Daniela Macarena", "Daniela Álvarez"]);
    assert.equal(guest.birthDate, "1996");
    assert.equal(guest.birthPlace, "Torrelodones, Comunidad de Madrid, España");
    assert.equal(guestOrganization(guest)?.foundingDate, "2020");
    assert.deepEqual(guestOrganization(guest)?.founder, { "@id": guestId(guest.slug) });
    assert.equal(guestBooks(guest)[0]?.isbn, "978-84-670-7794-0");
    assert.equal(guestBooks(guest)[0]?.datePublished, "2025-10-29");
  });
  test("other ten episodes do not gain optional sections", () => {
    const others = episodeList.filter((entry) => entry.episodeNumber !== 11);
    assert.equal(others.length, 10);
    for (const other of others) {
      assert.equal(other.chapters, undefined);
      assert.equal(other.quotes, undefined);
      assert.equal(other.faq, undefined);
      assert.deepEqual(episodeClips(other), []);
    }
  });
});