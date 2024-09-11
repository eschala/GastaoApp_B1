import { useState } from "react";
import { GetATbUsers, } from "../../../../1. Models/Functions/API Responses/GetATbUsers";

interface UsersFilterBy {
    IDUser: number | any;
    TipoUserId: number | any;
    UserName: string | any;
    UserLastName: string | any;
    UserDNI: number | any;
    UserEmail: string | any;
}

export function UserFilter() {
    const [indiceActual, setIndiceActual] = useState<number>(0);
    const [filtros, setFiltros] = useState<UsersFilterBy>({
        IDUser: 0,
        TipoUserId: 0,
        UserName: "",
        UserLastName: "",
        UserDNI: 0,
        UserEmail: "",
    });

    const manejarCambioFiltro = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const valor = name === "IDUser" || name === "TipoUserId" || name === "UserDNI" ? Number(value) : value;
        setFiltros({ ...filtros, [name]: valor });
    };

    const normalizeString = (str: string) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const GetUsersByFilter = GetATbUsers(true);
    const GetUsersFiltrados = GetUsersByFilter.filter(user =>
        (filtros.IDUser === 0 || user.idUser === filtros.IDUser) &&
        (filtros.TipoUserId === 0 || user.tipoUserId === filtros.TipoUserId) &&
        (filtros.UserName === '' || normalizeString(user.nameUser || '').includes(normalizeString(filtros.UserName))) &&
        (filtros.UserLastName === '' || normalizeString(user.lastNameUser || '').includes(normalizeString(filtros.UserLastName))) &&
        (filtros.UserDNI === 0 || user.dniUser?.toString() === filtros.UserDNI?.toString()) &&
        (filtros.UserEmail === '' || normalizeString(user.emailUser || '').includes(normalizeString(filtros.UserEmail)))
    );

    const PrevRegister = () => {
        if (indiceActual > 0) {
            setIndiceActual(indiceActual - 1);
        }
    };




    const NextRegister = () => {
        if (indiceActual < GetUsersFiltrados.length - 1) {
            setIndiceActual(indiceActual + 1);
        }
    };

    return {
        indiceActual,
        filtros,
        manejarCambioFiltro,
        GetUsersFiltrados,
        PrevRegister,
        NextRegister,

    };
}
