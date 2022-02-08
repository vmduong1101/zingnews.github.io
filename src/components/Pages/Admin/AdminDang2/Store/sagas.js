import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllDang2,
  saveDetailDang2,
  saveUpdateDang2,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";
import {
  GET_ALL_DANG2,
  CREATE_DANG2_REQUEST,
  UPDATE_DANG2_REQUEST,
  GET_DETAIL_DANG2,
  DELETE_DANG2_REQUEST,
} from "./constants";

// Saga Dang2
function* fetchDang2Saga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListDang2);
    yield put(saveAllDang2(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createDang2Saga({ payload, resolve }) {
  try {
    const response = yield call(api.createDang2, payload);
    console.log(response);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updateDang2Saga({ payload, resolve }) {
  try {
    const response = yield call(api.updateDang2, payload);
    resolve(response);
    yield put(saveUpdateDang2(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailDang2({ payload, resolve }) {
  try {
    const response = yield call(api.getDetailDang2, payload);
    yield put(saveDetailDang2(response.data));
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

function* deleteDang2Saga({ payload, resolve }) {
  try {
    const response = yield call(api.deleteDang2, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaDang2() {
  yield takeLatest(GET_ALL_DANG2, fetchDang2Saga);
  yield takeLatest(CREATE_DANG2_REQUEST, createDang2Saga);
  yield takeLatest(UPDATE_DANG2_REQUEST, updateDang2Saga);
  yield takeLatest(GET_DETAIL_DANG2, getDetailDang2);
  yield takeLatest(DELETE_DANG2_REQUEST, deleteDang2Saga);
}
