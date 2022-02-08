import {
  SET_LOADING_STEP,
  GET_ALL_DANG1,
  SAVE_ALL_DANG1,
  GET_DETAIL_DANG1,
  SAVE_DETAIL_DANG1,
  UPDATE_DANG1_REQUEST,
  SAVE_UPDATE_DANG1,
  CREATE_DANG1_REQUEST,
  DELETE_DANG1_REQUEST,
} from "./constants";

export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

// Action Dang1
export function getAllDang1(payload) {
  return {
    type: GET_ALL_DANG1,
    payload,
  };
}

export function saveAllDang1(payload) {
  return {
    type: SAVE_ALL_DANG1,
    payload,
  };
}

export const asyncGetDetailDang1 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_DANG1, payload, resolve });
  });

export const saveDetailDang1 = (payload) => ({
  type: SAVE_DETAIL_DANG1,
  payload,
});

export const asyncUpdateDang1 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_DANG1_REQUEST, payload, resolve });
  });

export const saveUpdateDang1 = (payload) => ({
  type: SAVE_UPDATE_DANG1,
  payload,
});

export const asyncCreateDang1 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_DANG1_REQUEST, payload, resolve });
  });

export const deleteDang1Request = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_DANG1_REQUEST, payload, resolve });
  });
