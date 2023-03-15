using Portfelik;

namespace PortfelikApi
{
    public class Expenditure
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public Category Category { get; set; }
    }
}
