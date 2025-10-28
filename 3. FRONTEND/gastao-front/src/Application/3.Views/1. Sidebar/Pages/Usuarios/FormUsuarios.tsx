import { Form, InputGroup } from "react-bootstrap";
import { ListaRolDeUsuarios, type RolDeUsuario, type Usuario } from "../../../../DataContext/Usuarios/DataUsuarios";

// 1. Define la nueva interfaz para las props, incluyendo 'handleChange'
interface FormUsuariosProps {
    inputId:boolean|any;
    userData: Usuario | any;
    rolUser: RolDeUsuario|any|null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

// 2. Desestructura las props con la nueva interfaz
export function FormUsuarios({ userData, handleChange, inputId }: FormUsuariosProps) {
    /* rolUser */

    const getRolDeUsuarios = ListaRolDeUsuarios();
    const optionRolUsers = getRolDeUsuarios.data;

    /* console.log(rolUser); */
    return (

        <>
            {/* ID - Generalmente deshabilitado en creación, pero se deja editable para ejemplo */}
            <InputGroup className={`${inputId==true?"d-block":"d-none"}`}>
                <InputGroup.Text>ID:</InputGroup.Text>
                <Form.Control
                    /* as="textarea" */
                    aria-label="ID del Usuario"
                    name="idUsuario" // ⚠️ **Añadido 'name'**
                    value={userData.idUsuario}
                    onChange={handleChange} // ⚠️ **Añadido 'onChange'**
                />
            </InputGroup>
            {/* DNI */}
            <InputGroup>
                <InputGroup.Text>DNI:</InputGroup.Text>
                <Form.Control
                    /* as="textarea" */
                    aria-label="DNI del Usuario"
                    name="dniUsuario" // ⚠️ **Añadido 'name'**
                    value={userData.dniUsuario}
                    onChange={handleChange} // ⚠️ **Añadido 'onChange'**
                />
            </InputGroup>
            {/* Nombre */}
            <InputGroup>
                <InputGroup.Text>Nombre:</InputGroup.Text>
                <Form.Control
                    /* as="textarea" */
                    aria-label="Nombre del Usuario"
                    name="nameUsuario" // ⚠️ **Añadido 'name'**
                    value={userData.nameUsuario}
                    onChange={handleChange} // ⚠️ **Añadido 'onChange'**
                />
            </InputGroup>
            {/* Apellido */}
            <InputGroup>
                <InputGroup.Text>Apellido:</InputGroup.Text>
                <Form.Control
                    /* as="textarea" */
                    aria-label="Apellido del Usuario"
                    name="lastNameUsuario" // ⚠️ **Añadido 'name'**
                    value={userData.lastNameUsuario}
                    onChange={handleChange} // ⚠️ **Añadido 'onChange'**
                />
            </InputGroup>
            {/* Email */}
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                    name="emailUsuario" // ⚠️ **Añadido 'name'**
                    value={userData.emailUsuario}
                    onChange={handleChange} // ⚠️ **Añadido 'onChange'**
                />
                <InputGroup.Text id="basic-addon2">@ejemplo.com</InputGroup.Text>
            </InputGroup>

            {/* Password */}
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                name="passUsuario" // ⚠️ **Añadido 'name'**
                value={userData.passUsuario}
                onChange={handleChange} // ⚠️ **Añadido 'onChange'**
            />

            {/* Selección de Rol */}
            <Form.Label htmlFor="RolDeUsuario">Rol de Usuario</Form.Label>
            <Form.Select
                id="RolDeUsuario"
                aria-describedby="rolHelpBlock"
                name="rolUsuarioId" // ⚠️ **Añadido 'name' para el ID del rol**
                // El valor debe ser el ID del rol en el objeto userData
                value={userData.rolUsuarioId}
                onChange={handleChange} // ⚠️ **Añadido 'onChange'**
            >
                <option value={0}>Elegir Rol</option> {/* Valor 0 para la opción por defecto */}

                {optionRolUsers?.map((rol: RolDeUsuario) => (
                    // ⚠️ El 'value' debe ser el idRolUsuario para que se guarde el ID en el estado
                    <option key={rol.idRolUsuario} value={rol.idRolUsuario}>
                        {rol.rolDeUsuario1}
                    </option>
                ))}
            </Form.Select>
        </>
    )
}