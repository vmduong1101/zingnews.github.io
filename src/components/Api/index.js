import axios from "axios";

const URL = "https://61d6f33c35f71e0017c2e922.mockapi.io";
const URL_LOGIN = "https://quanlycudan.azurewebsites.net/api";
const URL_ADMINBOOKNEW = "https://61e2a7a93050a10017682216.mockapi.io/";
// Api Book
export const getListBooks = () => axios.get(`${URL}/Book`);
export const createBook = (payload) => axios.post(`${URL}/Book`, payload);
export const getDetailBook = (id) => axios.get(`${URL}/Book/${id}`);
export const updateBook = (payload) =>
  axios.put(`${URL}/Book/${payload.id}`, payload);

export const deleteBook = (id) => {
  return axios.delete(`${URL}/Book/${id}`);
};
// Api Dang1

export const getListDang1 = () => axios.get(`${URL}/Dang1`);
export const createDang1 = (payload) => axios.post(`${URL}/Dang1`, payload);
export const getDetailDang1 = (id) => axios.get(`${URL}/Dang1/${id}`);
export const updateDang1 = (payload) =>
  axios.put(`${URL}/Dang1/${payload.id}`, payload);

export const deleteDang1 = (id) => {
  return axios.delete(`${URL}/Dang1/${id}`);
};
// Api Dang2

export const getListDang2 = () => axios.get(`${URL}/Dang2`);
export const createDang2 = (payload) => axios.post(`${URL}/Dang2`, payload);
export const getDetailDang2 = (id) => axios.get(`${URL}/Dang2/${id}`);
export const updateDang2 = (payload) =>
  axios.put(`${URL}/Dang2/${payload.id}`, payload);

export const deleteDang2 = (id) => {
  return axios.delete(`${URL}/Dang2/${id}`);
};

// Api Dang3

export const getListDang3 = () => axios.get(`${URL}/Dang3`);
export const createDang3 = (payload) => axios.post(`${URL}/Dang3`, payload);
export const getDetailDang3 = (id) => axios.get(`${URL}/Dang3/${id}`);
export const updateDang3 = (payload) =>
  axios.put(`${URL}/Dang3/${payload.id}`, payload);

export const deleteDang3 = (id) => {
  return axios.delete(`${URL}/Dang3/${id}`);
};
//Api Login

export const loginRequest = (payload) => {
  return axios.post(`${URL_LOGIN}/Users/authenticate`, payload);
};
//Admin BookNew

export const getListAdminBookNew = () =>
  axios.get(`${URL_ADMINBOOKNEW}/BookNew`);
export const createAdminBookNew = (payload) =>
  axios.post(`${URL_ADMINBOOKNEW}/BookNew`, payload);
export const getDetailAdminBookNew = (id) =>
  axios.get(`${URL_ADMINBOOKNEW}/BookNew/${id}`);
export const updateAdminBookNew = (payload) =>
  axios.put(`${URL_ADMINBOOKNEW}/BookNew/${payload.id}`, payload);

export const deleteAdminBookNew = (id) => {
  return axios.delete(`${URL_ADMINBOOKNEW}/BookNew/${id}`);
};
//Admin Mutimedia

export const getListAdminMulmedia = () =>
  axios.get(`${URL_ADMINBOOKNEW}/Multimedia`);
export const createAdminMulmedia = (payload) =>
  axios.post(`${URL_ADMINBOOKNEW}/Multimedia`, payload);
export const getDetailAdminMulmedia = (id) =>
  axios.get(`${URL_ADMINBOOKNEW}/Multimedia/${id}`);
export const updateAdminMulmedia = (payload) =>
  axios.put(`${URL_ADMINBOOKNEW}/Multimedia/${payload.id}`, payload);

export const deleteAdminMulmedia = (id) => {
  return axios.delete(`${URL_ADMINBOOKNEW}/Multimedia/${id}`);
};
//Api Publish

export const getListPublishs = () => axios.get(`${URL_ADMINBOOKNEW}/Publish`);
export const createPublish = (payload) =>
  axios.post(`${URL_ADMINBOOKNEW}/Publish`, payload);
export const getDetailPublish = (id) =>
  axios.get(`${URL_ADMINBOOKNEW}/Publish/${id}`);
export const updatePublish = (payload) =>
  axios.put(`${URL_ADMINBOOKNEW}/Publish/${payload.id}`, payload);

export const deletePublish = (id) => {
  return axios.delete(`${URL_ADMINBOOKNEW}/Publish/${id}`);
};

//Admin BookNew

export const getListAdminPublishNew = () =>
  axios.get(`${URL_ADMINBOOKNEW}/PublishNew`);
export const createAdminPublishNew = (payload) =>
  axios.post(`${URL_ADMINBOOKNEW}/PublishNew`, payload);
export const getDetailAdminPublishNew = (id) =>
  axios.get(`${URL_ADMINBOOKNEW}/PublishNew/${id}`);
export const updateAdminPublishNew = (payload) =>
  axios.put(`${URL_ADMINBOOKNEW}/PublishNew/${payload.id}`, payload);

export const deleteAdminPublishNew = (id) => {
  return axios.delete(`${URL_ADMINBOOKNEW}/PublishNew/${id}`);
};
