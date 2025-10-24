import { Link } from "react-router-dom";
export function CreateRolDeUsuarios() {
    return (
        <div>
            <h2>Crear Rol de Usuario</h2>
            <form>
                <div>
                    <label>Nombre del Rol:</label>
                    <input type="text" name="roleName" />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" name="description" />
                </div>
                <button type="submit">Crear</button>
            </form>
            <Link to="/rol-de-usuarios">Volver a Gestión de Rol de Usuarios</Link>
        </div>
    );
}
