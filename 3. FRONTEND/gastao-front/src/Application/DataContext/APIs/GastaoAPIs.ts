/* https://localhost:7212/api/Egresos */
/* Usuarios */
/* RolDeUsuarios */
/* Egresos */
/* TypeEgresos */
/* Ingresos */
/* TypeIngresos */
export class globalAPI {

    host: any = 'https://localhost';
    port: number = 7212;
    getBaseUrl(): string {
        return `${this.host}:${this.port}`;
    }
}


export class UsuariosAPI {
    /* https://localhost:7212/api/Usuarios */

    API: any = new globalAPI();
    host = this.API.getBaseUrl();
    apiRoute = "api/Usuarios";

    urlGet() {
        return (`${this.host}/${this.apiRoute}`)
    }
    urlGetbyId(id: number | any) {
        return (`${this.host}/${this.apiRoute}/${id}`)
    }
}
export class RolDeUsuariosAPI {
    /* https://localhost:7212/api/RolDeUsuarios */

    API: any = new globalAPI();
    host = this.API.getBaseUrl();
    apiRoute = "api/RolDeUsuarios";

    urlGet() {
        return (`${this.host}/${this.apiRoute}`)
    }
    urlGetbyId(id: number | any) {
        return (`${this.host}/${this.apiRoute}/${id}`)
    }
}

export class EgresosAPI {
    /* https://localhost:7212/api/Egresos */

    API: any = new globalAPI();
    host = this.API.getBaseUrl();
    apiRoute = "api/Egresos";

    urlGet() {
        return (`${this.host}/${this.apiRoute}`)
    }
    urlGetbyId(id: number | any) {
        return (`${this.host}/${this.apiRoute}/${id}`)
    }
} export class TypeEgresosAPI {
    /* https://localhost:7212/api/TypeEgresos */

    API: any = new globalAPI();
    host = this.API.getBaseUrl();
    apiRoute = "api/TypeEgresos";

    urlGet() {
        return (`${this.host}/${this.apiRoute}`)
    }
    urlGetbyId(id: number | any) {
        return (`${this.host}/${this.apiRoute}/${id}`)
    }
} export class IngresosAPI {
    /* https://localhost:7212/api/Ingresos */

    API: any = new globalAPI();
    host = this.API.getBaseUrl();
    apiRoute = "api/Ingresos";

    urlGet() {
        return (`${this.host}/${this.apiRoute}`)
    }
    urlGetbyId(id: number | any) {
        return (`${this.host}/${this.apiRoute}/${id}`)
    }
} export class TypeIngresosAPI {
    /* https://localhost:7212/api/TypeIngresos */

    API: any = new globalAPI();
    host = this.API.getBaseUrl();
    apiRoute = "api/TypeIngresos";

    urlGet() {
        return (`${this.host}/${this.apiRoute}`)
    }
    urlGetbyId(id: number | any) {
        return (`${this.host}/${this.apiRoute}/${id}`)
    }
}