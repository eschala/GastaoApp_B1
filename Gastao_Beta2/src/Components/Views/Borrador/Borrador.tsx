import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import UseFetchUsers, { User } from "../../../Data/FromApi/GetData_API_V2";

/* 
export interface User {
    idUser: number;
    dniUser: number;
    nameUser?: string | null;
    lastNameUser?: string | null;
    emailUser?: string | null;
    passUser?: string | null;
    tipoUserId: number;
}

*/

/* 
    const [Usuarios, setUsuarios] = useState<User[]>([]);
    const users = UseFetchUsers();

    ¿Cómo hago una funcionalidad en react + typescript que me permita hacer filtros de los datos asignados a "Usuarios" obtenido de "UseFetchUsers()"?
    NOTA: en los filtros quiero que no discrimine por Mayusculas o minusculas o tildes
*/
function Borrador() {

    const [Usuarios, setUsuarios] = useState<User[]>([]);

    const users = UseFetchUsers();
    useEffect(() => {
        setUsuarios(users)
        console.log("Probando")
        console.log("Usuarios", Usuarios)
    }/* , [] */);

    return (
        <div style={{ backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Typography variant="h2" gutterBottom>
                {"<Borrador/>"}
            </Typography>
            {Usuarios.map((U: User, i: number) => (
                <>
                    <div style={{ border: "1px solid blue", margin: "5px", padding: "15px" }}>
                        <Typography variant="h5" gutterBottom>
                            Usuario {i + 1}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
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

                    </div>
                </>

            )
            )}

        </div >
    );
}

export default Borrador;