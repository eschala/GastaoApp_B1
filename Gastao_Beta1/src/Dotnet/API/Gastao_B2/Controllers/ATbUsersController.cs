
using Gastao_B2.Data.Models;
using Gastao_B2.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Gastao_B2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ATbUsersController : ControllerBase
    {
        private readonly GastaoContext _context;

        public ATbUsersController(GastaoContext context)
        {
            _context = context;
        }

        // GET: api/ATbUsers
        //[EnableCors("AllowAll")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ATbUser>>> GetATbUsers()
        {
            return await _context.ATbUsers.ToListAsync();
        }

        // GET: api/ATbUsers/5
        //[EnableCors("AllowAll")]
        [HttpGet("{id}")]
        public async Task<ActionResult<ATbUser>> GetATbUser(ulong id)
        {
            var aTbUser = await _context.ATbUsers.FindAsync(id);

            if (aTbUser == null)
            {
                return NotFound();
            }

            return aTbUser;
        }

        // PUT: api/ATbUsers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutATbUser(ulong id, ATbUser aTbUser)
        {
            if (id != aTbUser.IdUser)
            {
                return BadRequest();
            }

            _context.Entry(aTbUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ATbUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ATbUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]

        public async Task<ActionResult<ATbUser>> PostATbUser(ATbUser aTbUser)
        {
            _context.ATbUsers.Add(aTbUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetATbUser", new { id = aTbUser.IdUser }, aTbUser);
        }

        // DELETE: api/ATbUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteATbUser(ulong id)
        {
            var aTbUser = await _context.ATbUsers.FindAsync(id);
            if (aTbUser == null)
            {
                return NotFound();
            }

            _context.ATbUsers.Remove(aTbUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ATbUserExists(ulong id)
        {
            return _context.ATbUsers.Any(e => e.IdUser == id);
        }
        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Busqueda
        // GET: api/ATbUsers/Search?filter={valor}
        //[EnableCors("AllowAll")]
        [HttpGet("Search")]
        public async Task<ActionResult<IEnumerable<ATbUser>>> SearchUsers(string filter)
        {
            var users = await _context.ATbUsers
                .Where(u =>
                    EF.Functions.Like(u.IdUser.ToString(), $"%{filter}%") ||
                    EF.Functions.Like(u.TipoUserId.ToString(), $"%{filter}%") ||
                    EF.Functions.Like(u.NameUser, $"%{filter}%") ||
                    EF.Functions.Like(u.LastNameUser, $"%{filter}%") ||
                    EF.Functions.Like(u.DniUser.ToString(), $"%{filter}%") ||
                    EF.Functions.Like(u.EmailUser, $"%{filter}%")
                /* ||
                EF.Functions.Like(u.PassUser, $"%{filter}%")
                */
                )
                .ToListAsync();

            if (users == null || !users.Any())
            {
                return NotFound("No se encontraron usuarios que coincidan con el filtro proporcionado.");
            }

            return users;
        }

    }
}
