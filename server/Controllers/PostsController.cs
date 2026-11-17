using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogApi.Data;
using BlogApi.Models;

namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly BlogDbContext _context;

        public PostsController(BlogDbContext context)
        {
            _context = context;
        }

        // GET: api/posts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            var posts = await _context.Posts
                .OrderByDescending(p => p.Id)
                .ToListAsync();
            return Ok(posts);
        }

        // GET: api/posts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound(new { message = $"Không tìm thấy bài viết với mã {id}" });
            }

            return Ok(post);
        }

        // POST: api/posts
        [HttpPost]
        public async Task<ActionResult<Post>> CreatePost([FromBody] Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (string.IsNullOrWhiteSpace(post.Date))
            {
                post.Date = DateTime.Now.ToString("dd/MM/yyyy");
            }

            if (string.IsNullOrWhiteSpace(post.Author))
            {
                post.Author = "Lê Hoàng Ngọc";
            }

            if (string.IsNullOrWhiteSpace(post.Excerpt) && !string.IsNullOrWhiteSpace(post.Content))
            {
                post.Excerpt = post.Content.Length > 120 
                    ? post.Content.Substring(0, 120) + "..." 
                    : post.Content;
            }

            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
        }

        // PUT: api/posts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, [FromBody] Post updatedPost)
        {
            if (id != updatedPost.Id)
            {
                return BadRequest(new { message = "Mã bài viết không trùng khớp" });
            }

            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound(new { message = $"Không tìm thấy bài viết với mã {id}" });
            }

            post.Title = updatedPost.Title;
            post.Content = updatedPost.Content;
            post.Excerpt = updatedPost.Excerpt;
            post.Category = updatedPost.Category;
            post.Author = updatedPost.Author;
            post.CoverImage = updatedPost.CoverImage;
            post.ReadTime = updatedPost.ReadTime;
            post.Featured = updatedPost.Featured;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return Ok(post);
        }

        // DELETE: api/posts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound(new { message = $"Không tìm thấy bài viết với mã {id}" });
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return Ok(new { message = $"Đã xóa thành công bài viết mã {id}" });
        }

        private bool PostExists(int id)
        {
            return _context.Posts.Any(e => e.Id == id);
        }
    }
}
