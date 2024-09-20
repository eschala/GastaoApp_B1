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
import MenuItem from '@mui/material/MenuItem';
import { TipoUser } from '../../../../../1. Models/Functions/API Responses/GetAzTbTipoUsers';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import './DialogFormUpdateStyle.css';

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

export function UpdateDialogForm() {

    const {
        userCurrentUpdate, currentUserU, dataTypeUser, setCurrentUserU

    } = useContext(UsersContext)

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };
    const [open, setOpen] = useState(false);
    const [openConfirmSave, setOpenConfirmSave] = useState(false);
    const [countEdits, setCountEdits] = useState<number>(0);
    const [userSaved, setUserSaved] = useState<boolean>(false);
    const [userOnEdit, setUserOnEdit] = useState<User>();

    const handleOpenConfirm = () => { setOpenConfirmSave(true) }
    const handleCloseConfirm = () => { setOpenConfirmSave(false) }

    function onSetUser() {
        setUserOnEdit(currentUserU)
    }

    useEffect(() => {
        if (countEdits <= 0 && userSaved === false) {
            onSetUser()
        }
        console.log("setUserOnEdit(currentUserU)")
        console.log("currentUserU", currentUserU)
        console.log("userOnEdit", userOnEdit)
    })

    const onSaveUser = () => {
        onSetUser()
        console.log("guardado")
        setUserSaved(true)
        setCountEdits(0)
        handleClose()
    }

    const onSaveUserConfirm = () => {
        onSetUser()
        console.log("guardado confirmado")
        setUserSaved(true)
        handleCloseConfirm()
        setCountEdits(0)
        handleClose()
    }

    const onNotSaveUser = () => {
        if (countEdits > 0) {
            handleOpenConfirm()
        }
        else {
            onUndoEditUser()
            handleClose()
            console.log("NO guardado")
            setUserSaved(false)
        }
    }

    const onNotSaveUserConfirm = () => {
        onUndoEditUser()
        console.log("NO guardado confirmado")
        setUserSaved(false)
        handleCloseConfirm()
        handleClose()
    }

    const onUndoEditUser = () => {
        if (currentUserU?.idUser == userOnEdit?.idUser) {
            console.log("onUndoEditUser", onUndoEditUser)
            console.log("userOnEdit", userOnEdit)
            console.log("currentUserU", currentUserU)
            setCurrentUserU(userOnEdit)
        }
        setCountEdits(0)
        onSetUser()
    }

    const handleChangeValueDialog = (fieldName: keyof User, fieldValue: any) => {
        if (currentUserU && fieldName in currentUserU) {
            setCurrentUserU({
                ...currentUserU,
                [fieldName]: fieldValue,
            });
        }
        else {
            console.error("El campo no es válido o usuarioDatoFiltrado es undefined");
        }
        setCountEdits(countEdits + 1)

        console.log("Select Type", [fieldName], fieldValue)
    };

    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };
    useEffect(() => {
        if (open === false) {
            setCountEdits(0)
            setShowPassword(false)
        }
    })

    return (
        <>
            <Button onClick={handleClickOpen} variant='outlined' style={{ flex: "content" }}
                className='btn-register'
            >
                Editar
            </Button>
            <Dialog fullWidth open={open}>
                <DialogTitle fontSize={"2.7rem"} margin={"0.5rem"} fontWeight={700}>
                    Editar
                </DialogTitle>
                <DialogContent>
                    <div className="" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", }}>

                        <div className="" style={{ flex: "100%", flexWrap: "wrap" }}>
                            <div className='form' style={{ flex: "100%", display: "flex", flexWrap: "wrap" }}>
                                <div className="section-control-dialog-form section-idUser-dialog-form" style={{ display: "flex" }} >

                                    <h1 style={{ margin: "0.5rem" }} className="section-control-dialog-form section-idUser-dialog-form">
                                        ID: {currentUserU?.idUser}
                                    </h1>

                                    <h4 style={{ marginRight: "0.5rem" }}>
                                        {countEdits}
                                    </h4>
                                </div>
                                <FormControl
                                    className="section-control-dialog-form section-tipoUserId-dialog-form"
                                >
                                    <Select

                                        style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                        onChange={(e: any) => handleChangeValueDialog("tipoUserId", e.target.value)}
                                        /* onChange={(e: any) => handleChangeTypeUser(e)} */
                                        type='number'
                                        name={"tipoUserId"}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={currentUserU?.tipoUserId}
                                    >
                                        {dataTypeUser.map((userType: TipoUser) => (
                                            <MenuItem key={userType.idTipoUser} value={userType.idTipoUser}>
                                                {userType.tipoUser}
                                            </MenuItem>
                                        ))}

                                    </Select>

                                </FormControl>
                                <FormControl
                                    className="section-control-dialog-form section-nameUser-dialog-form"
                                >
                                    <TextField
                                        name={"nameUser"}
                                        onChange={(e: any) => handleChangeValueDialog("nameUser", e.target.value)}
                                        style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                        label="Nombre:"
                                        value={currentUserU?.nameUser}
                                    />

                                </FormControl>
                                <FormControl
                                    className="section-control-dialog-form section-lastNameUser-dialog-form"
                                >
                                    <TextField
                                        name={"lastNameUser"}
                                        onChange={(e: any) => handleChangeValueDialog("lastNameUser", e.target.value)}
                                        style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                        label="Apellido:"
                                        value={currentUserU?.lastNameUser}
                                    />

                                </FormControl>
                                <FormControl
                                    className="section-control-dialog-form section-emailUser-dialog-form"
                                >
                                    <TextField
                                        name={"emailUser"}
                                        onChange={(e: any) => handleChangeValueDialog("emailUser", e.target.value)}
                                        style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                        label="Correo:"
                                        value={currentUserU?.emailUser}
                                    />


                                </FormControl>
                                <FormControl
                                    className="section-control-dialog-form section-dniUser-dialog-form"
                                >
                                    <TextField
                                        name={"dniUser"}
                                        onChange={(e: any) => handleChangeValueDialog("dniUser", e.target.value)}
                                        style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                        label="DNI / Cedula:"
                                        value={currentUserU?.dniUser}
                                    />
                                </FormControl>
                                <FormControl
                                    className="section-control-dialog-form section-passUser-dialog-form"
                                >

                                    <InputLabel style={{ margin: 5 }} htmlFor="outlined-adornment-password">
                                        {"Contraseña"}
                                    </InputLabel>
                                    <OutlinedInput

                                        name={"passUser"}
                                        onChange={(e: any) => handleChangeValueDialog("passUser", e.target.value)}
                                        style={{ flex: ("calc(50% - 1rem)"), margin: "0.3rem 0.3rem" }}
                                        label="Contraseña"
                                        id='outlined-adornment-password'
                                        value={currentUserU?.passUser}
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    >
                                    </OutlinedInput>
                                </FormControl>

                            </div>
                        </div>
                    </div>

                </DialogContent>
                <DialogActions>
                    <>
                        <Button onClick={onSaveUser}>
                            Guardar
                        </Button>
                        <Button onClick={onUndoEditUser}>
                            Deshacer
                        </Button>

                        <Button onClick={onNotSaveUser}>
                            Cancelar
                        </Button>
                        <Dialog open={openConfirmSave}>
                            <DialogTitle>
                                <h1>
                                    Cambios no guardados
                                </h1>
                            </DialogTitle>
                            <DialogContent>
                                <h2>
                                    ¿Desea guardar los cambios?
                                </h2>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={onNotSaveUserConfirm}>
                                    No
                                </Button>
                                <Button onClick={onSaveUserConfirm}>
                                    Si
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </>
                </DialogActions>
            </Dialog>
        </>
    )
}

