import { useContext, useEffect, useState } from 'react';

import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl, } from './BorradorControlV2';

import Button from '@mui/material/Button';
import React from 'react';
import { GetUserTypeControl } from '../TypeUsers/UserTypeControl';

import { DialogFormUpdate } from './DialogFormUpdate';
import { FindUserByID } from '../../../../../1. Models/Functions/API Responses/UserComponentOnTestFind';
import { FilterInput, UsersFilterBy, UsersFiltersContext } from '../../../../../3. Contexts/UsersFiltersContext';

import { Child } from '../../../../../1. Models/Types/Types';
import { User } from '../../../../../1. Models/Functions/API Responses/GetATbUsers';





let firstRegister: boolean

export function FormUpdateUsersBORRADOR({ children }: Child | any) {

    const {

        GetUsersFiltered,
        PrevRegister,
        NextRegister,
        FirstRegister,
        LastRegister,
        GetUsersToAdmin,
        setIndexCurrent,
        indexCurrent,
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

    const [currentData, setCurrentData] = useState<UsersFilterBy>({
        idUserFilter: 0,
        tipoUserIdFilter: 0,
        nameUserFilter: "",
        lastNameUserFilter: "",
        emailUserFilter: "",
        dniUserFilter: 0,
        passUserFilter: "",
    })

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

    }
    else {
    }
    let numV: number | any
    const testingLog = () => {
        (firstRegister === false ? numV = 0 : numV = currentData.idUserFilter);
        alert("currentData.idUser: " + numV)
    }

    const handleFirst = () => {
        setIndexCurrent(0);
    };

    const handlePrevious = () => {
        setIndexCurrent(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setIndexCurrent(prevIndex => Math.min(prevIndex + 1, GetUsersFiltered.length - 1));
    };

    const handleLast = () => {
        setIndexCurrent(GetUsersFiltered.length - 1);
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
                            <h4>{indexCurrent + 1 + ". " + GetUsersFiltered[indexCurrent].nameUser + " " + GetUsersFiltered[indexCurrent].lastNameUser}</h4>
                        </div>
                        <div style={{ flex: "100%", margin: "3pt" }}>
                            <h4>{" ID: " + GetUsersFiltered[indexCurrent].idUser}</h4>
                        </div>
                        <div style={{ flex: "100%", margin: "3pt" }}>
                            <h5>{"" + GetUsersFiltered[indexCurrent].emailUser + "\nTipo: " + GetUsersFiltered[indexCurrent].tipoUserId + "\n DNI: " + GetUsersFiltered[indexCurrent].dniUser}</h5>
                        </div>
                    </div>
                </div>
            )}

            <div style={{ marginTop: "20px" }}>
                <Button variant='outlined' onClick={handleFirst} disabled={indexCurrent === 0}>Primero</Button >
                <Button variant='outlined' onClick={handlePrevious} disabled={indexCurrent === 0}>Anterior</Button >
                <Button variant='outlined' onClick={handleNext} disabled={indexCurrent === GetUsersFiltered.length - 1}>Siguiente</Button >
                <Button variant='outlined' onClick={handleLast} disabled={indexCurrent === GetUsersFiltered.length - 1}>Último</Button >
            </div>
        </>
    );
}


