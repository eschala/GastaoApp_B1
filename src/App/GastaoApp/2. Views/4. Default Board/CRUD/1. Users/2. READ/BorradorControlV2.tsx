import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function NameControl({ initialName }: { initialName: string | null | undefined | any }) {
    const [name, setName] = useState(initialName || '');

    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>
            <TextField
                name='nameUser'
                placeholder='Nombre'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{}}
                helperText=""
            />
        </FormControl>
    );
}

function LastNameControl({ initialLastName }: { initialLastName: string | null | undefined | any }) {
    const [lastName, setLastName] = useState(initialLastName || '');

    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>
            <TextField
                name='lastNameUser'
                placeholder='Apellido'
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{}}
                helperText=""
            />
        </FormControl>
    );
}

function DniControl({ initialDNI }: { initialDNI: number | null | undefined | any }) {
    const [dni, setDni] = useState(initialDNI || 0);

    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>
            <TextField
                name='dniUser'
                placeholder='DNI / Cedula'
                type='number'
                value={dni}
                onChange={(e) => setDni(Number(e.target.value))}
                style={{}}
                helperText=""
            />
        </FormControl>
    );
}

function EmailControl({ initialEmail }: { initialEmail: string | null | undefined | any }) {
    const [email, setEmail] = useState(initialEmail || '');

    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>
            <TextField
                name='emailUser'
                placeholder='Correo'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{}}
                helperText=""
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
}

const PasswordControl: React.FC<PasswordControlProps> = ({
    getPass,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
}) => {
    const [pass, setPass] = useState(getPass || '');

    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
            <OutlinedInput
                name='passUser'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export { NameControl, LastNameControl, DniControl, EmailControl, PasswordControl };