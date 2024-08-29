/* TestApi.tsx */
/* import { useState, useEffect } from "react" */

/* ATbUsers */
/* setATbUsers */

/* Ejemplo de el primer registro que arrija la api en metodo GET
    "idUser": 1,
    "tipoUserId": null,
    "nameUser": "Eduar",
    "lastNameUser": "Chalá",
    "dniUser": 1000618284,
    "emailUser": "eduar.chala28@outlook.com",

    "idUser": 0,
    "tipoUserId": 0,
    "nameUser": "string",
    "lastNameUser": "string",
    "dniUser": 0,
    "emailUser": "string",
    "passUser": "string",

*/

/* Api: https://localhost:44318/api/ATbUsers Modelo de Usuarios de la tabla "ATbUsers" */

/* interface User {
    idUser: number;
    tipoUserId: number | null;
    nameUser: string;
    lastNameUser: string;
    dniUser: number;
    emailUser: string;
    passUser: string;
} */
/* 
export const TestApi = () => {
    const [ATbUsers, setATbUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://localhost:44318/api/ATbUsers')

            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setATbUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const Tabla_0 = (

        <table border={1} className="table w-100">
            <thead className="primary">
                <tr>

                    <th scope="col">ID</th>

                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Cedula / DNI</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {ATbUsers.map(user => (
                    <tr className="table" key={user.idUser}>
                        <td>{user.idUser}</td>

                        <td>{user.nameUser}</td>
                        <td>{user.lastNameUser}</td>
                        <td>{user.dniUser}</td>
                        <td>{user.emailUser}</td>
                        <input value={user.passUser} type="password" />
                    </tr>


                ))}
            </tbody>
        </table>
    );
    const Tabla_1 = (
        <div>
            <table border={1}>
                <thead>
                    <tr>

                        <th>idUser</th>
                        <th>tipoUserId</th>
                        <th>nameUser</th>
                        <th>lastNameUser</th>
                        <th>dniUser</th>
                        <th>emailUser</th>
                    </tr>
                </thead>
                <tbody>
                    {ATbUsers.map(user => (
                        <tr className="table" key={user.idUser}>
                            <td>{user.idUser}</td>
                            <td>{user.tipoUserId}</td>
                            <td>{user.nameUser}</td>
                            <td>{user.lastNameUser}</td>
                            <td>{user.dniUser}</td>
                            <td>{user.emailUser}</td>
                        </tr>


                    ))}
                </tbody>
            </table>
        </div>
    );
    return (
        Tabla_0
    );
}
 */