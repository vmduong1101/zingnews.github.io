import {
  SET_LOADING_STEP,
  GET_ALL_BOOKS,
  SAVE_ALL_BOOKS,
  CREATE_BOOK_REQUEST,
  UPDATE_BOOK_REQUEST,
  SAVE_UPDATE_BOOK,
  GET_DETAIL_BOOK,
  SAVE_DETAIL_BOOK,
  DELETE_BOOK_REQUEST,
} from "./constants";
// Action Book
export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

export function getAllBooks(payload) {
  return {
    type: GET_ALL_BOOKS,
    payload,
  };
}

export function saveAllBooks(payload) {
  return {
    type: SAVE_ALL_BOOKS,
    payload,
  };
}

// export function createBook(payload, resolve) {
//   return {
//     type: CREATE_BOOK_REQUEST,
//     payload,
//     resolve,
//   };
// }

// export function asyncCreateBook(dispatch) {
//   return function returnAsync(payload) {
//     return new Promise((resolve) => dispatch(createBook(payload, resolve)));
//   };
// }

export const asyncCreateBook = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_BOOK_REQUEST, payload, resolve });
  });

export const asyncUpdateBook = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_BOOK_REQUEST, payload, resolve });
  });

export const saveUpdateBook = (payload) => ({
  type: SAVE_UPDATE_BOOK,
  payload,
});

export const asyncGetDetailBook = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_BOOK, payload, resolve });
  });

export const saveDetailBook = (payload) => ({
  type: SAVE_DETAIL_BOOK,
  payload,
});

export const deleteBookRequest = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_BOOK_REQUEST, payload, resolve });
  });
