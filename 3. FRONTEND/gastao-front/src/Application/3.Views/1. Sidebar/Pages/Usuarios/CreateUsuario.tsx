import { useState } from "react";
import type { RolDeUsuario, Usuario } from "../../../../DataContext/Usuarios/DataUsuarios";
import { FormUsuarios } from "./FormUsuarios";
import { Button } from "react-bootstrap";
import { UsuariosAPI } from "../../../../DataContext/APIs/GastaoAPIs";
// Importar useMutation de @tanstack/react-query si se necesita manejo de estado de mutación


export function CreateUsuario() {

  // 1. Tipado de useState ajustado para permitir valores iniciales null/vacíos
  const [userData, setUserData] = useState<Usuario>({
    // idUsuario se inicializa como null y se omitirá en el POST
    idUsuario: null, 
    dniUsuario: null,
    nameUsuario: "",
    lastNameUsuario: "",
    emailUsuario: "",
    passUsuario: "",
    rolUsuarioId: null,
  });

  const [rolUserData] = useState<RolDeUsuario>({
    idRolUsuario: null,
    rolDeUsuario1: "",
  });

  const api = new UsuariosAPI();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Convertir a número si el campo es numérico (DNI o ID de Rol)
    const isNumericField = name === 'dniUsuario' || name === 'rolUsuarioId';
    const finalValue = isNumericField && value !== "" ? Number(value) : value;

    setUserData((prevData) => ({
      ...prevData,
      [name]: finalValue, 
    }));
  };

  /**
   * Función para preparar los datos y realizar la llamada POST a la API.
   * @param e Evento del formulario.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    
    // ⚠️ 1. Sanitizar el cuerpo del request: Creamos una copia de userData
    // y eliminamos la propiedad 'idUsuario'.
    const { idUsuario, ...dataToSend } = userData;

    // Opcional: Validación básica antes de enviar
    if (!dataToSend.nameUsuario || !dataToSend.dniUsuario || !dataToSend.rolUsuarioId) {
        console.error("Faltan campos obligatorios.");
        // Aquí se mostraría una notificación al usuario
        return;
    }
    
    console.log("Cuerpo del Request (sin idUsuario):", dataToSend);
    
    // 2. Realizar la llamada POST a la API
    try {
        const response = await fetch(api.urlGet(), { // api.urlGet() debe retornar https://localhost:7212/api/Usuarios
            method: 'POST',
            headers: {
                'accept': 'text/plain',
                // El tipo de contenido debe ser 'application/json' o 'application/json-patch+json'
                'Content-Type': 'application/json-patch+json', 
            },
            // 3. Convertir el objeto sanitizado a JSON para el cuerpo de la petición
            body: JSON.stringify(dataToSend) 
        });

        if (!response.ok) {
            // Manejar errores de la API (ej. 400 Bad Request, 500 Internal Server Error)
            const errorData = await response.json();
            throw new Error(`Error al crear el usuario: ${response.status} - ${errorData.title || JSON.stringify(errorData)}`);
        }

        const newUser = await response.json();
        console.log("Usuario creado exitosamente:", newUser);
        alert(`Usuario ${newUser.nameUsuario} creado con ID: ${newUser.idUsuario}`);
        
        // Opcional: Resetear el formulario o redirigir al usuario
        setUserData({
            idUsuario: null, dniUsuario: null, nameUsuario: "", 
            lastNameUsuario: "", emailUsuario: "", passUsuario: "", 
            rolUsuarioId: null, 
        });

    } catch (error) {
        console.error("Hubo un error en la solicitud:", error);
        if (error instanceof Error) {
            alert(`Fallo la creación: ${error.message}`);
        } else {
            alert(`Fallo la creación: ${String(error)}`);
        }
    }
  };


  return (
    // ⚠️ Usamos <form> y onSubmit para manejar el evento de envío
    <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <h1>Create Usuario</h1>
      <p style={{ backgroundColor: "yellow" }}>Esta pagina es para crear el usuario.</p>
      
      <FormUsuarios
        userData={userData}
        rolUser={rolUserData}
        handleChange={handleChange}
      />
      
      <Button 
        className="btn btn-warning mt-3" 
        type="submit" // ⚠️ Cambiado de onClick a type="submit" para que active el onSubmit del form
      >
        💾 Crear Usuario
      </Button>
      
      <h3 className="mt-4">Previsualización del estado</h3>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
      
    </form>
  );
}