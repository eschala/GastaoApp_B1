export class GastaoAPI {

    static portDefault: number = 7190
    static portSecondarr: number = 7190
    static portTertiary: number = 7190
    static localhost: string = "localhost"
    static host: string = "192.168.101.78"

}

export class ATbUsersAPI {
    /* https://localhost:7190/api/ATbUsers */

    /* 7190 */
    static api: string = "/api/ATbUsers"

    static Url: string = (`https://${GastaoAPI.host}:${GastaoAPI.portDefault}${this.api}`)
    static UrlGetById = (id: number) => {
        return (this.Url + "/" + id)
    }
}
