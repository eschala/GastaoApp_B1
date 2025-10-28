/* https://localhost:7212/api/nameContext */
/* Usuarios */
/* export interface Usuario {
    idUsuario: number|any;
    dniUsuario: number|any;
    nameUsuario: string|any;
    lastNameUsuario: string | any;
    emailUsuario: string | any;
    passUsuario: string|any;
    rolUsuarioId?: number|any;
} */
/* RolDeUsuarios */
/* export interface RolDeUsuario {
    idRolUsuario: number|any;
    rolDeUsuario1: string|any;
} */
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

export interface UsuarioToSend {
    dniUsuario: any;
    nameUsuario: any;
    lastNameUsuario: any;
    emailUsuario: any;
    passUsuario: any;
    rolUsuarioId?: any;
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
    /**
         * Realiza una solicitud POST para crear un usuario.
         * @param dataRequest Datos del usuario a enviar.
         * @returns Un objeto con 'success' y 'message' o 'error'.
    */
    async doPost(dataRequest: UsuarioToSend): Promise<{ success: boolean, message: string, data?: any }> {
        try {
            const response = await fetch(this.urlGet(), {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify(dataRequest)
            });

            if (!response.ok) {
                const errorData = await response.json();
                // Genera un mensaje de error claro para el componente que lo llama
                const errorMessage = `Error al crear el usuario: ${response.status} - ${errorData.title || JSON.stringify(errorData)}`;
                throw new Error(errorMessage);
            }

            const newUser = await response.json();

            // Retorna éxito y los datos del nuevo usuario
            return {
                success: true,
                message: `Usuario ${newUser.nameUsuario} creado con ID: ${newUser.idUsuario}`,
                data: newUser
            };

        } catch (error) {
            console.error("Hubo un error en la solicitud:", error);
            const errorMessage = error instanceof Error ? error.message : `Fallo la creación: ${String(error)}`;

            // Retorna el fallo
            return {
                success: false,
                message: errorMessage
            };
        }
    };
    /**
     * Realiza una solicitud PUT para actualizar un usuario.
     * @param id ID del usuario a actualizar.
     * @param dataRequest Datos actualizados del usuario.
     * @returns Un objeto con 'success' y 'message' o 'error'.
     */
   async doPut(id: number | string, data: any) {
    try {
        const response = await fetch(`${this.urlGetbyId(id)}`, {
            method: 'PUT',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // El controlador C# devuelve 204 No Content, que es response.ok = true.
            if (response.status === 204) {
                // No hay cuerpo para leer, retornamos éxito directamente.
                return { success: true, message: "Actualización exitosa", data: null };
            }

            // Si por alguna razón la API devuelve un código 2xx distinto de 204 con un cuerpo
            // (ej: un 200 Ok con el objeto actualizado), lo leemos.
            // Esta parte ahora es opcional/defensiva.
            const resultData = await response.json(); 
            return { success: true, message: "Actualización exitosa", data: resultData };

        } else {
            // Si response.ok es false (códigos 4xx, 5xx), manejamos el error.
            // Eliminamos los 'alert' que no son necesarios para el manejo de errores.
            const errorText = await response.text();
            let errorDetails = errorText;
            try {
                const errorJson = JSON.parse(errorText);
                // Si el cuerpo es JSON, buscamos un mensaje de error o usamos el título del problema.
                errorDetails = errorJson.message || errorJson.title || errorText;
            } catch (e) {
                // Si el errorText NO es JSON (como "No se encontró..."), usamos el texto plano.
            }

            console.error(`Error en PUT (Status ${response.status}): ${errorDetails}`);

            return { 
                success: false, 
                message: `Error al actualizar: ${errorDetails}`, 
                data: null 
            };
        }

    } catch (error) {
        console.error("Hubo un error en la solicitud PUT:", error);
        return { 
            success: false, 
            message: `Error de conexión o red: ${error instanceof Error ? error.message : String(error)}`, 
            data: null 
        };
    }
}

    /**
     * Realiza una solicitud DELETE para eliminar un usuario.
     * @param id ID del usuario a eliminar.
     * @returns Un objeto con 'success' y 'message' o 'error'.
     */
    async doDelete(id: number): Promise<{ success: boolean, message: string }> {
        try {
            const response = await fetch(this.urlGetbyId(id), {
                method: 'DELETE',
                headers: {
                    'accept': '*/*',
                },
            });

            if (response.status !== 204 && response.status !== 200) { // Esperar 204 No Content o 200 Ok
                // Si hay un error, intentar leer el cuerpo para un mensaje
                const errorBody = await response.text();
                const errorMessage = `Error al eliminar el usuario (Status: ${response.status}). Respuesta: ${errorBody.substring(0, 100)}...`;
                throw new Error(errorMessage);
            }

            return {
                success: true,
                message: `Usuario con ID: ${id} eliminado exitosamente.`
            };

        } catch (error) {
            console.error("Hubo un error en la solicitud DELETE:", error);
            const errorMessage = error instanceof Error ? error.message : `Fallo la eliminación: ${String(error)}`;
            return {
                success: false,
                message: errorMessage
            };
        }
    };
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