using GastaoAPI_.Data.Models;
using GastaoAPI_.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeEgresosController : ControllerBase
    {
        private readonly TypeEgresosService _service;

        public TypeEgresosController(TypeEgresosService service)
        {
            _service = service;
        }

        // GET: api/TypeEgresos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeEgreso>>> GetTypeEgresos() // Nombre de método corregido
        {
            var tipos = await _service.GetAll();
            if (tipos == null || !tipos.Any())
            {
                return NotFound("No se encontraron tipos de Egreso.");
            }
            return Ok(tipos);
        }

        // GET: api/TypeEgresos/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<TypeEgreso>> GetTypeEgreso(int id)
        {
            var typeEgreso = await _service.GetTypeEgreso(id);

            if (typeEgreso == null)
            {
                return NotFound($"No se encontró el tipo de Egreso con el ID: {id}.");
            }

            return Ok(typeEgreso);
        }

        // POST: api/TypeEgresos
        [HttpPost]
        public async Task<ActionResult<TypeEgreso>> PostTypeEgreso(TypeEgreso typeEgreso)
        {
            var nuevoTipo = await _service.PostTypeEgreso(typeEgreso);

            return CreatedAtAction("GetTypeEgreso", new { id = nuevoTipo.IdTypeEgreso }, nuevoTipo);
        }

        // PUT: api/TypeEgresos/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTypeEgreso(int id, TypeEgreso typeEgreso)
        {
            if (id != typeEgreso.IdTypeEgreso)
            {
                return BadRequest(
                    "El ID del tipo de Egreso en la URL no coincide con el ID del tipo en el cuerpo de la solicitud."
                );
            }

            try
            {
                var (exists, concurrencyError) = await _service.PutTypeEgreso(id, typeEgreso);

                if (!exists)
                {
                    return NotFound(
                        $"No se encontró el tipo de Egreso con el ID: {id} para actualizar."
                    );
                }

                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(500, "Error de concurrencia al actualizar el tipo de Egreso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        // DELETE: api/TypeEgresos/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeEgreso(int id)
        {
            var eliminado = await _service.DeleteTypeEgreso(id);

            if (!eliminado)
            {
                return NotFound($"No se encontró el tipo de Egreso con el ID: {id} para eliminar.");
            }

            return NoContent();
        }

        // El método privado TypeEgresoExists(int id) SE ELIMINA del controlador
    }
}
