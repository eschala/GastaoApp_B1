
import { UserTypeControl } from '../TypeUsers/UserTypeControl';
import { UserFilter } from '../UsersFilter';
import { Button } from '@mui/material';
import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl } from './BorradorControlV2';
import { useEffect, useState } from 'react';
import React from 'react';

export function FormUpdateUsersBORRADOR() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [currentData, setCurrentData] = useState({
        nameUser: '',
        lastNameUser: '',
        emailUser: '',
        dniUser: 0,
        passUser: '',
    });

    const {
        indiceActual,
        GetUsersFiltrados,
        PrevRegister,
        NextRegister
    } = UserFilter();

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
    }, [indiceActual, GetUsersFiltrados]);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            {GetUsersFiltrados.length > 0 ? (
                <div className="form-update">
                    <UserTypeControl />

                    <NameControl initialName={currentData.nameUser} />
                    <LastNameControl initialLastName={currentData.lastNameUser} />
                    <EmailControl initialEmail={currentData.emailUser} />
                    <DniControl initialDNI={currentData.dniUser} />

                    <PasswordControl
                        getPass={currentData.passUser}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword}
                    />
                </div>
            ) : null}

            <div className="sections-buttons">
                <Button variant='outlined' onClick={PrevRegister} disabled={indiceActual === 0}>
                    Anterior
                </Button>
                <Button variant='outlined' onClick={NextRegister} disabled={indiceActual === GetUsersFiltrados.length - 1}>
                    Siguiente
                </Button>
            </div>
        </>
    );
}
