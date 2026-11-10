import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Trang này không tồn tại rồi bạn ơi!</h2>
        <p className="not-found-desc">
          Hình như đường dẫn URL bạn vừa gõ bị nhầm hoặc bài viết này đã được dọn dẹp rồi. Bấm nút dưới để quay về Trang chủ nhé.
        </p>
        <Link to="/" className="btn btn-primary">
          ← Quay về Trang chủ
        </Link>
      </div>
    </div>
  );
}
