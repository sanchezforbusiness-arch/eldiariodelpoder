import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
const AuthContext = createContext<{user:User|null;ready:boolean}>({user:null,ready:false});
export function NewsAuthProvider({children}:{children:ReactNode}) {
  const [user,setUser]=useState<User|null>(null);
  const [ready,setReady]=useState(false);
  const queryClient=useQueryClient(); const router=useRouter();
  useEffect(()=>{
    let alive=true;
    const refresh=async()=>{const {data}=await supabase.auth.getUser(); if(alive){setUser(data.user);setReady(true);}};
    const {data:{subscription}}=supabase.auth.onAuthStateChange(event=>{
      if(!['SIGNED_IN','SIGNED_OUT','USER_UPDATED'].includes(event))return;
      if(event==='SIGNED_OUT'){setUser(null);queryClient.clear();} else {void refresh();void queryClient.invalidateQueries();}
      void router.invalidate();
    });
    void refresh();
    return()=>{alive=false;subscription.unsubscribe();};
  },[queryClient,router]);
  return <AuthContext.Provider value={{user,ready}}>{children}</AuthContext.Provider>;
}
export const useNewsAuth=()=>useContext(AuthContext);
