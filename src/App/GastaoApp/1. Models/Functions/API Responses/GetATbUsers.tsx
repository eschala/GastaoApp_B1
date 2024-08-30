class ApiATbUsers {

    static Url: string = "https://localhost:44318/api/ATbUsers"
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

export function GetATbUsers() {
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
                // Mapea los datos a la estructura del modelo User
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
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (ATbUsers);
}

/* export const dataATbUsers = GetATbUsers() */