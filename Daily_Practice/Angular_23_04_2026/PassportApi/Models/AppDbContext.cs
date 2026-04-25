using Microsoft.EntityFrameworkCore;

namespace PassportApi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Passport> Passports { get; set; }
    }
}
