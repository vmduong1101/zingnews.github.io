import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllBooks,
  saveDetailBook,
  saveUpdateBook,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";
import {
  GET_ALL_BOOKS,
  CREATE_BOOK_REQUEST,
  UPDATE_BOOK_REQUEST,
  GET_DETAIL_BOOK,
  DELETE_BOOK_REQUEST,
} from "./constants";

// Saga Book
function* fetchBooksSaga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListBooks);
    console.log(res);
    yield put(saveAllBooks(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createBookSaga({ payload, resolve }) {
  try {
    const response = yield call(api.createBook, payload);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updateBookSaga({ payload, resolve }) {
  try {
    const response = yield call(api.updateBook, payload);
    resolve(response);
    yield put(saveUpdateBook(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailBook({ payload, resolve }) {
  try {
    yield put(setLoadingStep(true));
    const response = yield call(api.getDetailBook, payload);
    yield put(saveDetailBook(response.data));
    yield put(setLoadingStep(false));
    if (response.status === 200) {
      resolve(response.data);
      return;
    }
    resolve(null);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* deleteBookSaga({ payload, resolve }) {
  try {
    const response = yield call(api.deleteBook, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySaga() {
  yield takeLatest(GET_ALL_BOOKS, fetchBooksSaga);
  yield takeLatest(CREATE_BOOK_REQUEST, createBookSaga);
  yield takeLatest(UPDATE_BOOK_REQUEST, updateBookSaga);
  yield takeLatest(GET_DETAIL_BOOK, getDetailBook);
  yield takeLatest(DELETE_BOOK_REQUEST, deleteBookSaga);
}
