import { Link } from 'react-router-dom';
import './PostCard.css';

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link to={`/posts/${post.id}`} className="post-card-img-link">
        <img src={post.coverImage} alt={post.title} className="post-card-img" loading="lazy" />
        <span className="post-card-category">{post.category}</span>
      </Link>

      <div className="post-card-body">
        <div className="post-card-meta">
          <span className="post-date">{post.date}</span>
          <span className="meta-dot">•</span>
          <span className="post-readtime">{post.readTime}</span>
        </div>

        <h3 className="post-card-title">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h3>

        <p className="post-card-excerpt">{post.excerpt}</p>

        <div className="post-card-footer">
          <div className="post-author">
            <span className="author-name">{post.author}</span>
          </div>

          <Link to={`/posts/${post.id}`} className="read-more-link">
            Đọc tiếp →
          </Link>
        </div>
      </div>
    </article>
  );
}
