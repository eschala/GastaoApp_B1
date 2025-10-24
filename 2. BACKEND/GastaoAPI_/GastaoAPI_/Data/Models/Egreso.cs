using System;
using System.Collections.Generic;

namespace GastaoAPI_.Data.Models;

public partial class Egreso
{
    public int IdEgreso { get; set; }

    public DateTime? RegDateEgreso { get; set; }

    public string? TittleEgreso { get; set; }

    public string? DescriptionEgreso { get; set; }

    public int? AmountEgreso { get; set; }

    public double ValueEgreso { get; set; }

    public int TypeEgresoId { get; set; }

    public int UsuarioIdE { get; set; }

    public virtual TypeEgreso? TypeEgreso { get; set; }

    public virtual Usuario? UsuarioIdENavigation { get; set; }
}
