# Bài tập thực hành Lập trình Web

- **Họ và tên:** Lê Hoàng Ngọc
- **MSSV:** N23DCAT048
- **Đề tài:** Website Quản lý Blog

---

## 1. Hướng dẫn chạy Back-end (ASP.NET Core Web API)

Yêu cầu máy đã cài .NET 8 SDK.

```bash
cd server
dotnet run
```

- API server chạy tại: `http://localhost:5000`
- Xem tài liệu Swagger: `http://localhost:5000/swagger`

### Danh sách các Endpoint (CRUD):
- `GET /api/posts`: Lấy danh sách tất cả bài viết
- `GET /api/posts/{id}`: Xem chi tiết bài viết
- `POST /api/posts`: Thêm bài viết mới
- `PUT /api/posts/{id}`: Cập nhật bài viết
- `DELETE /api/posts/{id}`: Xóa bài viết

---

## 2. Hướng dẫn chạy Front-end (ReactJS)

```bash
npm install
npm run dev
```

Mở trình duyệt truy cập: `http://localhost:3000`
