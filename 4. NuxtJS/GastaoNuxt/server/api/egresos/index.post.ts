import { EgresosService } from "~~/server/services/egresos-service";


export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  // Validación básica
  if (!body.tittle_egreso || !body.value_egreso) {
    throw createError({ statusCode: 400, message: 'Faltan datos obligatorios' });
  }

  try {
    const nuevoEgreso = await EgresosService.create(body);
    return { success: true, data: nuevoEgreso };
  } catch (error: any) {
    throw createError({ statusCode: 500, message: error.message });
  }
});