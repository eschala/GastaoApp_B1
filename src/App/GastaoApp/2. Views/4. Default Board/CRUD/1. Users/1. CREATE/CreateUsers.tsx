import * as React from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UserTypeControl } from '../TypeUsers/UserTypeControl';


/* import UserTypeControl from '../TypeUsers/UserTypeControl'; */


export const Tittle_ = (
    <h1 className="text-dark">
        {"<CreateUsers/>"}
    </h1>
);
export function CreateUsers() {


    return (<>
        <div style={{ border: "1px yellow solid", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }} >
            {/*             {Tittle_} */}
            <FormCreateUsers />
        </div >
    </>);
}


export function FormCreateUsers() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (

        <div className=""
            style={{
                minHeight: "300px",
                width: "500px",
                border: "1px aliceblue solid",
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                justifyItems: "center",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
            }}>
            <div className="" style={{ width: "100%", }}>
                <UserTypeControl />

            </div>
            <NameControl />
            <LastNameControl />
            <EmailControl />
            <DniControl />
            {PasswordControl(showPassword, handleClickShowPassword, handleMouseDownPassword, handleMouseUpPassword)}
        </div>

    )
}

function PasswordControl(showPassword: boolean, handleClickShowPassword: () => void, handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void, handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void) {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                sx={{ minWidth: "100px", }}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={<InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>}
                label="Contraseña" />
        </FormControl>
    )
}

function LastNameControl() {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>
            <TextField
                type='text'
                style={{}}
                helperText="" /* "Por favor escriba su apellido" */
                id="demo-helper-text-aligned"
                label="Apellido" />

        </FormControl>
    )
}

function NameControl() {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>

            <TextField
                type='text'
                style={{}}
                helperText="" /* "Por favor escriba su nombre" */
                id="demo-helper-text-aligned"
                label="Nombre" />
        </FormControl>
    )
}
function EmailControl() {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>

            <TextField
                type='email'
                style={{}}
                helperText="" /* "Por favor escriba su nombre" */
                id="demo-helper-text-aligned"
                label="Correo Electrónico" />
        </FormControl>
    )
}
function DniControl() {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>

            <TextField
                type='number'
                style={{}}
                helperText="" /* "Por favor escriba su nombre" */
                id="demo-helper-text-aligned"
                label="Cedula / DNI" />
        </FormControl>
    )
}

