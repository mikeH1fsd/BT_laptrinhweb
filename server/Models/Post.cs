using System.ComponentModel.DataAnnotations;

namespace BlogApi.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Tiêu đề không được để trống")]
        public string Title { get; set; } = string.Empty;

        public string Excerpt { get; set; } = string.Empty;

        [Required(ErrorMessage = "Nội dung không được để trống")]
        public string Content { get; set; } = string.Empty;

        public string Category { get; set; } = "Học React";

        public string Author { get; set; } = "Lê Hoàng Ngọc";

        public string Date { get; set; } = DateTime.Now.ToString("dd/MM/yyyy");

        public string ReadTime { get; set; } = "3 phút đọc";

        public string CoverImage { get; set; } = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80";

        public bool Featured { get; set; } = false;
    }
}
