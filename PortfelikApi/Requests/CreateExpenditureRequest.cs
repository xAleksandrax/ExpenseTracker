using Portfelik;

namespace PortfelikApi.Requests
{
    public class CreateExpenditureRequest
    {
        public string Name { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public Category Category { get; set; }
    }
}
