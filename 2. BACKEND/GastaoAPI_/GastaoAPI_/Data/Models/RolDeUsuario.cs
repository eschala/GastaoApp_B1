using System;
using System.Collections.Generic;

namespace GastaoAPI_.Data.Models;

public partial class RolDeUsuario
{
    public int IdRolUsuario { get; set; }

    public string RolDeUsuario1 { get; set; } = null!;

    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
