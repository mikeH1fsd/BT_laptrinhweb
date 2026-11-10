import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page container">
      <div className="contact-header">
        <span className="badge">Liên hệ</span>
        <h1 className="contact-title">Gửi tin nhắn góp ý</h1>
        <p className="contact-subtitle">
          Bạn có góp ý hay câu hỏi nào về trang web? Hãy gửi tin nhắn tại đây nhé!
        </p>
      </div>

      <div className="contact-form-wrapper">
        <div className="contact-form-card">
          {submitted ? (
            <div className="success-box">
              <div className="success-icon">🎉</div>
              <h3>Gửi tin nhắn thành công!</h3>
              <p>Cảm ơn <strong>{formData.name}</strong> đã gửi lời nhắn.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Gửi thêm tin nhắn khác</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Họ và tên <span className="required">*</span></label>
                <input 
                  type="text" 
                  required 
                  placeholder="Nhập họ và tên của bạn..."
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input 
                  type="email" 
                  required 
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Tiêu đề</label>
                <input 
                  type="text" 
                  placeholder="Tiêu đề tin nhắn..."
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Nội dung lời nhắn <span className="required">*</span></label>
                <textarea 
                  rows="5" 
                  required 
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Gửi lời nhắn</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
