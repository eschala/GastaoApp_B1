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
    static host: string = "192.168.101.77"
    static Url: string = (`https://${this.host}:${this.port}${this.api}`)
    static UrlGetById = (id: number) => {
        return (this.Url + "/" + id)
    }
    GetUrl(Protocol: string | null = "http", AddressIP: string, Port: string, ApiContext: string) {

        return (`${Protocol}://${AddressIP}:${Port}${ApiContext}`)

    }
}


export interface TipoUser {
    idTipoUser: number;
    tipoUser: string;
}
export function GetAzTbTipoUsers(): Promise<TipoUser[]> {
    let getAzTbTipoUsers = new ApiAzTbTipoUsers()

    let apiUrl: any
    apiUrl = getAzTbTipoUsers.GetUrl("http", "192.168.101.77", "7190", ApiAzTbTipoUsers.api)
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
