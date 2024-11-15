using Gastao_B2.Data;
using Gastao_B2.Data.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Gastao_B2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AzTbTipoUsersController : ControllerBase
    {
        private readonly GastaoContext _context;

        public AzTbTipoUsersController(GastaoContext context)
        {
            _context = context;
        }

        // GET: api/<AzTbTipoUser>
        [EnableCors("AllowAll")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AzTbTipoUser>>> GetAzTbTipoUsers()
        {
            return await _context.AzTbTipoUsers.ToListAsync();
        }

        // GET api/<AzTbTipoUser>/5
        [EnableCors("AllowAll")]
        [HttpGet("{id}")]
        public async Task<ActionResult<AzTbTipoUser>> GetAzTbTipoUser(int id)
        {
            var azTbTipoUser = await _context.AzTbTipoUsers.FindAsync(id);

            if (azTbTipoUser == null)
            {
                return NotFound();
            }

            return azTbTipoUser;
        }

        // POST api/<AzTbTipoUser>
        [HttpPost]

        public async Task<ActionResult<ATbUser>> PostATbUser(AzTbTipoUser azTbTipoUser)
        {
            _context.AzTbTipoUsers.Add(azTbTipoUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAzTbTipoUser", new { id = azTbTipoUser.IdTipoUser }, azTbTipoUser);
        }


        // PUT api/<AzTbTipoUser>/
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAzTbTipoUser(int id, AzTbTipoUser azTbTipoUser)
        {
            if (id != azTbTipoUser.IdTipoUser)
            {
                return BadRequest();
            }

            _context.Entry(azTbTipoUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AzTbTipoUserExists(id))
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

        // DELETE api/AzTbTipoUser/
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAzTbTipoUser(int id)
        {
            var aTbUser = await _context.AzTbTipoUsers.FindAsync(id);
            if (aTbUser == null)
            {
                return NotFound();
            }

            _context.AzTbTipoUsers.Remove(aTbUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AzTbTipoUserExists(int id)
        {
            return _context.AzTbTipoUsers.Any(e => e.IdTipoUser == id);
        }
    }
}
