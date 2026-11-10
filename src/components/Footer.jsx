import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <span className="logo-badge">Dev</span>
            <span className="logo-text">Blog</span>
          </Link>
          <p className="footer-desc">
            Website chia sẻ ghi chép học tập, mẹo code Frontend và kinh nghiệm làm bài tập môn Lập trình Web.
          </p>
          <p className="footer-credit">
            © {new Date().getFullYear()} DevBlog - Lê Hoàng Ngọc (N23DCAT048)
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Các trang chính</h4>
          <ul className="footer-links">
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/about-us">Giới thiệu bài tập</Link></li>
            <li><Link to="/posts">Tất cả bài viết</Link></li>
            <li><Link to="/contact">Gửi tin nhắn</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Chủ đề bài viết</h4>
          <ul className="footer-links">
            <li><Link to="/posts">Nhật ký Dev</Link></li>
            <li><Link to="/posts">Học React</Link></li>
            <li><Link to="/posts">Mẹo Web & CSS</Link></li>
            <li><Link to="/posts">Góc Sinh Viên</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Nhận bài mới</h4>
          <p className="footer-subtext">Nhập email để nhận thông báo khi có bài viết mới:</p>
          <form className="footer-form" onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn bạn đã đăng ký theo dõi blog nhé!"); }}>
            <input type="email" placeholder="email_cua_ban@gmail.com" required />
            <button type="submit" className="btn btn-primary">Đăng ký</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
