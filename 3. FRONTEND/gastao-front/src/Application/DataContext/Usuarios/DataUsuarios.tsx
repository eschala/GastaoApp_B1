export class getDataUsuariosFromAPI {
    url: string = "http://localhost:5045/api/usuarios";
    id?: number | null | undefined;
    urlWithId: string;

    // El constructor recibe el id como parámetro
    constructor(id?: number | null | undefined) {
        this.id = id;
        this.urlWithId = `http://localhost:5045/api/Usuarios/${this.id}`;
    }

    // Si necesitas un método para actualizar el id después
    public setId(newId: number | null | undefined) {
        this.id = newId;
        this.urlWithId = `http://localhost:5045/api/Usuarios/${this.id}`;
    }
}

export interface Usuario {
    idUsuario: number;
    dniUsuario: number;
    nameUsuario: string;
    lastNameUsuario: string|any;
    emailUsuario: string|any;
    passUsuario: string;
    rolUsuarioId?: number;
}