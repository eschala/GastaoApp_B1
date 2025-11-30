/* const usuarios = [

    { id: 1, username: 'eschala', email: 'eschala@gmail.com' },
    { id: 2, username: 'eschala', email: 'eschala@gmail.com' },
    { id: 3, username: 'eschala', email: 'eschala@gmail.com' },
    { id: 4, username: 'eschala', email: 'eschala@gmail.com' },
    { id: 5, username: 'eschala', email: 'eschala@gmail.com' },
]

export default eventHandler(() => {

    return usuarios;

}) */
// server/api/usuarios.get.ts (Ejemplo de obtener todos los usuarios)

import prisma from "~~/server/utils/db"
import { createError } from 'h3';


export default defineEventHandler(async () => {
  try {
    // Busca todos los usuarios, incluyendo su rol asociado
    const usuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        dni_usuario: true,
        name_usuario: true,
        last_name_usuario: true,
        email_usuario: true,
        pass_usuario:true,
        rol_id: true,
        rol: {
          select: {
            id: true,
            rol: true,
          }
        },
      },
    });

    return usuarios;

  } catch (error) {
    // 1. Manejo del error: Aseguramos que 'error' sea tratado como un objeto
    // que potencialmente tiene la propiedad 'message' antes de acceder a ella.
    const errorMessage = (error as any)?.message || 'Un error desconocido de base de datos ocurrió.';

    console.error('Error al obtener todos los usuarios:', error);
    
    // 2. Usamos el mensaje seguro en el objeto de error retornado al cliente
    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno del servidor al obtener la lista de usuarios.',
      data: { error: errorMessage }
    });
  }
});