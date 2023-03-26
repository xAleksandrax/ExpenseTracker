using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Portfelik;
using Portfelik.Infrastructure;
using PortfelikApi.Requests;

namespace PortfelikApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpenditureController : ControllerBase
    {
        private readonly ILogger<ExpenditureController> _logger;
        private readonly ExpenditureDbContext _context;
        public ExpenditureController(ILogger<ExpenditureController> logger, ExpenditureDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet(Name = "GetExpenditures")]
        public IEnumerable<Expenditure> Get()
        {
            List<Expenditure> expenditures = new List<Expenditure>();
            string connectionString = "Data Source=LAPTOP-TN605T47\\SQLEXPRESS;Initial Catalog=Portfelik;Integrated Security=True;TrustServerCertificate=True;";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = "SELECT * FROM Expenditures";
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Expenditure expenditure = new Expenditure();
                    expenditure.Id = reader.GetInt32(0);
                    expenditure.Name = reader.GetString(1);
                    expenditure.Amount = reader.GetDecimal(2);
                    expenditure.Date = reader.GetDateTime(3);
                    expenditure.Category = (Category)Enum.ToObject(typeof(Category), reader.GetInt32(4));
                    expenditures.Add(expenditure);
                }
                reader.Close();
            }
            return expenditures;
        }


        [HttpPost(Name = "CreateExpenditure")]
        public async Task<Expenditure> Post(CreateExpenditureRequest request)
        {
            Expenditure expenditure = new Expenditure();
            expenditure.Name = request.Name;
            expenditure.Amount = request.Amount;
            expenditure.Category = request.Category;
            expenditure.Date = request.Date;
     
            _context.Expenditures.Add(expenditure);
            await _context.SaveChangesAsync();
            return expenditure;
        }
    }
}