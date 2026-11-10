# DevBlog - Bài Tập Thực Hành Số 1

> **Môn:** Lập trình Web  
> **Sinh viên thực hiện:** Lê Hoàng Ngọc - N23DCAT048  
> **Đề tài:** Website Quản Lý Blog (DevBlog)  

---

## 📌 Nội dung thực hiện theo yêu cầu đề bài

| STT | Yêu cầu đề bài | Trạng thái | Chi tiết triển khai |
|:---:|:---|:---:|:---|
| **1** | Tạo project bằng ReactJS với framework Vite/Next.js | ✅ Hoàn thành | Khởi tạo với **Vite + React 19**, cấu hình server chạy tại cổng `port: 3000`. |
| **2** | Viết HTML tạo giao diện trang chủ theo đề tài | ✅ Hoàn thành | Thiết kế trang chủ đầy đủ: Banner Hero bài viết nổi bật, thanh tính năng, danh sách bài viết dạng card và sidebar. |
| **3** | Tạo file `.css` định dạng trang chủ | ✅ Hoàn thành | Viết CSS chi tiết tại `src/pages/Home.css`, hệ thống CSS Variables, Flexbox, CSS Grid và responsive toàn diện. |
| **4** | Đăng ký tài khoản GitHub, khởi tạo repo & push source code | ⏳ Sẵn sàng | Sẵn sàng cấu hình Git và hướng dẫn push lên repository cá nhân. |
| **5** | Tạo thêm các pages/components khác | ✅ Hoàn thành | Tạo các pages: `About` (`/about-us`), `Posts` (`/posts`), `PostDetail` (`/posts/:id`), `Contact` (`/contact`), `NotFound` (404); Components: `Navbar`, `Footer`, `PostCard`, `Sidebar`. |
| **6** | Tìm hiểu & tích hợp thư viện `react-router` | ✅ Hoàn thành | Tích hợp `react-router-dom` v7 với `BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useParams`, `useNavigate`. |
| **7** | Cấu hình chuyển trang khi click menu hoặc qua URL | ✅ Hoàn thành | Menu điều hướng tức thì; hỗ trợ truy cập trực tiếp bằng URL (ví dụ: `http://localhost:3000/about-us`). |

---

## 🚀 Hướng dẫn cài đặt và chạy thử

### 1. Yêu cầu môi trường
- Đã cài đặt [Node.js](https://nodejs.org/) (khuyến nghị phiên bản 18 trở lên).

### 2. Cài đặt các thư viện phụ thuộc
```bash
npm install
```

### 3. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```

Server sẽ tự động mở tại địa chỉ:
👉 **`http://localhost:3000`**

---

## 🌐 Danh sách các đường dẫn (Routes) trong dự án

* **Trang chủ:** `http://localhost:3000/`  
  *Giao diện chính giới thiệu blog, bài viết nổi bật, danh sách bài mới và sidebar.*
* **Trang giới thiệu:** `http://localhost:3000/about-us` *(Khớp ví dụ của đề bài)*  
  *Thông tin dự án, sứ mệnh và các công nghệ sử dụng.*
* **Tất cả bài viết:** `http://localhost:3000/posts`  
  *Kho bài viết có thanh tìm kiếm theo từ khóa và bộ lọc chuyên mục (Frontend, ReactJS, CSS, ...).*
* **Chi tiết bài viết:** `http://localhost:3000/posts/:id` (ví dụ: `http://localhost:3000/posts/1`)  
  *Đọc nội dung đầy đủ bài blog, thông tin tác giả, bình luận bài viết.*
* **Liên hệ:** `http://localhost:3000/contact`  
  *Form gửi phản hồi và liên hệ.*
* **Trang 404:** Truy cập URL bất kỳ không tồn tại để kiểm tra giao diện báo lỗi thân thiện.
