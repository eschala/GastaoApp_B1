import React, { createContext, SetStateAction, useContext, useEffect, } from 'react';
import { useState } from "react";
import { GetATbUsers, User } from "../1. Models/Functions/API Responses/GetATbUsers";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { GetAzTbTipoUsers, TipoUser } from '../1. Models/Functions/API Responses/GetAzTbTipoUsers';

export interface UsersFilterBy {
    idUserF?: number | any;
    tipoUserIdF?: number | any;
    nameUserF?: string | any;
    lastNameUserF?: string | any;
    dniUserF?: number | any;
    emailUserF?: string | any;
    passUserF?: string | any;
}
type UsersChildrenComponents = {
    children: React.ReactNode;
};

type UsersContextType = {
    mostrarMensaje: () => void;
    handelControlChangeFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handelControlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    dataTypeUser: TipoUser[];
    setDataTypeUser: React.Dispatch<React.SetStateAction<TipoUser[]>>;
    currentUserU: User | undefined;
    setCurrentUserU: React.Dispatch<React.SetStateAction<User>> | any;
    userCurrentUpdate: (data: User | any) => void;
    GetFirstUserFiltered: User | undefined;
    GetFirstUser: User | undefined;
    countChangesFilterInput: number;
    setCountChangesFilterInput: React.Dispatch<React.SetStateAction<number>> | any;
    ChangeCountFilterHandle: () => void;
    countNavigateButtons: number;
    setCountNavigateButtons: React.Dispatch<React.SetStateAction<number>> | any;
    ChangeCountNavigateButtons: () => void;
    setTotalUsersLength: React.Dispatch<SetStateAction<boolean>> | any;
    totalUsersLength: boolean;



    /* GetTypeUser: () => TipoUser | any; */
    /*     
        idUser_I0: any;
        tipoUserId_I0: any;
        nameUser_I0: any;
        lastNameUser_I0: any;
        emailUser_I0: any;
        dniUser_I0: any;
        passUser_I0: any; */
};

export const UsersContext = createContext({} as UsersContextType);
/* export const UsersFiltersContext = createContext({} as any); */

