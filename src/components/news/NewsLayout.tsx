import type {ReactNode} from 'react';
import {Link} from '@tanstack/react-router';
import {Navbar} from '@/components/ddp/Navbar';
import {FooterGrid} from '@/components/ddp/FooterGrid';
import {SECCIONES,fechaLarga,horaMadrid,noticiaPath,type NoticiaCard} from '@/data/noticias';
import {useNewsAuth} from './NewsAuth';
import {Button} from '@/components/ui/button';
import {useRouter} from '@tanstack/react-router';
export const TRUST_LINKS=[{to:'/politica-editorial',label:'Política editorial'},{to:'/correcciones',label:'Correcciones'},{to:'/aviso-legal',label:'Aviso legal'},{to:'/contacto',label:'Contacto'},{to:'/redaccion',label:'Redacción'}] as const;
export function NewsLayout({children,date,updated,latest=[],active}:{children:ReactNode;date?:string;updated?:string|null;latest?:NoticiaCard[];active?:string}){
  const {user}=useNewsAuth();
  return <div className="news-surface"><Navbar/><div className="pt-20 md:pt-24"><header className="container-ddp">
    <div className="news-meta flex flex-wrap justify-between gap-3 border-b border-news-rule pb-3 text-2xs text-news-muted"><span>{date?fechaLarga(date):'El Diario del Poder'}</span><span>Edición de las 7:00{updated?` · Actualizado ${horaMadrid(updated)}`:''}</span></div>
    <div className="flex flex-wrap items-center justify-between gap-5 py-6"><Link to="/noticias" search={{pagina:1}} className="flex items-center gap-3"><img src="/icon-192.png" alt="DP" width="48" height="48"/><div><p className="news-heading text-xl md:text-2xl">El Diario del Poder</p><p className="news-heading mt-1 text-sm text-news-accent">Noticias</p></div></Link><div className="flex gap-5 text-xs"><Link to="/premium" className="news-premium">DDP Premium</Link><Link to="/cuenta">{user?'Mi cuenta':'Iniciar sesión'}</Link></div></div>
    <nav aria-label="Secciones de Noticias" className="flex gap-6 overflow-x-auto border-y-2 border-news-ink py-3 text-xs font-bold">{SECCIONES.map(s=><Link key={s.slug} to="/noticias/$seccion" params={{seccion:s.slug}} search={{pagina:1}} className={`shrink-0 pb-1 ${active===s.slug?'border-b-2 border-news-accent text-news-accent':''}`}>{s.nombre}</Link>)}<Link to="/noticias/hemeroteca" className="shrink-0">Hemeroteca</Link></nav>
    {latest.length>0&&<div className="flex gap-4 overflow-x-auto border-b border-news-rule py-4 text-xs"><strong className="shrink-0 text-news-accent">LO ÚLTIMO</strong>{latest.map(n=><Link key={n.id} to="/noticias/$seccion/$slug" params={{seccion:n.seccion,slug:n.slug}} className="max-w-80 shrink-0 border-r border-news-rule pr-4">{n.titular}</Link>)}</div>}
    </header><main className="container-ddp py-10 md:py-14">{children}</main>
    <nav aria-label="Información editorial" className="container-ddp flex flex-wrap gap-x-7 gap-y-3 border-t border-news-rule py-6 text-xs">{TRUST_LINKS.map(l=><Link key={l.to} to={l.to}>{l.label}</Link>)}<a href="/noticias/rss.xml">RSS</a></nav></div><FooterGrid/></div>;
}
export function NewsError({error}:{error:Error}){const router=useRouter();return <NewsLayout><h1 className="text-2xl">Noticias temporalmente no disponibles</h1><p role="alert" className="my-6">{error.message}</p><Button className="news-button" onClick={()=>router.invalidate()}>Volver a intentar</Button></NewsLayout>;}
export function NewsNotFound(){return <NewsLayout><h1 className="text-2xl">No encontramos esta página</h1><p className="my-6">La noticia o edición no está disponible.</p><Link to="/noticias" search={{pagina:1}}>Volver a Noticias</Link></NewsLayout>;}
