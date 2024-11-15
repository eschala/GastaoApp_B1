using System;
using System.Collections.Generic;

namespace Gastao_B2.Data.Models;

public partial class AzTbTipoUser
{
    public long IdTipoUser { get; set; }

    public string? TipoUser { get; set; }

    public virtual ICollection<ATbUser> ATbUsers { get; set; } = new List<ATbUser>();
}
