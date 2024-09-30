
import { useState, useEffect } from "react";
import { API_Url } from "./API/ApiUrl";


export interface User {
    idUser: number;
    tipoUserId?: number | null;
    nameUser?: string | null;
    lastNameUser?: string | null;
    dniUser?: number | null;
    emailUser?: string | null;
    passUser?: string | null;
}

let getUsers = new API_Url()

export function GetATbUsers(AdminLogged: boolean | any) {
    let UrlApiUsers: string = getUsers.GetUrl("http", "192.168.101.77", "7190", "/api/ATbUsers")
    let UrlApiUser: string = getUsers.GetUrlByID("http", "192.168.101.77", "7190", "/api/ATbUsers", 12)

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
                        tipoUserId: user.tipoUserId,
                        nameUser: user.nameUser,
                        lastNameUser: user.lastNameUser,
                        dniUser: user.dniUser,
                        emailUser: user.emailUser,
                        passUser: user.passUser || "",
                    }));
                    setATbUsers(users);
                } else {
                    const users: User[] = data.map((user: any) => ({
                        idUser: user.idUser,
                        nameUser: user.nameUser,
                        lastNameUser: user.lastNameUser,
                        dniUser: user.dniUser,
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


