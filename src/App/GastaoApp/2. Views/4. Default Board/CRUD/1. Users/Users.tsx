import React, { useContext } from "react";

import { UsersContext } from "../../../../3. Contexts/UsersFiltersContext";
import { Child } from "../../../../1. Models/Types/Types";

function UsersView({ children }: Child | null | any) {

    const { mostrarMensaje, indexCurrent, GetUsersFiltered, countChangesFilterInput, totalUsersLength } = useContext(UsersContext)

    const m = () => mostrarMensaje();
    return (
        <div className="container-fluid h-100">
            {children}
            <div className="" style={{ backgroundColor: "", border: "solid 1px white", flex: "100%", flexWrap: "wrap", display: "flex" }}>

                <div style={{ border: "solid 1px white", flex: "content", flexWrap: "wrap", display: "flex", textAlign: "center", }} className="text-dark">

                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}>Index: {indexCurrent}</div>
                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}>N°: {indexCurrent + 1}</div>
                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}>Total: {GetUsersFiltered.length}</div>
                    <div style={{ fontSize: "1.5rem", flex: "content", border: "lightblue 1px solid" }}></div>

                </div>
                <h4 style={{ border: "0.5pt solid gray", flex: "content" }}>{"countChangesFilterInput: " + countChangesFilterInput}</h4>
                <h4 style={{ border: "0.5pt solid gray", flex: "content" }}>{"totalUsersLength: " + totalUsersLength}</h4>
            </div>
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
