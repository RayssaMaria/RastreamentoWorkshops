using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace RastreamentoWorkshop.Models;

public class RastreamentoWorkshopContext : DbContext
{
    public RastreamentoWorkshopContext(DbContextOptions<RastreamentoWorkshopContext> options)
        : base(options)
    {
    }

    public DbSet<Workshop> WorkShops { get; set; } = null!;
    public DbSet<Colaborador> Colaboradores { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=workshop.db");
    }
}
