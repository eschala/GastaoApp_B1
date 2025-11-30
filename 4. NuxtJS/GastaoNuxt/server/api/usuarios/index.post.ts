import { createError } from 'h3';
import prisma from '../../utils/db';
import * as bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // 1. Validar campos requeridos
    if (!body.dni_usuario || !body.name_usuario || !body.email_usuario || !body.pass_usuario || !body.rol_id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Faltan campos requeridos (dni, nombre, email, password, rol_id).',
      });
    }

    // 2. HASH de la Contraseña (CLAVE DE SEGURIDAD)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.pass_usuario, saltRounds);

    // 3. Crear el usuario en la base de datos
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        dni_usuario: body.dni_usuario,
        name_usuario: body.name_usuario,
        last_name_usuario: body.last_name_usuario,
        email_usuario: body.email_usuario,
        pass_usuario: hashedPassword, // Guarda el hash, no la contraseña original
        rol_id: body.rol_id,
      },
      select: { // Retorna solo datos no sensibles
        id: true,
        dni_usuario: true,
        name_usuario: true,
        email_usuario: true,
        rol_id: true,
      }
    });

    return {
      message: 'Usuario creado exitosamente.',
      usuario: nuevoUsuario
    };

  } catch (error) {
    // Aplicamos aserción de tipo para acceder a las propiedades de error de Prisma.
    const prismaError = error as any; 
    
    console.error('Error al crear usuario:', prismaError);

    // 4. Manejo de errores específicos de Prisma (por ejemplo, duplicado - P2002)
    if (prismaError.code === 'P2002') { 
        throw createError({
            statusCode: 409, // Conflict
            statusMessage: 'El DNI o Email ya están registrados.',
        });
    }

    // Usamos el mensaje del error de Prisma o uno genérico para el 500
    const errorMessage = prismaError.message || 'Un error desconocido ocurrió al crear el usuario.';

    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno del servidor al crear el usuario.',
      data: { error: errorMessage } // Incluye el error real para depuración
    });
  }
});