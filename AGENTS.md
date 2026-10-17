# Project conventions

- Keep press entries and external audio metadata in `src/data/press.ts`; use its `pressPodcastSchema` helper in press and founder JSON-LD so audio interviews are never marked as news articles.
- Founder profiles accept optional social links so adding one founder's profile does not change another's links.