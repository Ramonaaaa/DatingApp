using Microsoft.EntityFrameworkCore;

namespace DatingAPP.API.Controllers.Models.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {            
        }

        public DbSet<Value> Values { get; set; }
    }
}