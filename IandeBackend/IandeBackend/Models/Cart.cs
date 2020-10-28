using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IandeBackend.Models
{
    public class Cart
    {
        public int id { get; set; }
        public double price { get; set; }
        public DateTime finalizedTime { get; set; }
        public List<Product> Products { get; set; }
        public bool deleted { get; set; }
    }
}
