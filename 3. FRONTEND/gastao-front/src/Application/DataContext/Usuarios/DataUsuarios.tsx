import { useQuery } from "@tanstack/react-query";
import { RolDeUsuariosAPI, UsuariosAPI } from "../APIs/GastaoAPIs";

export interface Usuario {
    idUsuario: number|any;
    dniUsuario: number|any;
    nameUsuario: string|any;
    lastNameUsuario: string | any;
    emailUsuario: string | any;
    passUsuario: string|any;
    rolUsuarioId?: number|any;
}
export interface RolDeUsuario {
    idRolUsuario: number|any;
    rolDeUsuario1: string|any;
}

const fetchUsuarios = async (): Promise<Usuario[]> => {
    const urlApi = new UsuariosAPI().urlGet();
    const response = await fetch(urlApi);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
    console.log(data);

};

export function useUsuarios() {
    return useQuery<Usuario[], Error>({ // Tipado genérico: <Datos, Error>
        queryKey: ['Usuario'],
        queryFn: fetchUsuarios,
        staleTime: 5 * 60 * 1000,
    });
}
const fetchRolDeUsuarios = async (): Promise<RolDeUsuario[]> => {
    const urlApi = new RolDeUsuariosAPI().urlGet();
    const response = await fetch(urlApi);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
    console.log(data);

};

export function useRolDeUsuarios() {
    return useQuery<RolDeUsuario[], Error>({ // Tipado genérico: <Datos, Error>
        queryKey: ['RolDeUsuario'],
        queryFn: fetchRolDeUsuarios,
        staleTime: 5 * 60 * 1000,
    });
}

export function ListaDeUsuarios() {
    const { data, isLoading, isError, error } = useUsuarios();
    const msgLoading = "Cargando usuarios...";

    return { data, msgLoading, isLoading, isError, error };
}
export function ListaRolDeUsuarios() {
    const { data, isLoading, isError, error } = useRolDeUsuarios();
    const msgLoading = "Cargando Roles de usuarios...";

    return { data, msgLoading, isLoading, isError, error };
}
