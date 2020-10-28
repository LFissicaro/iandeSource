using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IandeBackend.Data;
using IandeBackend.Models;

namespace IandeBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IandeContext _context;

        public ProductsController(IandeContext context)
        {
             _context = context;
        }

        [HttpGet]
        [Route("GetProductsByType/{productTypeId}")]
        public List<Product> GetProductsByType(int productTypeId)
        {
            return _context.Products.Where(p => p.productTypeId == productTypeId).ToList();
        }

        [HttpGet]
        [Route("GetProducts")]
        public List<Product> GetProducts() 
        {
            return _context.Products.ToList();
        }

        [HttpPost]
        [Route("CreateProduct")]
        public ActionResult<Product> CreateProduct([FromBody] Product product)
        {
            try
            {
                _context.Add(product);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        [Route("UpdateProduct")]
        public ActionResult<Product> UpdateProduct([FromBody] Product product)
        {
            try
            {
                _context.Update(product);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        [Route("DeleteProduct")]
        public ActionResult<Product> DeleteProduct([FromBody] int id)
        {
            try
            {
                var prod = _context.Products.Where(p => p.id == id).FirstOrDefault();
                prod.deleted = true;
                _context.Update(prod);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        [Route("CreateCartProduct")]
        public ActionResult<Cart_Product> CreateCartProduct([FromBody]int productId, int cartId)
        {
            try
            {
                Cart_Product cartProduct = new Cart_Product();
                cartProduct.cartId = cartId;
                cartProduct.productId = productId;
                _context.Add(cartProduct);
                return Ok();
            } catch ( Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
