// Pages/Usuarios/HomeUsuarios.jsx
import { Outlet, Link } from "react-router-dom";

export function HomeUsuarios() {
    return (
        <div>
            <h2>Gestión de Usuarios</h2>
            {/* Opcional: Navegación específica para usuarios */}
            <nav>
                <Link className="btn btn-warning" to="create">Crear</Link>
                <Link className="btn btn-primary" to="edit">Editar</Link>
                <Link className="btn btn-danger" to="delete">Eliminar</Link>
                <Link className="btn btn-secondary" to="search">Buscar</Link>
            </nav>

            {/* Este Outlet es crucial para que las rutas anidadas (create, edit, etc.) se rendericen aquí */}
            <div style={{ border: '1px dashed blue', padding: '10px', marginTop: '10px' }}>
                <h3>Contenido de la sub-ruta de usuarios:</h3>
                <Outlet />
            </div>
        </div>
    );
}