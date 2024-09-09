
import { useState, useEffect } from "react";
import { ATbUsersAPI } from "./API/ApiUrl";

export interface User {
    idUser: number;
    tipoUserId?: number | null;
    nameUser?: string | null;
    lastNameUser?: string | null;
    dniUser?: number | null;
    emailUser?: string | null;
    passUser?: string | null;
}

export function GetATbUsers(AdminLogged: boolean | any) {
    const [ATbUsers, setATbUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(ATbUsersAPI.Url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
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
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [AdminLogged]);

    return ATbUsers;
}
