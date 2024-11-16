import { useEffect, useState } from "react";

import UseFetchUsers, { User } from "../Data/FromApi/GetData_API_V2";

function Home() { // Specify prop type

    const [Usuarios, setUsuarios] = useState<User[]>([]);
    const users = UseFetchUsers();
    useEffect(() => {
        setUsuarios(users)
        console.log("Probando")
        console.log("Usuarios", Usuarios)
    }/* , [] */); // Update on AdminLogged prop change

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2>{"</Home>"}</h2>
            {Usuarios.map((U: User, i: number) => (
                <>
                    <div style={{ border: "1px solid white", margin: "5px", padding: "15px" }}>

                        <h1>Usuario {i + 1}</h1>
                        <h2>ID {U.idUser}</h2>
                        <h3>
                            DNI: {U.dniUser} <br />
                            Nombre: {U.nameUser} <br />
                            Apellido: {U.lastNameUser} <br />
                            Correo: {U.emailUser} <br />
                            Clave: {U.passUser} <br />
                        </h3>
                    </div>
                </>

            )
            )}

        </div >
    );
}

export default Home;