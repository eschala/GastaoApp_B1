using GastaoAPI_.Data.Models; // Asegúrate de que este sea el namespace correcto para tu modelo RolDeUsuario
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // Necesario para métodos como .ToListAsync(), .FirstOrDefaultAsync(), etc.

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")] // Define la ruta base para este controlador, por ejemplo: /api/RolDeUsuarios
    [ApiController] // Indica que esta clase es un controlador API
    public class RolDeUsuariosController : ControllerBase
    {
        private readonly GastaoDbContext _context; // Declara una variable para tu contexto de base de datos

        // Constructor: Inyecta el DbContext para poder acceder a la base de datos
        public RolDeUsuariosController(GastaoDbContext context)
        {
            _context = context;
        }

        // GET: api/RolDeUsuarios
        // Obtiene todos los roles de usuario
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RolDeUsuario>>> GetRolesDeUsuario()
        {
            if (_context.RolDeUsuarios == null)
            {
                return NotFound("No se encontraron roles de usuario.");
            }
            return await _context.RolDeUsuarios.ToListAsync();
        }

        // GET: api/RolDeUsuarios/5
        // Obtiene un rol de usuario por su ID
        [HttpGet("{id}")]
        public async Task<ActionResult<RolDeUsuario>> GetRolDeUsuario(int id)
        {
            if (_context.RolDeUsuarios == null)
            {
                return NotFound("No se encontraron roles de usuario.");
            }
            var rolDeUsuario = await _context.RolDeUsuarios.FindAsync(id);

            if (rolDeUsuario == null)
            {
                return NotFound($"No se encontró un rol de usuario con el ID: {id}.");
            }

            return rolDeUsuario;
        }

        // POST: api/RolDeUsuarios
        // Crea un nuevo rol de usuario
        [HttpPost]
        public async Task<ActionResult<RolDeUsuario>> PostRolDeUsuario(RolDeUsuario rolDeUsuario)
        {
            if (_context.RolDeUsuarios == null)
            {
                // Esto podría ocurrir si el DbSet<RolDeUsuario> no está definido en GastaoDbContext
                return Problem("Entidad 'RolDeUsuario' no definida en el contexto de la base de datos.");
            }

            // Aquí podrías añadir validaciones, por ejemplo, si el nombre del rol ya existe.

            _context.RolDeUsuarios.Add(rolDeUsuario);
            await _context.SaveChangesAsync();

            // Retorna un código 201 Created y la URL para acceder al nuevo recurso
            return CreatedAtAction("GetRolDeUsuario", new { id = rolDeUsuario.IdRolUsuario }, rolDeUsuario);
        }

        // PUT: api/RolDeUsuarios/5
        // Actualiza un rol de usuario existente por su ID
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRolDeUsuario(int id, RolDeUsuario rolDeUsuario)
        {
            // Valida que el ID en la URL coincida con el ID del objeto enviado
            if (id != rolDeUsuario.IdRolUsuario)
            {
                return BadRequest("El ID del rol de usuario en la URL no coincide con el ID del rol en el cuerpo de la solicitud.");
            }

            _context.Entry(rolDeUsuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Verifica si el rol de usuario realmente existe antes de lanzar una excepción
                if (!RolDeUsuarioExists(id))
                {
                    return NotFound($"No se encontró un rol de usuario con el ID: {id} para actualizar.");
                }
                else
                {
                    throw; // Vuelve a lanzar la excepción si no es por un ID no encontrado
                }
            }

            return NoContent(); // Retorna un código 204 No Content para una actualización exitosa sin contenido de retorno
        }

        // DELETE: api/RolDeUsuarios/5
        // Elimina un rol de usuario por su ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRolDeUsuario(int id)
        {
            if (_context.RolDeUsuarios == null)
            {
                return NotFound("No se encontraron roles de usuario.");
            }
            var rolDeUsuario = await _context.RolDeUsuarios.FindAsync(id);
            if (rolDeUsuario == null)
            {
                return NotFound($"No se encontró un rol de usuario con el ID: {id} para eliminar.");
            }

            _context.RolDeUsuarios.Remove(rolDeUsuario);
            await _context.SaveChangesAsync();

            return NoContent(); // Retorna un código 204 No Content para una eliminación exitosa
        }

        // Método auxiliar para verificar si un rol de usuario existe
        private bool RolDeUsuarioExists(int id)
        {
            return (_context.RolDeUsuarios?.Any(e => e.IdRolUsuario == id)).GetValueOrDefault();
        }
    }
}