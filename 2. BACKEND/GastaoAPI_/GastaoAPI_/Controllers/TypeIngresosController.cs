using GastaoAPI_.Data.Models;
using GastaoAPI_.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeIngresosController : ControllerBase
    {
        private readonly TypeIngresosService _service;

        public TypeIngresosController(TypeIngresosService service)
        {
            _service = service;
        }

        // GET: api/TypeIngresos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypeIngreso>>> GetTypeIngresos() // Nombre de método corregido
        {
            var tipos = await _service.GetAll();
            if (tipos == null || !tipos.Any())
            {
                return NotFound("No se encontraron Tipos de Ingreso.");
            }
            return Ok(tipos);
        }

        // GET: api/TypeIngresos/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<TypeIngreso>> GetTypeIngreso(int id)
        {
            var typeIngreso = await _service.GetTypeIngreso(id);

            if (typeIngreso == null)
            {
                return NotFound($"No se encontró el tipo de Ingreso con el ID: {id}.");
            }

            return Ok(typeIngreso);
        }

        // POST: api/TypeIngresos
        [HttpPost]
        public async Task<ActionResult<TypeIngreso>> PostTypeIngreso(TypeIngreso typeIngreso)
        {
            var nuevoTipo = await _service.PostTypeIngreso(typeIngreso);

            return CreatedAtAction(
                "GetTypeIngreso",
                new { id = nuevoTipo.IdTypeIngreso },
                nuevoTipo
            );
        }

        // PUT: api/TypeIngresos/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTypeIngreso(int id, TypeIngreso typeIngreso)
        {
            if (id != typeIngreso.IdTypeIngreso)
            {
                return BadRequest(
                    "El ID del tipo de ingresos en la URL no coincide con el ID del rol en el cuerpo de la solicitud."
                );
            }

            try
            {
                var (exists, concurrencyError) = await _service.PutTypeIngreso(id, typeIngreso);

                if (!exists)
                {
                    return NotFound(
                        $"No se encontró el tipo de Ingreso con el ID: {id} para actualizar."
                    );
                }

                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(500, "Error de concurrencia al actualizar el tipo de Ingreso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        // DELETE: api/TypeIngresos/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypeIngreso(int id)
        {
            var eliminado = await _service.DeleteTypeIngreso(id);

            if (!eliminado)
            {
                return NotFound($"No se encontraron Tipos de Ingresos.");
            }

            return NoContent();
        }

        // El método privado TypeIngresoExists(int id) SE ELIMINA del controlador
    }
}
