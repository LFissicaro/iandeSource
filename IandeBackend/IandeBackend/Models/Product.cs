using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IandeBackend.Models
{
    public class Product
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public double sellPrice { get; set; }
        public int productTypeId { get; set; }
        public ProductType productType { get; set; }
        public string imagePath { get; set; }
        public int quantity { get; set; }
        public bool deleted { get; set; }

    }
}
