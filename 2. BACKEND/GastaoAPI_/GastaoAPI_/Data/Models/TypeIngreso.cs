using System;
using System.Collections.Generic;

namespace GastaoAPI_.Data.Models;

public partial class TypeIngreso
{
    public int IdTypeIngreso { get; set; }

    public string TypeIngreso1 { get; set; } = null!;

    public virtual ICollection<Ingreso> Ingresos { get; set; } = new List<Ingreso>();
}
