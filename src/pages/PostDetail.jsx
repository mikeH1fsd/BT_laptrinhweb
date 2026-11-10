import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './PostDetail.css';

export default function PostDetail({ posts = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  const [commentInput, setCommentInput] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Tuấn Anh (Bạn cùng lớp)',
      date: '26/10/2026 09:30',
      text: 'Bài viết chia sẻ rất chân thực ông ơi! Mình cũng vừa đổi sang Vite, chạy port 3000 nhanh gấp mấy lần Create React App.'
    },
    {
      id: 2,
      author: 'Phương Thảo',
      date: '26/10/2026 14:15',
      text: 'Cảm ơn nhóm đã chia sẻ nha. Phần giải thích chuyển trang của React Router đọc cái hiểu luôn.'
    }
  ]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim() || !commentAuthor.trim()) return;

    const newComment = {
      id: Date.now(),
      author: commentAuthor,
      date: 'Vừa xong',
      text: commentInput
    };

    setComments([newComment, ...comments]);
    setCommentInput('');
    setCommentAuthor('');
  };

  if (!post) {
    return (
      <div className="post-detail-page container not-found-state">
        <h2>Không tìm thấy bài viết!</h2>
        <p>Bài viết có mã ID "#{id}" không tồn tại hoặc đã bị gỡ bỏ.</p>
        <Link to="/posts" className="btn btn-primary">Quay lại danh sách bài viết</Link>
      </div>
    );
  }

  return (
    <article className="post-detail-page container">
      {/* Back button */}
      <div className="back-navigation">
        <button onClick={() => navigate(-1)} className="btn-back">
          ← Quay lại trang trước
        </button>
        <span className="breadcrumb">
          <Link to="/">Trang chủ</Link> / <Link to="/posts">Bài viết</Link> / <span>{post.category}</span>
        </span>
      </div>

      {/* Header */}
      <header className="article-header">
        <span className="badge article-badge">{post.category}</span>
        <h1 className="article-title">{post.title}</h1>
        
        <div className="article-meta">
          <div className="article-author">
            <div>
              <span className="author-name">{post.author}</span>
              <span className="post-meta-sub">Tác giả bài viết</span>
            </div>
          </div>

          <div className="article-info">
            <span>Ngày đăng: <strong>{post.date}</strong></span>
            <span>•</span>
            <span>Thời gian đọc: <strong>{post.readTime}</strong></span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="article-cover-wrap">
        <img src={post.coverImage} alt={post.title} className="article-cover" />
      </div>

      {/* Content */}
      <div className="article-content">
        <p className="article-lead">{post.excerpt}</p>
        <div className="article-body">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Comment Section */}
      <section className="comment-section">
        <h3 className="comment-title">Thảo luận cùng bạn bè ({comments.length})</h3>

        <form className="comment-form" onSubmit={handleAddComment}>
          <h4>Để lại lời nhắn hoặc góp ý cho nhóm</h4>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Tên của bạn (ví dụ: Bạn cùng lớp A)..." 
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              rows="3" 
              placeholder="Nhập nội dung bình luận hoặc câu hỏi..." 
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Gửi bình luận</button>
        </form>

        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-meta">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
