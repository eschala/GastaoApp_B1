using GastaoAPI_.Data.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ******************************************************************************
// PASO 1: Obtener la cadena de conexión desde la configuración
var connectionString = builder.Configuration.GetConnectionString("GastaoDbConnection");

// ******************************************************************************
// PASO 2: Registrar el DbContext con la inyección de dependencias
builder.Services.AddDbContext<GastaoDbContext>(options =>
    options.UseSqlServer(connectionString));
// ******************************************************************************

// --- INICIO DE CONFIGURACIÓN CORS ---
// Paso 3: Registrar el servicio CORS y definir una política
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            // Especifica los orígenes permitidos. Para desarrollo con React,
            // generalmente será tu puerto de desarrollo de React.
            // Puedes añadir múltiples orígenes separados por coma si es necesario.
            builder.WithOrigins("http://localhost:5173") // Reemplaza con la URL de tu app React
                   .AllowAnyHeader()    // Permite cualquier encabezado en las solicitudes
                   .AllowAnyMethod()    // Permite cualquier método HTTP (GET, POST, PUT, DELETE, etc.)
                   .AllowCredentials(); // Permite el envío de credenciales (cookies, encabezados de autorización)

            // Si quieres permitir cualquier origen (NO RECOMENDADO PARA PRODUCCIÓN):
            // builder.AllowAnyOrigin()
            //        .AllowAnyHeader()
            //        .AllowAnyMethod();
        });
});
// --- FIN DE CONFIGURACIÓN CORS ---


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// --- INICIO DE USO CORS ---
// Paso 4: Habilitar CORS en el pipeline de la solicitud
app.UseCors("AllowSpecificOrigin"); // Usa el nombre de la política que definiste
// Este middleware debe ir DESPUÉS de UseRouting() (que se incluye implícitamente)
// y ANTES de UseAuthorization() y MapControllers()
// --- FIN DE USO CORS ---

app.MapControllers();

app.Run();