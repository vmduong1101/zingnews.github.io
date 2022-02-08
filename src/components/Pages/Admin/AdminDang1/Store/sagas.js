import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllDang1,
  saveDetailDang1,
  saveUpdateDang1,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";
import {
  GET_ALL_DANG1,
  GET_DETAIL_DANG1,
  UPDATE_DANG1_REQUEST,
  CREATE_DANG1_REQUEST,
  DELETE_DANG1_REQUEST,
} from "./constants";

// Saga Dang1

function* fetchDang1Saga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListDang1);
    console.log(res);
    yield put(saveAllDang1(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createDang1Saga({ payload, resolve }) {
  try {
    const response = yield call(api.createDang1, payload);
    console.log(response);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updateDang1Saga({ payload, resolve }) {
  try {
    const response = yield call(api.updateDang1, payload);
    resolve(response);
    console.log(response);
    yield put(saveUpdateDang1(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailDang1({ payload, resolve }) {
  try {
    const response = yield call(api.getDetailDang1, payload);
    yield put(saveDetailDang1(response.data));
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

function* deleteDang1Saga({ payload, resolve }) {
  try {
    const response = yield call(api.deleteDang1, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaDang1() {
  yield takeLatest(GET_ALL_DANG1, fetchDang1Saga);
  yield takeLatest(CREATE_DANG1_REQUEST, createDang1Saga);
  yield takeLatest(UPDATE_DANG1_REQUEST, updateDang1Saga);
  yield takeLatest(GET_DETAIL_DANG1, getDetailDang1);
  yield takeLatest(DELETE_DANG1_REQUEST, deleteDang1Saga);
}
