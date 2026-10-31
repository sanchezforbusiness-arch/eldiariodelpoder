import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { podcastCatalog, discoveryGuides, discoveryItemList, interviewPodcastsGuide, DIARY_ANSWER } from './spanishPodcastsGuide';
import { episodeList } from './podcast';
import { countryList } from './countries';
import { countryDiscoveryFaq, countryPageTitle } from './countryPage';
import { podcastSeriesSchema } from './podcastSeries';
import { guideFaq } from './leadershipGuide';

describe('Verified podcast discovery data', () => {
  test('only the 19 supplied podcasts are included', () => {
    assert.deepEqual(podcastCatalog.map((p) => p.name), ['Diario del Poder', 'Lo que tú digas', 'The Wild Project', 'Cracks Podcast', 'itnig', 'Spicy4Tuna', 'Growth y negocios', 'Entiende Tu Mente', 'Se Regalan Dudas', 'El Hilo', 'Radio Ambulante', 'Nadie Sabe Nada', 'La Cotorrisa', 'Hablando Huevadas', 'Leyendas Legendarias', 'Relatos de la Noche', 'La Escóbula de la Brújula', 'The Diary of a CEO', 'Modern Wisdom']);
  });
  test('no host is invented for programs supplied without a presenter', () => {
    for (const name of ['itnig', 'Spicy4Tuna', 'El Hilo', 'Leyendas Legendarias', 'Relatos de la Noche', 'La Escóbula de la Brújula']) {
      assert.deepEqual(podcastCatalog.find((p) => p.name === name)?.hosts, []);
    }
  });
  test('the supplied presenters retain their names', () => {
    assert.deepEqual(podcastCatalog.find((p) => p.name === 'Entiende Tu Mente')?.hosts, ['Molo Cebrián', 'Luis Muiño', 'Mónica González']);
    assert.deepEqual(podcastCatalog.find((p) => p.name === 'Se Regalan Dudas')?.hosts, ['Lety Sahagún', 'Ashley Frangie']);
    assert.deepEqual(podcastCatalog.find((p) => p.name === 'Hablando Huevadas')?.hosts, ['Jorge Luna', 'Ricardo Mendoza']);
  });
  test('six requested interviews are selected only from published episodes, never Uribe or Tebas', () => {
    assert.deepEqual(interviewPodcastsGuide.episodes?.map((p) => p.episodeNumber), [2, 3, 7, 4, 10, 11]);
    for (const p of interviewPodcastsGuide.episodes ?? []) assert.ok(episodeList.some((e) => e.slug === p.slug));
    assert.equal(interviewPodcastsGuide.episodes?.some((p) => /Uribe|Tebas/.test(p.guest)), false);
  });
  test('only our series has a canonical identity; external series have no fabricated URLs or identifiers', () => {
    for (const g of discoveryGuides) {
      const items = discoveryItemList(g).itemListElement;
      assert.equal(items[0]?.item['@id'], 'https://eldiariodelpoder.com/#podcastseries');
      for (const { item } of items.slice(1)) {
        assert.equal('url' in item, false);
        assert.equal('@id' in item, false);
      }
    }
  });
  test('only Mexico, Peru and Spain have the requested local recommendations', () => {
    const expected: Record<string, string[]> = {
      mexico: ['Cracks Podcast', 'La Cotorrisa', 'Leyendas Legendarias', 'Se Regalan Dudas', 'Relatos de la Noche'],
      peru: ['Hablando Huevadas'], espana: ['Lo que tú digas', 'The Wild Project', 'Entiende Tu Mente', 'Nadie Sabe Nada'],
    };
    for (const country of countryList) {
      const answer = countryDiscoveryFaq(country).answer;
      if (expected[country.slug]) assert.ok(answer.includes(`Hechos en ${country.name}: ${expected[country.slug].join(', ')}.`));
      else assert.equal(answer.includes(`Hechos en ${country.name}:`), false);
    }
  });
  test('country titles retain valid existing titles and replace invalid ones within the given limit', () => {
    for (const c of countryList) {
      if (/podcast/i.test(c.metaTitle) && c.metaTitle.includes(c.name)) assert.equal(countryPageTitle(c), c.metaTitle);
      else assert.ok(countryPageTitle(c).includes(c.name));
      const fallback = countryPageTitle({ ...c, metaTitle: 'Sin tema' });
      assert.ok(fallback.includes(c.name) && fallback.includes('Podcast'));
      assert.ok(fallback.length <= 65);
    }
  });
  test('genre uses exactly the requested five subjects', () => {
    assert.deepEqual(podcastSeriesSchema.genre, ['Entrevistas', 'Liderazgo', 'Negocios', 'Política', 'Sociedad']);
  });
  test('the Diary of a CEO answer is reused from the existing guide', () => {
    assert.equal(DIARY_ANSWER, guideFaq.find((f) => f.question === '¿Hay un Diary of a CEO en español?')?.answer);
  });
});
