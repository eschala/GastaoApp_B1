import { useState, useEffect } from "react";

/* export interface User {
    idUser: number;
    dniUser?: number;
    nameUser?: string | null;
    lastNameUser?: string | null;
    emailUser?: string | null;
    passUser?: string | null;
    tipoUserId?: number;
}
 */
/* let UrlApiUsers: string = `http://192.168.101.78:5202/api/ATbUsers` */
let UrlApiUsers: string = `http://localhost:5202/api/ATbUsers`

export function GetATbUsers(AdminLogged: boolean | any) {
    /* 
    const hd = "http"
    const host = "192.168.101.78"
    const port = 5202 
    const apiStr = "/api/ATbUsers"
    */

    console.log("UrlApiUsers")
    console.log(UrlApiUsers)
    /* let UrlApiUsers: string = http://192.168.101.78:5202/api/ATbUsers */
    /* http://192.168.101.78:5202/api/ATbUsers */
    /* let UrlApiUsers: string = `${hd}://${host}${port}${apiStr}` */


    const [ATbUsers, setATbUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorFetch, setErrorFetch] = useState<string | null>(null);
    useEffect(() => {
        () => {
            loading

        }
        const fetchUsers = async () => {
            try {
                const response = await fetch(UrlApiUsers);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (AdminLogged == true) {
                    const users: User[] = data.map((user: any) => ({
                        idUser: user.idUser,
                        dniUser: user.dniUser,
                        nameUser: user.nameUser,
                        lastNameUser: user.lastNameUser,
                        emailUser: user.emailUser,
                        passUser: user.passUser || null,
                        tipoUserId: user.tipoUserId,
                    }));
                    setATbUsers(users);
                } else {
                    const users: User[] = data.map((user: any) => ({
                        idUser: user.idUser,
                        dniUser: user.dniUser,
                        nameUser: user.nameUser,
                        lastNameUser: user.lastNameUser,
                        emailUser: user.emailUser,
                    }));
                    setATbUsers(users);
                }
            } catch (error) {

                setErrorFetch('Error fetching data');
                console.error(errorFetch, error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [AdminLogged]);

    return ATbUsers;
}


/* Me ayudas a realizar una peticion Get en typescript react a mi api "http://192.168.101.78:5202/api/ATbUsers " donde 
va a guardar una listas de registros de la tabla "ATbUser" con los campos:


    idUser (numero)

    dniUser (numero)
    nameUser (Varchar(255))
    lastNameUser (Varchar(255))
    emailUser (Varchar(255))
    passUser (Varchar(255))
    tipoUserId (numero)

    como hago que la peticion me guarde los datos en un variable para posteriormente poder usar esos datos segun lo que necesito
*/