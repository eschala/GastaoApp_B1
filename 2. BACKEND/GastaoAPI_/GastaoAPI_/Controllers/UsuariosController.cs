using GastaoAPI_.Data.Models; // Asegúrate de que este sea el namespace correcto para tu modelo Usuario
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // Necesario para métodos como .ToListAsync(), .FirstOrDefaultAsync(), etc.

namespace GastaoAPI_.Controllers
{
    [Route("api/[controller]")] // Define la ruta base para este controlador, por ejemplo: /api/Usuarios
    [ApiController] // Indica que esta clase es un controlador API
    public class UsuariosController : ControllerBase
    {
        private readonly GastaoDbContext _context; // Declara una variable para tu contexto de base de datos

        // Constructor: Inyecta el DbContext para poder acceder a la base de datos
        public UsuariosController(GastaoDbContext context)
        {
            _context = context;
        }

        // GET: api/Usuarios
        // Obtiene todos los usuarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            if (_context.Usuarios == null)
            {
                return NotFound("No se encontraron usuarios.");
            }
            return await _context.Usuarios.ToListAsync();
        }

        // GET: api/Usuarios/5
        // Obtiene un usuario por su ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            if (_context.Usuarios == null)
            {
                return NotFound("No se encontraron usuarios.");
            }
            var usuario = await _context.Usuarios.FindAsync(id);

            if (usuario == null)
            {
                return NotFound($"No se encontró un usuario con el ID: {id}.");
            }

            return usuario;
        }

        // POST: api/Usuarios
        // Crea un nuevo usuario
        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
        {
            if (_context.Usuarios == null)
            {
                // Esto podría ocurrir si el DbSet<Usuario> no está definido en GastaoDbContext
                return Problem("Entidad 'Usuario' no definida en el contexto de la base de datos.");
            }

            // Aquí puedes añadir validaciones adicionales si es necesario
            // Por ejemplo, verificar si DniUsuario o EmailUsuario ya existen.

            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            // Retorna un código 201 Created y la URL para acceder al nuevo recurso
            return CreatedAtAction("GetUsuario", new { id = usuario.IdUsuario }, usuario);
        }

        // PUT: api/Usuarios/5
        // Actualiza un usuario existente por su ID
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario usuario)
        {
            // Valida que el ID en la URL coincida con el ID del objeto enviado
            if (id != usuario.IdUsuario)
            {
                return BadRequest("El ID del usuario en la URL no coincide con el ID del usuario en el cuerpo de la solicitud.");
            }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Verifica si el usuario realmente existe antes de lanzar una excepción
                if (!UsuarioExists(id))
                {
                    return NotFound($"No se encontró un usuario con el ID: {id} para actualizar.");
                }
                else
                {
                    throw; // Vuelve a lanzar la excepción si no es por un ID no encontrado
                }
            }

            return NoContent(); // Retorna un código 204 No Content para una actualización exitosa sin contenido de retorno
        }

        // DELETE: api/Usuarios/5
        // Elimina un usuario por su ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            if (_context.Usuarios == null)
            {
                return NotFound("No se encontraron usuarios.");
            }
            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario == null)
            {
                return NotFound($"No se encontró un usuario con el ID: {id} para eliminar.");
            }

            _context.Usuarios.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent(); // Retorna un código 204 No Content para una eliminación exitosa
        }

        // Método auxiliar para verificar si un usuario existe
        private bool UsuarioExists(int id)
        {
            return (_context.Usuarios?.Any(e => e.IdUsuario == id)).GetValueOrDefault();
        }
    }
}