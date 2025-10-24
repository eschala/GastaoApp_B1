using GastaoAPI_.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Services;

public class TypeIngresosService
{
    private readonly GastaoDbContext _context;

    public TypeIngresosService(GastaoDbContext context)
    {
        _context = context;
    }

    // GET: Obtiene todos los tipos de ingreso
    public async Task<IEnumerable<TypeIngreso>> GetAll()
    {
        return await _context.TypeIngresos.ToListAsync();
    }

    // GET: Obtiene un tipo de ingreso por su ID
    public async Task<TypeIngreso?> GetTypeIngreso(int id)
    {
        return await _context.TypeIngresos.FindAsync(id);
    }

    // POST: Crea un nuevo tipo de ingreso
    public async Task<TypeIngreso> PostTypeIngreso(TypeIngreso typeIngreso)
    {
        _context.TypeIngresos.Add(typeIngreso);
        await _context.SaveChangesAsync();
        return typeIngreso;
    }

    // PUT: Actualiza un tipo de ingreso existente
    public async Task<(bool Exists, bool ConcurrencyError)> PutTypeIngreso(
        int id,
        TypeIngreso typeIngreso
    )
    {
        _context.Entry(typeIngreso).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return (true, false);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TypeIngresoExists(id))
            {
                return (false, false);
            }
            throw;
        }
        catch (DbUpdateException)
        {
            if (!TypeIngresoExists(id))
                return (false, false);
            throw;
        }
    }

    // DELETE: Elimina un tipo de ingreso
    public async Task<bool> DeleteTypeIngreso(int id)
    {
        var typeIngreso = await _context.TypeIngresos.FindAsync(id);
        if (typeIngreso == null)
        {
            return false;
        }

        _context.TypeIngresos.Remove(typeIngreso);
        await _context.SaveChangesAsync();
        return true;
    }

    private bool TypeIngresoExists(int id)
    {
        return (_context.TypeIngresos?.Any(e => e.IdTypeIngreso == id)).GetValueOrDefault();
    }
}
