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
    public class ProductTypesController : ControllerBase
    {
        private readonly IandeContext _context;

        public ProductTypesController(IandeContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetProductType/{id}")]
        public ProductType GetProductType(int id)
        {
            ProductType pt = _context.ProductTypes.Where(pt => pt.id == id).FirstOrDefault();
            return pt;
            
        }

        [HttpGet]
        [Route("GetProductTypes")]
        public List<ProductType> GetProductTypes()
        {
            var pts = _context.ProductTypes.ToList();
            return pts; 
        }

        [HttpPost]
        [Route("CreateProductType")]
        public ActionResult<ProductType> CreateProductType([FromBody] ProductType productType)
        {
            try
            {
                _context.Add(productType);
                return Ok();
            } catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        [Route("UpdateProductType")]
        public ActionResult<ProductType> UpdateProductType(ProductType productType)
        {
            try
            {
                _context.Update(productType);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

            [HttpPost]
        [Route("DeleteProductType")]
        public ActionResult<ProductType> DeleteProductType([FromBody]int id)
        {
            try
            {
                var pt = _context.ProductTypes.Where(pt => pt.id == id).FirstOrDefault();
                pt.deleted = true;
                _context.Update(pt);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
