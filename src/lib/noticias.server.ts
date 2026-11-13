import { createPublicServerClient } from './supabase-public.server';
import { CARD_COLUMNS, FULL_COLUMNS, NEWS_PAGE_SIZE, tagSlug, madridDate, isHemeroteca, freeMarkdown, type NoticiaCard, type Noticia } from '@/data/noticias';

export type NewsFilter = { seccion?: string; edicion?: string; autor?: 'alejandro' | 'victor'; tema?: string; pagina?: number };
export async function allNews(): Promise<NoticiaCard[]> {
  const client = createPublicServerClient();
  const rows: NoticiaCard[] = [];
  for (let offset = 0; ; offset += 500) {
    const { data, error } = await client.from('noticias').select(CARD_COLUMNS).eq('publicada', true).lte('fecha_publicacion', new Date().toISOString()).order('fecha_publicacion', { ascending: false }).order('id').range(offset, offset + 499);
    if (error || !data) throw new Error('No se pueden cargar las noticias en este momento.');
    rows.push(...data as unknown as NoticiaCard[]);
    if (data.length < 500) break;
  }
  return rows;
}
export async function newsList(filter: NewsFilter = {}) {
  // The full paginated public catalog also resolves accent-normalized topic slugs.
  const all = await allNews();
  const latest = all.slice(0, 5);
  const editions = [...new Set(all.map(n => n.edicion))].sort().reverse();
  let filtered = all.filter(n => (!filter.seccion || n.seccion === filter.seccion) && (!filter.edicion || n.edicion === filter.edicion) && (!filter.autor || n.autor === filter.autor || n.coautor === filter.autor) && (!filter.tema || n.etiquetas.some(t => tagSlug(t) === filter.tema)));
  if (!filter.seccion && !filter.autor && !filter.tema && !filter.edicion) {
    const current = editions[0] ?? madridDate();
    filtered = filtered.filter(n => n.edicion === current).sort((a,b) => Number(b.destacada) - Number(a.destacada) || a.prioridad - b.prioridad || b.fecha_publicacion.localeCompare(a.fecha_publicacion));
  }
  const pagina = filter.pagina ?? 1;
  return { items: filtered.slice((pagina - 1) * NEWS_PAGE_SIZE, pagina * NEWS_PAGE_SIZE), total: filtered.length, pagina, editions, latest, today: madridDate(), edition: filter.edicion ?? editions[0] ?? madridDate(), updated: latest[0]?.fecha_actualizacion ?? null, popular: all.filter(n => n.edicion === (editions[0] ?? madridDate())).sort((a,b) => a.prioridad - b.prioridad).slice(0,5), analysis: all.filter(n => n.es_premium).slice(0,3), topicName: filter.tema ? all.flatMap(n => n.etiquetas).find(t => tagSlug(t) === filter.tema) ?? filter.tema : null };
}
export async function publicArticle(slug: string) {
  const { data, error } = await createPublicServerClient().from('noticias').select(FULL_COLUMNS).eq('publicada', true).lte('fecha_publicacion', new Date().toISOString()).eq('slug',slug).maybeSingle();
  if (error) throw new Error('No se puede cargar la noticia.');
  if (!data) return null;
  const n = data as unknown as Noticia;
  return { ...n, cuerpo: isHemeroteca(n.edicion) ? freeMarkdown(n.cuerpo) : n.cuerpo };
}
