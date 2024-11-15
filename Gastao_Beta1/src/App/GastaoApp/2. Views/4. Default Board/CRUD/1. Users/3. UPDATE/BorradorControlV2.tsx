import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { User } from '../../../../../1. Models/Functions/API Responses/GetATbUsers';


interface InputControls {
    nameField: string; // Nombre del campo
    valorControl: any | number | string | null | undefined; // Valor actual del campo// Se define la función para manejar el cambio
    handleEvent: (e: any) => void;

}
// Manejador de cambios para los inputs
export const handleChange = (fieldName: string | any, fieldValue: string | number | any, dataContext: User | any) => {
    const [dataCurrent, setDataCurrent] = useState(dataContext)

    setDataCurrent({
        ...dataCurrent,
        [fieldName]: fieldValue,
    });
};

function NameControl({ nameField, valorControl, handleEvent }: InputControls) {
    return (
        <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
            <TextField
                name={nameField} // Usar el nombre del campo
                placeholder='Nombre'
                type='text'
                value={valorControl} // Valor controlado

                onChange={handleEvent}
                style={{}}
            />
        </FormControl>
    );
}
function LastNameControl({ nameField, valorControl, handleEvent }: InputControls) {
    return (
        <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
            <TextField
                name={nameField} // Usar el nombre del campo
                placeholder='Apellido'
                type='text'
                value={valorControl} // Valor controlado

                onChange={handleEvent}
                style={{}}
            />
        </FormControl>
    );
}
function DniControl({ nameField, valorControl, handleEvent }: InputControls) {
    return (
        <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
            <TextField
                name={nameField} // Usar el nombre del campo
                placeholder='DNI / Cedula'
                type='number'
                value={valorControl} // Valor controlado

                onChange={handleEvent}
                style={{}}
            />
        </FormControl>
    );
}

function EmailControl({ nameField, valorControl, handleEvent }: InputControls) {
    return (
        <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
            <TextField
                name={nameField} // Usar el nombre del campo
                placeholder='Correo'
                type='email'
                value={valorControl} // Valor controlado

                onChange={handleEvent}
                style={{}}
            />
        </FormControl>
    );
}


interface PasswordControlProps {
    getPass?: string | null | undefined | any | any;
    showPassword?: boolean | any;
    handleClickShowPassword: () => void;
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;

    nameField: string; // Nombre del campo
    valorControl: any | number | string | null | undefined; // Valor actual del campo// Se define la función para manejar el cambio
    handleEvent: (e: any) => void;
}

function PasswordControl({

    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    nameField,
    valorControl,
    handleEvent,
}: PasswordControlProps, /* { nameField, valorControl, handleEvent }: InputControls */) {

    return (
        <FormControl style={{ margin: 0, padding: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{""}</InputLabel>
            <OutlinedInput
                name={nameField}
                value={valorControl}
                onChange={handleEvent}
                sx={{}}
                type={showPassword ? 'text' : 'password'}
                placeholder='Contraseña'
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
                </InputAdornment>} />
        </FormControl>
    );
}
function SectionControl(props: any | undefined | null,) {
    return (
        <>
            <div className={props.className_} style={props.style_}>

            </div>
        </>
    )
}


export { NameControl, LastNameControl, DniControl, EmailControl, PasswordControl, SectionControl };
