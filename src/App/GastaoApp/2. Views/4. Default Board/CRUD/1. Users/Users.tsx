import React, { useContext } from "react";

import { UsersFiltersContext } from "../../../../3. Contexts/UsersFiltersContext";
import { Child } from "../../../../1. Models/Types/Types";



function UsersView({ children }: Child | null | any) {

    const { mostrarMensaje, indexCurrent, } = useContext(UsersFiltersContext)

    const m = () => mostrarMensaje();
    return (
        <div style={{ backgroundColor: "", border: "solid 1px white", width: "100%" }} className="container-fluid h-100">

            <h3 className="text-dark">
                {"<Users/> index: " + indexCurrent + " posición: "}{indexCurrent + 1}

            </h3>
            {children}
        </div>
    );
}
export { UsersView as Users }

/* 
    const handelControlChangeFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const valor = name === "idUserFilter" || name === "tipoUserIdFilter" || name === "dniUserFilter" ? Number(value) : value;
        setFilters({ ...filters, [name]: valor });
    };

    const GetUsersFiltered = GetUsersByFilter.filter(user =>
        (filters.idUserFilter === 0 || user.idUser === filters.idUserFilter) &&
        (filters.tipoUserIdFilter === 0 || user.tipoUserId === filters.tipoUserIdFilter) &&
        (filters.nameUserFilter === '' || normalizeString(user.nameUser || '').includes(normalizeString(filters.nameUserFilter))) &&
        (filters.lastNameUserFilter === '' || normalizeString(user.lastNameUser || '').includes(normalizeString(filters.lastNameUserFilter))) &&
        (filters.dniUserFilter === 0 || user.dniUser?.toString() === filters.dniUserFilter?.toString()) &&
        (filters.emailUserFilter === '' || normalizeString(user.emailUser || '').includes(normalizeString(filters.emailUserFilter)))
    );

                        <FormControl style={{ margin: "1rem 0rem", padding: 1, width: "100%", display: "flex", backgroundColor: "" }}>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>

                                <TextField
                                    name={"FilterUsers"} // Usar el nombre del campo
                                    placeholder='filtrar'
                                    type='text'
                                    onChange={}
                                    style={{ flex: "80%" }}
                                />
                                <Button style={{ flex: "20%" }}>
                                    Filtrar
                                </Button>
                            </div>
                        </FormControl>
                        */
/* 
¿Cómo hago para que mi componente pueda hacer la busqueda o el filtro?
 */
