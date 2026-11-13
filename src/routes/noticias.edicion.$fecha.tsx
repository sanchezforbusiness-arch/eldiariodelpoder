import {createFileRoute,notFound} from '@tanstack/react-router';
import {useSuspenseQuery} from '@tanstack/react-query';
import {newsOptions} from '@/lib/noticias.queries';
import {pageNumber,withPage,isEdicionDate,fechaLarga} from '@/data/noticias';
import {newsCollectionHead} from '@/data/noticiasHead';
import {NewsListing} from '@/components/news/NewsList';
import {NewsError,NewsNotFound} from '@/components/news/NewsLayout';
export const Route=createFileRoute('/noticias/edicion/$fecha')({
 validateSearch:(s:Record<string,unknown>)=>({pagina:pageNumber(s.pagina)}),loaderDeps:({search})=>search,
 loader:async({context,deps,params})=>{if(!isEdicionDate(params.fecha))throw notFound();const data=await context.queryClient.ensureQueryData(newsOptions({...deps,edicion:params.fecha}));if(!data.total)throw notFound();return data;},
 head:({loaderData,params,match})=>newsCollectionHead(withPage('/noticias/edicion/'+params.fecha,match.search.pagina),'Edición '+params.fecha,'Todas las noticias de la edición del '+params.fecha+'.',loaderData?.items??[],!loaderData),
 component:Page,errorComponent:NewsError,notFoundComponent:NewsNotFound,
});
function Page(){const{fecha}=Route.useParams();const search=Route.useSearch();const{data}=useSuspenseQuery(newsOptions({...search,edicion:fecha}));return <NewsListing data={data} title={fechaLarga(fecha)}/>;}
