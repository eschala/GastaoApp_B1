
    /* 
        GetUsersToAdmin[0].idUser => IdUser_Current
        GetUsersToAdmin[0].tipoUserId => TipoUserId_Current
        GetUsersToAdmin[0].tipoUserId => TipoUserId_Current
        GetUsersToAdmin[0].nameUser => NameUser_Current
        GetUsersToAdmin[0].lastNameUser => LastNameUser_Current
        GetUsersToAdmin[0].emailUser => EmailUser_Current
        GetUsersToAdmin[0].dniUser => DniUser_Current
        GetUsersToAdmin[0].passUser => PassUser_Current
     */


    /* 
        let IdUser_Current: any = GetUsersToAdmin[0].idUser
        let TipoUserId_Current: any = GetUsersToAdmin[0].tipoUserId
        let NameUser_Current: any = GetUsersToAdmin[0].nameUser
        let LastNameUser_Current: any = GetUsersToAdmin[0].lastNameUser
        let EmailUser_Current: any = GetUsersToAdmin[0].emailUser
        let DniUser_Current: any = GetUsersToAdmin[0].dniUser
        let PassUser_Current: any = GetUsersToAdmin[0].passUser
     */
     
    /* 
        idUserFilter
        tipoUserIdFilter
        nameUserFilter
        lastNameUserFilter
        dniUserFilter
        emailUserFilter
    */

import React, { useState } from 'react';

const UserList = ({ GetUsersFiltered, FilterInput, handelControlChangeFilters }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleFirst = () => {
        setCurrentIndex(0);
    };

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, GetUsersFiltered.length - 1));
    };

    const handleLast = () => {
        setCurrentIndex(GetUsersFiltered.length - 1);
    };

    return (
        <>
            <div className="" style={{ width: "60%" }}>
                <h1>{"Total de usuarios: " + GetUsersFiltered.length}</h1>
                {FilterInput(handelControlChangeFilters)}
            </div>

            {GetUsersFiltered.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", width: "60%", padding: "0rem 0.5rem", }}>
                    <div style={{ border: "1pt solid white", display: "flex", flexWrap: "wrap", flex: "50%" }}>
                        <div style={{ flex: "100%", margin: "3pt" }}>
                            <h4>{currentIndex + 1 + ". " + GetUsersFiltered[currentIndex].nameUser + " " + GetUsersFiltered[currentIndex].lastNameUser}</h4>
                        </div>
                        <div style={{ flex: "100%", margin: "3pt" }}>
                            <h4>{" ID: " + GetUsersFiltered[currentIndex].idUser}</h4>
                        </div>
                        <div style={{ flex: "100%", margin: "3pt" }}>
                            <h5>{"" + GetUsersFiltered[currentIndex].emailUser + "\nTipo: " + GetUsersFiltered[currentIndex].tipoUserId + "\n DNI: " + GetUsersFiltered[currentIndex].dniUser}</h5>
                        </div>
                    </div>
                </div>
            )}

            <div style={{ marginTop: "20px" }}>
                <button onClick={handleFirst} disabled={currentIndex === 0}>Primero</button>
                <button onClick={handlePrevious} disabled={currentIndex === 0}>Anterior</button>
                <button onClick={handleNext} disabled={currentIndex === GetUsersFiltered.length - 1}>Siguiente</button>
                <button onClick={handleLast} disabled={currentIndex === GetUsersFiltered.length - 1}>Último</button>
            </div>
        </>
    );
};

export default UserList;
