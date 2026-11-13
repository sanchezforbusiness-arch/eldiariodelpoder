import {createFileRoute,notFound,Link} from '@tanstack/react-router';
import {useSuspenseQuery} from '@tanstack/react-query';
import {newsOptions} from '@/lib/noticias.queries';
import {autorPorSlug,pageNumber,withPage} from '@/data/noticias';
import {newsCollectionHead} from '@/data/noticiasHead';
import {NewsListing} from '@/components/news/NewsList';
import {NewsError,NewsNotFound} from '@/components/news/NewsLayout';
export const Route=createFileRoute('/noticias/autor/$slug')({validateSearch:(s:Record<string,unknown>)=>({pagina:pageNumber(s.pagina)}),loaderDeps:({search})=>search,loader:({context,deps,params})=>{const a=autorPorSlug(params.slug);if(!a)throw notFound();return context.queryClient.ensureQueryData(newsOptions({...deps,autor:a.clave}));},head:({params,loaderData,match})=>newsCollectionHead(withPage('/noticias/autor/'+params.slug,match.search.pagina),autorPorSlug(params.slug)?.nombre??'Autor no disponible',autorPorSlug(params.slug)?.bio??'Archivo de autor.',loaderData?.items??[],!loaderData),component:Page,errorComponent:NewsError,notFoundComponent:NewsNotFound});
function Page(){const{slug}=Route.useParams();const a=autorPorSlug(slug);const search=Route.useSearch();const{data}=useSuspenseQuery(newsOptions({...search,autor:a?.clave}));if(!a)return <NewsNotFound/>;return <NewsListing data={data} title={a.nombre} description={a.bio} before={<Link to={a.ficha} className="mb-8 inline-block text-sm underline">Perfil de <span className="notranslate" translate="no">{a.nombre}</span></Link>}/>;}
