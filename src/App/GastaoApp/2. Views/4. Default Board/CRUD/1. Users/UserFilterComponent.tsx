import React from 'react';
import { UserFilter } from '../../../../3. Contexts/UsersFilter';



export const UserFilterComponent: React.FC = () => {
    const {
        indexCurrent: indiceActual,
        filters: filtros,
        manejarCambioFiltro,
        GetUsersFiltered: GetUsersFiltrados,
        PrevRegister,
        NextRegister
    } = UserFilter();

    return (
        <div>
            {/* Aquí van los campos de filtro, usando manejarCambioFiltro */}
            <input type="text" name="UserName" value={filtros.nameUserFilter} onChange={manejarCambioFiltro} />
            {/* Más campos de entrada según lo necesites */}

            {GetUsersFiltrados.length > 0 ? (
                <div>
                    <p>ID: {GetUsersFiltrados[indiceActual]?.idUser}</p>
                    <p>Nombre: {GetUsersFiltrados[indiceActual]?.nameUser}</p>
                    {/* Más datos del usuario */}
                    <button onClick={PrevRegister}>Anterior</button>
                    <button onClick={NextRegister}>Siguiente</button>
                    <h2>{indiceActual + 1}</h2>
                    <h2>{GetUsersFiltrados.length}</h2>
                </div>
            ) : (
                <h1>No hay registros disponibles.</h1>
            )}
        </div>
    );
};
