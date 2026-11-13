import {createFileRoute} from '@tanstack/react-router';
import {NewsLayout} from '@/components/news/NewsLayout';
import {PremiumForm} from '@/components/news/PremiumForm';
import {PREMIUM_BENEFITS} from '@/data/premium';
import {newsHead} from '@/data/noticiasHead';
export const Route=createFileRoute('/premium')({head:()=>newsHead('/premium','DDP Premium','El Análisis del Poder, hemeroteca completa y acceso anticipado al podcast. 4,99 €/mes o 49 €/año.'),component:Page});
function Page(){return <NewsLayout><h1 className="text-2xl md:text-news-headline">DDP Premium</h1><div className="mt-10 grid gap-12 lg:grid-cols-2"><section><h2 className="text-xl">El poder, con perspectiva</h2><ul className="mt-8 space-y-7">{PREMIUM_BENEFITS.map(b=><li key={b.t} className="border-b border-news-rule pb-6"><h3 className="text-lg">{b.t}</h3><p className="mt-3 font-serif text-lg text-news-muted">{b.d}</p></li>)}</ul></section><section><h2 className="mb-6 text-xl">Elige tu plan</h2><PremiumForm/></section></div></NewsLayout>;}
