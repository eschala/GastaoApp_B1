
Package Nuget Command
Scaffold-DbContext "Server=localhost\SQLEXPRESS;Database=Gastao_Db;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -Output Data/Models -Context GastaoDbContext

Powershell

dotnet tool install --global dotnet-ef

dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Design


dotnet add package Microsoft.AspNetCore.Cors


dotnet ef dbcontext scaffold "Server=localhost\SQLEXPRESS;Database=Gastao_Db;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -o Data/Models -c GastaoDbContext

