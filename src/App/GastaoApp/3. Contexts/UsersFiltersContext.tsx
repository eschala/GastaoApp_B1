import { createContext, useContext, useEffect } from 'react';
import { useState } from "react";
import { GetATbUsers, User } from "../1. Models/Functions/API Responses/GetATbUsers";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
        if (GetUsersFiltered.length > 0) {

        }
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

export function FilterInput(handelControlChangeFilters: (e: React.ChangeEvent<HTMLInputElement>) => void) {
    const { GetUsersFiltered } = useContext(UsersFiltersContext);

    const fieldNames = [
        "ID",
        "Tipo de Usuario",
        "Nombre",
        "Apellido",
        "Cedula o DNI",
        "Correo Electrónico",
    ];

    const fieldFiltersNames = [
        "idUserFilter",
        "tipoUserIdFilter",
        "nameUserFilter",
        "lastNameUserFilter",
        "dniUserFilter",
        "emailUserFilter",
    ];

    const [fieldName, setFielName] = useState(fieldNames[0]); // Cambia esto a un índice válido
    const [nameUserFilter, setNameUserFilter] = useState(fieldFiltersNames[0]); // Cambia esto a un índice válido
    const [index_, setIndex_] = useState(0);

    const handleChangeSelect = (e: React.ChangeEvent<{ value: unknown }>) => {
        const selectedIndex = e.target.value as number; // Asegúrate de que sea un número
        setFielName(fieldNames[selectedIndex]);
        setNameUserFilter(fieldFiltersNames[selectedIndex]);
        setIndex_(selectedIndex);
    };

    return (
        <>

            <FormControl style={{ margin: 0, padding: 1, width: "100%" }} >
                <label htmlFor="">Seleccionar búsqueda por:</label>
                <Select
                    name="selectFilterBy"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={index_} // Usa el índice para manejar el valor
                    onChange={(e: any) => handleChangeSelect(e)}
                >
                    {fieldNames.map((fn, index) => (
                        <MenuItem key={index} value={index}>
                            {fn}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl style={{ margin: "1rem 0", padding: 1, width: "100%", display: "flex" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <TextField
                        name={nameUserFilter} // Corrige aquí
                        placeholder={`Filtrar por ${fieldNames[index_]}`}
                        type="text"
                        onChange={handelControlChangeFilters} // Función para manejar el cambio
                        style={{ flex: "80%" }}
                    />
                    <Button style={{ flex: "20%" }} onClick={() => console.log(GetUsersFiltered)}>
                        Filtrar
                    </Button>
                </div>
            </FormControl>
        </>
    );
}
/* ¿Por qué no me funciona, me corriges? */