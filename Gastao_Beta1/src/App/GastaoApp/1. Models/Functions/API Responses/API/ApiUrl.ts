export class API_Url {
    GetUrl(Protocol: string | any | null, AddressIP: string, Port: string, ApiContext: string) {

        return (`${Protocol}://${AddressIP}:${Port}${ApiContext}`)

    }
    GetUrlByID(Protocol: string | any | null, AddressIP: string, Port: string, ApiContext: string, id: null | undefined | any | number | string) {

        return (`${Protocol}://${AddressIP}:${Port}${ApiContext}/${id}`)
    }
}
export class GastaoAPI {

    static portDefault: number = 7190
    static portSecondarr: number = 7190
    static portTertiary: number = 7190
    static localhost: string = "localhost"
    static host: string = "192.168.101.77"
    /* static host: string = "192.168.101.78" */

}

export class ATbUsersAPI {
    /* https://localhost:7190/api/ATbUsers */

    /* 7190 */
    static api: string = "/api/ATbUsers"

    static Url: string = (`https://${GastaoAPI.localhost}:${GastaoAPI.portDefault}${this.api}`)
    static Url2: string = (`https://${GastaoAPI.host}:${GastaoAPI.portDefault}${this.api}`)

    static Url3: string = (`https://${GastaoAPI.localhost}:${GastaoAPI.portSecondarr}${this.api}`)
    static Url4: string = (`https://${GastaoAPI.localhost}:${GastaoAPI.portTertiary}${this.api}`)

    static UrlGetById = (id: number) => {
        return (this.Url + "/" + id)
    }


}
