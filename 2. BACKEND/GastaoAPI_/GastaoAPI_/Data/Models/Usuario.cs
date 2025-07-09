using System;
using System.Collections.Generic;

namespace GastaoAPI_.Data.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public int DniUsuario { get; set; }

    public string NameUsuario { get; set; } = null!;

    public string? LastNameUsuario { get; set; }

    public string EmailUsuario { get; set; } = null!;

    public string PassUsuario { get; set; } = null!;

    public int RolUsuarioId { get; set; }

    public virtual ICollection<Egreso> Egresos { get; set; } = new List<Egreso>();

    public virtual ICollection<Ingreso> Ingresos { get; set; } = new List<Ingreso>();

    public virtual RolDeUsuario RolUsuario { get; set; } = null!;
}
