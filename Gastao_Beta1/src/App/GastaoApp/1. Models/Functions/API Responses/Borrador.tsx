import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { GetATbUsers, User } from "./GetATbUsers";
import { useState } from "react";

const ClearConsole = () => console.clear();
export const NoneFunction = () => 0;
function UserComponentOnTestFind() {
    const [inputIdUserValue, setInputIdUserValue] = useState(0)
    let data: User[] = GetATbUsers(true)

    return (
        <div style={{
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "column",
            border: "1px solid white",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Buscar Usuario</h1>
            <div onClick={() => 0} className="" style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>

                <TextField style={{ flex: "100%" }} label="ID Usuario" name="idUser" type="number" value={inputIdUserValue} onChange={(e) => setInputIdUserValue(Number(e.target.value))} placeholder="Ingrese el ID de l usuario" />
                <Button id="buttonMas" onClick={() => setInputIdUserValue(inputIdUserValue + 1)} style={{ textAlign: "center", flex: "50%" }}> <h1>Más +</h1> </Button>
                <Button id="buttonMenos" onClick={() => setInputIdUserValue(inputIdUserValue - 1)} style={{ textAlign: "center", flex: "50%" }}> <h1>Menos -</h1> </Button>
            </div>
            <div onClick={() => 0} className="" style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>

                <h4 style={{ textAlign: "center", flex: "100%" }}>{"(Argumento/Expresión)"}</h4>
                <h4 style={{ textAlign: "center", flex: "50%" }}>{"(Resultado)"}</h4>
            </div>
            <Button variant="outlined" style={{ flex: "100%" }} onClick={() => 0}>Buscar</Button>
            <Button variant="outlined" style={{ flex: "100%" }} onClick={() => 0}>Mostrar Users</Button>
            <Button variant="outlined" style={{ flex: "100%" }} onClick={ClearConsole}>Limpiar LOG</Button>

            <div className="" style={{ width: "100%", border: "blue 1pt solid", display: "none", flexWrap: "wrap" }}>
                {data.map(m => <div className="" style={{ width: "100%", border: "yellow 1pt solid", flex: "30%", display: "flex", flexWrap: "wrap" }}>
                    <div className="" style={{ width: "100%", border: "white", flex: "30%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                        <p style={{ fontWeight: "bolder" }}> ID: {m.idUser + ""}</p>
                        <p>{""}</p>                        <p>{""}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}
export { UserComponentOnTestFind as FindUserByID }
/*¿ Cómo hago para buscar un registro por el campo "idUser" de "GetAtbusers(true)" que es una funcion que me retorna todos los registros de la tabla "ATbUsers" con la asignada por una interfaz en typescript como "User"? */