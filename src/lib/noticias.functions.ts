import { createServerFn } from '@tanstack/react-start';
import { setResponseHeader } from '@tanstack/react-start/server';
import { z } from 'zod';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { premiumRequestSchema, PREMIUM_CHECKOUT_ENABLED } from '@/data/premium';
import { correctionSchema } from '@/data/correcciones';
import { isHemeroteca } from '@/data/noticias';

const filters = z.object({ seccion: z.string().optional(), edicion: z.string().optional(), autor: z.enum(['alejandro','victor']).optional(), tema: z.string().optional(), pagina: z.number().int().min(1).max(9999).optional() });
export const listNews = createServerFn({ method: 'GET' }).inputValidator((input: unknown) => filters.parse(input)).handler(async ({ data }) => {
  setResponseHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
  const { newsList } = await import('./noticias.server');
  return newsList(data);
});
export const getNews = createServerFn({ method: 'GET' }).inputValidator((input: unknown) => z.object({ slug: z.string().min(1).max(200) }).parse(input)).handler(async ({ data }) => {
  setResponseHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
  const { publicArticle } = await import('./noticias.server');
  return publicArticle(data.slug);
});
export const accountStatus = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  setResponseHeader('Cache-Control','private, no-store');
  const { data, error } = await context.supabase.from('suscripciones').select('id,plan,estado,inicio,fin').eq('user_id',context.userId).order('inicio',{ascending:false});
  if (error) throw new Error('No se puede consultar tu suscripción.');
  const { data: active, error: activeError } = await context.supabase.rpc('tiene_premium_activo', { _user_id: context.userId });
  if (activeError) throw new Error('No se puede comprobar el acceso Premium.');
  return { active: active === true, subscriptions: data ?? [] };
});
export const premiumBody = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input)).handler(async ({ data, context }) => {
  setResponseHeader('Cache-Control','private, no-store');
  const { data: active, error } = await context.supabase.rpc('tiene_premium_activo',{_user_id:context.userId});
  if (error) throw new Error('No se puede comprobar el acceso Premium.');
  if (!active) return { active: false, body: null };
  const { data: n, error: newsError } = await context.supabase.from('noticias').select('cuerpo,es_premium,edicion').eq('id',data.id).eq('publicada',true).lte('fecha_publicacion',new Date().toISOString()).maybeSingle();
  if (newsError) throw new Error('No se puede cargar el contenido.');
  if (!n) return { active: true, body: null };
  if (n.es_premium) {
    const { data: row, error: bodyError } = await context.supabase.from('noticias_premium').select('cuerpo').eq('noticia_id',data.id).maybeSingle();
    if (bodyError) throw new Error('No se puede cargar la continuación.');
    return { active: true, body: row?.cuerpo ?? null };
  }
  return { active: true, body: isHemeroteca(n.edicion) ? n.cuerpo : null };
});
export const requestPremium = createServerFn({ method:'POST' }).inputValidator((input: unknown) => premiumRequestSchema.parse(input)).handler(async ({data}) => {
  if (data.website_url.trim()) return {ok:true};
  const { createPublicServerClient } = await import('./supabase-public.server');
  const {error} = await createPublicServerClient().from('premium_solicitudes').insert({email:data.email.toLowerCase(),plan:data.plan ?? null});
  return {ok: !error};
});
export const requestCorrection = createServerFn({ method:'POST' }).inputValidator((input:unknown) => correctionSchema.parse(input)).handler(async ({data}) => {
  if (data.website_url.trim()) return {ok:true};
  const {createPublicServerClient} = await import('./supabase-public.server');
  const {error} = await createPublicServerClient().from('correcciones_solicitudes').insert({nombre:data.nombre,email:data.email.toLowerCase(),url:data.url,descripcion:data.descripcion});
  return {ok: !error};
});
export const startPremiumCheckout = createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator((input:unknown) => z.object({plan:z.enum(['mensual','anual'])}).parse(input)).handler(async () => {
  setResponseHeader('Cache-Control','private, no-store');
  if (!PREMIUM_CHECKOUT_ENABLED) return {enabled:false,url:null};
  // TODO Stripe: create a hosted checkout with server-owned price IDs and context.userId.
  // TODO: verify the Stripe webhook signature before updating subscriptions; enforce event idempotency.
  // TODO: configure success/cancel URLs, customer portal, renewals and cancellations before enabling checkout.
  throw new Error('Las suscripciones todavía no están disponibles.');
});