function FormUpdateNavigate(i: number, setFlexDirection: any, indexCurrent: number, GetUsersFiltered: User[], currentData: UsersFilterBy, children: any, handleChangeValue: (fieldName: any, fieldValue: any) => void, showPassword: boolean, handleClickShowPassword: () => void, handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void, handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void, testingLog: () => void, FirstRegister: () => void, PrevRegister: () => void, NextRegister: () => void, LastRegister: () => void) {
    return <div
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
        <h1>ID: {firstRegister == false ? 0 : GetUsersFiltered[i].idUser}</h1>

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
                    <GetUserTypeControl nameField={'tipoUserId'} valueTypeIdUser={firstRegister == false ? 0 : GetUsersFiltered[i].tipoUserId} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].nameUser}
                    nameField={"nameUser"}
                    handleEvent={(e) => handleChangeValue('nameUser', e.target.value)} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].lastNameUser}
                    nameField={"lastNameUser"}
                    handleEvent={(e) => handleChangeValue('lastNameUser', e.target.value)} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].emailUser}
                    nameField={"emailUser"}
                    handleEvent={(e) => handleChangeValue('emailUser', e.target.value)} />

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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].dniUser}
                    nameField={"dniUser"}
                    handleEvent={(e) => handleChangeValue('dniUser', e.target.value)} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].passUser}
                    nameField={"passUser"}
                    handleEvent={(e) => handleChangeValue('passUser', e.target.value)}
                    showPassword={showPassword}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    handleMouseUpPassword={handleMouseUpPassword} />
            </div>
        </div>
        <div className="sections-buttons-crud">

            <Button className='btn-register' style={{ border: "white solid 1px", padding: "0.5rem", margin: "1rem" }} variant='outlined' onClick={testingLog}>
                Log
            </Button>

            <DialogFormUpdate />
        </div>
        <div className="sections-buttons-navigation" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", height: "auto", }}>
            <Button className='btn-first-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={FirstRegister}>
                Primero
            </Button>
            <Button className='btn-prev-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={PrevRegister} disabled={indexCurrent === 0}>
                Anterior
            </Button>
            <Button className='btn-next-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={NextRegister} disabled={indexCurrent === GetUsersFiltered.length - 1}>
                Siguiente
            </Button>
            <Button className='btn-last-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={LastRegister}>
                Ultimo
            </Button>
        </div>
        <div className="">
            <FindUserByID />
        </div>
    </div>;
}
function FormUpdateFiltered(i: number | any, setFlexDirection: any, indexCurrent: number, GetUsersFiltered: User[], currentData: UsersFilterBy, children: any, handleChangeValue: (fieldName: any, fieldValue: any) => void, showPassword: boolean, handleClickShowPassword: () => void, handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void, handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void, testingLog: () => void, FirstRegister: () => void, PrevRegister: () => void, NextRegister: () => void, LastRegister: () => void) {
    return <div
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
        <h1>ID: {firstRegister == false ? 0 : GetUsersFiltered[i].idUser}</h1>

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
                    <GetUserTypeControl nameField={'tipoUserId'} valueTypeIdUser={firstRegister == false ? 0 : GetUsersFiltered[i].tipoUserId} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].nameUser}
                    nameField={"nameUser"}
                    handleEvent={(e) => handleChangeValue('nameUser', e.target.value)} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].lastNameUser}
                    nameField={"lastNameUser"}
                    handleEvent={(e) => handleChangeValue('lastNameUser', e.target.value)} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].emailUser}
                    nameField={"emailUser"}
                    handleEvent={(e) => handleChangeValue('emailUser', e.target.value)} />

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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].dniUser}
                    nameField={"dniUser"}
                    handleEvent={(e) => handleChangeValue('dniUser', e.target.value)} />
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
                    valorControl={firstRegister == false ? 0 : GetUsersFiltered[i].passUser}
                    nameField={"passUser"}
                    handleEvent={(e) => handleChangeValue('passUser', e.target.value)}
                    showPassword={showPassword}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    handleMouseUpPassword={handleMouseUpPassword} />
            </div>
        </div>
        <div className="sections-buttons-crud">

            <Button className='btn-register' style={{ border: "white solid 1px", padding: "0.5rem", margin: "1rem" }} variant='outlined' onClick={testingLog}>
                Log
            </Button>

            <DialogFormUpdate />
        </div>
        <div className="sections-buttons-navigation" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", height: "auto", }}>
            <Button className='btn-first-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={FirstRegister}>
                Primero
            </Button>
            <Button className='btn-prev-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={PrevRegister} disabled={indexCurrent === 0}>
                Anterior
            </Button>
            <Button className='btn-next-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={NextRegister} disabled={indexCurrent === GetUsersFiltered.length - 1}>
                Siguiente
            </Button>
            <Button className='btn-last-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={LastRegister}>
                Ultimo
            </Button>
        </div>
        <div className="">
            <FindUserByID />
        </div>
    </div>;
}

