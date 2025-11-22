import { EgresosService } from "~~/server/services/egresos-service";


export default defineEventHandler(async (event) => {
  try {
    const egresos = await EgresosService.findAll();
    return { success: true, data: egresos };
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Error al obtener egresos' });
  }
});