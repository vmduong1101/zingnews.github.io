import { SET_LOADING_STEP, SAVE_LOGIN, LOGIN_REQUEST } from "./constants";

export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

export const loginRequest = (dispatch) => (payload) =>
  new Promise((resolve) => dispatch({ type: LOGIN_REQUEST, payload, resolve }));

export const saveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});
