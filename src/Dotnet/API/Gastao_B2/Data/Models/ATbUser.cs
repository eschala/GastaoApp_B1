using System;
using System.Collections.Generic;

namespace Gastao_B2.Data.Models;

public partial class ATbUser
{
    public long IdUser { get; set; }

    public long DniUser { get; set; }

    public string EmailUser { get; set; } = null!;

    public long TipoUserId { get; set; }

    public string LastNameUser { get; set; } = null!;

    public string NameUser { get; set; } = null!;

    public virtual AzTbTipoUser TipoUser { get; set; } = null!;
}
