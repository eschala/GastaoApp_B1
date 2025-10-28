using GastaoAPI_.Data.Models;
using GastaoAPI_.Services; // ⬅️ Nuevo: Agrega el namespace del servicio
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        // ❌ Elimina la inyección directa del DbContext
        // private readonly GastaoDbContext _context;

        // ✅ Agrega la inyección del servicio
        private readonly UsuariosService _service;

        // Constructor: Inyecta el servicio en lugar del DbContext
        public UsuariosController(UsuariosService service)
        {
            _service = service;
        }

        // GET: api/Usuarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            // ✅ Llama al método del servicio
            var usuarios = await _service.GetAll();
            if (usuarios == null || !usuarios.Any())
            {
                return NotFound("No se encontraron usuarios.");
            }
            return Ok(usuarios);
        }

        // GET: api/Usuarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            // ✅ Llama al método del servicio
            var usuario = await _service.GetUsuario(id);

            if (usuario == null)
            {
                return NotFound($"No se encontró un usuario con el ID: {id}.");
            }

            return Ok(usuario);
        }

        // POST: api/Usuarios
        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
        {
            // ✅ Llama al método del servicio
            var result = await _service.PostUsuario(usuario);

            // Reenvía el resultado de la acción del servicio (Created/Problem)
            // Nota: El método PostUsuario del servicio debe devolver un ActionResult<Usuario> o similar.
            return result;
        }

        // PUT: api/Usuarios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario usuario)
        {
            // Llama al método del servicio
            var success = await _service.PutUsuario(id, usuario);

            if (!success)
            {
                return NotFound($"No se encontró un usuario con el ID: {id}.");
            }

            return NoContent();
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchUsuario(
            int id,
            [FromBody] JsonPatchDocument<Usuario> patchDoc // ⬅️ Tipo genérico debe ser el Modelo (Usuario)
        )
        {
            // 1. Validación inicial del cuerpo
            if (patchDoc == null)
            {
                return BadRequest("El documento de patch no puede ser nulo.");
            }

            // 2. Llama al servicio
            var (updatedUsuario, errorType) = await _service.PatchUsuario(id, patchDoc);

            // 3. Manejo de resultados del servicio
            if (errorType != null)
            {
                return errorType switch
                {
                    "NotFound" => NotFound($"No se encontró el usuario con ID {id}."),
                    _ => BadRequest(errorType), // Captura "Validation Error" y "Database Error"
                };
            }

            // 4. Éxito (Código 200 OK con el objeto actualizado)
            return Ok(updatedUsuario);
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            // Llama al método del servicio
            var success = await _service.DeleteUsuario(id);

            if (!success)
            {
                return NotFound($"No se encontró un usuario con el ID: {id}.");
            }

            return NoContent();
        }
    }
}
