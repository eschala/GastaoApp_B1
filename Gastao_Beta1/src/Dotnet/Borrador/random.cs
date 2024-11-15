
using Gastao_B2.Data;
using Microsoft.EntityFrameworkCore;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.Listen(IPAddress.Loopback, 5000); // Escucha en localhost:5000
    serverOptions.Listen(IPAddress.Parse("192.168.101.78"), 5202); // Escucha en la dirección IP deseada
    serverOptions.Listen(IPAddress.Parse("192.168.101.78"), 7190); // Escucha en la dirección IP deseada
    serverOptions.Listen(IPAddress.Parse("192.168.101.78"), 5188); // Escucha en la dirección IP deseada
    serverOptions.Listen(IPAddress.Loopback, 5188); // Escucha en la dirección IP deseada
    serverOptions.Listen(IPAddress.Parse("192.168.101.78"), 7245); // Escucha en la dirección IP deseada
    serverOptions.Listen(IPAddress.Loopback, 7245); // Escucha en la dirección IP deseada
    serverOptions.Listen(IPAddress.Loopback, 5202); // Escucha en la dirección IP deseada
    serverOptions.Listen(IPAddress.Loopback, 7190); // Escucha en la dirección IP deseada
});
// Configuración de la cadena de conexión desde appsettings.json
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

// Configurar la cadena de conexión para la base de datos
var connectionString = builder.Configuration.GetConnectionString("GastaoConnection");

// Agregar el contexto de la base de datos
builder.Services.AddDbContext<GastaoContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin() // Permitir cualquier origen
                   .AllowAnyMethod() // Permitir cualquier método (GET, POST, etc.)
                   .AllowAnyHeader(); // Permitir cualquier encabezado
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI();

}

app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();

app.MapControllers();

app.Run();
