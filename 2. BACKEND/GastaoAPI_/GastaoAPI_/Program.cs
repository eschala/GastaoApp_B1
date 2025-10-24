using GastaoAPI_.Data.Models;
using GastaoAPI_.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddNewtonsoftJson(); 

// Dentro de Program.cs, en la sección de configuración de servicios (builder.Services)

builder.Services.AddScoped<EgresosService>();
builder.Services.AddScoped<IngresosService>();
builder.Services.AddScoped<RolDeUsuariosService>();
builder.Services.AddScoped<TypeEgresosService>();
builder.Services.AddScoped<TypeIngresosService>();
builder.Services.AddScoped<UsuariosService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ******************************************************************************
// PASO 1: Obtener la cadena de conexi�n desde la configuraci�n
var connectionString = builder.Configuration.GetConnectionString("GastaoDbConnection");

// ******************************************************************************
// PASO 2: Registrar el DbContext con la inyecci�n de dependencias
builder.Services.AddDbContext<GastaoDbContext>(options => options.UseSqlServer(connectionString));

// ******************************************************************************

// --- INICIO DE CONFIGURACI�N CORS ---
// Paso 3: Registrar el servicio CORS y definir una pol�tica
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowSpecificOrigin",
        builder =>
        {
            // Especifica los or�genes permitidos. Para desarrollo con React,
            // generalmente ser� tu puerto de desarrollo de React.
            // Puedes a�adir m�ltiples or�genes separados por coma si es necesario.
            builder
                .WithOrigins("http://localhost:5173") // Reemplaza con la URL de tu app React
                .AllowAnyHeader() // Permite cualquier encabezado en las solicitudes
                .AllowAnyMethod() // Permite cualquier m�todo HTTP (GET, POST, PUT, DELETE, etc.)
                .AllowCredentials(); // Permite el env�o de credenciales (cookies, encabezados de autorizaci�n)

            // Si quieres permitir cualquier origen (NO RECOMENDADO PARA PRODUCCI�N):
            // builder.AllowAnyOrigin()
            //        .AllowAnyHeader()
            //        .AllowAnyMethod();
        }
    );
});

// --- FIN DE CONFIGURACI�N CORS ---

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
app.UseCors("AllowSpecificOrigin"); // Usa el nombre de la pol�tica que definiste

// Este middleware debe ir DESPU�S de UseRouting() (que se incluye impl�citamente)
// y ANTES de UseAuthorization() y MapControllers()
// --- FIN DE USO CORS ---

app.MapControllers();

app.Run();
