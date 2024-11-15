Scaffold-DbContext "server=127.0.0.1;port=3306;database=gastao;uid=GastaoApiUser;pwd=Yondaime29" Pomelo.EntityFrameworkCore.MySql -OutputDir Data/Models

Add-Migration Migracion_ATbUser -Context GastaoContext
Add-Migration Migracion_ATbUser -Context Data/GastaoContext
Update-Database -Context GastaoContext
Update-Database -Context Data/GastaoContext