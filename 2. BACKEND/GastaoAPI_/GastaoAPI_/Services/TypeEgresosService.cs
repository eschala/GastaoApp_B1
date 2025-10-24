using GastaoAPI_.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Services;

public class TypeEgresosService
{
    private readonly GastaoDbContext _context;

    public TypeEgresosService(GastaoDbContext context)
    {
        _context = context;
    }

    // GET: Obtiene todos los tipos de egreso
    public async Task<IEnumerable<TypeEgreso>> GetAll()
    {
        return await _context.TypeEgresos.ToListAsync();
    }

    // GET: Obtiene un tipo de egreso por su ID
    public async Task<TypeEgreso?> GetTypeEgreso(int id)
    {
        return await _context.TypeEgresos.FindAsync(id);
    }

    // POST: Crea un nuevo tipo de egreso
    public async Task<TypeEgreso> PostTypeEgreso(TypeEgreso typeEgreso)
    {
        _context.TypeEgresos.Add(typeEgreso);
        await _context.SaveChangesAsync();
        return typeEgreso;
    }

    // PUT: Actualiza un tipo de egreso existente
    public async Task<(bool Exists, bool ConcurrencyError)> PutTypeEgreso(
        int id,
        TypeEgreso typeEgreso
    )
    {
        _context.Entry(typeEgreso).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return (true, false);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TypeEgresoExists(id))
            {
                return (false, false);
            }
            throw;
        }
        catch (DbUpdateException)
        {
            if (!TypeEgresoExists(id))
                return (false, false);
            throw;
        }
    }

    // DELETE: Elimina un tipo de egreso
    public async Task<bool> DeleteTypeEgreso(int id)
    {
        var typeEgreso = await _context.TypeEgresos.FindAsync(id);
        if (typeEgreso == null)
        {
            return false;
        }

        _context.TypeEgresos.Remove(typeEgreso);
        await _context.SaveChangesAsync();
        return true;
    }

    private bool TypeEgresoExists(int id)
    {
        return (_context.TypeEgresos?.Any(e => e.IdTypeEgreso == id)).GetValueOrDefault();
    }
}
