import { useContext, useEffect, useState } from 'react';

import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl, } from './BorradorControlV2';

import Button from '@mui/material/Button';
import React from 'react';
import { GetUserTypeControl } from '../TypeUsers/UserTypeControl';

import { DialogFormUpdate } from './DialogFormUpdate';
import { FindUserByID } from '../../../../../1. Models/Functions/API Responses/UserComponentOnTestFind';
import { FilterInput, UsersFiltersContext } from '../../../../../3. Contexts/UsersFiltersContext';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Child } from '../../../../../1. Models/Types/Types';





let firstRegister: boolean

export function FormUpdateUsersBORRADOR({ children }: Child | any) {

    /* const { indexCurrent: indexCurrent, GetUsersFiltered, PrevRegister, NextRegister, FirstRegister, LastRegister } = UserFilter(); */
    const {
        indexCurrent,
        GetUsersFiltered,
        PrevRegister,
        NextRegister,
        FirstRegister,
        LastRegister,
        handelControlChangeFilters,

    } = useContext(UsersFiltersContext)
    const [showPassword, setShowPassword] = React.useState(false);



    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const [currentData, setCurrentData] = useState({
        idUserFilter: 0,
        tipoUserIdFilter: 0,
        nameUserFilter: "",
        lastNameUserFilter: "",
        emailUserFilter: "",
        dniUserFilter: 0,
        passUserFilter: "",
    })

    /* 
    idUserFilter
    tipoUserIdFilter
    nameUserFilter
    lastNameUserFilter
    dniUserFilter
    emailUserFilter
    */


    // Efecto para actualizar currentData cuando cambia el índice actual
    useEffect(() => {



    }, []);

    const setData = () => {
        const currentUser = GetUsersFiltered[indexCurrent];
        setCurrentData({
            idUserFilter: currentUser.idUser ?? 0,
            tipoUserIdFilter: currentUser.tipoUserId ?? 0,
            nameUserFilter: currentUser.nameUser ?? '',
            lastNameUserFilter: currentUser.lastNameUser ?? '',
            emailUserFilter: currentUser.emailUser ?? '',
            dniUserFilter: currentUser.dniUser ?? 0,
            passUserFilter: currentUser.passUser ?? '',
        });
    }
    useEffect(() => {

        if (GetUsersFiltered.length > 0) {
            setData();
        }
        else {
        }
        console.log("GetUsersFiltered.length", GetUsersFiltered.length)
    }, [indexCurrent]);



    // Manejador de cambios para los inputs
    const handleChangeValue = (fieldName: any, fieldValue: any) => {
        setCurrentData({
            ...currentData,
            [fieldName]: fieldValue,
        });
    };

    let setFlexDirection: any = "column"

    switch (currentData.idUserFilter) {
        case null:

            firstRegister = false
            break;
        case 0:

            break;

        default:
            firstRegister = true
            break;
    }

    if (GetUsersFiltered.length == 1) {
        /* setData() */
    }
    else {
    }
    let numV: number | any
    const testingLog = () => {
        (firstRegister === false ? numV = 0 : numV = currentData.idUserFilter);
        alert("currentData.idUser: " + numV)
    }

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
    return (
        <>
            <div className="" style={{ width: "60%" }}>
                {FilterInput(handelControlChangeFilters)}
                <h1>{"GetUsersFiltered.length" + " " + GetUsersFiltered.length}</h1>

            </div>
            {GetUsersFiltered.length > 0 && (
                <div
                    className='form-update-user'
                    style={{
                        width: "",
                        display: "flex",
                        flexDirection: setFlexDirection,
                        alignItems: "center",
                        backgroundColor: "",
                        padding: "20px",
                        borderRadius: "5px",
                        border: "1px lightblue solid"
                    }}>
                    <h2 style={{ color: "white", opacity: 0.8 }}>Registro {indexCurrent + 1} de {GetUsersFiltered.length}</h2>
                    <h1>ID: {firstRegister == false ? 0 : currentData.idUserFilter}</h1>

                    <div className="section-form">
                        {children}


                        <div className="section-control section-tipoUserId"
                            style={{
                                width: "",
                                display: "flex",
                                textAlign: "center"
                            }}>
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Tipo de Usuario:
                            </label>
                            <div className="" style={{ width: "100%", }}>
                                <GetUserTypeControl nameField={'tipoUserId'} valueTypeIdUser={firstRegister == false ? 0 : currentData.tipoUserIdFilter} />
                            </div>
                        </div>
                        <div className="section-control section-nameUser"
                            style={{
                                width: ""
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Nombre:
                            </label>
                            <NameControl
                                valorControl={firstRegister == false ? 0 : currentData.nameUserFilter}
                                nameField={"nameUser"}
                                handleEvent={(e) => handleChangeValue('nameUser', e.target.value)}

                            />
                        </div>
                        <div className="section-control section-lastNameUser"
                            style={{
                                width: ""
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Apellido:
                            </label>

                            <LastNameControl
                                valorControl={firstRegister == false ? 0 : currentData.lastNameUserFilter}
                                nameField={"lastNameUser"}
                                handleEvent={(e) => handleChangeValue('lastNameUser', e.target.value)}
                            />
                        </div>
                        <div className="section-control section-emailUser"
                            style={{
                                width: ""
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Correo Electrónico:
                            </label>
                            <EmailControl
                                valorControl={firstRegister == false ? 0 : currentData.emailUserFilter}
                                nameField={"emailUser"}
                                handleEvent={(e) => handleChangeValue('emailUser', e.target.value)}
                            />

                        </div>
                        <div className="section-control section-dniUser"
                            style={{
                                width: ""
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Cedula / DNI:
                            </label>
                            <DniControl
                                valorControl={firstRegister == false ? 0 : currentData.dniUserFilter}
                                nameField={"dniUser"}
                                handleEvent={(e) => handleChangeValue('dniUser', e.target.value)}
                            />
                        </div>
                        <div className="section-control section-passUser"
                            style={{
                                width: ""
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Contraseña:
                            </label>

                            <PasswordControl
                                valorControl={firstRegister == false ? 0 : currentData.passUserFilter}
                                nameField={"passUser"}
                                handleEvent={(e) => handleChangeValue('passUser', e.target.value)}
                                showPassword={showPassword}
                                handleClickShowPassword={handleClickShowPassword}
                                handleMouseDownPassword={handleMouseDownPassword}
                                handleMouseUpPassword={handleMouseUpPassword}
                            />
                        </div>
                    </div>
                    <div className="sections-buttons-crud">

                        <Button className='btn-register' style={{ border: "white solid 1px", padding: "0.5rem", margin: "1rem" }} variant='outlined' onClick={testingLog} >
                            Log
                        </Button>

                        <DialogFormUpdate />
                    </div>
                    <div className="sections-buttons-navigation" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", height: "auto", }}>
                        <Button className='btn-first-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={FirstRegister} >
                            Primero
                        </Button>
                        <Button className='btn-prev-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={PrevRegister} disabled={indexCurrent === 0}>
                            Anterior
                        </Button>
                        <Button className='btn-next-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={NextRegister} disabled={indexCurrent === GetUsersFiltered.length - 1}>
                            Siguiente
                        </Button>
                        <Button className='btn-last-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={LastRegister} >
                            Ultimo
                        </Button>
                    </div>
                    <div className="">
                        <FindUserByID />
                    </div>
                </div>
            )}

        </>
    );
}


