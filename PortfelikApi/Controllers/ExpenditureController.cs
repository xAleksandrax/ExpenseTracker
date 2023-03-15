using Microsoft.AspNetCore.Mvc;
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
            Expenditure[] tab = new Expenditure[] {};
            return tab;
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