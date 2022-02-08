import api from "./api";

const getListBooks = () => api.get(api.url.r2s).then((res) => res.data);
const getIdBook = (id) =>
  api.get(`${api.url.r2s}/${id}`).then((res) => res.data);
const updateBook = (id, data) =>
  api.put(`${api.url.r2s}/${id}`, data).then((res) => res.data);
const createBook = (data) =>
  api.post(api.url.r2s, data).then((res) => res.data);
const deleteBook = (id) =>
  api.delete(`${api.url.r2s}/${id}`).then((res) => res.data);
const login = () => api.post(api.login).then((res) => res.data);
const bookService = {
  getListBooks,
  getIdBook,
  updateBook,
  createBook,
  deleteBook,
  login,
};
export default bookService;
