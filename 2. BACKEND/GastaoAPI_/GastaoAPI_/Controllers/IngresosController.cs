using GastaoAPI_.Data.Models;
using GastaoAPI_.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngresosController : ControllerBase
    {
        private readonly IngresosService _service;

        public IngresosController(IngresosService service)
        {
            _service = service;
        }

        // GET: api/Ingresos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ingreso>>> GetIngresos()
        {
            var ingresos = await _service.GetAll();
            if (ingresos == null || !ingresos.Any())
            {
                return NotFound("No se encontraron Ingresos.");
            }
            return Ok(ingresos);
        }

        // GET: api/Ingresos/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Ingreso>> GetIngreso(int id)
        {
            var ingreso = await _service.GetIngreso(id);

            if (ingreso == null)
            {
                return NotFound($"No se encontró un Ingreso con el ID: {id}.");
            }

            return Ok(ingreso);
        }

        // POST: api/Ingresos
        [HttpPost]
        public async Task<ActionResult<Ingreso>> PostIngreso(Ingreso ingreso)
        {
            var nuevoIngreso = await _service.PostIngreso(ingreso);

            return CreatedAtAction("GetIngreso", new { id = nuevoIngreso.IdIngreso }, nuevoIngreso);
        }

        // PUT: api/Ingresos/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIngreso(int id, Ingreso ingreso)
        {
            if (id != ingreso.IdIngreso)
            {
                return BadRequest(
                    "El ID del ingreso en la URL no coincide con el ID del ingreso en el cuerpo de la solicitud."
                );
            }

            try
            {
                var (exists, concurrencyError) = await _service.PutIngreso(id, ingreso);

                if (!exists)
                {
                    return NotFound($"No se encontró el ingreso con el ID: {id} para actualizar.");
                }

                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(500, "Error de concurrencia al actualizar el ingreso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        // DELETE: api/Ingresos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIngreso(int id)
        {
            var eliminado = await _service.DeleteIngreso(id);

            if (!eliminado)
            {
                return NotFound($"No se encontró el ingreso con el ID: {id} para eliminar.");
            }

            return NoContent();
        }

        // El método privado IngresoExists(int id) SE ELIMINA del controlador
    }
}
