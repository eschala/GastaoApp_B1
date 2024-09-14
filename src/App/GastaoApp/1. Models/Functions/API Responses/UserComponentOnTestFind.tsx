import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { GetATbUsers, User } from "./GetATbUsers";
import { useEffect, useState } from "react";

export const ClearConsole = () => console.clear();
export const NoneFunction = () => 0;

function UserComponentOnTestFind() {
    const [inputIdUserValue, setInputIdUserValue] = useState(0);
    const [userFound, setUserFound] = useState<User | undefined>(undefined);
    const data: User[] = GetATbUsers(true);

    useEffect(() => {
        searchUserById(inputIdUserValue)
    }, [inputIdUserValue])
    // Función para buscar el usuario por idUser
    const searchUserById = (id: number) => {
        const foundUser = data.find(user => user.idUser === id);
        setUserFound(foundUser);
    };


    return (
        <div style={{
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "column",
            border: "1px solid white",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>
                Buscar Usuario por <strong>ID</strong>
            </h1>
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                <TextField
                    style={{ flex: "100%" }}
                    label="ID Usuario"
                    name="idUser"
                    type="number"
                    value={inputIdUserValue}
                    onChange={(e) => setInputIdUserValue(Number(e.target.value))}
                    placeholder="Ingrese el ID del usuario"
                />
                <Button id="buttonMas" onClick={() => setInputIdUserValue(inputIdUserValue + 1)} style={{ textAlign: "center", flex: "50%" }}>
                    <h1>Más +</h1>
                </Button>
                <Button id="buttonMenos" onClick={() => setInputIdUserValue(inputIdUserValue - 1)} style={{ textAlign: "center", flex: "50%" }}>
                    <h1>Menos -</h1>
                </Button>
            </div>
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                <h1>Existe: {userFound?.idUser == null ? "NO" : "SI"}</h1>
            </div>
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                <Button variant="outlined" style={{ flex: 1 }} onClick={() => searchUserById(inputIdUserValue)}>Buscar</Button>
                <Button variant="outlined" style={{ flex: 1 }} onClick={() => console.log(data)}>Mostrar Users</Button>
                <Button variant="outlined" style={{ flex: 1 }} onClick={ClearConsole}>Limpiar LOG</Button>
            </div>
            {userFound && (
                <div style={{ width: "100%", border: "green 1pt solid", marginTop: "20px", padding: "10px" }}>
                    <h4>Usuario encontrado:</h4>
                    <p><strong>ID:</strong> {userFound.idUser}</p>
                    <p><strong>Nombre:</strong> {userFound.nameUser} {userFound.lastNameUser}</p>
                    <p><strong>Email:</strong> {userFound.emailUser}</p>
                    <p><strong>DNI:</strong> {userFound.dniUser}</p>
                </div>
            )}
            {userFound === undefined && inputIdUserValue > 0 && (
                <p style={{ color: "red" }}>Usuario no encontrado con ID: {inputIdUserValue}</p>
            )}
        </div>
    );
}

export { UserComponentOnTestFind as FindUserByID };
