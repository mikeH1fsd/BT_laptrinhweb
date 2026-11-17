using Microsoft.EntityFrameworkCore;
using BlogApi.Data;

var builder = WebApplication.CreateBuilder(args);

// 1. Cấu hình kết nối CSDL SQLite qua EF Core
builder.Services.AddDbContext<BlogDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. Cấu hình CORS để cho phép Front-end React (http://localhost:3000) gọi API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 3. Tự động chạy Migration và tạo Database khi khởi động
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<BlogDbContext>();
    db.Database.Migrate();
}

// 4. Bật Swagger UI để kiểm tra các endpoint GET, POST, PUT, DELETE
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Blog API v1");
    c.RoutePrefix = "swagger";
});

app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
