import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            {/* 1. Trang chủ */}
            <Route path="/" element={<Home posts={initialPosts} />} />

            {/* 2. Trang giới thiệu (Ví dụ: http://localhost:3000/about-us) */}
            <Route path="/about-us" element={<About />} />

            {/* 3. Danh sách tất cả bài viết */}
            <Route path="/posts" element={<Posts posts={initialPosts} />} />

            {/* 4. Chi tiết một bài viết theo ID động (URL params) */}
            <Route path="/posts/:id" element={<PostDetail posts={initialPosts} />} />

            {/* 5. Trang liên hệ */}
            <Route path="/contact" element={<Contact />} />

            {/* 6. Xử lý đường dẫn không hợp lệ (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
