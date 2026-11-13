import {queryOptions} from '@tanstack/react-query';
import {listNews,getNews} from './noticias.functions';
import type {NewsFilter} from './noticias.server';
export const newsOptions=(filter:NewsFilter={})=>queryOptions({queryKey:['news-public',filter],queryFn:()=>listNews({data:filter}),staleTime:0});
export const articleOptions=(slug:string)=>queryOptions({queryKey:['news-article',slug],queryFn:()=>getNews({data:{slug}}),staleTime:0});
