import { useQuery } from '@tanstack/react-query';
import type { Usuario } from './DataUsuarios';


const fetchUsuarios = async (): Promise<Usuario[]> => {
/* 
    https://localhost:7212/api/Usuarios
    http://localhost:5045/api/Usuarios
 */
    const response = await fetch("http://localhost:5045/api/Usuarios");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
    console.log(data);

};

export function useUsuarios() {
    return useQuery<Usuario[], Error>({ // Tipado genérico: <Datos, Error>
        queryKey: ['Usuario'],
        queryFn: fetchUsuarios,
        staleTime: 5 * 60 * 1000,
    });
}

export function ListaDeUsuarios() {
    const { data, isLoading, isError, error } = useUsuarios();

    if (isLoading) {
        return <div>Cargando usuarios...</div>;
    }

    if (isError) {
        return <div>Ocurrió un error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {data?.map((usuario) => ( // TypeScript sabe que 'usuario' es de tipo 'Usuario'
                    <li key={usuario.idUsuario}>
                        <strong>Nombre:</strong> {usuario.nameUsuario} {usuario.lastNameUsuario}
                        <br />
                        <strong>CC:</strong> {usuario.dniUsuario} 
                        <br />
                        <strong>Email:</strong> {usuario.emailUsuario}
                        <br />
                        ---
                    </li>
                ))}
            </ul>
        </div>
    );
}