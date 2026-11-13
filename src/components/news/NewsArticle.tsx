import {useState} from 'react';
import {Link} from '@tanstack/react-router';
import {useQuery} from '@tanstack/react-query';
import {useServerFn} from '@tanstack/react-start';
import ReactMarkdown from 'react-markdown';
import {Copy,Check} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {NewsLayout} from './NewsLayout';
import {NewsCard,type NewsListData} from './NewsList';
import {PremiumForm} from './PremiumForm';
import {useNewsAuth} from './NewsAuth';
import {premiumBody} from '@/lib/noticias.functions';
import {autoresDe,noticiaUrl,noticiaImage,noticiaImageAlt,fechaHoraMadrid,seccionNombre,tagSlug,readingMinutes,isHemeroteca,type Noticia} from '@/data/noticias';
import alejandro from '@/assets/founder-alejandro.webp';
import victor from '@/assets/founder-victor.webp';
export function NewsMarkdown({text}:{text:string}){return <div className="news-body"><ReactMarkdown skipHtml>{text}</ReactMarkdown></div>;}
export function NewsArticle({n,data}:{n:Noticia;data:NewsListData}){
 const {user}=useNewsAuth();const fetchBody=useServerFn(premiumBody);const restricted=n.es_premium||isHemeroteca(n.edicion);const[copied,setCopied]=useState(false);
 const body=useQuery({queryKey:['news-premium',user?.id,n.id],queryFn:()=>fetchBody({data:{id:n.id}}),enabled:!!user&&restricted,retry:false,staleTime:0,gcTime:0});
 const url=noticiaUrl(n);const shared=encodeURIComponent(url);const title=encodeURIComponent(n.titular);
 return <NewsLayout date={n.edicion} updated={data.updated} latest={data.latest} active={n.seccion}><article>
 <nav aria-label="Migas de pan" className="mb-6 flex flex-wrap gap-2 text-xs text-news-muted"><Link to="/noticias" search={{pagina:1}}>Noticias</Link><span>/</span><Link to="/noticias/$seccion" params={{seccion:n.seccion}} search={{pagina:1}}>{seccionNombre(n.seccion)}</Link></nav>
 <div className="max-w-5xl"><p className="mb-3 text-xs font-bold uppercase text-news-accent">{n.antetitulo??seccionNombre(n.seccion)} {n.es_premium&&<span className="news-premium ml-2">Premium</span>}</p><h1 className="text-2xl md:text-news-lead">{n.titular}</h1><p className="mt-6 font-serif text-xl leading-relaxed text-news-muted">{n.subtitulo}</p></div>
 <div className="my-6 flex flex-wrap items-center gap-4">{autoresDe(n).map((a,i)=><Link key={a.clave} to="/noticias/autor/$slug" params={{slug:a.slug}} search={{pagina:1}} className="flex items-center gap-3 text-xs"><img src={a.clave==='alejandro'?alejandro:victor} width="40" height="40" alt={a.nombre} className="h-10 w-10 rounded-full object-cover"/><span>{i===0?'Por ':'y '}<span className="notranslate" translate="no">{a.firma}</span></span></Link>)}</div>
 <p className="news-meta text-2xs text-news-meta"><time dateTime={n.fecha_publicacion}>{fechaHoraMadrid(n.fecha_publicacion)}</time> · Actualizado: <time dateTime={n.fecha_actualizacion}>{fechaHoraMadrid(n.fecha_actualizacion)}</time> · {readingMinutes(n.cuerpo,n.tiempo_lectura)} min de lectura</p>{n.lugar&&<p className="mt-2 text-xs">{n.lugar}</p>}
 <nav aria-label="Compartir noticia" className="my-6 flex flex-wrap items-center gap-5 border-y border-news-rule py-3 text-xs">{[['X',`https://x.com/intent/post?text=${title}&url=${shared}`],['LinkedIn',`https://www.linkedin.com/sharing/share-offsite/?url=${shared}`],['WhatsApp',`https://wa.me/?text=${title}%20${shared}`],['Telegram',`https://t.me/share/url?url=${shared}&text=${title}`]].map(([label,href])=><a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}<Button variant="ghost" size="icon" aria-label={copied?'Enlace copiado':'Copiar enlace'} title="Copiar enlace" onClick={async()=>{try{await navigator.clipboard.writeText(url);setCopied(true);}catch{setCopied(false);}}}>{copied?<Check/>:<Copy/>}</Button>{copied&&<span role="status">Enlace copiado</span>}</nav>
 <figure className="mb-10 max-w-5xl"><img src={noticiaImage(n)} alt={noticiaImageAlt(n)} width="1200" height="675" fetchPriority="high" sizes="(max-width:768px) 100vw, 1000px" className="aspect-video w-full object-cover"/>{n.imagen_credito&&<figcaption className="mt-2 text-2xs text-news-meta">{n.imagen_credito}</figcaption>}</figure>
 <div className="max-w-3xl"><NewsMarkdown text={!n.es_premium&&body.data?.body?body.data.body:n.cuerpo}/>{restricted&&<div className="ddp-paywall">{body.data?.active&&body.data.body?(n.es_premium&&<NewsMarkdown text={body.data.body}/>):<><div className="news-paywall-fade"/><section className="border-y-2 border-news-ink py-8"><h2 className="text-xl">{n.es_premium?'Esta pieza es exclusiva para suscriptores de DDP Premium':'La hemeroteca completa es exclusiva para suscriptores de DDP Premium'}</h2>{body.isFetching?<p role="status" className="my-4 text-sm">Comprobando tu suscripción…</p>:<PremiumForm/>}{body.isError&&<p role="alert" className="mt-4 text-sm">No se pudo comprobar tu acceso. <Button variant="link" onClick={()=>body.refetch()}>Volver a intentar</Button></p>}</section></>}</div>}
 <section className="mt-10 border-y border-news-rule py-6"><h2 className="text-lg">Fuentes</h2>{n.fuentes.length?<ul className="mt-4 space-y-3 text-sm">{n.fuentes.map(f=><li key={f.url}><a href={f.url} rel="nofollow noopener" target="_blank" className="underline">{f.nombre}</a></li>)}</ul>:<p className="mt-4 text-sm text-news-muted">Sin fuentes adicionales.</p>}</section><nav aria-label="Temas" className="my-6 flex flex-wrap gap-3 text-xs"><strong>Temas:</strong>{n.etiquetas.map(t=><Link key={t} to="/noticias/tema/$slug" params={{slug:tagSlug(t)}} search={{pagina:1}} className="underline">{t}</Link>)}</nav></div></article>
 <section className="mt-12 border-t-2 border-news-ink pt-6"><h2 className="mb-6 text-xl">Más en {seccionNombre(n.seccion)}</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{data.latest.filter(x=>x.seccion===n.seccion&&x.id!==n.id).slice(0,3).map(x=><NewsCard key={x.id} n={x}/>)}</div></section><section className="mt-12"><h2 className="mb-6 text-xl">Últimas noticias</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{data.latest.filter(x=>x.id!==n.id).slice(0,3).map(x=><NewsCard key={x.id} n={x}/>)}</div></section></NewsLayout>;
}
