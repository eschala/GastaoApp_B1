import * as React from 'react';

import { useContext, useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { GetUserTypeControl } from '../TypeUsers/UserTypeControl';
import { LastNameControl, NameControl, EmailControl, DniControl, PasswordControl, } from './BorradorControlV2';

import { GetATbUsers, User } from '../../../../../1. Models/Functions/API Responses/GetATbUsers';
import { UsersFiltersContext } from '../../../../../3. Contexts/UsersFiltersContext';
import './DialogFormUpdateStyle.css';

export function DialogFormUpdate() {
    let valor_User: any = 0

    const [idUserDialog, setIdUserDialog] = useState(0);

    const { GetUsersFiltered, indexCurrent } = useContext(UsersFiltersContext)
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userFound, setUserFound] = useState<User | undefined>(undefined);
    const data: User[] = GetATbUsers(true)

    useEffect(() => {
        valor_User = 1
        setIdUserDialog(GetUsersFiltered[indexCurrent].idUser)
        console.log("GetUsersFiltered[indexCurrent].idUser: " + GetUsersFiltered[indexCurrent].idUser)
        searchUserById(GetUsersFiltered[indexCurrent].idUser)
    }, [])

    // Función para buscar el usuario por idUser
    const searchUserById = (id: number) => {
        const foundUser = data.find(user => user.idUser === id);
        setUserFound(foundUser);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };

    const [currentDataUser, setCurrentDataUser] = useState({
        idUser: 0,
        tipoUserId: 0,
        nameUser: "",
        lastNameUser: "",
        emailUser: "",
        dniUser: 0,
        passUser: "",
    })

    useEffect(() => {

        if (GetUsersFiltered.length > 0) {
            const currentUser = GetUsersFiltered[indexCurrent];
            setCurrentDataUser({
                idUser: currentUser.idUser ?? 0,
                tipoUserId: currentUser.tipoUserId ?? 0,
                nameUser: currentUser.nameUser ?? '',
                lastNameUser: currentUser.lastNameUser ?? '',
                emailUser: currentUser.emailUser ?? '',
                dniUser: currentUser.dniUser ?? 0,
                passUser: currentUser.passUser ?? '',
            });
        }
    }, [indexCurrent]);

    // Manejador de cambios para los inputs
    const handleChangeValue = (fieldName: any, fieldValue: any) => {
        setCurrentDataUser({
            ...currentDataUser,
            [fieldName]: fieldValue,
        });
    };

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <>
            <Button className='btn-register' style={{ border: "white solid 1px", padding: "0.5rem", margin: "1rem" }} variant='outlined' onClick={handleClickOpen} >
                Editar
            </Button>
            <Dialog fullWidth
                open={open}
                onClose={handleClose}

            >
                <DialogTitle>Editar</DialogTitle>
                <DialogContent style={{ width: "100%" }}>
                    <div className="section-form-dialog" >
                        <div className="section-control-dialog-form section-idUser-dialog-form">

                            <h1 style={{ margin: "1rem", fontSize: "1.5rem" }}>ID: {currentDataUser.idUser}</h1>
                        </div>
                        <div className="section-control-dialog-form section-tipoUserId-dialog-form"
                            style={{
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Tipo de Usuario:
                            </label>
                            <div className="" style={{ width: "100%", }}>
                                <GetUserTypeControl nameField={'tipoUserId'} valueTypeIdUser={currentDataUser.tipoUserId} />

                            </div>
                        </div>
                        <div className="section-control-dialog-form section-nameUser-dialog-form"
                            style={{}}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Nombre:
                            </label>
                            <NameControl
                                valorControl={currentDataUser.nameUser}
                                nameField={"nameUser"}
                                handleEvent={(e) => handleChangeValue('nameUser', e.target.value)}

                            />
                        </div>
                        <div className="section-control-dialog-form section-lastNameUser-dialog-form"
                            style={{}}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Apellido:
                            </label>

                            <LastNameControl
                                valorControl={currentDataUser.lastNameUser}
                                nameField={"lastNameUser"}
                                handleEvent={(e) => handleChangeValue('lastNameUser', e.target.value)}
                            />
                        </div>
                        <div className="section-control-dialog-form section-emailUser-dialog-form"
                            style={{}}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Correo Electrónico:
                            </label>
                            <EmailControl
                                valorControl={currentDataUser.emailUser}
                                nameField={"emailUser"}
                                handleEvent={(e) => handleChangeValue('emailUser', e.target.value)}
                            />

                        </div>
                        <div className="section-control-dialog-form section-dniUser-dialog-form"
                            style={{}}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Cedula / DNI:
                            </label>
                            <DniControl
                                valorControl={currentDataUser.dniUser}
                                nameField={"dniUser"}
                                handleEvent={(e) => handleChangeValue('dniUser', e.target.value)}
                            />
                        </div>
                        <div className="section-control-dialog-form section-passUser-dialog-form"
                            style={{}}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Contraseña:
                            </label>

                            <PasswordControl
                                valorControl={currentDataUser.passUser}
                                nameField={"passUser"}
                                handleEvent={(e) => handleChangeValue('passUser', e.target.value)}
                                showPassword={showPassword}
                                handleClickShowPassword={handleClickShowPassword}
                                handleMouseDownPassword={handleMouseDownPassword}
                                handleMouseUpPassword={handleMouseUpPassword}
                            />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => alert(GetUsersFiltered[indexCurrent].idUser)}>Mostrar A</Button>
                    <Button type="submit">Guardar</Button>
                </DialogActions>
            </Dialog >
        </>
    )
}

export function FormUpdateOnDialog() {
    return (0)
}

/* 
const GetUsers = GetATbUsers(true);//función que me trae todos los datos
 GetUsers={
        idUser: number,
        tipoUserId: number,
        nameUser: string,
        lastNameUser: string,
        emailUser: string,
        dniUser: number,
        passUser: string,
    }

¿Cómo hago para extraer el resto de datos de una lista que se adquiere de una tabla que se obtiene de una api, por una de sus propiedades o atributos que hace la función Clave Primaria en este caso "idUser"?
Necesito extraer el resto de los datos por el campo "idUser"
¿me puedes hacer un función en typescript que me devuelva todos los datos asociados a "idUser"?

*/