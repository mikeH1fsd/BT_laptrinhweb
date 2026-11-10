import { useState } from 'react';
import PostCard from '../components/PostCard';
import { categories } from '../data/mockPosts';
import './Posts.css';

export default function Posts({ posts = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchCategory = selectedCategory === "Tất cả" || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="posts-page container">
      <div className="posts-header">
        <span className="badge">Tất cả bài viết</span>
        <h1 className="posts-title">Kho bài viết của tụi mình</h1>
        <p className="posts-subtitle">
          Góc lưu lại mấy bài note kinh nghiệm học React, mẹo CSS và chuyện làm đồ án sinh viên
        </p>

        {/* Search Bar */}
        <div className="posts-search-box">
          <input 
            type="text" 
            placeholder="Gõ từ khóa tìm bài viết (ví dụ: React, CSS, Vite)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="posts-search-input"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="category-filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="all-posts-grid">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="no-posts-found">
          <p>Không tìm thấy bài viết nào khớp với từ khóa "{searchTerm}".</p>
          <button 
            className="btn btn-outline btn-sm" 
            onClick={() => { setSelectedCategory("Tất cả"); setSearchTerm(""); }}
          >
            Xem lại tất cả bài viết
          </button>
        </div>
      )}
    </div>
  );
}
