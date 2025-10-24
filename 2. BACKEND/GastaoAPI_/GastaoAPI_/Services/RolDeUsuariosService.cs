using GastaoAPI_.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Services;

public class RolDeUsuariosService
{
    private readonly GastaoDbContext _context;

    public RolDeUsuariosService(GastaoDbContext context)
    {
        _context = context;
    }

    // GET: Obtiene todos los roles
    public async Task<IEnumerable<RolDeUsuario>> GetAll()
    {
        return await _context.RolDeUsuarios.ToListAsync();
    }

    // GET: Obtiene un rol por su ID
    public async Task<RolDeUsuario?> GetRolDeUsuario(int id)
    {
        return await _context.RolDeUsuarios.FindAsync(id);
    }

    // POST: Crea un nuevo rol
    public async Task<RolDeUsuario> PostRolDeUsuario(RolDeUsuario rolDeUsuario)
    {
        _context.RolDeUsuarios.Add(rolDeUsuario);
        await _context.SaveChangesAsync();
        return rolDeUsuario;
    }

    // PUT: Actualiza un rol existente
    public async Task<(bool Exists, bool ConcurrencyError)> PutRolDeUsuario(
        int id,
        RolDeUsuario rolDeUsuario
    )
    {
        _context.Entry(rolDeUsuario).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return (true, false);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!RolDeUsuarioExists(id))
            {
                return (false, false);
            }
            throw;
        }
        catch (DbUpdateException)
        {
            if (!RolDeUsuarioExists(id))
                return (false, false);
            throw;
        }
    }

    // DELETE: Elimina un rol
    public async Task<bool> DeleteRolDeUsuario(int id)
    {
        var rolDeUsuario = await _context.RolDeUsuarios.FindAsync(id);
        if (rolDeUsuario == null)
        {
            return false;
        }

        _context.RolDeUsuarios.Remove(rolDeUsuario);
        await _context.SaveChangesAsync();
        return true;
    }

    private bool RolDeUsuarioExists(int id)
    {
        return (_context.RolDeUsuarios?.Any(e => e.IdRolUsuario == id)).GetValueOrDefault();
    }
}
