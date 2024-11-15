class ApiAzTbTipoUsers {

    /* 7190 */

    static api: string = "/api/AzTbTipoUsers"
    static port: number = 7190
    static localhost: string = "localhost"
    static host: string = "192.168.101.78"
    static Url: string = (`http://${this.host}:${this.port}${this.api}`)
    static UrlGetById = (id: number) => {
        return (this.Url + "/" + id)
    }
    GetUrl(Protocol: string | any | null, AddressIP: string, Port: string, ApiContext: string) {

        return (`${Protocol}://${AddressIP}:${Port}${ApiContext}`)

    }
}

export interface TipoUser {
    idTipoUser: number;
    tipoUser?: string | null;
}

/* let apiStr: string = "/api/ATbUsers" */

export function GetAzTbTipoUsers(): Promise<TipoUser[]> {
    let getAzTbTipoUsers = new ApiAzTbTipoUsers()

    let host: string = "192.168.101.78"
    let port: string = "5202"/* 7190 */
    let hd: string = "http"

    let apiUrl: string
    apiUrl = getAzTbTipoUsers.GetUrl(hd, host, port, ApiAzTbTipoUsers.api)
    // Asegúrate de especificar el tipo de retorno
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: any) => {
                const typeUser: TipoUser[] = data.map((type: any) => ({
                    idTipoUser: type.idTipoUser || 0, // Asegúrate de que sea un número
                    tipoUser: type.tipoUser || "",
                }));
                resolve(typeUser); // Resuelve la promesa con el array de tipos de usuario
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                reject(error); // Rechaza la promesa en caso de error
            });
    });
}
