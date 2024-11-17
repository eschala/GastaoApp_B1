import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ThemeProvider } from '@mui/material/styles';
import UseFetchUsers, { User } from "../../../Data/FromApi/GetData_API_V2";
import { darkTheme } from "../../Styles/ModeTheme";

export const normalizeString = (convertNormalString: string) => {
    return convertNormalString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function Borrador2() {

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

    const usersFiltered = usuarios.filter((Filtrando: User) =>
        (
            (Filtrando.idUser == usuarioFiltrar.idUser) && Filtrando.idUser == 0
        )
        &&
        (
            (Filtrando.dniUser == usuarioFiltrar.dniUser) && Filtrando.dniUser == 0
        )
        &&
        (
            (Filtrando.nameUser?.includes(normalizeString((usuarioFiltrar.nameUser) || ''))) || (Filtrando.nameUser == normalizeString((usuarioFiltrar.nameUser) || '')) && normalizeString(Filtrando.nameUser) !== ''
        )
        &&
        (
            (Filtrando.lastNameUser?.includes(normalizeString((usuarioFiltrar.lastNameUser) || ''))) || (Filtrando.lastNameUser == normalizeString((usuarioFiltrar.lastNameUser) || '')) && normalizeString(Filtrando.lastNameUser) !== ''
        )
        &&
        (
            (Filtrando.emailUser?.includes(normalizeString((usuarioFiltrar.emailUser) || ''))) || (Filtrando.emailUser == normalizeString((usuarioFiltrar.emailUser) || '')) && normalizeString(Filtrando.emailUser) !== ''
        )
        &&
        (
            (Filtrando.tipoUserId == usuarioFiltrar.tipoUserId) && Filtrando.tipoUserId == 0
        )
    )

    const setUsuarioFiltrarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const valor = name === "idUser" || name === "tipoUserId" || name === "dniUser" ? Number(value) : value;
        setUsuarioFiltrar({ ...usuarioFiltrar, [name]: valor });
        console.log("Test desde 'setUsuarioFiltrarOnChange' ")

    }

    const OnChangeInputText = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        setUsuarioFiltrarOnChange(e)

        console.log(e.target.value)
        console.log(e.target.name)
        console.log(e.target.type)
        console.log("usuarioFiltrar", usuarioFiltrar)
        console.log("usersFiltered", usersFiltered)
        console.log("usuariosFiltrados", usuariosFiltrados)

    }
    const onChangeInputRandomText = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        setRandomInputText(e.target.value);

    }
    const setRandomTextOnChange = () => {
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
        setRandomTextOnChange()

    }, [randomInputText])

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Box style={{ backgroundColor: "black" }}>

                    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        <Typography variant="h2" gutterBottom color="white">
                            {"Filtrar"}
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
                                /*                             onChange={(e: React.ChangeEvent<HTMLInputElement> | any) =>
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

                            </Box>
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

