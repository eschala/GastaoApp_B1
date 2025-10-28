import { useState } from "react";
import type { RolDeUsuario, Usuario } from "../../../../DataContext/Usuarios/DataUsuarios";
import { FormUsuarios } from "./FormUsuarios";
import { Button } from "react-bootstrap";
import { UsuariosAPI } from "../../../../DataContext/APIs/GastaoAPIs";
import { ModalApiResponse } from "../../Modals/ModalApiResponse";

export function CreateUsuario() {
  const [userData, setUserData] = useState<Usuario>({
    idUsuario: null,
    dniUsuario: null,
    nameUsuario: null,
    lastNameUsuario: null,
    emailUsuario: null,
    passUsuario: null,
    rolUsuarioId: null
  });
  const [rolUserData] = useState<RolDeUsuario>({
    idRolUsuario: null,
    rolDeUsuario1: null
  });

  // 1. NUEVO ESTADO PARA EL MODAL
  const [modalState, setModalState] = useState<{ show: boolean, title: string, msg: string, isBadRequest: boolean }>({
    show: false,
    title: "",
    msg: "",
    isBadRequest: false,
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

    const { idUsuario, ...dataToSend } = userData;
    if (!dataToSend.nameUsuario || !dataToSend.dniUsuario || !dataToSend.rolUsuarioId) {
      console.error("Faltan campos obligatorios.");
      setModalState({ // Mostrar modal de campos faltantes
        show: true,
        title: "Campos Faltantes",
        msg: "Por favor, completa todos los campos obligatorios.",
        isBadRequest: true,
      });
      return;
    }

    console.log("Cuerpo del Request (sin idUsuario):", dataToSend);

    // 2. USAR AWAIT EN LA LLAMADA A LA API
    const result = await api.doPost(dataToSend);

    // 3. ACTUALIZAR EL ESTADO DEL MODAL CON LA RESPUESTA
    if (result.success) {
      setModalState({
        show: true,
        title: "Usuario creado exitosamente",
        msg: result.message,
        isBadRequest: false,
      });
      // Opcional: limpiar el formulario
      setUserData({
        idUsuario: null, dniUsuario: null, nameUsuario: "",
        lastNameUsuario: "", emailUsuario: "", passUsuario: "",
        rolUsuarioId: null,
      });
    } else {
      setModalState({
        show: true,
        title: "Fallo la creación de Usuario",
        msg: result.message,
        isBadRequest: true,
      });
    }
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalState({ show: false, title: "", msg: "", isBadRequest: false });
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <h1>Create Usuario</h1>
      <p style={{ backgroundColor: "yellow" }}>Esta pagina es para crear el usuario.</p>

      <FormUsuarios
        userData={userData}
        rolUser={rolUserData}
        handleChange={handleChange}
        inputId={false}
      />

      <Button
        className="btn btn-warning mt-3"
        type="submit"
      >
        💾 Crear Usuario
      </Button>

      <h3 className="mt-4">Previsualización del estado</h3>
      <pre>{JSON.stringify(userData, null, 2)}</pre>

      {/* 4. RENDERIZAR EL MODAL SI 'show' ES TRUE */}
      {modalState.show && (
        <ModalApiResponse
          title={modalState.title}
          msg={modalState.msg}
          isBadRequest={modalState.isBadRequest}
          onClose={handleCloseModal} // Necesitarás añadir esta prop en ModalApiResponse
        />
      )}
    </form>
  );
}