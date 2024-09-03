class ApiATbUsers {
    /* https://localhost:7210/api/ATbUsers */
    /* 'http://localhost:5187/api/ATbUsers' */
    /* 5187 */
    /* 7210 */
    /* 5000 */

    static port: number = 7210
    static localhost: string = "localhost"
    static host: string = "192.168.101.78"
    static Url: string = (`https://${this.localhost}:${this.port}/api/ATbUsers`)
    static UrlGetById = (id: number) => {
        return (this.Url + "/" + id)
    }
}

import { useState, useEffect } from "react";

export interface User {
    idUser: number;
    tipoUserId: number | null;
    nameUser: string;
    lastNameUser: string;
    dniUser: number;
    emailUser: string;
    passUser: string;
}

export function GetATbUsers(props: any) {
    const [ATbUsers, setATbUsers] = useState<User[]>([]);

    useEffect(() => {

        fetch(ApiATbUsers.Url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {

                if (props.AdminLog == true) {
                    const users: User[] = data.map((user: any) => ({
                        idUser: user.idUser,
                        tipoUserId: user.tipoUserId,
                        nameUser: user.nameUser,
                        lastNameUser: user.lastNameUser,
                        dniUser: user.dniUser,
                        emailUser: user.emailUser,
                        passUser: user.passUser || "", // Asigna una cadena vacía si no hay contraseña
                    }));
                    setATbUsers(users);
                }
                else {
                    const users: User[] = data.map((user: any) => ({
                        idUser: user.idUser,
                        /* tipoUserId: user.tipoUserId, */
                        nameUser: user.nameUser,
                        lastNameUser: user.lastNameUser,
                        dniUser: user.dniUser,
                        emailUser: user.emailUser,
                        /* passUser: user.passUser || "",  */// Asigna una cadena vacía si no hay contraseña
                    }));
                    setATbUsers(users);
                }

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (ATbUsers);
}

/* export const dataATbUsers = GetATbUsers() */