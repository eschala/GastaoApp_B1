using GastaoAPI_.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Services;

public class IngresosService
{
    private readonly GastaoDbContext _context;

    public IngresosService(GastaoDbContext context)
    {
        _context = context;
    }

    // GET: Obtiene todos los ingresos
    public async Task<IEnumerable<Ingreso>> GetAll()
    {
        return await _context.Ingresos.ToListAsync();
    }

    // GET: Obtiene un ingreso por su ID
    public async Task<Ingreso?> GetIngreso(int id)
    {
        return await _context.Ingresos.FindAsync(id);
    }

    // POST: Crea un nuevo ingreso
    public async Task<Ingreso> PostIngreso(Ingreso ingreso)
    {
        _context.Ingresos.Add(ingreso);
        await _context.SaveChangesAsync();
        return ingreso;
    }

    // PUT: Actualiza un ingreso existente
    public async Task<(bool Exists, bool ConcurrencyError)> PutIngreso(int id, Ingreso ingreso)
    {
        _context.Entry(ingreso).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return (true, false);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!IngresoExists(id))
            {
                return (false, false); // No existe
            }
            throw;
        }
        catch (DbUpdateException)
        {
            if (!IngresoExists(id))
                return (false, false);
            throw;
        }
    }

    // DELETE: Elimina un ingreso
    public async Task<bool> DeleteIngreso(int id)
    {
        var ingreso = await _context.Ingresos.FindAsync(id);
        if (ingreso == null)
        {
            return false;
        }

        _context.Ingresos.Remove(ingreso);
        await _context.SaveChangesAsync();
        return true;
    }

    private bool IngresoExists(int id)
    {
        return (_context.Ingresos?.Any(e => e.IdIngreso == id)).GetValueOrDefault();
    }
}