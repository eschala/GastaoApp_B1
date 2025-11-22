import { EgresosService } from "~~/server/services/egresos-service";

export default defineEventHandler(async (event) => {
  // Obtenemos el ID de la URL
  const id = getRouterParam(event, 'id');

  const egreso = await EgresosService.findById(Number(id));

  if (!egreso) {
    throw createError({ statusCode: 404, message: 'Egreso no encontrado' });
  }

  return { success: true, data: egreso };
});