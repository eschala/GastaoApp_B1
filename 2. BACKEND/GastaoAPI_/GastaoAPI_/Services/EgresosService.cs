using GastaoAPI_.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Services;

public class EgresosService
{
    private readonly GastaoDbContext _context;

    public EgresosService(GastaoDbContext context)
    {
        _context = context;
    }

    // GET: Obtiene todos los egresos
    public async Task<IEnumerable<Egreso>> GetAll()
    {
        return await _context.Egresos.ToListAsync();
    }

    // GET: Obtiene un egreso por su ID
    public async Task<Egreso?> GetEgreso(int id)
    {
        return await _context.Egresos.FindAsync(id);
    }

    // POST: Crea un nuevo egreso
    public async Task<Egreso> PostEgreso(Egreso egreso)
    {
        _context.Egresos.Add(egreso);
        await _context.SaveChangesAsync();
        return egreso;
    }

    // PUT: Actualiza un egreso existente
    public async Task<(bool Exists, bool ConcurrencyError)> PutEgreso(int id, Egreso egreso)
    {
        _context.Entry(egreso).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return (true, false);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!EgresoExists(id))
            {
                return (false, false); // No existe
            }
            throw; // Error de concurrencia no manejado por existencia
        }
        catch (DbUpdateException)
        {
            if (!EgresoExists(id))
                return (false, false);
            throw;
        }
    }

    // DELETE: Elimina un egreso
    public async Task<bool> DeleteEgreso(int id)
    {
        var egreso = await _context.Egresos.FindAsync(id);
        if (egreso == null)
        {
            return false;
        }

        _context.Egresos.Remove(egreso);
        await _context.SaveChangesAsync();
        return true;
    }

    private bool EgresoExists(int id)
    {
        return (_context.Egresos?.Any(e => e.IdEgreso == id)).GetValueOrDefault();
    }
}
