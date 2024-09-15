import { createContext, useEffect } from 'react';
import { useState } from "react";
import { GetATbUsers, User } from "../1. Models/Functions/API Responses/GetATbUsers";

interface UsersFilterBy {
    idUserFilter: number | any;
    tipoUserIdFilter: number | any;
    nameUserFilter: string | any;
    lastNameUserFilter: string | any;
    dniUserFilter: number | any;
    emailUserFilter: string | any;
}
type UsersFiltersContextProviderProps = {
    children: React.ReactNode;
};

type UsersFiltersContextType = {
    mostrarMensaje: () => void;
    handelControlChangeFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
    normalizeString: (convertNormalString: string) => string;
    GetUsersByFilter: User[] /* | User */; // Asegúrate de que User esté importado correctamente
    GetUsersFiltered: User[] /* | User */; // Asegúrate de que User esté importado correctamente
    GetUsersToAdmin: User[] /* | User */; // Asegúrate de que User esté importado correctamente
    GetUsersToUser: User[] /* | User */; // Asegúrate de que User esté importado correctamente
    indexCurrent: number;
    setIndexCurrent: React.Dispatch<React.SetStateAction<number>>;
    filters: UsersFilterBy;
    setFilters: React.Dispatch<React.SetStateAction<UsersFilterBy>>
    PrevRegister: () => void;
    FirstRegister: () => void;
    NextRegister: () => void;
    LastRegister: () => void;
    numero: number;
    /*     
        idUser_I0: any;
        tipoUserId_I0: any;
        nameUser_I0: any;
        lastNameUser_I0: any;
        emailUser_I0: any;
        dniUser_I0: any;
        passUser_I0: any; */
};

export const UsersFiltersContext = createContext({} as UsersFiltersContextType);
/* export const UsersFiltersContext = createContext({} as any); */
const RandomCont = createContext({} as any);

export const UserFiltersContextProvider = ({ children }: UsersFiltersContextProviderProps) => {

    const mostrarMensaje = () => alert("mostrarMensaje() Console");

    const [indexCurrent, setIndexCurrent] = useState(0);
    const [filters, setFilters] = useState<UsersFilterBy>({
        idUserFilter: 0,
        tipoUserIdFilter: 0,
        nameUserFilter: "",
        lastNameUserFilter: "",
        dniUserFilter: 0,
        emailUserFilter: "",
    });
    const numero = 10
    const handelControlChangeFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const valor = name === "idUserFilter" || name === "tipoUserIdFilter" || name === "dniUserFilter" ? Number(value) : value;
        setFilters({ ...filters, [name]: valor });
    };

    const normalizeString = (convertNormalString: string) => {
        return convertNormalString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const GetUsersByFilter = GetATbUsers(true);

    const GetUsersToAdmin: User[] = GetATbUsers(true);
    const GetUsersToUser: User[] = GetATbUsers(false);




    const GetUsersFiltered = GetUsersByFilter.filter(user =>
        (filters.idUserFilter === 0 || user.idUser === filters.idUserFilter) &&
        (filters.tipoUserIdFilter === 0 || user.tipoUserId === filters.tipoUserIdFilter) &&
        (filters.nameUserFilter === '' || normalizeString(user.nameUser || '').includes(normalizeString(filters.nameUserFilter))) &&
        (filters.lastNameUserFilter === '' || normalizeString(user.lastNameUser || '').includes(normalizeString(filters.lastNameUserFilter))) &&
        (filters.dniUserFilter === 0 || user.dniUser?.toString() === filters.dniUserFilter?.toString()) &&
        (filters.emailUserFilter === '' || normalizeString(user.emailUser || '').includes(normalizeString(filters.emailUserFilter)))
    );

    const PrevRegister = () => {
        if (indexCurrent > 0) { setIndexCurrent(indexCurrent - 1); }
    };
    const FirstRegister = () => setIndexCurrent(0);

    const NextRegister = () => {
        if (indexCurrent < GetUsersFiltered.length - 1) { setIndexCurrent(indexCurrent + 1); }
    };
    const LastRegister = () => setIndexCurrent(GetUsersFiltered.length - 1);

    return (
        <UsersFiltersContext.Provider
            value={{
                normalizeString,
                handelControlChangeFilters,
                GetUsersByFilter,
                GetUsersFiltered,
                GetUsersToAdmin,
                GetUsersToUser,
                FirstRegister,
                PrevRegister,
                NextRegister,
                LastRegister,
                indexCurrent,
                setIndexCurrent,
                filters,
                setFilters,
                mostrarMensaje,
                numero,

            }}
        >
            {children}
        </UsersFiltersContext.Provider>
    );
};