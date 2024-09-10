import * as React from 'react';

import { UserTypeControl } from '../TypeUsers/UserTypeControl';

import { UserFilter } from '../UsersFilter';
import { Button } from '@mui/material';
import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl } from '../FormControls/Controls';

/* import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl } from '../FormControls/Controls'; */

export function FormUpdateUsers() {
    const [showPassword, setShowPassword] = React.useState(false);

    const {
        indiceActual,
        /*         filtros,
                manejarCambioFiltro, */
        GetUsersFiltrados,
        PrevRegister,
        NextRegister
    } = UserFilter();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (

        <>
            {GetUsersFiltrados.length > 0 ?
                (<div className="form-update"
                    style={{}}>
                    <div className="" style={{ width: "100%", }}>
                        <UserTypeControl />

                    </div>

                    <NameControl getName={GetUsersFiltrados[indiceActual].nameUser} />{/* Form control con input */}
                    <LastNameControl getLastName={GetUsersFiltrados[indiceActual].lastNameUser} />{/* Form control con input */}
                    <EmailControl getEmail={GetUsersFiltrados[indiceActual].emailUser} />{/* Form control con input */}
                    <DniControl getCedula={GetUsersFiltrados[indiceActual].dniUser} />{/* Form control con input */}

                    <PasswordControl
                        getPass={GetUsersFiltrados[indiceActual].passUser}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword} />

                </div>) :
                null || undefined
            }
            <div className="sections-buttons">
                <Button variant='outlined' onClick={PrevRegister} disabled={indiceActual === 0}>
                    Anterior
                </Button>
                <Button variant='outlined' onClick={NextRegister} disabled={indiceActual === GetUsersFiltrados.length - 1}>
                    Siguiente
                </Button>
            </div>
        </>

    )
}
{/* 
                    <NameControl getName={GetUsersFiltrados[indiceActual].nameUser} />
                    <LastNameControl getLastName={GetUsersFiltrados[indiceActual].lastNameUser} />
                    <EmailControl getEmail={GetUsersFiltrados[indiceActual].emailUser} />
                    <DniControl getCedula={GetUsersFiltrados[indiceActual].dniUser} />

                    <PasswordControl
                        getPass={GetUsersFiltrados[indiceActual].passUser}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        handleMouseUpPassword={handleMouseUpPassword} />

*/}
/* 
value={GetUsersFiltrados[indiceActual].idUser}
value={GetUsersFiltrados[indiceActual].tipoUserId}
value={GetUsersFiltrados[indiceActual].nameUser}
value={GetUsersFiltrados[indiceActual].lastNameUser}
value={GetUsersFiltrados[indiceActual].dniUser}
value={GetUsersFiltrados[indiceActual].emailUser}
value={GetUsersFiltrados[indiceActual].passUser}
*/