using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IandeBackend.Models
{
    public class Cart_Product
    {
        public int productId { get; set; }
        public Product product { get; set; }
        public int cartId { get; set; }
        public Cart cart { get; set; }
    }
}
