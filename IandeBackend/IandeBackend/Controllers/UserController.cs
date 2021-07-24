using IandeBackend.Data;
using IandeBackend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IandeBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IandeContext _context;
        public UserController(IandeContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("CreateUser/{user}")]
        public ActionResult<User> CreateUser(User user)
        {
            try
            {
                _context.Add(user);
                return Ok();
            } catch (Exception e)
            {
                return BadRequest(e);
            }
        } 

        [HttpGet]
        [Route("GetUsers")]
        public List<User> GetUsers()
        {
            var users = _context.Users.Where(user => user.deleted == false).ToList();
            return users;
        }
    }
}
