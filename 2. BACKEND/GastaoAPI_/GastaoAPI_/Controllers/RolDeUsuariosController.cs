using GastaoAPI_.Data.Models;
using GastaoAPI_.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolDeUsuariosController : ControllerBase
    {
        private readonly RolDeUsuariosService _service;

        public RolDeUsuariosController(RolDeUsuariosService service)
        {
            _service = service;
        }

        // GET: api/RolDeUsuarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RolDeUsuario>>> GetRolesDeUsuario()
        {
            var roles = await _service.GetAll();
            if (roles == null || !roles.Any())
            {
                return NotFound("No se encontraron roles de usuario.");
            }
            return Ok(roles);
        }

        // GET: api/RolDeUsuarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RolDeUsuario>> GetRolDeUsuario(int id)
        {
            var rolDeUsuario = await _service.GetRolDeUsuario(id);

            if (rolDeUsuario == null)
            {
                return NotFound($"No se encontró un rol de usuario con el ID: {id}.");
            }

            return Ok(rolDeUsuario);
        }

        // POST: api/RolDeUsuarios
        [HttpPost]
        public async Task<ActionResult<RolDeUsuario>> PostRolDeUsuario(RolDeUsuario rolDeUsuario)
        {
            var nuevoRol = await _service.PostRolDeUsuario(rolDeUsuario);

            return CreatedAtAction("GetRolDeUsuario", new { id = nuevoRol.IdRolUsuario }, nuevoRol);
        }

        // PUT: api/RolDeUsuarios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRolDeUsuario(int id, RolDeUsuario rolDeUsuario)
        {
            if (id != rolDeUsuario.IdRolUsuario)
            {
                return BadRequest(
                    "El ID del rol de usuario en la URL no coincide con el ID del rol en el cuerpo de la solicitud."
                );
            }

            try
            {
                var (exists, concurrencyError) = await _service.PutRolDeUsuario(id, rolDeUsuario);

                if (!exists)
                {
                    return NotFound(
                        $"No se encontró un rol de usuario con el ID: {id} para actualizar."
                    );
                }

                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(500, "Error de concurrencia al actualizar el rol de usuario.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        // DELETE: api/RolDeUsuarios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRolDeUsuario(int id)
        {
            var eliminado = await _service.DeleteRolDeUsuario(id);

            if (!eliminado)
            {
                return NotFound($"No se encontró un rol de usuario con el ID: {id} para eliminar.");
            }

            return NoContent();
        }

        // El método privado RolDeUsuarioExists(int id) SE ELIMINA del controlador
    }
}
