using System;
using System.Collections.Generic;

namespace Gastao_B2.Data.Models;

public partial class ATbUser
{
    public ulong IdUser { get; set; }

    public long DniUser { get; set; }

    public string NameUser { get; set; } = null!;

    public string? LastNameUser { get; set; }

    public string EmailUser { get; set; } = null!;

    public string? PassUser { get; set; }

    public long TipoUserId { get; set; }
}
