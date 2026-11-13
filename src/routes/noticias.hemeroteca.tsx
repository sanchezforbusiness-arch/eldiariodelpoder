import {createFileRoute,Link,useNavigate} from '@tanstack/react-router';
import {useSuspenseQuery} from '@tanstack/react-query';
import {newsOptions} from '@/lib/noticias.queries';
import {newsHead} from '@/data/noticiasHead';
import {fechaLarga} from '@/data/noticias';
import {NewsLayout,NewsError,NewsNotFound} from '@/components/news/NewsLayout';
export const Route=createFileRoute('/noticias/hemeroteca')({loader:({context})=>context.queryClient.ensureQueryData(newsOptions()),head:()=>newsHead('/noticias/hemeroteca','Hemeroteca','Archivo de ediciones diarias de El Diario del Poder.'),component:Page,errorComponent:NewsError,notFoundComponent:NewsNotFound});
function Page(){const{data}=useSuspenseQuery(newsOptions());const navigate=useNavigate();return <NewsLayout date={data.today} updated={data.updated} latest={data.latest}><h1 className="mb-8 text-2xl md:text-news-headline">Hemeroteca</h1><label className="block max-w-sm text-sm">Buscar una edición<input type="date" className="news-input" max={data.today} onChange={e=>{if(e.target.value)void navigate({to:'/noticias/edicion/$fecha',params:{fecha:e.target.value},search:{pagina:1}});}}/></label><ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{data.editions.map(fecha=><li key={fecha} className="border-b border-news-rule py-4"><Link to="/noticias/edicion/$fecha" params={{fecha}} search={{pagina:1}}>{fechaLarga(fecha)}</Link></li>)}</ul>{!data.editions.length&&<p className="my-10 text-news-muted">Aún no hay ediciones publicadas.</p>}</NewsLayout>;}
