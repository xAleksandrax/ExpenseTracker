using portfelik;
using Microsoft.EntityFrameworkCore;
using Portfelik.Infrastructure.Configurations;

namespace Portfelik.Infrastructure
{
    public class ExpenditureDbContext : DbContext
    {
        public DbSet<Expenditure> Expenditures { get; set; }
        public ExpenditureDbContext(DbContextOptions<ExpenditureDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ExpenditureConfiguration).Assembly);
            base.OnModelCreating(modelBuilder);
        }
    }
}
