import axios from "axios";

const url = {
  baseUrl: "https://61d6f33c35f71e0017c2e922.mockapi.io",
  r2s: "/Book",
  login: "http://quanlycudan.modunsoft.com/api/Users/authenticate",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
