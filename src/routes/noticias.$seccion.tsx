import {createFileRoute,notFound} from '@tanstack/react-router';
import {useSuspenseQuery} from '@tanstack/react-query';
import {newsOptions} from '@/lib/noticias.queries';
import {pageNumber,withPage,isSeccion,seccionNombre,seccionImage} from '@/data/noticias';
import {newsCollectionHead,newsHead} from '@/data/noticiasHead';
import {NewsListing} from '@/components/news/NewsList';
import {NewsError,NewsNotFound} from '@/components/news/NewsLayout';
export const Route=createFileRoute('/noticias/$seccion')({
 validateSearch:(s:Record<string,unknown>)=>({pagina:pageNumber(s.pagina)}),loaderDeps:({search})=>search,
 loader:({context,deps,params})=>{if(!isSeccion(params.seccion))throw notFound();return context.queryClient.ensureQueryData(newsOptions({...deps,seccion:params.seccion}));},
 head:({params,loaderData,match})=>{if(!loaderData)return newsHead('/noticias/'+params.seccion,'Página no disponible','Esta sección no está disponible.',{noindex:true});const head=newsCollectionHead(withPage('/noticias/'+params.seccion,match.search.pagina),seccionNombre(params.seccion),'Actualidad de '+seccionNombre(params.seccion)+' en El Diario del Poder.',loaderData.items,false,'/noticias/'+params.seccion+'/rss.xml');if(!loaderData.items.length)head.meta.push({property:'og:image',content:seccionImage(params.seccion)},{name:'twitter:image',content:seccionImage(params.seccion)});return head;},
 component:Page,errorComponent:NewsError,notFoundComponent:NewsNotFound,
});
function Page(){const{seccion}=Route.useParams();const search=Route.useSearch();const{data}=useSuspenseQuery(newsOptions({...search,seccion}));return <NewsListing data={data} title={seccionNombre(seccion)} active={seccion}/>;}
