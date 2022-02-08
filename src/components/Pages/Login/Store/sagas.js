import { takeLatest, call, put } from "redux-saga/effects";
import { saveLogin } from "./actions";
import * as api from "../../../Api";

import { LOGIN_REQUEST } from "./constants";

// Saga Login
function* loginRequestSaga({ payload, resolve }) {
  try {
    const res = yield call(api.loginRequest, payload);
    localStorage.setItem("user", JSON.stringify({ res }));
    if (res.status === 200) {
      resolve(res.data.result);
    }
    yield put(saveLogin(res.data.result));
  } catch (e) {
    console.error(e);
    resolve(null);
  }
}

export function* mySagaLogin() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
}
