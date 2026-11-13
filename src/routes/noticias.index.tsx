import {createFileRoute} from '@tanstack/react-router';
import {useSuspenseQuery} from '@tanstack/react-query';
import {newsOptions} from '@/lib/noticias.queries';
import {pageNumber,withPage} from '@/data/noticias';
import {newsCollectionHead} from '@/data/noticiasHead';
import {NewsListing} from '@/components/news/NewsList';
import {NewsError,NewsNotFound} from '@/components/news/NewsLayout';
export const Route=createFileRoute('/noticias/')({
 validateSearch:(s:Record<string,unknown>)=>({pagina:pageNumber(s.pagina)}),loaderDeps:({search})=>search,
 loader:({context,deps})=>context.queryClient.ensureQueryData(newsOptions(deps)),
 head:({loaderData,match})=>newsCollectionHead(withPage('/noticias',match.search.pagina),'Noticias','Actualidad mundial: poder, política, economía, cultura y sociedad. Información contrastada por El Diario del Poder.',loaderData?.items??[]),
 component:Page,errorComponent:NewsError,notFoundComponent:NewsNotFound,
});
function Page(){const search=Route.useSearch();const{data}=useSuspenseQuery(newsOptions(search));return <NewsListing data={data} title="Noticias" home/>;}
