import { useState, useEffect } from 'react';
import axios from 'axios';

/* /api/AzTbTipoUsers */
/* IdTipoUser */
/* TipoUser */

export interface TipoUser {
    idTipoUser: number;
    tipoUser?: string | null;
}

let Https: string
let Hostname: string
let Port: string | number
let ApiName: string
let url: string

function UseFetchTipoUsers() {

    useEffect(() => {
        Https = "http"
        Hostname = "192.168.101.78"
        Port = "5000"
        ApiName = "/api/AzTbTipoUsers"
        url = `${Https}://${Hostname}:${Port}${ApiName}`
        console.log("url", url)
    }, [])

    const [tipoUsers, setTipoUsers] = useState<TipoUser[]>([]);

    useEffect(() => {
        const fetchTipoUsers = async () => {
            try {
                const response = await axios.get(url);
                setTipoUsers(response.data);
            } catch (error) {
                /* console.error('Error fetching users:', error); */
                console.log("No se logró nada HDP")
                console.log(":v")
                console.log(":v")
                console.log(":v")
                console.log(":v")
            }
        };

        fetchTipoUsers();
    }, []);

    return tipoUsers;
};

export default UseFetchTipoUsers;