import {createFileRoute} from '@tanstack/react-router';
import {useSuspenseQuery} from '@tanstack/react-query';
import {newsOptions} from '@/lib/noticias.queries';
import {pageNumber,withPage} from '@/data/noticias';
import {newsCollectionHead} from '@/data/noticiasHead';
import {NewsListing} from '@/components/news/NewsList';
import {NewsError,NewsNotFound} from '@/components/news/NewsLayout';
export const Route=createFileRoute('/noticias/tema/$slug')({validateSearch:(s:Record<string,unknown>)=>({pagina:pageNumber(s.pagina)}),loaderDeps:({search})=>search,loader:({context,deps,params})=>context.queryClient.ensureQueryData(newsOptions({...deps,tema:params.slug})),head:({params,loaderData,match})=>newsCollectionHead(withPage('/noticias/tema/'+params.slug,match.search.pagina),'Tema: '+(loaderData?.topicName??params.slug),'Noticias y análisis sobre '+(loaderData?.topicName??params.slug)+'.',loaderData?.items??[],(loaderData?.total??0)<3),component:Page,errorComponent:NewsError,notFoundComponent:NewsNotFound});
function Page(){const{slug}=Route.useParams();const search=Route.useSearch();const{data}=useSuspenseQuery(newsOptions({...search,tema:slug}));return <NewsListing data={data} title={data.topicName??slug}/>;}
