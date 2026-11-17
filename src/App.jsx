import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import ManagePosts from './pages/ManagePosts';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { getPosts } from './services/api';
import { initialPosts } from './data/mockPosts';
import './App.css';

// Cuộn lên đầu trang mỗi khi chuyển route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    // Tự động gọi API từ ASP.NET Core Backend qua Axios (GET /api/posts)
    getPosts()
      .then(data => {
        if (data && data.length > 0) {
          setPosts(data);
        }
      })
      .catch(err => {
        console.warn('Backend API chưa kết nối, sử dụng dữ liệu tạm thời.', err);
      });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            {/* 1. Trang chủ */}
            <Route path="/" element={<Home posts={posts} />} />

            {/* 2. Trang giới thiệu (Ví dụ: http://localhost:3000/about-us) */}
            <Route path="/about-us" element={<About />} />

            {/* 3. Danh sách tất cả bài viết */}
            <Route path="/posts" element={<Posts posts={posts} />} />

            {/* 4. Chi tiết một bài viết theo ID động (URL params) */}
            <Route path="/posts/:id" element={<PostDetail posts={posts} />} />

            {/* 5. Quản lý bài viết CRUD (Thực hành 2: GET, POST, PUT, DELETE) */}
            <Route path="/manage" element={<ManagePosts />} />

            {/* 6. Trang liên hệ */}
            <Route path="/contact" element={<Contact />} />

            {/* 7. Xử lý đường dẫn không hợp lệ (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
