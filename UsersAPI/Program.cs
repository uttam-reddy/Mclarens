using Microsoft.EntityFrameworkCore;
using Services.Interfaces;
using Services.Services;
using UsersAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<UsersAPI.Data.AppDbContext>(options =>
    options.UseSqlServer("Server=VA-ZLYLQQZOOXMF;Database=Users;Trusted_Connection=True;TrustServerCertificate=True;"));
builder.Services.AddTransient<IUserService,UserService>();
var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.Run();
