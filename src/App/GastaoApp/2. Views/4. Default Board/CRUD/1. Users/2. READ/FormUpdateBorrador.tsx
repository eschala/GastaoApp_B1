import { useEffect, useState } from 'react';
import { UserFilter } from '../UsersFilter';
import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl } from './BorradorControlV2';

import Button from '@mui/material/Button';
import React from 'react';

let firstRegister: boolean

export function FormUpdateUsersBORRADOR() {

    const { indiceActual, GetUsersFiltrados, PrevRegister, NextRegister, } = UserFilter();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    useEffect(() => {

    }, [])

    const [currentData, setCurrentData] = useState({
        idUser: 0,
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

    if (currentData.idUser == null || currentData.idUser == 0)
        firstRegister = false
    else
        firstRegister = true
    return (
        <>
            {GetUsersFiltrados.length > 0 && (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "darkblue",
                    padding: "20px",
                    borderRadius: "5px"
                }}>

                    <NameControl
                        valorControl={firstRegister == false ? GetUsersFiltrados[0].nameUser : currentData.nameUser}
                        nameField={"nameUser"}
                        handleEvent={(e) => handleChangeValue('nameUser', e.target.value)}

                    />
                    <LastNameControl
                        valorControl={firstRegister == false ? GetUsersFiltrados[0].lastNameUser : currentData.lastNameUser}
                        nameField={"lastNameUser"}
                        handleEvent={(e) => handleChangeValue('lastNameUser', e.target.value)}
                    />
                    <EmailControl
                        valorControl={firstRegister == false ? GetUsersFiltrados[0].emailUser : currentData.emailUser}
                        nameField={"emailUser"}
                        handleEvent={(e) => handleChangeValue('emailUser', e.target.value)}
                    />
                    <DniControl
                        valorControl={firstRegister == false ? GetUsersFiltrados[0].dniUser : currentData.dniUser}
                        nameField={"dniUser"}
                        handleEvent={(e) => handleChangeValue('dniUser', e.target.value)}
                    />

                    <PasswordControl
                        valorControl={firstRegister == false ? GetUsersFiltrados[0].passUser : currentData.passUser}
                        nameField={"passUser"}
                        handleEvent={(e) => handleChangeValue('passUser', e.target.value)}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword}
                    />
                    <h2>Registro {indiceActual + 1} de {GetUsersFiltrados.length}</h2>
                    <div className="sections-buttons" style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button className='btn-register' style={{ border: "white solid 1px", }} variant='outlined' onClick={PrevRegister} disabled={indiceActual === 0}>
                            Anterior
                        </Button>
                        <Button className='btn-register' style={{ border: "white solid 1px", }} variant='outlined' onClick={() => alert("User Actual = " + GetUsersFiltrados[0].nameUser)} disabled={indiceActual === GetUsersFiltrados.length - 1}>
                            Primero
                        </Button>
                        <Button className='btn-register' style={{ border: "white solid 1px", }} variant='outlined' onClick={NextRegister} disabled={indiceActual === GetUsersFiltrados.length - 1}>
                            Siguiente
                        </Button>
                    </div>
                </div>
            )}

        </>
    );
}
