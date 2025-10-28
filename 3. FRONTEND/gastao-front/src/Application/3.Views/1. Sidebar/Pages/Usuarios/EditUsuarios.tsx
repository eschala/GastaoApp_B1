// EditUsuario.tsx (Versión Final con Refetch Manual)

import { useState, useEffect, useCallback } from "react"; // ⚠️ Añadido useEffect y useCallback
import { ListaRolDeUsuarios, type RolDeUsuario, type Usuario } from "../../../../DataContext/Usuarios/DataUsuarios";
import { Button, Modal } from "react-bootstrap";
import { FormUsuarios } from "./FormUsuarios";
import { UsuariosAPI } from "../../../../DataContext/APIs/GastaoAPIs";
import { ModalApiResponse } from "../../Modals/ModalApiResponse";

// Definición inicial de un usuario vacío para evitar repetición
const emptyUser: Usuario = {
  idUsuario: null,
  dniUsuario: null,
  nameUsuario: null,
  lastNameUsuario: null,
  emailUsuario: null,
  passUsuario: null,
  rolUsuarioId: null
};

export function EditUsuario() {
  const [inputVal, setInputVal] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuario[] | null>(null);
  const [userActive, setUserActive] = useState<Usuario | undefined>(undefined);
  const [userEditable, setUserEditable] = useState<Usuario>(emptyUser);

  // ⚠️ ESTADOS PARA GESTIONAR LA LISTA DE USUARIOS Y LA CARGA
  const [usuariosData, setUsuariosData] = useState<Usuario[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  // ----------------------------------------------------

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const [modalState, setModalState] = useState<{ show: boolean, title: string, msg: string, isBadRequest: boolean }>({
    show: false, title: "", msg: "", isBadRequest: false,
  });
  const handleCloseApiModal = () => setModalState({ ...modalState, show: false });

  // ⚠️ REEMPLAZAMOS ListaDeUsuarios() por una función de fetch
  const api = new UsuariosAPI();
  const getRolDeUsuarios = ListaRolDeUsuarios();
  const optionRolUsers = getRolDeUsuarios.data;


  // 1. FUNCIÓN DE FETCH REUTILIZABLE (EL NUEVO 'REFETCH')
  const refetchUsuarios = useCallback(async () => {
    setIsLoading(true);
    try {
      // Asumo que tu API tiene un endpoint GET para la lista de usuarios
      const response = await fetch(api.urlGet());
      if (!response.ok) throw new Error('Error al obtener la lista de usuarios');
      const data: Usuario[] = await response.json();
      setUsuariosData(data);
    } catch (error) {
      console.error("Fallo al recargar usuarios:", error);
      // Podrías mostrar un error en el modal si falla la recarga
    } finally {
      setIsLoading(false);
    }
  }, [modalState.show]); // Dependencia del objeto api

  // 2. EFECTO PARA CARGAR DATOS AL MONTAR EL COMPONENTE
  useEffect(() => {
    refetchUsuarios();
  }, [refetchUsuarios]);
  // ----------------------------------------------------


  // ... (seleccionarUsuario, handleChangeForm se mantienen igual)
  const seleccionarUsuario = (usuario: Usuario) => {
    setUserActive(usuario);
    setUserEditable(usuario);
    setShowModal(true);
    setInputVal('');
    setUsuariosFiltrados(null);
  };

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isNumericField = name === 'dniUsuario' || name === 'rolUsuarioId';
    const finalValue: string | number | null = isNumericField && value !== "" ? Number(value) : value;

    setUserEditable((prevData) => ({
      ...prevData,
      [name]: finalValue,
    }));
  }


  // 3. FUNCIÓN PARA ACTUALIZAR (PUT) - AHORA CON 'refetchUsuarios()'
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    handleCloseModal();
    /* 
      "egresos": [],
      "ingresos": [],
      "rolUsuario": null
    */
    const { 
      idUsuario, ...dataToSend } = userEditable;

    if (!idUsuario || !dataToSend.nameUsuario || !dataToSend.dniUsuario || !dataToSend.rolUsuarioId) {
      setModalState({
        show: true,
        title: "Error de Validación",
        msg: "Falta el ID de usuario o campos obligatorios (Nombre, DNI, Rol).",
        isBadRequest: true,
      });
      return;
    }

    const result = await api.doPut(idUsuario, userEditable);

    if (!result) {
      setModalState({
        show: true,
        title: "Error",
        msg: "No se recibió respuesta del servidor",
        isBadRequest: true,
      });
      return;
    }

    if (result.success) {
      setModalState({
        show: true,
        title: "Usuario Actualizado Exitosamente",
        msg: result.message,
        isBadRequest: false,
      });

      // 💡 LLAMADA AL NUEVO 'REFETCH'
      refetchUsuarios();

    } else {
      setModalState({
        show: true,
        title: "Fallo la Actualización de Usuario",
        msg: result.message,
        isBadRequest: true,
      });
    }
  }

  // 4. FUNCIÓN PARA FILTRAR - USA EL NUEVO ESTADO 'usuariosData'
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const inputValue = e.target.value;
    setInputVal(inputValue);

    if (!usuariosData) return;
    const filtroSanitizado = inputValue.trim().toLowerCase();

    if (filtroSanitizado === '') {
      setUsuariosFiltrados(null);
      return;
    }

    const resultados = usuariosData.filter(user => {
      const name = user.nameUsuario?.toLowerCase() || '';
      const dni = String(user.dniUsuario)?.toLowerCase() || '';
      const email = user.emailUsuario?.toLowerCase() || '';
      const lastName = user.lastNameUsuario?.toLowerCase() || '';
      return (
        name.includes(filtroSanitizado) ||
        dni.includes(filtroSanitizado) ||
        email.includes(filtroSanitizado) ||
        lastName.includes(filtroSanitizado)
      );
    });

    setUsuariosFiltrados(resultados);
  };

  // 5. RENDERING - Mostrar loading
  if (isLoading) {
    return <p>Cargando lista de usuarios...</p>;
  }

  return (
    // ... (resto del JSX se mantiene igual)
    <>
      {/* Formulario de Búsqueda */}
      <label htmlFor="inputValue">Buscar 🔍</label>
      <input name="inputValue" type="text" value={inputVal} onChange={handleChange} />
      <h1>{inputVal}</h1>
      <div className="resultados">
        <div className="d-flex justify-content-center align-content-center flex-wrap">
          {/* ... Mapeo de usuariosFiltrados ... */}
          {
            usuariosFiltrados?.length ? (
              usuariosFiltrados.map((usuario, index) => (
                <div className="m-2 p-2 bg-dark text-light form-resultados"
                  style={{ width: "22rem" }}
                  key={index}
                >
                  <h4>{usuario.nameUsuario} {usuario.lastNameUsuario}</h4>
                  <p>DNI: {usuario.dniUsuario}</p>
                  <p>Email: {usuario.emailUsuario}</p>
                  <Button
                    className="btn btn-primary m-3"
                    // 🚨 CORRECCIÓN: Agregar type="button" para evitar la recarga.
                    type="button"
                    onClick={() => seleccionarUsuario(usuario)}
                  >
                    ✏️ Editar
                  </Button>
                </div>
              ))
            ) : (
              <p>
                {inputVal === "" ?
                  "Ingresa un término de búsqueda para filtrar usuarios." :
                  "No se han encontrado resultados"
                }
              </p>
            )
          }
        </div>

        <div className="previsualizar-datos">
          <pre>{JSON.stringify(userActive, null, 2)}</pre>
          <pre>{JSON.stringify(userEditable, null, 2)}</pre>
        </div>
      </div>

      {/* Modal de Edición */}
      <div className="modal">
        {showModal && userEditable && (
          <ModalEditUsuario
            show={showModal}
            onClose={handleCloseModal}
            userDataModal={userEditable}
            handleChange={handleChangeForm}
            onUpdate={handleUpdate}
            optionRolUsers={optionRolUsers}
          />
        )}
      </div>

      {/* Modal de Respuesta de la API */}
      {modalState.show && (
        <ModalApiResponse
          title={modalState.title}
          msg={modalState.msg}
          isBadRequest={modalState.isBadRequest}
          onClose={handleCloseApiModal}
        />
      )}
    </>
  );
}

