import { Form, InputGroup } from "react-bootstrap";
import { ListaDeUsuarios, ListaRolDeUsuarios, type RolDeUsuario } from "../../../../DataContext/Usuarios/DataUsuarios";

export function SearchUsuario() {
  const getUsuarios = ListaDeUsuarios();
  const getRolDeUsuarios = ListaRolDeUsuarios();
  const optionRolUsers = getRolDeUsuarios.data;

  return (
    <>
      <div>
        <h1>Search Usuario</h1>

        <p style={{ backgroundColor: "gray", color: "white" }}>This is the Search Usuario page.</p>

        <div className="d-flex justify-content-center align-content-center flex-wrap">
          {
            getUsuarios.data?.map((usuario, index) => (
              <div className="m-2 p-2 bg-dark text-light" /* key={index} */ 
              style={{width:"22rem"}}
              key={index}
              >

                <InputGroup>
                  <InputGroup.Text>ID:</InputGroup.Text>
                  <Form.Control aria-label="With textarea" value={usuario.idUsuario} />

                </InputGroup>
                <InputGroup>
                  <InputGroup.Text>DNI:</InputGroup.Text>
                  <Form.Control aria-label="With textarea" value={usuario.dniUsuario} />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Text>Nombre:</InputGroup.Text>
                  <Form.Control aria-label="With textarea" value={usuario.nameUsuario} />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Text>Apellido:</InputGroup.Text>
                  <Form.Control aria-label="With textarea" value={usuario.lastNameUsuario} />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                    value={usuario.emailUsuario}
                  />
                  <InputGroup.Text id="basic-addon2"></InputGroup.Text>
                </InputGroup>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  value={usuario.passUsuario}
                />
                <Form.Label htmlFor="RolDeUsuario">Rol de Usuario</Form.Label>

                <Form.Select
                  id="RolDeUsuario"
                  aria-describedby="rolHelpBlock"
                  name="rolUsuarioId" // ⚠️ **Añadido 'name' para el ID del rol**
                  // El valor debe ser el ID del rol en el objeto userData
                  value={usuario.rolUsuarioId}
                // ⚠️ **Añadido 'onChange'**
                >
                  {optionRolUsers?.map((valor: RolDeUsuario) => (
                    <option
                      key={valor.idRolUsuario}
                      value={valor.idRolUsuario}
                    >
                      {valor.rolDeUsuario1}
                    </option>

                  ))}

                </Form.Select>

                {/* */}
              </div>
            ))
          }
        </div>
      </div>

    </>
  );
}