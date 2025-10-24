import { Link } from "react-router-dom";
export function DeleteRolDeUsuarios() {
    return (
        <div>
            <h2>Eliminar Rol de Usuario</h2>
            <form>
                <div>
                    <label>Nombre del Rol:</label>
                    <input type="text" name="roleName" />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" name="description" />
                </div>
                <button type="submit">Eliminar</button>
            </form>
            <Link to="/rol-de-usuarios">Volver a Gestión de Rol de Usuarios</Link>
        </div>
    );
}
