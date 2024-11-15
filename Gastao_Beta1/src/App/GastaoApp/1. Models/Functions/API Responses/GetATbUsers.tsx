
import { useState, useEffect } from "react";
import { API_Url } from "./API/ApiUrl";


/* export interface User {
    idUser: number;
    tipoUserId?: number | null;
    nameUser?: string | null;
    lastNameUser?: string | null;
    dniUser?: number | null;
    emailUser?: string | null;
    passUser?: string | null;
}
 */export interface User {
    idUser: number;
    dniUser: number | null;
    nameUser: string | null;
    lastNameUser: string | null;
    emailUser: string | null;
    passUser: string | null;
    tipoUserId: number | null;
}

let getUsers = new API_Url()



export function GetATbUsers(AdminLogged: boolean | any) {
    const host = "192.168.101.78"/*192.168.101.78"  */
    const port = "5202"/* 7190 */
    const hd = "http"
    const apiStr = "/api/ATbUsers"

    let UrlApiUsers: string = getUsers.GetUrl(hd, host, port, apiStr)

    /* let UrlApiUser: string = getUsers.GetUrlByID("http", "192.168.101.78", "7190", "/api/ATbUsers", 12) */

    const [ATbUsers, setATbUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorFetch, setErrorFetch] = useState<string | null>(null);
    console.log("UrlApiUsers", UrlApiUsers)
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
                        passUser: user.passUser || "",
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
                /* console.log(loading); */
            }
        };

        fetchUsers();
    }, [AdminLogged]);

    return ATbUsers;
}