export const UsersContextProvider = ({ children }: UsersChildrenComponents) => {

    const mostrarMensaje = () => alert("mostrarMensaje() Console");
    const [countChangesFilterInput, setCountChangesFilterInput] = useState(0);

    const ChangeCountFilterHandle = () => { setCountChangesFilterInput(countChangesFilterInput + 1) }
    const [totalUsersLength, setTotalUsersLength] = useState<boolean>(true);

    const [indexCurrent, setIndexCurrent] = useState(0);
    const [filters, setFilters] = useState<UsersFilterBy>({
        idUserF: 0,
        tipoUserIdF: 0,
        nameUserF: "",
        lastNameUserF: "",
        dniUserF: 0,
        emailUserF: "",
        passUserF: "",
    });

    const [dataTypeUser, setDataTypeUser] = useState<TipoUser[]>([])

    useEffect(() => {
        const GetTypeUser = async () => {
            try {
                const dataTypeUser_ = await GetAzTbTipoUsers();
                setDataTypeUser(dataTypeUser_);
            }
            catch (error) {
                console.log("Error:", error)
            }
            finally {

            }
        }
        GetTypeUser();
    }, [])


    const numero = 10
    const handelControlChangeFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        /* const valor = name === "idUserFilter" || name === "tipoUserIdFilter" || name === "dniUserFilter" ? Number(value) : value; */
        const valor = name === "idUserF" || name === "tipoUserIdF" || name === "dniUserF" ? Number(value) : value;
        setFilters({ ...filters, [name]: valor });
        ChangeCountFilterHandle()

    };

    const handelControlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const valor = name === "idUserF" || name === "tipoUserIdF" || name === "dniUserF" ? Number(value) : value;
        setFilters({ ...filters, [name]: valor });
        console.log("valor: " + valor)
        console.log("name: " + name)
        console.log("filters", filters)
        ChangeCountFilterHandle()


    };

    const normalizeString = (convertNormalString: string) => {
        return convertNormalString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const [countNavigateButtons, setCountNavigateButtons] = useState(0)
    const ChangeCountNavigateButtons = () => setCountNavigateButtons(countNavigateButtons + 1);

    const GetUsersToAdmin: User[] = GetATbUsers(true);
    const GetUsersToUser: User[] = GetATbUsers(false);
    const GetUsersByFilter = GetATbUsers(true);
    const GetUsersFiltered = GetUsersByFilter.filter(user =>
        (filters.idUserF === 0 || user.idUser === filters.idUserF) &&
        (filters.tipoUserIdF === 0 || user.tipoUserId === filters.tipoUserIdF) &&
        (filters.nameUserF === '' || normalizeString(user.nameUser || '').includes(normalizeString(filters.nameUserF))) &&
        (filters.lastNameUserF === '' || normalizeString(user.lastNameUser || '').includes(normalizeString(filters.lastNameUserF))) &&
        (filters.dniUserF === 0 || user.dniUser?.toString() === filters.dniUserF?.toString()) &&
        (filters.emailUserF === '' || normalizeString(user.emailUser || '').includes(normalizeString(filters.emailUserF)))
    );
    const GetFirstUserFiltered = GetUsersFiltered.find(user => user);
    const GetFirstUser = GetUsersFiltered.find(user => user);

    const PrevRegister = () => {
        if (indexCurrent > 0) { setIndexCurrent(indexCurrent - 1); }
    };
    const FirstRegister = () => setIndexCurrent(0);

    const NextRegister = () => {
        if (indexCurrent < GetUsersFiltered.length - 1) { setIndexCurrent(indexCurrent + 1); }
    };

    let length_: number = GetUsersFiltered.length
    let countC: number = countChangesFilterInput
    useEffect(() => {
        if (GetUsersFiltered.length !== GetUsersToAdmin.length) {
            setTotalUsersLength(false)
            FirstRegister()
        }
        else {
            setTotalUsersLength(true)

        }

    }, [length_, countC])


    const LastRegister = () => setIndexCurrent(GetUsersFiltered.length - 1);
    const [currentUserU, setCurrentUserU] = useState<User>()

    const userCurrentUpdate = (data: User) => {

        setCurrentUserU({
            idUser: data.idUser,
            tipoUserId: data.tipoUserId,
            nameUser: data.nameUser,
            lastNameUser: data.lastNameUser,
            dniUser: data.dniUser,
            emailUser: data.emailUser,
            passUser: data.passUser,
        })

        console.log("currentUserU", currentUserU)
    }
    /*     useEffect(() => {
     
            if (currentUserU === null || currentUserU === undefined)
                setCurrentUserU({
                    idUser: 0,
                    tipoUserId: 0,
                    nameUser: "",
                    lastNameUser: "",
                    dniUser: 0,
                    emailUser: "",
                    passUser: "",
                })
        }, [])
     */
    return (
        <UsersContext.Provider
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
                dataTypeUser,
                setDataTypeUser,
                setCurrentUserU,
                currentUserU,
                userCurrentUpdate,
                GetFirstUserFiltered,
                GetFirstUser,
                handelControlChange,
                countChangesFilterInput,
                setCountChangesFilterInput,
                ChangeCountFilterHandle,
                countNavigateButtons,
                ChangeCountNavigateButtons,
                setCountNavigateButtons,
                totalUsersLength,
                setTotalUsersLength,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export function FilterInput(handelControlChange: (e: React.ChangeEvent<HTMLInputElement>) => void, activate: boolean) {
    const { GetUsersFiltered } = useContext(UsersContext);

    const fieldNames = [
        "ID",
        "Tipo de Usuario",
        "Nombre",
        "Apellido",
        "Cedula o DNI",
        "Correo Electrónico",
    ];

    const fieldFiltersNames = [
        "idUserF",
        "tipoUserIdF",
        "nameUserF",
        "lastNameUserF",
        "dniUserF",
        "emailUserF",
        /*         "passUserF", */
    ];

    const [fieldName, setFielName] = useState(fieldNames[0]); // Cambia esto a un índice válido
    const [nameUserFilter, setNameUserFilter] = useState(fieldFiltersNames[0]); // Cambia esto a un índice válido
    const [index_, setIndex_] = useState(0);

    const handleChangeSelect = (e: React.ChangeEvent<{ value: unknown }>) => {
        const selectedIndex = e.target.value as number; // Asegúrate de que sea un número
        setFielName(fieldNames[selectedIndex]);
        setNameUserFilter(fieldFiltersNames[selectedIndex]);
        setIndex_(selectedIndex);

        console.log("handleChangeSelect fieldName:" + fieldName)
        console.log("handleChangeSelect fieldName:" + selectedIndex)
        console.log("handleChangeSelect fieldName:" + nameUserFilter)
    };

    return (
        <>

            <FormControl style={{ margin: "0rem 0", padding: 0, flex: "content" }} >
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

            <FormControl style={{ margin: "0rem 0", padding: 0, width: "100%", display: "flex", flex: "content" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>

                    <TextField
                        name={nameUserFilter} // Corrige aquí
                        placeholder={`Filtrar por ${fieldNames[index_]}`}
                        type="text"
                        onChange={handelControlChange} // Función para manejar el cambio
                        style={{ flex: "80%" }}
                        disabled={activate}
                    />
                </div>
            </FormControl>
        </>
    );
}
