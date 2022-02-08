import {
  SET_LOADING_STEP,
  GET_ALL_DANG3,
  SAVE_ALL_DANG3,
  GET_DETAIL_DANG3,
  SAVE_DETAIL_DANG3,
  UPDATE_DANG3_REQUEST,
  SAVE_UPDATE_DANG3,
  CREATE_DANG3_REQUEST,
  DELETE_DANG3_REQUEST,
} from "./constants";

export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

// Action Dang3
export function getAllDang3(payload) {
  return {
    type: GET_ALL_DANG3,
    payload,
  };
}

export function saveAllDang3(payload) {
  return {
    type: SAVE_ALL_DANG3,
    payload,
  };
}

export const asyncGetDetailDang3 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_DANG3, payload, resolve });
  });

export const saveDetailDang3 = (payload) => ({
  type: SAVE_DETAIL_DANG3,
  payload,
});

export const asyncUpdateDang3 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_DANG3_REQUEST, payload, resolve });
  });

export const saveUpdateDang3 = (payload) => ({
  type: SAVE_UPDATE_DANG3,
  payload,
});

export const asyncCreateDang3 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_DANG3_REQUEST, payload, resolve });
  });

export const deleteDang3Request = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_DANG3_REQUEST, payload, resolve });
  });
