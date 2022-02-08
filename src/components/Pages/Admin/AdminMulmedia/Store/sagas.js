import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllAdminMulmedia,
  saveDetailAdminMulmedia,
  saveUpdateAdminMulmedia,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";

import {
  GET_ALL_ADMINMULMEDIA,
  CREATE_ADMINMULMEDIA_REQUEST,
  UPDATE_ADMINMULMEDIA_REQUEST,
  GET_DETAIL_ADMINMULMEDIA,
  DELETE_ADMINMULMEDIA_REQUEST,
} from "./constants";

// Saga AdminMulmedia
function* fetchAdminMulmediaSaga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListAdminMulmedia);
    yield put(saveAllAdminMulmedia(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createAdminMulmediaSaga({ payload, resolve }) {
  try {
    const response = yield call(api.createAdminMulmedia, payload);
    console.log(response);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updateAdminMulmediaSaga({ payload, resolve }) {
  try {
    const response = yield call(api.updateAdminMulmedia, payload);
    resolve(response);
    console.log(response);
    yield put(saveUpdateAdminMulmedia(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailAdminMulmedia({ payload, resolve }) {
  try {
    const response = yield call(api.getDetailAdminMulmedia, payload);
    yield put(saveDetailAdminMulmedia(response.data));
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

function* deleteAdminMulmediaSaga({ payload, resolve }) {
  try {
    const response = yield call(api.deleteAdminMulmedia, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaAdminMulmedia() {
  yield takeLatest(GET_ALL_ADMINMULMEDIA, fetchAdminMulmediaSaga);
  yield takeLatest(CREATE_ADMINMULMEDIA_REQUEST, createAdminMulmediaSaga);
  yield takeLatest(UPDATE_ADMINMULMEDIA_REQUEST, updateAdminMulmediaSaga);
  yield takeLatest(GET_DETAIL_ADMINMULMEDIA, getDetailAdminMulmedia);
  yield takeLatest(DELETE_ADMINMULMEDIA_REQUEST, deleteAdminMulmediaSaga);
}
