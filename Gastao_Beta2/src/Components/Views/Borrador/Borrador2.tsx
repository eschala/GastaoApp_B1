import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme } from "../../Styles/ModeTheme";
import UseFetchUsers, { User } from "../../../Data/FromApi/GetATbUsers";
import UseFetchTipoUsers, { TipoUser } from "../../../Data/FromApi/GetAzTbTipoUsers";
import { OnChangeET } from "../../Types/GeneralTypes";



export const normalizeString = (convertNormalString: string) => {
    return convertNormalString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
let countC1: number
countC1 = 0

let countC2: number
countC2 = 0

let countChangeFiltered: number
countChangeFiltered = 0

function Borrador2() {

    const [nuevoValorTipoIdU, setNuevoValorTipoIdU] = useState<number>(0);
    const [tipoUsuariosData, setTipoUsuariosData] = useState<TipoUser[]>([]);
    const tipoUsersData = UseFetchTipoUsers();

    useEffect(() => {
        setTipoUsuariosData(tipoUsersData);
    }, [tipoUsersData]);

    const [randomText, setRandomText] = useState<string>("")

    const [randomInputText, setRandomInputText] = useState<string>("")

    const [usuarios, setUsuarios] = useState<User[]>([]);

    const [usuariosFiltrados, setUsuariosFiltrados] = useState<User[]>([]);

    const users = UseFetchUsers(); // Suponiendo que tienes una función UseFetchUsers()

    const [usuarioFiltrar, setUsuarioFiltrar] = useState<User>({
        idUser: 0,
        dniUser: 0,
        nameUser: "",
        lastNameUser: "",
        emailUser: "",
        passUser: "",
        tipoUserId: 0,
    });

    useEffect(() => {
        setUsuarios(users)
        console.log("Probando")
        console.log("Usuarios", usuarios)

    }/* , [] */);
    const usersFiltered = usuarios.filter((usuario: User) => {
        return (
            (usuarioFiltrar.idUser === 0 || usuario.idUser === usuarioFiltrar.idUser) &&
            (usuarioFiltrar.dniUser === 0 || usuario.dniUser === usuarioFiltrar.dniUser) &&
            (usuarioFiltrar.nameUser === "" ||
                normalizeString(usuario.nameUser || '').toLowerCase().includes(
                    normalizeString(usuarioFiltrar.nameUser || '').toLowerCase()
                )) &&
            (usuarioFiltrar.lastNameUser === "" ||
                normalizeString(usuario.lastNameUser || '').toLowerCase().includes(
                    normalizeString(usuarioFiltrar.lastNameUser || '').toLowerCase()
                )) &&
            (usuarioFiltrar.emailUser === "" ||
                normalizeString(usuario.emailUser || '').toLowerCase().includes(
                    normalizeString(usuarioFiltrar.emailUser || '').toLowerCase()
                )) &&
            (usuarioFiltrar.tipoUserId === 0 || usuario.tipoUserId === usuarioFiltrar.tipoUserId)
        );
    });

    const normalizedInput = normalizeString(randomInputText);

    const foundUsers = usuarios.filter(user => {
        const normalizedName = normalizeString(user.nameUser || '');
        const normalizedLastName = normalizeString(user.lastNameUser || '');
        const normalizedEmail = normalizeString(user.emailUser || '');
        const normalizedDni = normalizeString(user.dniUser?.toString() || '');
        const normalizedId = normalizeString(user.idUser?.toString() || '');

        return (
            normalizedName.includes(normalizedInput) ||
            normalizedLastName.includes(normalizedInput) ||
            normalizedEmail.includes(normalizedInput) ||
            normalizedDni.includes(normalizedInput) ||
            normalizedId.includes(normalizedInput)
        );
    });

    const setUsuarioFiltrarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const valor = name === "idUser" || name === "tipoUserId" || name === "dniUser" ? Number(value) : value;
        setUsuarioFiltrar({ ...usuarioFiltrar, [name]: valor });
        console.log("Test desde 'setUsuarioFiltrarOnChange' ");

    };
    const OnChangeInputText = (e: OnChangeET) => {
        setUsuarioFiltrarOnChange(e)
        countC1++
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(e.target.type)
    }
    const OnChangeSelectInputText = (e: OnChangeET) => {
        setNuevoValorTipoIdU(e.target.value as number)
        setUsuarioFiltrarOnChange(e)

        countC1++
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(e.target.type)
    }
    const onChangeInputRandomText = (e: OnChangeET) => {
        setRandomInputText(e.target.value);
        countC2++
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(e.target.type)
    }
    const setTextOnChange = () => {
        setUsuariosFiltrados(users)
        setUsuariosFiltrados(usersFiltered)

        if ((usersFiltered.length == 0 && randomInputText !== "")) {
            setRandomText("NO se ha encontrado ningun registro con ese nombre");
        }
        else {
            setRandomText(`
                        Se ha encontrado ${usersFiltered.length} ${usersFiltered.length > 1 ? "registros" : "registro"} 
                    `);
        }

        console.log("usuarioFiltrar", usuarioFiltrar)
        console.log("usersFiltered", usersFiltered)
        console.log("usuariosFiltrados", usuariosFiltrados)
    }

    const setRandomTextOnChange = () => {

        setUsuariosFiltrados(users)
        setUsuariosFiltrados(foundUsers)

        if ((foundUsers.length == 0 && randomInputText !== "")) {
            setRandomText("NO se ha encontrado ningun registro con ese nombre");
        }
        else {
            setRandomText(`
                Se ha encontrado ${foundUsers.length} ${foundUsers.length > 1 ? "registros" : "registro"} 
            `);
        }
    };

    useEffect(() => {
        countChangeFiltered++
    }, [usuariosFiltrados])

    useEffect(() => {
        setTextOnChange()

    }, [countC1])

    useEffect(() => {

        setRandomTextOnChange()
    }, [countC2])

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Box style={{ backgroundColor: "black" }}>

                    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        <Typography variant="h2" gutterBottom color="white">
                            {"Filtrar"}

                        </Typography>
                        <Typography variant="h5" gutterBottom color="white">
                            N° Cambios Especificos: {countC1}
                        </Typography>
                        <Typography variant="h5" gutterBottom color="white">
                            N° Cambios Coincidencias: {countC2}
                        </Typography>
                        <Typography variant="h5" gutterBottom color="white">
                            N° Veces Filtrado: {countChangeFiltered}
                        </Typography>

                        <>
                            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid white", margin: "5px", padding: "15px" }}>
                                <Typography variant="h5" color="white">
                                    Usuario
                                </Typography>
                                <Typography variant="h6" color="white">
                                    ID
                                </Typography>

                                <TextField type="number" id="filled-basic" label="DNI" variant="filled"
                                    name="dniUser"
                                    onChange={OnChangeInputText}
                                /* onChange={setUsuarioFiltrarOnChange} */
                                /*                             onChange={(e: OnChangeET) =>
                                                                AlCambiarTextoEnInput(e)} */

                                />
                                <TextField type="text" id="filled-basic" label="Nombre" variant="filled"
                                    name="nameUser"
                                    onChange={OnChangeInputText}
                                /* onChange={setUsuarioFiltrarOnChange} */

                                />
                                <TextField type="text" id="filled-basic" label="Apellido" variant="filled"
                                    name="lastNameUser"
                                    onChange={OnChangeInputText}
                                /* onChange={setUsuarioFiltrarOnChange} */

                                />
                                <TextField type="text" id="filled-basic" label="Email" variant="filled"
                                    name="emailUser"
                                    onChange={OnChangeInputText}
                                /* onChange={setUsuarioFiltrarOnChange} */

                                />

                                <TextField type="number" id="filled-basic" label="Rol" variant="filled"
                                    name="tipoUserId"
                                    onChange={OnChangeInputText}
                                /* onChange={setUsuarioFiltrarOnChange} */

                                />
                                <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
                                    <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
                                    <Select
                                        name="tipoUserId"
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"

                                        onChange={OnChangeSelectInputText}
                                    >
                                        <MenuItem value={0}>
                                            (Elegir)
                                        </MenuItem>
                                        {tipoUsuariosData.map((t) => (
                                            <MenuItem key={t.idTipoUser} value={t.idTipoUser}>
                                                {t.tipoUser}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {/* <TipoUsersTemplateSelectInputText ValueDefault={0} /> */}

                            </Box>

                            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                            <Box style={{ maxWidth: "800px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <TextField style={{ minWidth: "500px" }} type="text" id="filled-basic" label="Filtrar" variant="filled"
                                    name="Random"
                                    onChange={onChangeInputRandomText}
                                    value={randomInputText}
                                />

                                <Typography variant="h6" color="white">
                                    Test {randomInputText}
                                </Typography>
                                <div className="" style={{ display: "flex", flex: "100%", textAlign: "center", width: "100%" }}>

                                    <Typography variant="h3" color="white">
                                        {randomText}
                                    </Typography>
                                </div>
                                <button onClick={OnChangeInputText} style={{ display: "none" }}>
                                    Click
                                </button>
                            </Box>
                        </>
                    </Box >

                    <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        {usuariosFiltrados.map((U: User, i: number) => (
                            <>
                                <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid white", margin: "5px", padding: "15px" }}>
                                    <Typography variant="h5" color="white">
                                        Usuario {i + 1}
                                    </Typography>
                                    <Typography variant="h6" color="white">
                                        ID {U.idUser}
                                    </Typography>

                                    <TextField id="filled-basic" label="DNI" variant="filled"
                                        value={U.dniUser}
                                    />
                                    <TextField id="filled-basic" label="Nombre" variant="filled"
                                        value={U.nameUser}
                                    />
                                    <TextField id="filled-basic" label="Apellido" variant="filled"
                                        value={U.lastNameUser}
                                    />
                                    <TextField id="filled-basic" label="Email" variant="filled"
                                        value={U.emailUser}
                                    />
                                    <TextField id="filled-basic" label="Contraseña" variant="filled" type="password"
                                        value={U.passUser}
                                    />
                                    <TextField id="filled-basic" label="Rol" variant="filled"
                                        value={U.tipoUserId}
                                    />

                                </Box>
                            </>
                        )
                        )}

                    </Box >

                </Box>
            </ThemeProvider >
        </>
    );
}

export default Borrador2;

export function TipoUsersTemplateSelectInputText(ValueDefault: number | any,) {
    const [nuevoValor, setNuevoValor] = useState<number>(ValueDefault);
    const [tipoUsuarios, setTipoUsuarios] = useState<TipoUser[]>([]);
    const tipoUsers = UseFetchTipoUsers();

    useEffect(() => {
        setTipoUsuarios(tipoUsers);
    }, [tipoUsers]);

    const handleChange = (e: OnChangeET) => {
        setNuevoValor(e.target.value as number); // Ensure type safety
    };

    return (
        <FormControl variant="filled" sx={{ m: 1,/*  minWidth: 120  */ width: "100%" }}>
            <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
            <Select
                name="tipoUserId"
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={nuevoValor === 0 || nuevoValor === undefined ? null : nuevoValor}
                onChange={(e: OnChangeET) => handleChange(e)}
            >
                {tipoUsuarios.map((t) => (
                    <MenuItem key={t.idTipoUser} value={t.idTipoUser}>
                        {t.tipoUser}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
