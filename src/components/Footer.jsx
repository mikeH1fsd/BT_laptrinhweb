import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <p className="footer-credit">
          DevBlog © {new Date().getFullYear()} - <strong>Lê Hoàng Ngọc</strong> (N23DCAT048)
        </p>
      </div>
    </footer>
  );
}
