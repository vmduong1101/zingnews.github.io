import { takeLatest, call, put } from "redux-saga/effects";
import {
  saveAllPublishs,
  saveDetailPublish,
  saveUpdatePublish,
  setLoadingStep,
} from "./actions";
import * as api from "../../../../Api";
import {
  GET_ALL_PUBLISHS,
  CREATE_PUBLISH_REQUEST,
  UPDATE_PUBLISH_REQUEST,
  GET_DETAIL_PUBLISH,
  DELETE_PUBLISH_REQUEST,
} from "./constants";

// Saga Publish
function* fetchPublishsSaga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListPublishs);
    console.log(res);
    yield put(saveAllPublishs(res.data));
    yield put(setLoadingStep(false));
  } catch (e) {
    console.error(e);
    yield put(setLoadingStep(false));
  }
}

function* createPublishSaga({ payload, resolve }) {
  try {
    const response = yield call(api.createPublish, payload);
    resolve(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}
function* updatePublishSaga({ payload, resolve }) {
  try {
    const response = yield call(api.updatePublish, payload);
    resolve(response);
    yield put(saveUpdatePublish(response.data));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* getDetailPublish({ payload, resolve }) {
  try {
    yield put(setLoadingStep(true));

    const response = yield call(api.getDetailPublish, payload);
    yield put(saveDetailPublish(response.data));

    if (response.status === 200) {
      resolve(response.data);
      return;
    }
    yield put(setLoadingStep(false));

    resolve(null);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

function* deletePublishSaga({ payload, resolve }) {
  try {
    const response = yield call(api.deletePublish, payload);
    resolve(response);
    console.log(response);
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaPublish() {
  yield takeLatest(GET_ALL_PUBLISHS, fetchPublishsSaga);
  yield takeLatest(CREATE_PUBLISH_REQUEST, createPublishSaga);
  yield takeLatest(UPDATE_PUBLISH_REQUEST, updatePublishSaga);
  yield takeLatest(GET_DETAIL_PUBLISH, getDetailPublish);
  yield takeLatest(DELETE_PUBLISH_REQUEST, deletePublishSaga);
}
