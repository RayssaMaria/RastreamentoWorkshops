using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RastreamentoWorkshop.Models;

namespace WorkShopApp.Controllers
{
    [Route("api/workshop")]
    [ApiController]
    public class WorkshopController : ControllerBase
    {
        private readonly RastreamentoWorkshopContext _context;

        public WorkshopController(RastreamentoWorkshopContext context)
        {
            _context = context;
        }

        // GET: api/Workshop
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workshop>>> GetWorkShops()
        {
            return await _context.WorkShops.ToListAsync();
        }

        // GET: api/Workshop/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Workshop>> GetWorkshop(int id)
        {
            var workshop = await _context.WorkShops.FindAsync(id);

            if (workshop == null)
            {
                return NotFound();
            }

            return workshop;
        }

        // PUT: api/Workshop/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkshop(int id, WorkshopDTO workshopDTO)
        {
            var workshop =  await _context.WorkShops.FindAsync(id);
            workshop.Nome = workshopDTO.Nome;
            workshop.DataRealizacao = workshopDTO.DataRealizacao;
            workshop.Descricao = workshopDTO.Descricao;
            workshop.ColaboradoresIds = workshopDTO.ColaboradoresIds;

            if (id != workshop.Id)
            {
                return BadRequest();
            }

            _context.Entry(workshop).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkshopExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Workshop
        [HttpPost]
        public async Task<ActionResult<WorkshopDTO>> PostWorkshop(WorkshopDTO workshopDTO)
        {
            var workshop = new Workshop
            {
                Nome = workshopDTO.Nome,
                DataRealizacao = workshopDTO.DataRealizacao,
                Descricao = workshopDTO.Descricao,
                ColaboradoresIds = workshopDTO.ColaboradoresIds
            };
            _context.WorkShops.Add(workshop);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkshop", new { id = workshop.Id }, workshop);
        }

        // DELETE: api/Workshop/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkshop(int id)
        {
            var workshop = await _context.WorkShops.FindAsync(id);
            if (workshop == null)
            {
                return NotFound();
            }

            _context.WorkShops.Remove(workshop);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkshopExists(int id)
        {
            return _context.WorkShops.Any(e => e.Id == id);
        }
    }
}
