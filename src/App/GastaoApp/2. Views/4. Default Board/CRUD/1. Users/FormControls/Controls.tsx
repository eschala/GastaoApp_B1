import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export function NameControl(prop: any) {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>

            <TextField

                name='nameUser'
                placeholder='Nombre'
                type='text'
                value={prop.getName || null}

                style={{}}
                helperText="" /* "Por favor escriba su nombre" */
                /* id="demo-helper-text-aligned" */
                /* label="Nombre" */ />
        </FormControl>
    )
}
export function LastNameControl(prop: any) {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>
            <TextField

                name='lastNameUser'
                placeholder='Apellido'
                type='text'
                value={prop.getLastName || null}
                style={{}}
                helperText="" /* "Por favor escriba su apellido" */
                /* id="demo-helper-text-aligned" */
                /* label="Apellido" */ />

        </FormControl>
    )
}

export function DniControl(prop: any) {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>

            <TextField

                name='dniUser'
                placeholder='DNI / Cedula'
                type='number'
                value={prop.getCedula || null}
                style={{}}
                helperText="" /* "Por favor escriba su nombre" */
                /* id="demo-helper-text-aligned" */
                /* label="Cedula / DNI" */ />
        </FormControl>
    )
}
export function EmailControl(prop: any) {
    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }}>

            <TextField

                name='emailUser'
                placeholder='Correo'
                type='email'
                value={prop.getEmail || null}
                style={{}}
                helperText="" /* "Por favor escriba su nombre" */
                /* id="demo-helper-text-aligned" */
                /* label="Correo Electrónico" */ />
        </FormControl>
    )
}

interface PasswordControlProps {
    getPass?: string | any;
    showPassword?: boolean | any;
    handleClickShowPassword: () => void;
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PasswordControl: React.FC<PasswordControlProps> = ({
    getPass,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
}) => {
    const p: string = "";

    return (
        <FormControl sx={{ m: 0, p: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{p}</InputLabel>
            <OutlinedInput
                name='passUser'
                value={getPass}
                sx={{ minWidth: "100px" }}
                type={showPassword ? 'text' : 'password'}
                placeholder='Contraseña'
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