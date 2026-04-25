using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PassportApi.Models;

namespace PassportApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassportsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PassportsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Passports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passport>>> GetPassports()
        {
            return await _context.Passports.ToListAsync();
        }

        // GET: api/Passports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passport>> GetPassport(int id)
        {
            var passport = await _context.Passports.FindAsync(id);

            if (passport == null)
            {
                return NotFound();
            }

            return passport;
        }

        // PUT: api/Passports/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassport(int id, Passport passport)
        {
            if (id != passport.id)
            {
                return BadRequest();
            }

            _context.Entry(passport).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassportExists(id))
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

        // POST: api/Passports
        [HttpPost]
        public async Task<ActionResult<Passport>> PostPassport(Passport passport)
        {
            _context.Passports.Add(passport);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassport", new { id = passport.id }, passport);
        }

        // DELETE: api/Passports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassport(int id)
        {
            var passport = await _context.Passports.FindAsync(id);
            if (passport == null)
            {
                return NotFound();
            }

            _context.Passports.Remove(passport);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassportExists(int id)
        {
            return _context.Passports.Any(e => e.id == id);
        }
    }
}
