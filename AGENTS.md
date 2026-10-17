# Project conventions

- Keep press entries and external audio metadata in `src/data/press.ts`; use its `pressPodcastSchema` helper in press and founder JSON-LD so audio interviews are never marked as news articles.
- Founder profiles accept optional social links so adding one founder's profile does not change another's links.
- Use `src/data/contact.ts` as the sole contact-email source so mailbox updates propagate to visible content, mailto links and structured data.
- Keep literal country editorial data in `src/data/countries.ts`; country loaders use `src/data/countryPage.ts` to share a stable schedule and FAQ snapshot between SSR, hydration and JSON-LD.
- Keep `/paises` as `paises.index.tsx` and country details as `paises.$slug.tsx` so each detail mounts independently, without an index layout swallowing it.
- Sitemap content sources must paginate public reads and return failure instead of partial XML; lastmod uses only page-specific content timestamps, never generation time.
- Sponsorship submissions use shared Zod validation in `src/data/sponsorship.ts`, a public server function with an insert-only client and a database rate-limit trigger; this keeps submissions private and validates both entry points.