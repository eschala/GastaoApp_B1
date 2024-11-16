export class GetApi {

    public Https: string = "http";
    public Hostname: string = "localhost";
    public Port: string | number = 5000;
    public ApiName: string = "/api/random";

    public url: string = `${this.Https}://${this.Hostname}:${this.Port}${this.ApiName}`

    getUrl(OtherHttps: string, OtherHostname: string, OtherPort: string | number, OtherApiName: string): string {
        return `${OtherHttps}://${OtherHostname}:${OtherPort}${OtherApiName}`;
    }
}
