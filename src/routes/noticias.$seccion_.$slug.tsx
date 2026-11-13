import {createFileRoute,notFound,redirect} from '@tanstack/react-router';
import {useSuspenseQuery} from '@tanstack/react-query';
import {articleOptions,newsOptions} from '@/lib/noticias.queries';
import {articleHead,newsHead} from '@/data/noticiasHead';
import {NewsArticle} from '@/components/news/NewsArticle';
import {NewsError,NewsNotFound} from '@/components/news/NewsLayout';
export const Route=createFileRoute('/noticias/$seccion_/$slug')({
 loader:async({context,params})=>{const n=await context.queryClient.ensureQueryData(articleOptions(params.slug));if(!n)throw notFound();if(n.seccion!==params.seccion)throw redirect({to:'/noticias/$seccion/$slug',params:{seccion:n.seccion,slug:n.slug},statusCode:301});await context.queryClient.ensureQueryData(newsOptions({seccion:n.seccion}));return n;},
 head:({loaderData,params})=>loaderData?articleHead(loaderData):newsHead('/noticias/'+params.seccion+'/'+params.slug,'Noticia no disponible','La noticia no está disponible.',{noindex:true}),
 component:Page,errorComponent:NewsError,notFoundComponent:NewsNotFound,
});
function Page(){const{slug}=Route.useParams();const{data:n}=useSuspenseQuery(articleOptions(slug));const{data}=useSuspenseQuery(newsOptions({seccion:n?.seccion}));if(!n)return <NewsNotFound/>;return <NewsArticle n={n} data={data}/>;}
