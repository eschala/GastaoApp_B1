import { Link } from "react-router-dom";
export function EditRolDeUsuarios() {
    return (
        <div>
            <h2>Editar Rol de Usuario</h2>
            <form>
                <div>
                    <label>Nombre del Rol:</label>
                    <input type="text" name="roleName" />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" name="description" />
                </div>
                <button type="submit">Editar</button>
            </form>
            <Link to="/rol-de-usuarios">Volver a Gestión de Rol de Usuarios</Link>
        </div>
    );
}
