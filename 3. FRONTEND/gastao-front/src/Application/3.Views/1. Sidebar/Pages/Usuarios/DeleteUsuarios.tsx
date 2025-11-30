// DeleteUsuario.tsx (Versión Adecuada para Eliminación)

import { useState, useEffect, useCallback, } from "react";

import { Button, Modal } from "react-bootstrap";
// import { FormUsuarios } from "./FormUsuarios"; // ⚠️ Ya no se usa
import { UsuariosAPI } from "../../../../DataContext/APIs/GastaoAPIs";
import { ModalApiResponse } from "../../Modals/ModalApiResponse";
import type { Usuario } from "../../../../DataContext/Usuarios/DataUsuarios";

// Definición inicial de un usuario vacío
const emptyUser: Usuario = {
  idUsuario: null,
  dniUsuario: null,
  nameUsuario: null,
  lastNameUsuario: null,
  emailUsuario: null,
  passUsuario: null,
  rolUsuarioId: null
};
const STORAGE_KEY = 'miValorDeInput';
export function DeleteUsuario() {
  const [inputValueStorage, setInputValueStorage] = useState<string>(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return storedValue !== null ? storedValue : '';
  });

  // 2. Usa useEffect para guardar el valor en localStorage
  // cada vez que 'inputValue' cambie.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, inputValueStorage);
  }, [inputValueStorage]);


  const [inputVal, setInputVal] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuario[] | null>(null);
  const [userActive, setUserActive] = useState<Usuario | undefined>(undefined);
  const [userToDelete, setUserToDelete] = useState<Usuario>(emptyUser); // ⚠️ Renombrado a userToDelete

  // ESTADOS PARA GESTIONAR LA LISTA DE USUARIOS Y LA CARGA
  const [usuariosData, setUsuariosData] = useState<Usuario[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [countState, setCountState] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const [modalState, setModalState] = useState<{ show: boolean, title: string, msg: string, isBadRequest: boolean }>({
    show: false, title: "", msg: "", isBadRequest: false,
  });
  const handleCloseApiModal = () => setModalState({ ...modalState, show: false });

  const api = new UsuariosAPI();
  const refetchUsuarios = useCallback(async () => {
    setIsLoading(true);
    try {
      // Asegúrate de que api se pase correctamente o esté en el scope
      const response = await fetch(api.urlGet());
      if (!response.ok) throw new Error('Error al obtener la lista de usuarios');
      const data = await response.json();
      setUsuariosData(data);
    } catch (error) {
      console.error("Fallo al recargar usuarios:", error);
    } finally {
      setIsLoading(false);
    }
  }, [api, setIsLoading, setUsuariosData]); // **IMPORTANTE: Incluir todas las dependencias externas (incluyendo setters de estado)**

  useEffect(() => {
    refetchUsuarios();
    resetearUsuario;
    setCountState(countState + 1)
    onReFetch;
  }, [modalState.show]/*  [api, refetchUsuarios] */);
  // FUNCIÓN PARA SELECCIONAR Y ABRIR MODAL
  const seleccionarUsuario = (usuario: Usuario) => {
    setUserActive(usuario);
    setUserToDelete(usuario); // ⚠️ Usamos userToDelete
    setShowModal(true);
    /*     setInputVal('');
        setUsuariosFiltrados(null); */
  };
  const resetearUsuario = () => {
    setUserActive(emptyUser);
    setUserToDelete(emptyUser);
  }

  // 3. FUNCIÓN PARA ELIMINAR (DELETE) - SIMPLIFICADA
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    handleCloseModal();

    const idUsuario = userToDelete.idUsuario;

    if (!idUsuario) {
      setModalState({
        show: true,
        title: "Error de Validación",
        msg: "Falta el ID del usuario a eliminar.",
        isBadRequest: true,
      });
      return;
    }

    const result = await api.doDelete(idUsuario);

    if (!result) { // Manejo de error si no hay respuesta de la API (aunque la promesa de doDelete ya maneja errores)
      setModalState({
        show: true,
        title: "Error",
        msg: "No se recibió respuesta del servidor o la conexión falló.",
        isBadRequest: true,
      });
      return;
    }

    if (result.success) {
      setModalState({
        show: true,
        title: "Usuario Eliminado Exitosamente",
        msg: result.message,
        isBadRequest: false,
      });

      /* refetchUsuarios(); */

    } else {
      setModalState({
        show: true,
        title: "Fallo la Eliminación de Usuario",
        msg: result.message,
        isBadRequest: true,
      });
    }
  }

  function onReFetch() {
    const inputValue = inputVal;
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
  }

  // 4. FUNCIÓN PARA FILTRAR - USA EL NUEVO ESTADO 'usuariosData'
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const inputValue = e.target.value;
    setInputVal(inputValue);
    setInputValueStorage(inputValue);

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

  if (isLoading) {
    return <p>Cargando lista de usuarios...</p>;
  }

  return (
    <>
      {/* Formulario de Búsqueda */}
      <label htmlFor="inputValue">Buscar 🔍</label>
      <input id="input-Value" name="inputValue" type="text" value={inputVal} onChange={handleChange} />
      <h1>{inputVal}</h1>
      <div className="resultados">
        <div className="d-flex justify-content-center align-content-center flex-wrap">
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
                    className="btn btn-danger m-3"
                    type="button"
                    onClick={() => seleccionarUsuario(usuario)}
                  >
                    🗑️ Eliminar
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
          <h1>countState: {countState}</h1>
          <pre>Usuario Activo: {JSON.stringify(userActive, null, 2)}</pre>
          <pre>Usuario a Eliminar: {JSON.stringify(userToDelete, null, 2)}</pre>
        </div>
      </div>

      {/* Modal de Eliminación */}
      <div className="modal">
        {showModal && userToDelete.idUsuario && ( // ⚠️ Usamos userToDelete
          <ModalDeleteUsuario
            show={showModal}
            onClose={handleCloseModal}
            userDataModal={userToDelete}
            onDelete={handleDelete}
          // ⚠️ Eliminamos las props handleChange y optionRolUsers
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

// ModalDeleteUsuario (Simplificado)

// ⚠️ Interfaz de Props Simplificada
interface ModalDeleteUsuarioProps {
  show: boolean;
  onClose: () => void;
  onDelete: (e: React.FormEvent) => Promise<void>;
  userDataModal: Usuario;
  // ⚠️ Eliminamos handleChange y optionRolUsers
}


export function ModalDeleteUsuario({
  show, onClose, onDelete, userDataModal
}: ModalDeleteUsuarioProps) {
  // ⚠️ Eliminamos handleChange y optionRolUsers de la desestructuración
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton className={`bg-danger text-white`}>
        <Modal.Title>
          Confirmar Eliminación (ID: {userDataModal.idUsuario})
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* 🚨 Usamos un <form> para disparar onDelete */}
        <form onSubmit={onDelete}>
          <div className="p-3">
            <p className="lead text-danger">
              ⚠️ **¿Está seguro que desea eliminar a**
              **{userDataModal.nameUsuario} {userDataModal.lastNameUsuario}**
              **con el ID: {userDataModal.idUsuario} de forma permanente?**
            </p>
            <p className="text-muted">Esta acción no se puede deshacer.</p>
          </div>

          {/* ⚠️ Eliminamos FormUsuarios */}
          {/* <FormUsuarios ... /> */}

          <div className="d-flex justify-content-end pt-3">
            <Button variant="secondary" onClick={onClose} type="button" className="me-2">
              Cancelar
            </Button>
            <Button variant="danger" type="submit">
              🗑️ Si, Eliminar
            </Button>
          </div>
        </form>

        <div className="previsualizar datos mt-3">
          <pre>Datos a eliminar: {JSON.stringify(userDataModal, null, 2)}</pre>
        </div>
      </Modal.Body>

    </Modal>
  );
}