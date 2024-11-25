import { useState, useEffect } from 'react';
import axios from 'axios';

/* /api/ATbUsers */

/* IdUser */
/* DniUser */
/* NameUser */
/* LastNameUser */
/* EmailUser */
/* PassUser */
/* TipoUserId */

export interface User {
    idUser: number;
    dniUser: number;
    nameUser?: string | null;
    lastNameUser?: string | null;
    emailUser?: string | null;
    passUser?: string | null;
    tipoUserId: number;
}

/* let GetUsersApi = new GetApi(); */


let Https: string
let Hostname: string
let Port: string | number
let ApiName: string
let url: string

function UseFetchUsers() {

    useEffect(() => {
        Https = "http"
        Hostname = "192.168.101.78"
        Port = "5000"
        ApiName = "/api/ATbUsers"
        url = `${Https}://${Hostname}:${Port}${ApiName}`
        /* console.log("url", url) */
    }, [])

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(url);
                setUsers(response.data);
            } catch (error) {
                /* console.error('Error fetching users:', error); */
                console.error("No se errorró nada HDP al buscar los Usuarios")
                console.error(":v")

            }
        };

        fetchUsers();
    }, []);

    return users;
};

export default UseFetchUsers;