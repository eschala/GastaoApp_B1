import * as React from 'react';

import { useContext, useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { GetUserTypeControl } from '../TypeUsers/UserTypeControl';
import { DniControl, EmailControl, LastNameControl, NameControl, PasswordControl, } from './BorradorControlV2';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { User } from '../../../../../1. Models/Functions/API Responses/GetATbUsers';
import { UsersContext } from '../../../../../3. Contexts/UsersFiltersContext';
import './DialogFormUpdateStyle.css';

/* 
     useEffect(() => {
         
         if (currentUserU?.idUser !== null) {
             searchUserById(currentUserU?.idUser)
 
         }
     }, [])
 
     
     const searchUserById = (id: number | any) => {
         const foundUser = data.find(user => user.idUser === id);
         setUserFound(foundUser);
         valor_User = userFound;
 
         console.log("valor", valor_User)
         console.log("foundUser", foundUser)
     };
 

let valor_User: any


/* const [idUserDialog, setIdUserDialog] = useState(0); */
/* 
GetUsersFiltered,
indexCurrent,
userCurrentUpdate,
*/


export function DialogFormUpdate() {
    const {

        currentUserU,
        GetUsersFiltered,

    } = useContext(UsersContext)

    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [currentUserOnDialog, setCurrentUserOnDialog] = useState<User | undefined>({
        idUser: 0,
        tipoUserId: 0,
        nameUser: "",
        lastNameUser: "",
        dniUser: 0,
        emailUser: "",
        passUser: "",
    });

    const updateUserCurrent_ = () => {
        if (currentUserU !== null || currentUserU !== undefined) {
            setCurrentUserOnDialog(currentUserU)
            console.log("Valor actual de currentUserOnDialog:", currentUserOnDialog);
        }
    }
    useEffect(() => {
        updateUserCurrent_()
    }, [open])

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };

    const handleChangeValue = (fieldName: keyof User, fieldValue: any) => {
        if (currentUserOnDialog && fieldName in currentUserOnDialog) {
            setCurrentUserOnDialog({
                ...currentUserOnDialog,
                [fieldName]: fieldValue,
            });
        } else {
            console.error("El campo no es válido o currentUserOnDialog es undefined");
        }
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

                            <h1 style={{ margin: "1rem", fontSize: "1.5rem" }}>ID: {currentUserOnDialog?.idUser}</h1>
                        </div>
                        <div className="section-control-dialog-form section-tipoUserId-dialog-form"
                            style={{
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Tipo de Usuario:
                            </label>
                            <div className="" style={{ width: "100%", }}>
                                <GetUserTypeControl nameField={'tipoUserId'} valueTypeIdUser={currentUserOnDialog?.tipoUserId} />

                            </div>
                        </div>
                        <div className="section-control-dialog-form section-nameUser-dialog-form"
                            style={{}}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Nombre:
                            </label>
                            <NameControl
                                valorControl={currentUserOnDialog?.nameUser}
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
                                valorControl={currentUserOnDialog?.lastNameUser}
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
                                valorControl={currentUserOnDialog?.emailUser}
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
                                valorControl={currentUserOnDialog?.dniUser}
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
                                valorControl={currentUserOnDialog?.passUser}
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
                    <Button onClick={() => console.log("GetUsersFiltered.length", GetUsersFiltered.length)}>Mostrar A</Button>
                    <Button type="submit">Guardar</Button>
                </DialogActions>
            </Dialog >
        </>
    )
}

export function FormUpdateOnDialog() {
    return (0)
}

export const dataU: User = {
    idUser: 99,
    tipoUserId: 4,
    nameUser: "Default",
    lastNameUser: "Default",
    dniUser: 1000,
    emailUser: "default@email.com",
    passUser: "defualt"
};
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

export function DialogBorrador() {

    const {
        userCurrentUpdate,
        currentUserU,

    } = useContext(UsersContext)
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };
    useEffect(() => {

    }, [open])

    return (
        <>
            <Button onClick={handleClickOpen} variant='outlined' style={{ flex: "content" }}>
                Abrir
            </Button>
            <Dialog fullWidth open={open}>
                <DialogTitle>
                    Titulo
                </DialogTitle>
                <DialogContent>
                    <div className="" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", }}>

                        <div className="" style={{ flex: "content" }}>

                            <h3>CurrentUserU</h3>

                            <form action="" style={{ flex: "100%", display: "flex", flexWrap: "wrap" }}>
                                <TextField
                                    style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                    label="ID:"
                                    value={currentUserU?.idUser}
                                />
                                <TextField
                                    style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                    label="Nombre:"
                                    value={currentUserU?.nameUser}
                                />
                                <TextField
                                    style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                    label="Apellido:"
                                    value={currentUserU?.lastNameUser}
                                />
                                <TextField
                                    style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                    label="Correo:"
                                    value={currentUserU?.emailUser}
                                />
                                <TextField
                                    style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                    label="Dni / Correo:"
                                    value={currentUserU?.dniUser}
                                />
                                <OutlinedInput
                                    style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                    label="Contraseña:"
                                    value={currentUserU?.passUser}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                onMouseDown={() => 0}
                                                onMouseUp={() => 0}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                >
                                </OutlinedInput>
                            </form>
                        </div>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button onClick={() => (0)}>
                        Actualizar a {"dataU"}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


/* 
export function DialogFormUpdate() {

    const [idUserDialog, setIdUserDialog] = useState(0);

    const { GetUsersFiltered, indexCurrent } = useContext(UsersContext)
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userFound, setUserFound] = useState<User | undefined>(undefined);
    const data: User[] = GetATbUsers(true)

    useEffect(() => {

        setIdUserDialog(GetUsersFiltered[indexCurrent].idUser)
        console.log("GetUsersFiltered[indexCurrent].idUser: " + GetUsersFiltered[indexCurrent].idUser)
        searchUserById(GetUsersFiltered[indexCurrent].idUser)
    }, [])

    // Función para buscar el usuario por idUser
    const searchUserById = (id: number) => {
        const foundUser = data.find(user => user.idUser === id);
        setUserFound(foundUser);
        valor_User = userFound;
        valor_User = idUserDialog;
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

    const handleChangeValue = (fieldName: any, fieldValue: any) => {
        setCurrentDataUser({
            ...currentDataUser,
            [fieldName]: fieldValue,
        });
    };

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const {
        userCurrentUpdate,
        setCurrentUserU,
        currentUserU,

    } = useContext(UsersContext)

    let dataU: User = {
        idUser: 2,
        tipoUserId: 1,
        nameUser: "Eduar2",
        lastNameUser: "Chala2",
        emailUser: "s@g2",
        passUser: "asd"
    }

    useEffect(() => {
        userCurrentUpdate(dataU)

    }, [open])

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

                            <h1 style={{ margin: "1rem", fontSize: "1.5rem" }}>ID: {currentUserU?.idUser}</h1>
                        </div>
                        <div className="section-control-dialog-form section-tipoUserId-dialog-form"
                            style={{
                            }}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Tipo de Usuario:
                            </label>
                            <div className="" style={{ width: "100%", }}>
                                <GetUserTypeControl nameField={'tipoUserId'} valueTypeIdUser={currentUserU?.tipoUserId} />

                            </div>
                        </div>
                        <div className="section-control-dialog-form section-nameUser-dialog-form"
                            style={{}}
                        >
                            <label htmlFor="" style={{ display: "flex", flexDirection: "column", alignItems: "", justifyItems: "", margin: "0.2rem 1rem", }}>
                                Nombre:
                            </label>
                            <NameControl
                                valorControl={currentUserU?.nameUser}
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
                                valorControl={currentUserU?.lastNameUser}
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
                                valorControl={currentUserU?.emailUser}
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
                                valorControl={currentUserU?.dniUser}
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
                                valorControl={currentUserU?.passUser}
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
 */
