import { createError } from 'h3';
import prisma from '../../utils/db';

export default defineEventHandler(async (event) => {
  // 1. Acceso seguro a event.context.params?.id
  const idParam = event.context.params?.id;

  if (!idParam) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Falta el parámetro ID en la URL.' 
    });
  }

  const id = parseInt(idParam);

  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'El ID de usuario debe ser un número entero válido.' });
  }

  try {
    // Intenta eliminar el usuario
    await prisma.usuario.delete({
      where: { id: id },
    });

    return {
      message: `Usuario con ID ${id} eliminado exitosamente.`,
      status: 200,
    };

  } catch (error) {
    // 2. Tipificación de error a 'any' para acceder a 'code' de forma segura
    const prismaError = error as any;

    console.error(`Error al eliminar usuario ID ${id}:`, prismaError);

    // Maneja si el usuario a eliminar no existe (P2025)
    if (prismaError.code === 'P2025') {
        throw createError({
            statusCode: 404,
            statusMessage: `Usuario con ID ${id} no encontrado.`,
        });
    }
    // Maneja errores de integridad referencial si el usuario tiene egresos/ingresos (P2003)
    if (prismaError.code === 'P2003') { 
        throw createError({
            statusCode: 409, // Conflict
            statusMessage: 'No se puede eliminar: El usuario tiene ingresos o egresos asociados.',
        });
    }

    // Incluimos el mensaje de error de Prisma o uno genérico para el 500
    const errorMessage = prismaError.message || 'Error desconocido de la base de datos.';

    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno del servidor al eliminar el usuario.',
      data: { error: errorMessage }
    });
  }
});