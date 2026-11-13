import { SITE, newsTitle, breadcrumbSchema, collectionSchema, noticiaImage, noticiaImageAlt, noticiaUrl, newsArticleSchema, autoresDe, seccionNombre, autorPath, isHemeroteca, type Noticia, type NoticiaCard } from './noticias';
export function newsHead(path:string, title:string, description:string, options: {image?:string; imageAlt?:string; noindex?:boolean; graph?:object[]; rss?:string; article?:Noticia} = {}) {
  const url = SITE + path;
  const article = options.article;
  const image = options.image;
  return {
    meta: [
      {title:newsTitle(title)}, {name:'description',content:description.slice(0,155)},
      {property:'og:title',content:title}, {property:'og:description',content:description}, {property:'og:url',content:url},
      {property:'og:type',content:article ? 'article':'website'}, {property:'og:site_name',content:'El Diario del Poder'},
      {name:'twitter:card',content:'summary_large_image'}, {name:'twitter:title',content:title}, {name:'twitter:description',content:description},
      {name:'robots',content:options.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'},
      ...(image ? [{property:'og:image',content:image},{name:'twitter:image',content:image},{property:'og:image:width',content:'1200'},{property:'og:image:height',content:'675'},{property:'og:image:alt',content:options.imageAlt ?? title}] : []),
      ...(article ? [{property:'article:published_time',content:article.fecha_publicacion},{property:'article:modified_time',content:article.fecha_actualizacion},{property:'article:section',content:seccionNombre(article.seccion)},...article.etiquetas.map(tag=>({property:'article:tag',content:tag})),...autoresDe(article).map(a=>({property:'article:author',content:SITE+autorPath(a.clave)}))] : []),
    ],
    links:[{rel:'canonical',href:url},...(options.rss ? [{rel:'alternate',type:'application/rss+xml',title:'Noticias — El Diario del Poder',href:SITE+options.rss}] : [])],
    scripts:[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@graph':[...(options.graph ?? [{ '@type':'WebPage', '@id':url+'#webpage',url,name:title,description,publisher:{'@id':SITE+'/#organization'}}]),breadcrumbSchema([{name:'Inicio',url:SITE+'/'},{name:'Noticias',url:SITE+'/noticias'},...(path==='/noticias'?[]:[{name:title,url}])])]})}],
  };
}
export function newsCollectionHead(path:string,title:string,description:string,items:NoticiaCard[],noindex=false,rss='/noticias/rss.xml') {
  return newsHead(path,title,description,{noindex,rss,image:items[0]?noticiaImage(items[0]):undefined,graph:[collectionSchema(SITE+path,title,description,items)]});
}
export function articleHead(n:Noticia) {
  const schema = newsArticleSchema(n);
  if(isHemeroteca(n.edicion)) {schema.isAccessibleForFree=false; schema.hasPart={'@type':'WebPageElement',isAccessibleForFree:false,cssSelector:'.ddp-paywall'};}
  return newsHead(new URL(noticiaUrl(n)).pathname,n.titular,n.subtitulo,{article:n,image:noticiaImage(n),imageAlt:noticiaImageAlt(n),graph:[schema]});
}
