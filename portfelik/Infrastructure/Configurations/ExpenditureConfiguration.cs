using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using portfelik;


namespace Portfelik.Infrastructure.Configurations
{
    public class ExpenditureConfiguration : IEntityTypeConfiguration<Expenditure>
    {
        public void Configure(EntityTypeBuilder<Expenditure> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Amount).IsRequired();
            builder.Property(x => x.Date).IsRequired();
            builder.Property(x => x.Category).IsRequired();

            builder.HasKey(x => x.Id); //klucz glowny
        }
    }
}
