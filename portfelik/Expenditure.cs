using Portfelik;
using System;
using System.Collections.Generic;
using System.Text;


namespace portfelik
{
    public class Expenditure
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public Category Category { get; set; }

    }
}
