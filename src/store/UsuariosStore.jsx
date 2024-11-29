import { create } from "zustand";
import { MostrarUsuarios,ObtenerIdAuthSupabase } from "../index";

export const useUsuariosStore = create((set)=>({
    refetchs:null,
datausuarios:[],
mostrarusuarios:async()=>{
    const idauth= await ObtenerIdAuthSupabase()
    const response = await MostrarUsuarios({id_auth:idauth})
    set({datausuarios:response})
    
    return response;
}
}))