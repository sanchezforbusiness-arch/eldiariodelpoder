import { test } from "node:test";
import assert from "node:assert/strict";
import { guideItemList, GUIDE_DATE } from "./leadershipGuide";
import { podcastSeriesSchema } from "./podcastSeries";

test("guide includes exactly the eight supplied podcasts, with no fabricated external identities or URLs", () => {
  assert.equal(guideItemList.numberOfItems, 8);
  assert.equal(guideItemList.itemListElement[0]?.item["@id"], "https://eldiariodelpoder.com/#podcastseries");
  for (const { item } of guideItemList.itemListElement.slice(1)) {
    assert.equal("url" in item, false);
    assert.equal("@id" in item, false);
  }
  assert.equal(guideItemList.itemListElement[3]?.item.name, "itnig");
  assert.equal("author" in (guideItemList.itemListElement[3]?.item ?? {}), false);
  assert.equal("author" in (guideItemList.itemListElement[4]?.item ?? {}), false);
});

test("the significant guide update date is October 27, 2026", () => {
  assert.equal(GUIDE_DATE, "2026-10-27");
});

test("shared series author and creators use canonical founder identifiers", () => {
  assert.equal(podcastSeriesSchema.author["@id"], "https://alejandrosanchezmartinez.com/#persona");
  assert.deepEqual(podcastSeriesSchema.creator.map((person) => person["@id"]), ["https://alejandrosanchezmartinez.com/#persona", "https://eldiariodelpoder.com/victor-hugo-gandarilla-de-andres#persona"]);
  assert.ok(podcastSeriesSchema.alternateName.includes("Diary of Power"));
});