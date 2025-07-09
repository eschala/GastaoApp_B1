using System;
using System.Collections.Generic;

namespace GastaoAPI_.Data.Models;

public partial class Ingreso
{
    public int IdIngreso { get; set; }

    public DateTime? RegDateIngreso { get; set; }

    public string TittleIngreso { get; set; } = null!;

    public string? DescriptionIngreso { get; set; }

    public int? AmountIngreso { get; set; }

    public double ValueIngreso { get; set; }

    public int TypeIngresoId { get; set; }

    public int UsuarioIdI { get; set; }

    public virtual TypeIngreso TypeIngreso { get; set; } = null!;

    public virtual Usuario UsuarioIdINavigation { get; set; } = null!;
}
