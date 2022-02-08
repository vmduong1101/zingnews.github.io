import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllDang3,
  saveDetailDang3,
  saveUpdateDang3,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";

import {
  GET_ALL_DANG3,
  CREATE_DANG3_REQUEST,
  UPDATE_DANG3_REQUEST,
  GET_DETAIL_DANG3,
  DELETE_DANG3_REQUEST,
} from "./constants";

// Saga Dang3
function* fetchDang3Saga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListDang3);
    yield put(saveAllDang3(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createDang3Saga({ payload, resolve }) {
  try {
    const response = yield call(api.createDang3, payload);
    console.log(response);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updateDang3Saga({ payload, resolve }) {
  try {
    const response = yield call(api.updateDang3, payload);
    resolve(response);
    console.log(response);
    yield put(saveUpdateDang3(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailDang3({ payload, resolve }) {
  try {
    const response = yield call(api.getDetailDang3, payload);
    yield put(saveDetailDang3(response.data));
    console.log(response);
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

function* deleteDang3Saga({ payload, resolve }) {
  try {
    const response = yield call(api.deleteDang3, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaDang3() {
  yield takeLatest(GET_ALL_DANG3, fetchDang3Saga);
  yield takeLatest(CREATE_DANG3_REQUEST, createDang3Saga);
  yield takeLatest(UPDATE_DANG3_REQUEST, updateDang3Saga);
  yield takeLatest(GET_DETAIL_DANG3, getDetailDang3);
  yield takeLatest(DELETE_DANG3_REQUEST, deleteDang3Saga);
}
