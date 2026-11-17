import axios from 'axios';

// Cấu hình base URL trỏ tới ASP.NET Core Web API (chạy tại cổng 5000)
const API_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. GET: Lấy danh sách tất cả bài viết
export const getPosts = async () => {
  const response = await apiClient.get('/posts');
  return response.data;
};

// 2. GET: Lấy chi tiết một bài viết theo ID
export const getPostById = async (id) => {
  const response = await apiClient.get(`/posts/${id}`);
  return response.data;
};

// 3. POST: Tạo mới một bài viết
export const createPost = async (postData) => {
  const response = await apiClient.post('/posts', postData);
  return response.data;
};

// 4. PUT: Chỉnh sửa bài viết
export const updatePost = async (id, postData) => {
  const response = await apiClient.put(`/posts/${id}`, postData);
  return response.data;
};

// 5. DELETE: Xóa bài viết
export const deletePost = async (id) => {
  const response = await apiClient.delete(`/posts/${id}`);
  return response.data;
};

export default apiClient;
