import { createError } from 'h3';
import prisma from '../../utils/db';


export default defineEventHandler(async (event) => {
  // 1. Verificar si params existe y obtener el ID de forma segura
  const idParam = event.context.params?.id;

  if (!idParam) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Falta el parámetro ID en la URL.',
    });
  }

  const id = parseInt(idParam);

  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'El ID de usuario debe ser un número entero válido.',
    });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: id },
      select: { // Excluye la contraseña
        id: true,
        dni_usuario: true,
        name_usuario: true,
        last_name_usuario: true,
        email_usuario: true,
        pass_usuario:true,
        rol_id: true,
        rol: true,
      },
    });

    if (!usuario) {
      throw createError({
        statusCode: 404,
        statusMessage: `Usuario con ID ${id} no encontrado.`,
      });
    }

    return usuario;

  } catch (error) {
    // 2. Aplicamos aserción de tipo para manejar errores de forma segura
    const h3Error = error as any;

    // Re-lanza el error 404 creado por 'createError' si ya lo hemos lanzado
    if (h3Error.statusCode === 404) {
      throw error;
    }

    console.error(`Error al obtener usuario ID ${id}:`, h3Error);

    // Incluimos el mensaje de error para depuración
    const errorMessage = h3Error.message || 'Error desconocido de la base de datos.';

    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno del servidor al obtener el usuario.',
      data: { error: errorMessage }
    });
  }
});