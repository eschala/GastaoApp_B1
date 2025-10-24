using GastaoAPI_.Data.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Services;

public class UsuariosService
{
    private readonly GastaoDbContext _context;

    public UsuariosService(GastaoDbContext context)
    {
        _context = context;
    }

    // GET: Obtiene todos los usuarios
    // ✅ Devuelve la lista de datos puros (IEnumerable<Usuario>)
    public async Task<IEnumerable<Usuario>> GetAll()
    {
        if (_context.Usuarios == null)
        {
            return Enumerable.Empty<Usuario>(); // Devuelve lista vacía si el DbSet es null
        }
        return await _context.Usuarios.ToListAsync();
    }

    // GET: Obtiene un usuario por su ID
    // ✅ Devuelve el objeto puro o null
    public async Task<Usuario?> GetUsuario(int id)
    {
        if (_context.Usuarios == null)
        {
            return null;
        }
        return await _context.Usuarios.FindAsync(id);
    }

    // POST: Crea un nuevo usuario
    // ✅ Devuelve el objeto puro (Usuario)
    public async Task<Usuario> PostUsuario(Usuario usuario)
    {
        // El controlador debe manejar el caso de _context.Usuarios == null
        _context.Usuarios.Add(usuario);
        await _context.SaveChangesAsync();
        return usuario; // Devuelve el objeto creado
    }

    // PUT: Actualiza un usuario existente por su ID
    // ✅ Devuelve un booleano o un resultado de operación personalizado.
    // Para simplicidad, devolvamos un booleano y manejamos el error en el controlador.
    public async Task<bool> PutUsuario(int id, Usuario usuario)
    {
        if (id != usuario.IdUsuario)
        {
            return false; // ID no coincide
        }

        _context.Entry(usuario).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return true;
        }
        catch (DbUpdateConcurrencyException)
        {
            // Esta lógica de verificación de existencia DEBE estar en el servicio
            if (!UsuarioExists(id))
            {
                return false; // Usuario no existe
            }
            throw; // Relanza si es otra excepción de concurrencia
        }
    }

    public async Task<(Usuario? User, string? ErrorType)> PatchUsuario(
        int id,
        JsonPatchDocument<Usuario> patchDoc
    )
    {
        // 1. Buscar el recurso
        var usuario = await _context.Usuarios.FindAsync(id);

        if (usuario == null)
        {
            return (null, "NotFound");
        }

        // 2. Aplicar las operaciones del patch
        var modelState = new ModelStateDictionary();

        // ⬇️⬇️⬇️ CORRECCIÓN AQUÍ: Usamos una función lambda ⬇️⬇️⬇️
        patchDoc.ApplyTo(
            usuario,
            jsonPatchError =>
            {
                // El delegado (Action<JsonPatchError>) toma el error y lo usa para agregar
                // un error al ModelState, satisfaciendo el requerimiento de ApplyTo.
                modelState.AddModelError(
                    jsonPatchError.AffectedObject.GetType().Name,
                    jsonPatchError.ErrorMessage
                );
            }
        );
        // ⬆️⬆️⬆️ FIN DE LA CORRECCIÓN ⬆️⬆️⬆️

        // 3. Validar el resultado después de aplicar el patch
        if (!modelState.IsValid)
        {
            // Si hay errores de validación, compilamos los mensajes y los devolvemos.
            var errors = modelState
                .Values.SelectMany(v => v.Errors)
                .Select(e => e.ErrorMessage)
                .ToList();
            return (null, $"Validation Error: {string.Join(" | ", errors)}");
        }

        // 4. Guardar los cambios en la base de datos
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UsuarioExists(id))
            {
                return (null, "NotFound"); // El recurso ya no existe
            }
            throw; // Error de concurrencia
        }
        catch (Exception ex)
        {
            return (null, $"Database Error: {ex.Message}");
        }

        // 5. Retornar el recurso actualizado
        return (usuario, null);
    }

    // DELETE: Elimina un usuario por su ID
    // ✅ Devuelve un booleano (true si fue eliminado, false si no se encontró)
    public async Task<bool> DeleteUsuario(int id)
    {
        if (_context.Usuarios == null)
        {
            return false;
        }
        var usuario = await _context.Usuarios.FindAsync(id);
        if (usuario == null)
        {
            return false;
        }

        _context.Usuarios.Remove(usuario);
        await _context.SaveChangesAsync();
        return true;
    }

    // Método auxiliar para verificar si un usuario existe
    private bool UsuarioExists(int id)
    {
        return (_context.Usuarios?.Any(e => e.IdUsuario == id)).GetValueOrDefault();
    }
}
