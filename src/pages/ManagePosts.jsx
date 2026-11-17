import { useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost } from '../services/api';
import './ManagePosts.css';

export default function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Form state
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Học React',
    author: 'Lê Hoàng Ngọc',
    content: ''
  });

  // Tải danh sách bài viết từ Backend (GET)
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      setError('Không thể kết nối đến Backend API (cổng 5000). Hãy đảm bảo server ASP.NET Core đang chạy.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'Học React',
      author: 'Lê Hoàng Ngọc',
      content: ''
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Xử lý Thêm mới (POST) hoặc Cập nhật (PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Vui lòng nhập đầy đủ tiêu đề và nội dung bài viết!');
      return;
    }

    try {
      if (isEditing) {
        // Gọi PUT
        await updatePost(editId, {
          id: editId,
          ...formData
        });
        setSuccessMsg(`Cập nhật bài viết #${editId} thành công (PUT)!`);
      } else {
        // Gọi POST
        await createPost({
          ...formData,
          date: new Date().toLocaleDateString('vi-VN'),
          readTime: '3 phút đọc',
          coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80'
        });
        setSuccessMsg('Thêm bài viết mới thành công (POST)!');
      }

      resetForm();
      fetchPosts();
    } catch (err) {
      setError('Có lỗi xảy ra khi gửi dữ liệu lên Backend.');
      console.error(err);
    }
  };

  // Bấm nút sửa để nạp dữ liệu lên form
  const handleEditClick = (post) => {
    setIsEditing(true);
    setEditId(post.id);
    setFormData({
      title: post.title,
      category: post.category,
      author: post.author,
      content: post.content
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Xử lý Xóa (DELETE)
  const handleDeleteClick = async (id, title) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa bài viết "${title}" không?`)) {
      return;
    }

    try {
      setError('');
      setSuccessMsg('');
      await deletePost(id);
      setSuccessMsg(`Đã xóa bài viết #${id} thành công (DELETE)!`);
      fetchPosts();
    } catch (err) {
      setError('Lỗi khi xóa bài viết từ Backend.');
      console.error(err);
    }
  };

  return (
    <div className="manage-page container">
      <div className="manage-header">
        <span className="badge">Bài tập thực hành 2</span>
        <h1 className="manage-title">Quản lý bài viết (CRUD API)</h1>
        <p className="manage-subtitle">
          Thực hiện các phương thức GET, POST, PUT, DELETE kết nối giữa React và ASP.NET Core
        </p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}

      {/* Form Thêm / Sửa bài viết */}
      <div className="form-card">
        <h3>{isEditing ? `Chỉnh sửa bài viết #${editId}` : 'Thêm bài viết mới'}</h3>
        <form onSubmit={handleSubmit} className="crud-form">
          <div className="form-row">
            <div className="form-group">
              <label>Tiêu đề bài viết:</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange}
                placeholder="Nhập tiêu đề..."
                required 
              />
            </div>

            <div className="form-group">
              <label>Chuyên mục:</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                <option value="Học React">Học React</option>
                <option value="Nhật ký Dev">Nhật ký Dev</option>
                <option value="Mẹo Web">Mẹo Web</option>
                <option value="Góc Sinh Viên">Góc Sinh Viên</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Nội dung bài viết:</label>
            <textarea 
              name="content" 
              rows="4" 
              value={formData.content} 
              onChange={handleInputChange}
              placeholder="Nhập nội dung bài viết..."
              required
            ></textarea>
          </div>

          <div className="form-actions">
            {isEditing && (
              <button type="button" className="btn btn-outline" onClick={resetForm}>
                Hủy sửa
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Lưu thay đổi' : 'Thêm bài viết'}
            </button>
          </div>
        </form>
      </div>

      {/* Bảng danh sách bài viết */}
      <div className="table-card">
        <div className="table-card-header">
          <h3>Danh sách bài viết trong Database ({posts.length})</h3>
          <button className="btn btn-outline btn-sm" onClick={fetchPosts}>
            Làm mới dữ liệu
          </button>
        </div>

        {loading ? (
          <p className="loading-text">Đang tải dữ liệu từ API Backend...</p>
        ) : posts.length === 0 ? (
          <p className="empty-text">Chưa có bài viết nào trong Database.</p>
        ) : (
          <div className="table-responsive">
            <table className="crud-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>ID</th>
                  <th>Tiêu đề bài viết</th>
                  <th style={{ width: '130px' }}>Chuyên mục</th>
                  <th style={{ width: '120px' }}>Tác giả</th>
                  <th style={{ width: '110px' }}>Ngày đăng</th>
                  <th style={{ width: '150px', textAlign: 'center' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(p => (
                  <tr key={p.id}>
                    <td>#{p.id}</td>
                    <td className="post-title-cell"><strong>{p.title}</strong></td>
                    <td><span className="badge badge-sm">{p.category}</span></td>
                    <td>{p.author}</td>
                    <td>{p.date}</td>
                    <td className="actions-cell">
                      <button 
                        className="btn-action btn-edit" 
                        onClick={() => handleEditClick(p)}
                        title="Sửa bài viết (PUT)"
                      >
                        Sửa
                      </button>
                      <button 
                        className="btn-action btn-delete" 
                        onClick={() => handleDeleteClick(p.id, p.title)}
                        title="Xóa bài viết (DELETE)"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
