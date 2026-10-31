import type { EpisodeEntry, GuestEntry } from "./podcast";

export const SITE = "https://eldiariodelpoder.com";
export const episodeUrl = (ep: EpisodeEntry) => `${SITE}/episodios/${ep.slug}`;
export const episodeId = (ep: EpisodeEntry) => `${episodeUrl(ep)}#episode`;
export const guestId = (slug: string) => `${SITE}/invitados/${slug}#person`;
export const timestampUrl = (youtubeId: string, start: number) => `https://www.youtube.com/watch?v=${youtubeId}&t=${start}s`;
export const episodeHeading = (ep: EpisodeEntry) => ep.keepTitleCase ? `${ep.guest}: ${ep.title}` : `${ep.guest}: ${ep.title.charAt(0).toLocaleLowerCase("es")}${ep.title.slice(1)}`;

export function isoDuration(raw?: string) {
  if (!raw) return undefined;
  const h = raw.match(/(\d+)\s*h/i);
  const m = raw.match(/(\d+)\s*m/i);
  const s = raw.match(/(\d+)\s*s/i);
  if (!h && !m && !s) return undefined;
  return `PT${h ? `${Number(h[1])}H` : ""}${m ? `${Number(m[1])}M` : ""}${s ? `${Number(s[1])}S` : ""}`;
}

export function episodeClips(ep: EpisodeEntry) {
  if (!ep.youtubeId) return [];
  const youtubeId = ep.youtubeId;
  return (ep.chapters ?? []).map((chapter, index) => {
    const end = ep.chapters?.[index + 1]?.start ?? ep.durationSeconds;
    return { "@type": "Clip", name: chapter.title, startOffset: chapter.start,
      ...(end !== undefined ? { endOffset: end } : {}), url: timestampUrl(youtubeId, chapter.start) };
  });
}

export function guestOrganization(guest: GuestEntry) {
  const org = guest.organization;
  if (!org) return undefined;
  return { "@type": "Organization", "@id": org.id, name: org.name, url: org.url,
    foundingDate: org.foundingDate, founder: { "@id": guestId(guest.slug) }, sameAs: org.sameAs,
    ...(org.parentOrganization ? { parentOrganization: { "@type": "Organization", ...org.parentOrganization } } : {}) };
}

export function guestBooks(guest: GuestEntry) {
  return (guest.books ?? []).map((book) => ({ "@type": "Book", name: book.name,
    author: { "@id": guestId(guest.slug) }, publisher: { "@type": "Organization", name: book.publisher },
    isbn: book.isbn, datePublished: book.datePublished, url: book.url }));
}