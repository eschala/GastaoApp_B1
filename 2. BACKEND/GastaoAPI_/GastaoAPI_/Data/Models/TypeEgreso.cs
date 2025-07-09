using System;
using System.Collections.Generic;

namespace GastaoAPI_.Data.Models;

public partial class TypeEgreso
{
    public int IdTypeEgreso { get; set; }

    public string TypeEgreso1 { get; set; } = null!;

    public virtual ICollection<Egreso> Egresos { get; set; } = new List<Egreso>();
}
