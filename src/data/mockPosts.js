export const initialPosts = [
  {
    id: 1,
    title: "Lần đầu làm quen với React & Vite: Tạm biệt chuỗi ngày chờ Create React App",
    excerpt: "Nhớ hồi mới học toàn gõ create-react-app rồi ngồi đợi pha cốc mì tôm mới xong. Chuyển qua Vite cái thấy mượt hẳn, lưu file phát là giao diện đổi liền!",
    content: `Chào mọi người,

Nếu bạn cũng từng trải qua cảm giác gõ lệnh tạo project React xong phải đi pha cốc cà phê quay lại mới thấy xong, thì chắc chắn bạn sẽ hiểu tại sao dạo này ai cũng rủ nhau chuyển qua dùng Vite.

Trong bài viết này, mình xin phép ghi lại vài trải nghiệm thực tế khi làm bài tập:

1. Tốc độ khởi động server:
Vite tận dụng Native ES Modules trực tiếp trên trình duyệt hiện đại. Bấm Enter một phát là server tại http://localhost:3000 chạy ngay lập tức trong chưa đầy 1 giây, không còn phải chờ bundle toàn bộ code như trước.

2. Cập nhật giao diện tức thì (Hot Module Replacement - HMR):
Mỗi lần sửa lại một dòng CSS hay chỉnh sửa đoạn văn bản trong component, trình duyệt cập nhật lại ngay vị trí đó mà không bị reload cả trang, cũng không bị mất state đang nhập dở.

3. Cấu hình cổng 3000 siêu dễ:
Đề bài yêu cầu chạy cổng 3000, mình chỉ cần mở file vite.config.js thêm mục server: { port: 3000 } là xong xuôi, không cần loay hoay set biến môi trường phức tạp.

Chúc các bạn làm bài tập thực hành suôn sẻ nhé!`,
    category: "Nhật ký Dev",
    author: "Lê Hoàng Ngọc",
    date: "26/10/2026",
    readTime: "3 phút đọc",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Hiểu nhanh về React Router DOM: Cách chuyển trang mượt mà không bị reload",
    excerpt: "Cách làm menu click nhảy từ Trang chủ sang /about-us siêu mượt mà không cần F5 lại trình duyệt.",
    content: `Hồi mới học HTML/CSS chuyển qua React, câu hỏi đầu tiên xuất hiện trong đầu mình là: 'Ủa sao cả dự án có đúng một file index.html mà đòi làm website nhiều trang kiểu gì?'.

Sau khi tìm hiểu tài liệu react-router, mình mới vỡ lẽ ra khái niệm Single Page Application (SPA).

Bình thường khi bấm thẻ <a>, trình duyệt sẽ gửi request lên server tải lại toàn bộ mã HTML/CSS/JS mới. Còn với React Router:
- Thẻ <NavLink> hoặc <Link> sẽ chặn hành vi tải lại trang mặc định của trình duyệt.
- Thay vào đó, nó đổi URL trên thanh địa chỉ và tráo đổi Component tương ứng vào màn hình.
- Thẻ <NavLink> còn tự thêm class 'active' giúp mình đổi màu menu đang đứng rất tiện.
- Dùng hook useParams() để lấy ID bài viết từ đường dẫn /posts/:id mà không cần viết nhiều trang riêng lẻ.

Mẹo nhỏ: Nhớ cấu hình thêm route '*' trỏ về component 404 để lỡ ai gõ nhầm link thì vẫn có nút bấm quay về Trang chủ nhé!`,
    category: "Học React",
    author: "Lê Hoàng Ngọc",
    date: "25/10/2026",
    readTime: "4 phút đọc",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Mấy lỗi CSS 'ngớ ngẩn' mà hồi năm nhất mình hay cắm đầu mò cả tối",
    excerpt: "Căn giữa một cái div, vỡ layout khi co màn hình, hay đặt z-index 9999 mà vẫn bị đè... Điểm lại mấy pha tấu hài của dân IT.",
    content: `Ai học lập trình Web mà bảo chưa từng cay cú vì CSS thì chắc chắn là nói dối!

Hồi mới bắt đầu làm quen với HTML và CSS, mình gặp không biết bao nhiêu tình huống dở khóc dở cười:

1. Muốn căn giữa một cái hộp (div):
Ngày xưa loay hoay dùng margin: 0 auto rồi position: absolute, top: 50%, transform... Bây giờ dùng Flexbox chỉ cần 3 dòng:
display: flex;
justify-content: center;
align-items: center;
Là xong ngay trong một nốt nhạc!

2. Trận chiến z-index vô tận:
Càng không thấy phần tử hiện lên thì càng tăng số lên 99, 999, rồi 99999... Sau mới biết phần tử cha của nó chưa được đặt position: relative nên z-index không có tác dụng gì cả.

3. Quên tính năng co giãn (Responsive):
Cứ đặt cứng width: 1200px trên máy tính thấy đẹp mê ly, đến lúc mở thử trên điện thoại thì chữ với ảnh trôi dạt ra tận biển đông.

Lời khuyên chân thành: Cứ chia layout bằng CSS Grid và Flexbox là trang web vừa gọn vừa dễ sửa sau này.`,
    category: "Mẹo Web",
    author: "Linh Đan",
    date: "24/10/2026",
    readTime: "5 phút đọc",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Tâm sự chuyện chọn đề tài cuối kỳ và cú thức trắng đêm dựng giao diện",
    excerpt: "Ban đầu tính làm hẳn sàn thương mại điện tử hoành tráng, sau thấy deadline dí quá nên quyết định làm Blog quản lý cho chỉn chu trước.",
    content: `Kinh nghiệm xương máu của mình sau mấy môn thực hành: Đừng tham làm đề tài quá to khi chưa vững kiến thức cơ bản.

Lúc mới nhận đề tài, mình cũng bàn bạc tính làm nào là sàn thương mại điện tử, đặt phòng khách sạn, mạng xã hội thu nhỏ... Nhưng sau khi xem kỹ yêu cầu bài tập số 1:
- Yêu cầu cấu trúc component rõ ràng.
- Giao diện HTML & CSS trang chủ phải tự viết và định dạng chỉn chu.
- Tích hợp và điều hướng mượt mà bằng React Router.

Mình quyết định chọn làm Website Quản Lý Blog Cá Nhân. Vừa gần gũi với việc học, vừa có đất để viết nội dung thực tế, lại đáp ứng chuẩn xác các tiêu chí của bài tập mà không bị ngợp.`,
    category: "Góc Sinh Viên",
    author: "Lê Hoàng Ngọc",
    date: "22/10/2026",
    readTime: "4 phút đọc",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Checklist 5 điều cần kiểm tra trước khi nộp link repository lên GitHub",
    excerpt: "Tránh trường hợp khi clone về chạy lệnh báo lỗi hoặc thiếu file README hướng dẫn nhé.",
    content: `Chuẩn bị đến hạn nộp bài tập số 1 rồi, các bạn nhớ kiểm tra kỹ lại 5 điểm này trước khi gửi link repo:

1. Đã có file .gitignore chưa?
Tuyệt đối không được commit thư mục 'node_modules' lên GitHub nhé! Vừa nặng mấy trăm MB vừa thiếu chuyên nghiệp.

2. Cổng chạy cổng 3000 đúng yêu cầu:
Đề bài ghi rõ http://localhost:3000 nên các bạn nhớ kiểm tra file vite.config.js để chạy đúng cổng.

3. Kiểm tra link chuyển trang /about-us:
Thử gõ trực tiếp đường dẫn http://localhost:3000/about-us trên trình duyệt xem có nhảy đúng trang giới thiệu không.

4. Viết file README.md tử tế:
Ghi rõ tên đề tài, họ tên sinh viên, các bước gõ lệnh 'npm install' và 'npm run dev' để người xem dễ thao tác.

5. Đặt tên commit rõ ràng:
Hạn chế đặt commit kiểu 'asdasd', 'fix bug', 'nop bai'... Hãy ghi ngắn gọn như 'feat: Hoan thien giao dien trang chu'.`,
    category: "Kinh nghiệm",
    author: "Tuấn Anh",
    date: "20/10/2026",
    readTime: "3 phút đọc",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
  }
];

export const categories = [
  "Tất cả",
  "Nhật ký Dev",
  "Học React",
  "Mẹo Web",
  "Góc Sinh Viên",
  "Kinh nghiệm"
];
