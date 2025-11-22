import { EgresosService } from "~~/server/services/egresos-service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  try {
    await EgresosService.remove(Number(id));
    return { success: true, message: 'Registro eliminado' };
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Error al eliminar' });
  }
});