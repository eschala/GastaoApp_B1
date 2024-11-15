import { useState } from "react";
import { GetATbUsers } from "../1. Models/Functions/API Responses/GetATbUsers";


interface UsersFilterBy {
    idUserFilter: number | any;
    tipoUserIdFilter: number | any;
    nameUserFilter: string | any;
    lastNameUserFilter: string | any;
    dniUserFilter: number | any;
    emailUserFilter: string | any;
}

export function UserFilter() {
    const [indexCurrent, setIndexCurrent] = useState(0);
    const [filters, setFilters] = useState<UsersFilterBy>({
        idUserFilter: 0,
        tipoUserIdFilter: 0,
        nameUserFilter: "",
        lastNameUserFilter: "",
        dniUserFilter: 0,
        emailUserFilter: "",
    });

    const manejarCambioFiltro = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const valor = name === "idUserFilter" || name === "tipoUserIdFilter" || name === "dniUserFilter" ? Number(value) : value;
        setFilters({ ...filters, [name]: valor });
    };

    const normalizeString = (convertNormalString: string) => {
        return convertNormalString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const GetUsersByFilter = GetATbUsers(true);
    const GetUsersFiltrados = GetUsersByFilter.filter(user =>
        (filters.idUserFilter === 0 || user.idUser === filters.idUserFilter) &&
        (filters.tipoUserIdFilter === 0 || user.tipoUserId === filters.tipoUserIdFilter) &&
        (filters.nameUserFilter === '' || normalizeString(user.nameUser || '').includes(normalizeString(filters.nameUserFilter))) &&
        (filters.lastNameUserFilter === '' || normalizeString(user.lastNameUser || '').includes(normalizeString(filters.lastNameUserFilter))) &&
        (filters.dniUserFilter === 0 || user.dniUser?.toString() === filters.dniUserFilter?.toString()) &&
        (filters.emailUserFilter === '' || normalizeString(user.emailUser || '').includes(normalizeString(filters.emailUserFilter)))
    );

    const PrevRegister = () => {
        if (indexCurrent > 0) {
            setIndexCurrent(indexCurrent - 1);
        }
    };
    const FirstRegister = () => {

        setIndexCurrent(0);

    };


    const nextprevA = () => {
        setIndexCurrent(indexCurrent + 1);
        setIndexCurrent(indexCurrent - 1);
    }


    const NextRegister = () => {
        if (indexCurrent < GetUsersFiltrados.length - 1) {
            setIndexCurrent(indexCurrent + 1);
        }
    };
    const LastRegister = () => {

        setIndexCurrent(GetUsersFiltrados.length - 1);

    };

    return {
        indexCurrent,
        filters,
        manejarCambioFiltro,
        GetUsersFiltered: GetUsersFiltrados,
        PrevRegister,
        NextRegister,
        nextprevA,
        FirstRegister,
        LastRegister,

    };
}
