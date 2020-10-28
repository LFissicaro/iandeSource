using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IandeBackend.Models
{
    public class ProductType
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string imagePath { get; set; }
        public bool deleted { get; set; }
    }
}
