import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import Sidebar from '../components/Sidebar';
import './Home.css';

export default function Home({ posts = [] }) {
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const regularPosts = posts.filter(p => p.id !== featuredPost?.id);

  return (
    <main className="home-page">
      {/* 1. Hero Section - Bài viết nổi bật */}
      <section className="hero-section">
        <div className="container">
          {featuredPost && (
            <div className="hero-banner">
              <div className="hero-content">
                <span className="badge hero-badge">Bài viết mới nhất 📌</span>
                <h1 className="hero-title">
                  <Link to={`/posts/${featuredPost.id}`}>{featuredPost.title}</Link>
                </h1>
                <p className="hero-excerpt">{featuredPost.excerpt}</p>
                <div className="hero-meta">
                  <div className="hero-author">
                    <span>{featuredPost.author}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="hero-action">
                  <Link to={`/posts/${featuredPost.id}`} className="btn btn-primary">
                    Đọc tiếp bài này →
                  </Link>
                </div>
              </div>

              <div className="hero-image-wrapper">
                <Link to={`/posts/${featuredPost.id}`}>
                  <img src={featuredPost.coverImage} alt={featuredPost.title} className="hero-img" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Main Content: Danh sách bài viết & Sidebar */}
      <section className="main-content-section">
        <div className="container content-layout">
          {/* Cột trái: Danh sách bài viết mới nhất */}
          <div className="posts-column">
            <div className="section-header">
              <div>
                <h2 className="section-title">Bài viết mới cập nhật</h2>
                <p className="section-subtitle">Mấy bài note ngắn và chia sẻ kinh nghiệm học web của tụi mình</p>
              </div>
              <Link to="/posts" className="btn btn-outline btn-sm">
                Xem tất cả bài
              </Link>
            </div>

            <div className="posts-grid">
              {regularPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Cột phải: Sidebar thông tin & widget */}
          <div className="sidebar-column">
            <Sidebar posts={posts} />
          </div>
        </div>
      </section>
    </main>
  );
}
