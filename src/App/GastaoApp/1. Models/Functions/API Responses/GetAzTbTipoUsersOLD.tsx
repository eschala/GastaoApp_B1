class ApiAzTbTipoUsers {
    /* https://localhost:7190/api/AzTbTipoUsers */
    /* 'https://localhost:7190/api/AzTbTipoUsers' */
    /* https://localhost:7190/api/AzTbTipoUsers */
    /* 5187 */
    /* 7210 */
    /* 5000 */
    /* 5098 */
    /* 7190 */

    static api: string = "/api/AzTbTipoUsers"
    static port: number = 7190
    static localhost: string = "localhost"
    static host: string = "192.168.101.78"
    static Url: string = (`https://${this.host}:${this.port}${this.api}`)
    static UrlGetById = (id: number) => {
        return (this.Url + "/" + id)
    }
}


import { useState, useEffect } from "react";


export interface ITypeUser {
    idTipoUser: number;
    tipoUser: string;
}

export function GetAzTbTipoUsers() {
    const [AzTbTipoUsers, setAzTbTipoUsers] = useState<ITypeUser[]>([]);

    useEffect(() => {
        fetch(ApiAzTbTipoUsers.Url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: any) => {
                const typeUser: ITypeUser[] = data.map((type: any) => ({
                    idTipoUser: type.idTipoUser || 0, // Asignar un valor predeterminado
                    tipoUser: type.tipoUser || "",
                }));

                setAzTbTipoUsers(typeUser);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return AzTbTipoUsers;
}
