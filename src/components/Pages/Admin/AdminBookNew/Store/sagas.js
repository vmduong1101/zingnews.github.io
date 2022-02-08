import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllAdminBookNew,
  saveDetailAdminBookNew,
  saveUpdateAdminBookNew,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";
import {
  GET_ALL_ADMINBOOKNEW,
  GET_DETAIL_ADMINBOOKNEW,
  UPDATE_ADMINBOOKNEW_REQUEST,
  CREATE_ADMINBOOKNEW_REQUEST,
  DELETE_ADMINBOOKNEW_REQUEST,
} from "./constants";

// Saga AdminBookNew

function* fetchAdminBookNewSaga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListAdminBookNew);
    console.log(res);
    yield put(saveAllAdminBookNew(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createAdminBookNewSaga({ payload, resolve }) {
  try {
    const response = yield call(api.createAdminBookNew, payload);
    console.log(response);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updateAdminBookNewSaga({ payload, resolve }) {
  try {
    const response = yield call(api.updateAdminBookNew, payload);
    resolve(response);
    console.log(response);
    yield put(saveUpdateAdminBookNew(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailAdminBookNew({ payload, resolve }) {
  try {
    const response = yield call(api.getDetailAdminBookNew, payload);
    yield put(saveDetailAdminBookNew(response.data));
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

function* deleteAdminBookNewSaga({ payload, resolve }) {
  try {
    const response = yield call(api.deleteAdminBookNew, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaAdminBookNew() {
  yield takeLatest(GET_ALL_ADMINBOOKNEW, fetchAdminBookNewSaga);
  yield takeLatest(CREATE_ADMINBOOKNEW_REQUEST, createAdminBookNewSaga);
  yield takeLatest(UPDATE_ADMINBOOKNEW_REQUEST, updateAdminBookNewSaga);
  yield takeLatest(GET_DETAIL_ADMINBOOKNEW, getDetailAdminBookNew);
  yield takeLatest(DELETE_ADMINBOOKNEW_REQUEST, deleteAdminBookNewSaga);
}
