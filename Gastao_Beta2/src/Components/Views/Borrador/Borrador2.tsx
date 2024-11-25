import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select /*, { SelectChangeEvent } */ from '@mui/material/Select';

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

let countUseEffect: number
countUseEffect = 0

let countRenderCp: number
countRenderCp = 0


function Borrador2() {
    countRenderCp++
    console.log("countRenderCp", countRenderCp)

    const [nuevoValorTipoIdU, setNuevoValorTipoIdU] = useState<number>(0);
    const [tipoUsuariosData, setTipoUsuariosData] = useState<TipoUser[]>([]);
    const [usuarios, setUsuarios] = useState<User[]>([]);
    const [usuariosFiltrados, setUsuariosFiltrados] = useState<User[]>([]);
    const tipoUsersData = UseFetchTipoUsers();
    const users = UseFetchUsers();

    useEffect(() => {

        setNuevoValorTipoIdU(0)


        setTipoUsuariosData(tipoUsersData);
        countUseEffect++
        console.log("countUseEffect", countUseEffect)
        if (countUseEffect <= 5) {

            setUsuariosFiltrados(users)

            setRandomText(`
                ${usuariosFiltrados.length > 1 ? "Total de registros " + usuariosFiltrados.length + "" : ""} 
            `)
        }

    });

    useEffect(() => {
        setUsuarios(users)

        console.log("Usuarios", usuarios)

    }/* , [] */);
    useEffect(() => {
        setUsuariosFiltrados(users)

        console.log("usuariosFiltrados", usuariosFiltrados)

    }, []);

    const [randomText, setRandomText] = useState<string>("")

    const [randomInputText, setRandomInputText] = useState<string>("")

    const [usuarioFiltrar, setUsuarioFiltrar] = useState<User>({
        idUser: 0,
        dniUser: 0,
        nameUser: "",
        lastNameUser: "",
        emailUser: "",
        passUser: "",
        tipoUserId: 0,
    });

    const filteredUsers = usuarios.filter((usuario: User) => {
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
        setUsuariosFiltrados(filteredUsers)

        if ((filteredUsers.length == 0 && randomInputText !== "")) {
            setRandomText("NO se ha encontrado ningun registro con ese nombre");
        }
        else {
            setRandomText(`
                        Se ha encontrado ${filteredUsers.length} ${filteredUsers.length > 1 ? "registros" : "registro"} 
                    `);
        }

        console.log("usuarioFiltrar", usuarioFiltrar)
        console.log("usersFiltered", filteredUsers)
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

            <Box style={{ backgroundColor: "black" }}>

                <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <>
                        <Typography variant="h4" gutterBottom color="white">
                            {"Filtrado especifico"}

                        </Typography>
                        <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "1rem", border: "1px solid white", margin: "5px", padding: "15px" }}>
                            <Typography variant="h5" color="white">
                                Usuario
                            </Typography>
                            <Typography variant="h6" color="white">
                                ID
                            </Typography>

                            <TextField type="number" id="filled-basic" label="DNI" variant="filled"
                                name="dniUser"
                                onChange={OnChangeInputText}
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
                                style={{ display: "none" }}
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
                            <Box>
                                <Button variant="outlined" onClick={() => console.clear()}>
                                    Limpiar Consola
                                </Button>
                            </Box>
                            {/* <TipoUsersTemplateSelectInputText ValueDefault={0} /> */}

                        </Box>

                        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                        <Box style={{ maxWidth: "800px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Box style={{ margin: "1rem" }}>

                                <TextField style={{ flex: 1 }} type="text" id="filled-basic" label="Filtrar" variant="filled"
                                    name="Filtrar"
                                    onChange={onChangeInputRandomText}
                                    value={randomInputText}
                                />
                            </Box>

                            <Typography variant="h6" color="white" style={{ margin: "0.5rem" }}>
                                Test {randomInputText}
                            </Typography>
                            <div className="" style={{ display: "flex", flex: "100%", textAlign: "center", width: "100%" }}>

                                <Typography variant="h6" color="white" style={{ margin: "1rem" }}>
                                    {randomText}
                                </Typography>
                            </div>

                        </Box>
                    </>
                </Box >

                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>

                    {usuariosFiltrados.map((U: User, i: number) => (
                        <>
                            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "1rem", border: "1px solid white", margin: "5px", padding: "15px" }}>
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
                                    style={{ display: "none" }}
                                />
                                <TipoUsersTemplateSelectInputText ValueDefault={U.tipoUserId} allowEdit={false} />
                            </Box>
                        </>
                    )
                    )}
                    <Box style={{ margin: "1rem", padding: "1rem" }}>

                        <Typography variant="h5" gutterBottom color="white">
                            N° Cambios Especificos: {countC1}
                        </Typography>
                        <Typography variant="h5" gutterBottom color="white">
                            N° Cambios Coincidencias: {countC2}
                        </Typography>
                        <Typography variant="h5" gutterBottom color="white">
                            N° Veces Filtrado: {countChangeFiltered}
                        </Typography>
                    </Box>

                </Box >

            </Box >

        </>
    );
}

export default Borrador2;
export interface TipoUsersTemplateSelectInputTextProps {
    ValueDefault: number;
    allowEdit: boolean;
}

export function TipoUsersTemplateSelectInputText(
    props: TipoUsersTemplateSelectInputTextProps,
) {
    const [nuevoValor, setNuevoValor] = useState<number>(props.ValueDefault);
    const [tipoUsuarios, setTipoUsuarios] = useState<TipoUser[]>([]);
    const tipoUsers = UseFetchTipoUsers();

    useEffect(() => {
        setTipoUsuarios(tipoUsers);
    }, [tipoUsers]);

    const handleChange = (e: OnChangeET) => {
        setNuevoValor(e.target.value as number); // Ensure type safety
    };
    useEffect(() => {
        if (props.allowEdit == false)
            setNuevoValor(props.ValueDefault)
    }, [props.ValueDefault])

    return (
        <FormControl variant="filled" sx={{ m: 1,/*  minWidth: 120  */ width: "100%" }}>
            <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
            {props.allowEdit === true ?
                <Select
                    name="tipoUserId"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={nuevoValor === 0 || nuevoValor === undefined ? null : nuevoValor}
                    onChange={(e: OnChangeET) =>
                        handleChange(e)
                    }
                >
                    {tipoUsuarios.map((t) => (
                        <MenuItem key={t.idTipoUser} value={t.idTipoUser}>
                            {t.tipoUser}
                        </MenuItem>
                    ))}
                </Select> :
                <Select
                    /* name="tipoUserId" */
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={props.ValueDefault}
                >
                    {tipoUsuarios.map((t) => (
                        <MenuItem key={t.idTipoUser} value={t.idTipoUser}>
                            {t.tipoUser}
                        </MenuItem>
                    ))}
                </Select>
            }
        </FormControl>
    );
}