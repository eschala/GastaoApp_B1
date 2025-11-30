import { createError } from 'h3';
import prisma from '../../utils/db';
import * as bcrypt from 'bcryptjs';


export default defineEventHandler(async (event) => {
  // Solución #1: Acceso seguro a event.context.params?.id
  const idParam = event.context.params?.id;

  if (!idParam) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Falta el parámetro ID en la URL.' 
    });
  }

  const id = parseInt(idParam);

  if (isNaN(id)) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'El ID de usuario debe ser un número entero válido.' 
    });
  }

  try {
    const body = await readBody(event);
    
    // Prepara el objeto de datos a actualizar
    const updateData: Record<string, any> = { ...body };

    // Si se proporciona una nueva contraseña, la hashea
    if (body.pass_usuario) {
      const saltRounds = 10;
      updateData.pass_usuario = await bcrypt.hash(body.pass_usuario, saltRounds);
    }
    
    // Intenta actualizar el usuario
    const usuarioActualizado = await prisma.usuario.update({
      where: { id: id },
      data: updateData,
      select: { // Retorna solo datos no sensibles
        id: true,
        dni_usuario: true,
        name_usuario: true,
        email_usuario: true,
        rol_id: true,
      }
    });

    return {
      message: `Usuario con ID ${id} actualizado correctamente.`,
      usuario: usuarioActualizado
    };

  } catch (error) {
    // Solución #2: Tipificación de error a 'any' para acceder a 'code'
    const prismaError = error as any;

    console.error(`Error al actualizar usuario ID ${id}:`, prismaError);
    
    // Maneja si el usuario no existe (P2025)
    if (prismaError.code === 'P2025') {
        throw createError({
            statusCode: 404,
            statusMessage: `Usuario con ID ${id} no encontrado.`,
        });
    }
    // Maneja si el DNI o Email ya están en uso (P2002)
    if (prismaError.code === 'P2002') { 
        throw createError({
            statusCode: 409,
            statusMessage: 'El DNI o Email ya están en uso por otro usuario.',
        });
    }

    // Incluimos el mensaje de error de Prisma o uno genérico para el 500
    const errorMessage = prismaError.message || 'Error desconocido de la base de datos.';
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno del servidor al actualizar el usuario.',
      data: { error: errorMessage }
    });
  }
});