import { Link } from 'react-router-dom';
import { categories } from '../data/mockPosts';
import './Sidebar.css';

export default function Sidebar({ posts = [] }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <aside className="blog-sidebar">
      {/* Widget 1: Tác giả / Về chúng mình */}
      <div className="sidebar-widget author-widget">
        <h3 className="widget-title">Về tác giả</h3>
        <div className="author-card">
          <h4 className="widget-author-name">Lê Hoàng Ngọc</h4>
          <p className="widget-author-bio">
            MSSV: N23DCAT048. Blog cá nhân chia sẻ kiến thức lập trình Web và ghi chép thực hành.
          </p>
          <Link to="/about-us" className="btn btn-outline btn-sm">
            Xem thông tin →
          </Link>
        </div>
      </div>

      {/* Widget 2: Chuyên mục */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Chủ đề bài viết</h3>
        <ul className="category-list">
          {categories.filter(cat => cat !== "Tất cả").map((cat, idx) => (
            <li key={idx} className="category-item">
              <Link to="/posts" className="category-link">
                <span>{cat}</span>
                <span className="category-count">
                  {posts.filter(p => p.category === cat).length || 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Widget 3: Bài viết mới nhất */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Bài mới lên sóng</h3>
        <div className="recent-posts-list">
          {recentPosts.map(p => (
            <Link to={`/posts/${p.id}`} key={p.id} className="recent-post-item">
              <img src={p.coverImage} alt={p.title} className="recent-post-thumb" />
              <div className="recent-post-info">
                <span className="recent-post-date">{p.date}</span>
                <h5 className="recent-post-title">{p.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
