import { Link, Outlet } from "react-router-dom";

export function HomeRolDeUsuarios() {
    return (
        <div>
            <h2>Gestión de Rol de Usuarios</h2>
            {/* Opcional: Navegación específica para rol de usuarios */}
            <nav>
                <Link to="create">Crear</Link> |
                <Link to="edit">Editar</Link> |
                <Link to="delete">Eliminar</Link> |
                <Link to="search">Buscar</Link>
            </nav>

            {/* Este Outlet es crucial para que las rutas anidadas (create, edit, etc.) se rendericen aquí */}
            <div style={{ border: '1px dashed green', padding: '10px', marginTop: '10px' }}>
                <h3>Contenido de la sub-ruta de rol de usuarios:</h3>
                <Outlet />
            </div>
        </div>
    );
}