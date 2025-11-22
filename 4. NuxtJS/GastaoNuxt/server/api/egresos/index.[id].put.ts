import { EgresosService } from "~~/server/services/egresos-service";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const body = await readBody(event);

  try {
    const resultado = await EgresosService.update(Number(id), body);
    return { success: true, data: resultado };
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Error al actualizar' });
  }
});