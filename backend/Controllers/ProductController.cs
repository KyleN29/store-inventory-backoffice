using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using store_inventory_backoffice.Data;
using store_inventory_backoffice.Models;

namespace store_inventory_backoffice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        // POST api/<ProductController>
        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            _context.Products.Add(product);
            Console.WriteLine("Added: ", product);
            await _context.SaveChangesAsync();

            return Ok(product);
        }

        // GET api/<ProductController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }
    }
}
