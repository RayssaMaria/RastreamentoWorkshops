using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RastreamentoWorkshop.Models;

public class Workshop
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public DateTime DataRealizacao { get; set; }

    public string? Descricao { get; set; }
    public List<int> ColaboradoresIds { get; set; } = new List<int>();

}