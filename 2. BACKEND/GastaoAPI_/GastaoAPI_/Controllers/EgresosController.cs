using GastaoAPI_.Data.Models;
using GastaoAPI_.Services; // Importamos el servicio
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EgresosController : ControllerBase
    {
        private readonly EgresosService _service; // Inyectamos el servicio

        public EgresosController(EgresosService service) // Usamos el servicio en el constructor
        {
            _service = service;
        }

        // GET: api/Egresos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Egreso>>> GetEgresos()
        {
            var egresos = await _service.GetAll();
            if (egresos == null || !egresos.Any())
            {
                return NotFound("No se encontraron Egresos.");
            }
            return Ok(egresos);
        }

        // GET: api/Egresos/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Egreso>> GetEgreso(int id)
        {
            var egreso = await _service.GetEgreso(id);

            if (egreso == null)
            {
                return NotFound($"No se encontró un Egreso con el ID: {id}.");
            }

            return Ok(egreso);
        }

        // POST: api/Egresos
        [HttpPost]
        public async Task<ActionResult<Egreso>> PostEgreso(Egreso egreso)
        {
            // Nota: Aquí se podría agregar validación de ModelState antes de llamar al servicio
            var nuevoEgreso = await _service.PostEgreso(egreso);

            return CreatedAtAction("GetEgreso", new { id = nuevoEgreso.IdEgreso }, nuevoEgreso);
        }

        // PUT: api/Egresos/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEgreso(int id, Egreso egreso)
        {
            if (id != egreso.IdEgreso)
            {
                return BadRequest(
                    "El ID del egreso en la URL no coincide con el ID del egreso en el cuerpo de la solicitud."
                );
            }

            try
            {
                var (exists, concurrencyError) = await _service.PutEgreso(id, egreso);

                if (!exists)
                {
                    return NotFound($"No se encontró el egreso con el ID: {id} para actualizar.");
                }

                // Si la actualización fue exitosa, no hay contenido para devolver (204)
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Este error se relanzó desde el servicio.
                return StatusCode(500, "Error de concurrencia al actualizar el egreso.");
            }
            catch (Exception ex)
            {
                // Manejo genérico de excepciones.
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        // DELETE: api/Egresos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEgreso(int id)
        {
            var eliminado = await _service.DeleteEgreso(id);

            if (!eliminado)
            {
                return NotFound($"No se encontró el egreso con el ID: {id} para eliminar.");
            }

            return NoContent();
        }

        // El método privado EgresoExists(int id) SE ELIMINA del controlador
    }
}