// ... (ModalEditUsuario permanece sin cambios)
interface ModalEditUsuarioProps {
  show: boolean;
  onClose: () => void;
  // ⚠️ Ahora onUpdate debe ser de tipo (e: React.FormEvent) => Promise<void> para el formulario
  onUpdate: (e: React.FormEvent) => Promise<void>;
  userDataModal: Usuario;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  optionRolUsers: RolDeUsuario[] | undefined;
}


// En ModalEditUsuario.tsx

export function ModalEditUsuario({
  show, onClose, onUpdate, userDataModal, handleChange, optionRolUsers
}: ModalEditUsuarioProps) {
  return (
    <Modal show={show} onHide={onClose} centered>
      {/* ... Modal.Header ... */}

      <Modal.Body>
        {/* 🚨 CORRECCIÓN: Envuelve FormUsuarios en un <form> con onSubmit */}
        <form onSubmit={onUpdate}>
          <div className="">
            <p className="m-3 p-2">
              ✏️ Editar Usuario: **{userDataModal.nameUsuario} {userDataModal.lastNameUsuario}**
            </p>
          </div>

          <FormUsuarios
            userData={userDataModal}
            handleChange={handleChange}
            inputId={false}
            rolUser={optionRolUsers}
          />

          {/* 🚨 MOVER LOS BOTONES AL Modal.Footer DE ABAJO o dejarlos aquí pero SIN el div.modal-footer */}
          {/* Si los dejas aquí, asegúrate de no tener un Modal.Footer vacío */}
          <div className="d-flex justify-content-end pt-3">
            <Button variant="secondary" onClick={onClose} type="button" className="me-2">
              Cancelar
            </Button>
            <Button variant="success" type="submit">
              💾 Guardar Cambios
            </Button>
          </div>
        </form>
        <div className="previsualizar datos">
          <pre>{JSON.stringify(userDataModal, null, 2)}</pre>
        </div>
      </Modal.Body>

      {/* ⚠️ Si dejas los botones dentro del <form> en Modal.Body, elimina el Modal.Footer */}
      {/* <Modal.Footer>
                 ...
            </Modal.Footer> */}

    </Modal>
  );
}