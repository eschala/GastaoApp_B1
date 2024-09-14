import { useEffect, useState } from 'react';

import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl, } from './BorradorControlV2';

import Button from '@mui/material/Button';
import React from 'react';
import { GetUserTypeControl } from '../TypeUsers/UserTypeControl';

import { DialogFormUpdate } from './DialogFormUpdate';
import { FindUserByID } from '../../../../../1. Models/Functions/API Responses/UserComponentOnTestFind';
import { UserFilter } from '../../../../../3. Contexts/UsersFilter';




let firstRegister: boolean

export function FormUpdateUsersBORRADOR() {

    const { indexCurrent: indiceActual, GetUsersFiltrados, PrevRegister, NextRegister, FirstRegister, LastRegister } = UserFilter();

    const [showPassword, setShowPassword] = React.useState(false);



    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const [currentData, setCurrentData] = useState({
        idUser: 0,
        tipoUserId: 0,
        nameUser: "",
        lastNameUser: "",
        emailUser: "",
        dniUser: 0,
        passUser: "",
    })


    // Efecto para actualizar currentData cuando cambia el índice actual
    useEffect(() => {

        if (GetUsersFiltrados.length > 0) {
            const currentUser = GetUsersFiltrados[indiceActual];
            setCurrentData({
                idUser: currentUser.idUser ?? 0,
                tipoUserId: currentUser.tipoUserId ?? 0,
                nameUser: currentUser.nameUser ?? '',
                lastNameUser: currentUser.lastNameUser ?? '',
                emailUser: currentUser.emailUser ?? '',
                dniUser: currentUser.dniUser ?? 0,
                passUser: currentUser.passUser ?? '',
            });
        }
    }, [indiceActual]);



    // Manejador de cambios para los inputs
    const handleChangeValue = (fieldName: any, fieldValue: any) => {
        setCurrentData({
            ...currentData,
            [fieldName]: fieldValue,
        });
    };

    let setFlexDirection: any = "column"
    if (currentData.idUser == null || currentData.idUser == 0)
        firstRegister = false
    else
        firstRegister = true

    const testingLog = () => {
        /* alert("Usaurio editado: " + GetUsersFiltrados[indiceActual].nameUser); */
        /* console.clear() */
        let numV: any = 0

        if (firstRegister == false) {
            numV = GetUsersFiltrados[0].idUser

        }
        else {

            numV = currentData.idUser
        }
        alert("currentData.idUser: " + numV)
    }
    useEffect(() => {

        setTimeout(() => {
            /* PrevRegister() */

            console.log("RESET FIRST")
        }, 1000)

    }, [])


    return (
        <>
            {GetUsersFiltrados.length > 0 && (
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
                    <h2 style={{ color: "white", opacity: 0.8 }}>Registro {indiceActual + 1} de {GetUsersFiltrados.length}</h2>
                    <h1>ID: {firstRegister == false ? GetUsersFiltrados[0].idUser : currentData.idUser}</h1>
                    <h2>{firstRegister == false ? GetUsersFiltrados[0].tipoUserId : currentData.tipoUserId + " " + typeof (currentData.tipoUserId)}</h2>
                    <div className="section-form">


                        <div className="section-control section-tipoUserId"
                            style={{
                                width: "",
                                display: "flex",
                                textAlign: "center"
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Tipo de Usuario:
                            </label>
                            <div className="" style={{ width: "100%", }}>
                                <GetUserTypeControl nameField={'tipoUserId'} valueTypeIdUser={firstRegister == false ? GetUsersFiltrados[0].tipoUserId : currentData.tipoUserId} />

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
                                valorControl={firstRegister == false ? GetUsersFiltrados[0].nameUser : currentData.nameUser}
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
                                valorControl={firstRegister == false ? GetUsersFiltrados[0].lastNameUser : currentData.lastNameUser}
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
                                valorControl={firstRegister == false ? GetUsersFiltrados[0].emailUser : currentData.emailUser}
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
                                valorControl={firstRegister == false ? GetUsersFiltrados[0].dniUser : currentData.dniUser}
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
                                valorControl={firstRegister == false ? GetUsersFiltrados[0].passUser : currentData.passUser}
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
                        {/*                         <Button className='btn-register' style={{ border: "white solid 1px", padding: "0.5rem", margin: "1rem" }} variant='outlined' onClick={handleOpenClick} >
                            Editar
                        </Button> */}
                        <DialogFormUpdate currentIDUser={currentData.idUser} openClick={true} />
                    </div>
                    <div className="sections-buttons-navigation" style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", height: "auto", }}>
                        <Button className='btn-first-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={FirstRegister} >
                            Primero
                        </Button>
                        <Button className='btn-prev-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={PrevRegister} disabled={indiceActual === 0}>
                            Anterior
                        </Button>
                        <Button className='btn-next-register btn-register' style={{ flex: 1, flexWrap: "wrap", }} variant='outlined' onClick={NextRegister} disabled={indiceActual === GetUsersFiltrados.length - 1}>
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
