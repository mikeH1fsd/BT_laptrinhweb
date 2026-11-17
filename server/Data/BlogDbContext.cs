using Microsoft.EntityFrameworkCore;
using BlogApi.Models;

namespace BlogApi.Data
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options) : base(options)
        {
        }

        public DbSet<Post> Posts => Set<Post>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Dữ liệu mẫu ban đầu cho Blog
            modelBuilder.Entity<Post>().HasData(
                new Post
                {
                    Id = 1,
                    Title = "Lần đầu làm quen với React & Vite: Tạm biệt chuỗi ngày chờ Create React App",
                    Excerpt = "Nhớ hồi mới học toàn gõ create-react-app rồi ngồi đợi pha cốc mì tôm mới xong. Chuyển qua Vite cái thấy mượt hẳn, lưu file phát là giao diện đổi liền!",
                    Content = "React kết hợp cùng Vite mang lại trải nghiệm phát triển siêu tốc nhờ Native ES Modules. Server khởi động chỉ trong mili-giây và HMR cực nhanh.",
                    Category = "Nhật ký Dev",
                    Author = "Lê Hoàng Ngọc",
                    Date = "26/10/2026",
                    ReadTime = "3 phút đọc",
                    Featured = true,
                    CoverImage = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80"
                },
                new Post
                {
                    Id = 2,
                    Title = "Hiểu nhanh về React Router DOM: Cách chuyển trang mượt mà không bị reload",
                    Excerpt = "Cách làm menu click nhảy từ Trang chủ sang /about-us siêu mượt mà không cần F5 lại trình duyệt.",
                    Content = "React Router cho phép xây dựng Single Page Application mượt mà. Thay vì tải lại cả trang, nó chỉ tráo đổi component tương ứng.",
                    Category = "Học React",
                    Author = "Lê Hoàng Ngọc",
                    Date = "25/10/2026",
                    ReadTime = "4 phút đọc",
                    Featured = false,
                    CoverImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                },
                new Post
                {
                    Id = 3,
                    Title = "Mấy lỗi CSS ngớ ngẩn mà hồi năm nhất mình hay cắm đầu mò cả tối",
                    Excerpt = "Căn giữa một cái div, vỡ layout khi co màn hình, hay đặt z-index 9999 mà vẫn bị đè... Điểm lại mấy pha tấu hài của dân IT.",
                    Content = "CSS hiện đại với Flexbox và Grid giúp căn giữa và bố cục trang web dễ dàng hơn rất nhiều mà không cần các thủ thuật phức tạp.",
                    Category = "Mẹo Web",
                    Author = "Linh Đan",
                    Date = "24/10/2026",
                    ReadTime = "5 phút đọc",
                    Featured = false,
                    CoverImage = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
                },
                new Post
                {
                    Id = 4,
                    Title = "Tâm sự chuyện chọn đề tài cuối kỳ và cú thức trắng đêm dựng giao diện",
                    Excerpt = "Ban đầu tính làm hẳn sàn thương mại điện tử hoành tráng, sau thấy deadline dí quá nên quyết định làm Blog quản lý cho chỉn chu trước.",
                    Content = "Chọn đề tài Blog cá nhân giúp tập trung nắm chắc kiến thức căn bản về React và kết nối API backend với ASP.NET Core.",
                    Category = "Góc Sinh Viên",
                    Author = "Lê Hoàng Ngọc",
                    Date = "22/10/2026",
                    ReadTime = "4 phút đọc",
                    Featured = false,
                    CoverImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80"
                }
            );
        }
    }
}
