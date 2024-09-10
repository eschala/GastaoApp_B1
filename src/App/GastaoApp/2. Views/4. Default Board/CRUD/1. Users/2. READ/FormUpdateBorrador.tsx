import { useEffect, useState } from 'react';
import { UserFilter } from '../UsersFilter';
import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl } from './BorradorControlV2';


import Button from '@mui/material/Button';
import React from 'react';



export function FormUpdateUsersBORRADOR() {
    const [showPassword, setShowPassword] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { indiceActual, GetUsersFiltrados, PrevRegister, NextRegister } = UserFilter();

    const [currentData, setCurrentData] = useState({
        nameUser: '',
        lastNameUser: '',
        emailUser: '',
        dniUser: 0,
        passUser: '',
    });

    // Efecto para actualizar currentData cuando cambia el índice actual
    useEffect(() => {
        if (GetUsersFiltrados.length > 0) {
            const currentUser = GetUsersFiltrados[indiceActual];
            setCurrentData({
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

    return (
        <>
            {GetUsersFiltrados.length > 0 && (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "blue",
                    padding: "20px",
                    borderRadius: "5px"
                }}>
                    <h1>Registro {indiceActual + 1} de {GetUsersFiltrados.length}</h1>

                    <NameControl
                        valorControl={currentData.nameUser}
                        nameField={"nameUser"}
                        handleEvent={(e) => handleChangeValue('nameUser', e.target.value)}

                    />
                    <LastNameControl
                        valorControl={currentData.lastNameUser}
                        nameField={"lastNameUser"}
                        handleEvent={(e) => handleChangeValue('lastNameUser', e.target.value)}
                    />
                    <EmailControl
                        valorControl={currentData.emailUser}
                        nameField={"emailUser"}
                        handleEvent={(e) => handleChangeValue('emailUser', e.target.value)}
                    />
                    <DniControl
                        valorControl={currentData.dniUser}
                        nameField={"dniUser"}
                        handleEvent={(e) => handleChangeValue('dniUser', e.target.value)}
                    />

                    <PasswordControl
                        valorControl={currentData.passUser}
                        nameField={"passUser"}
                        handleEvent={(e) => handleChangeValue('passUser', e.target.value)}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword}
                    />
                    <div className="sections-buttons" style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant='outlined' onClick={PrevRegister} disabled={indiceActual === 0}>
                            Anterior
                        </Button>
                        <Button variant='outlined' onClick={NextRegister} disabled={indiceActual === GetUsersFiltrados.length - 1}>
                            Siguiente
                        </Button>
                    </div>
                </div>
            )}

        </>
    );
}
