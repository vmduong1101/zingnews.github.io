import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllAdminPublishNew,
  saveDetailAdminPublishNew,
  saveUpdateAdminPublishNew,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";
import {
  GET_ALL_ADMINPUBLISHNEW,
  GET_DETAIL_ADMINPUBLISHNEW,
  UPDATE_ADMINPUBLISHNEW_REQUEST,
  CREATE_ADMINPUBLISHNEW_REQUEST,
  DELETE_ADMINPUBLISHNEW_REQUEST,
} from "./constants";

// Saga AdminPublishNew

function* fetchAdminPublishNewSaga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListAdminPublishNew);
    console.log(res);
    yield put(saveAllAdminPublishNew(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createAdminPublishNewSaga({ payload, resolve }) {
  try {
    const response = yield call(api.createAdminPublishNew, payload);
    console.log(response);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updateAdminPublishNewSaga({ payload, resolve }) {
  try {
    const response = yield call(api.updateAdminPublishNew, payload);
    resolve(response);
    console.log(response);
    yield put(saveUpdateAdminPublishNew(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailAdminPublishNew({ payload, resolve }) {
  try {
    const response = yield call(api.getDetailAdminPublishNew, payload);
    yield put(saveDetailAdminPublishNew(response.data));
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

function* deleteAdminPublishNewSaga({ payload, resolve }) {
  try {
    const response = yield call(api.deleteAdminPublishNew, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaAdminPublishNew() {
  yield takeLatest(GET_ALL_ADMINPUBLISHNEW, fetchAdminPublishNewSaga);
  yield takeLatest(CREATE_ADMINPUBLISHNEW_REQUEST, createAdminPublishNewSaga);
  yield takeLatest(UPDATE_ADMINPUBLISHNEW_REQUEST, updateAdminPublishNewSaga);
  yield takeLatest(GET_DETAIL_ADMINPUBLISHNEW, getDetailAdminPublishNew);
  yield takeLatest(DELETE_ADMINPUBLISHNEW_REQUEST, deleteAdminPublishNewSaga);
}
