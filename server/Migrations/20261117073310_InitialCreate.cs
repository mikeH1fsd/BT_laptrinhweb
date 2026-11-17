using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BlogApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Excerpt = table.Column<string>(type: "TEXT", nullable: false),
                    Content = table.Column<string>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false),
                    Author = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<string>(type: "TEXT", nullable: false),
                    ReadTime = table.Column<string>(type: "TEXT", nullable: false),
                    CoverImage = table.Column<string>(type: "TEXT", nullable: false),
                    Featured = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "Id", "Author", "Category", "Content", "CoverImage", "Date", "Excerpt", "Featured", "ReadTime", "Title" },
                values: new object[,]
                {
                    { 1, "Lê Hoàng Ngọc", "Nhật ký Dev", "React kết hợp cùng Vite mang lại trải nghiệm phát triển siêu tốc nhờ Native ES Modules. Server khởi động chỉ trong mili-giây và HMR cực nhanh.", "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80", "26/10/2026", "Nhớ hồi mới học toàn gõ create-react-app rồi ngồi đợi pha cốc mì tôm mới xong. Chuyển qua Vite cái thấy mượt hẳn, lưu file phát là giao diện đổi liền!", true, "3 phút đọc", "Lần đầu làm quen với React & Vite: Tạm biệt chuỗi ngày chờ Create React App" },
                    { 2, "Lê Hoàng Ngọc", "Học React", "React Router cho phép xây dựng Single Page Application mượt mà. Thay vì tải lại cả trang, nó chỉ tráo đổi component tương ứng.", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80", "25/10/2026", "Cách làm menu click nhảy từ Trang chủ sang /about-us siêu mượt mà không cần F5 lại trình duyệt.", false, "4 phút đọc", "Hiểu nhanh về React Router DOM: Cách chuyển trang mượt mà không bị reload" },
                    { 3, "Linh Đan", "Mẹo Web", "CSS hiện đại với Flexbox và Grid giúp căn giữa và bố cục trang web dễ dàng hơn rất nhiều mà không cần các thủ thuật phức tạp.", "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80", "24/10/2026", "Căn giữa một cái div, vỡ layout khi co màn hình, hay đặt z-index 9999 mà vẫn bị đè... Điểm lại mấy pha tấu hài của dân IT.", false, "5 phút đọc", "Mấy lỗi CSS ngớ ngẩn mà hồi năm nhất mình hay cắm đầu mò cả tối" },
                    { 4, "Lê Hoàng Ngọc", "Góc Sinh Viên", "Chọn đề tài Blog cá nhân giúp tập trung nắm chắc kiến thức căn bản về React và kết nối API backend với ASP.NET Core.", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80", "22/10/2026", "Ban đầu tính làm hẳn sàn thương mại điện tử hoành tráng, sau thấy deadline dí quá nên quyết định làm Blog quản lý cho chỉn chu trước.", false, "4 phút đọc", "Tâm sự chuyện chọn đề tài cuối kỳ và cú thức trắng đêm dựng giao diện" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");
        }
    }
}
