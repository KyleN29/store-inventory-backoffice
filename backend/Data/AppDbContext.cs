using Microsoft.EntityFrameworkCore;
using store_inventory_backoffice.Models;

namespace store_inventory_backoffice.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products => Set<Product>();
    }
}
