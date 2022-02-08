import {
  SET_LOADING_STEP,
  GET_ALL_DANG2,
  SAVE_ALL_DANG2,
  GET_DETAIL_DANG2,
  SAVE_DETAIL_DANG2,
  UPDATE_DANG2_REQUEST,
  SAVE_UPDATE_DANG2,
  CREATE_DANG2_REQUEST,
  DELETE_DANG2_REQUEST,
} from "./constants";
export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

// Action Dang2
export function getAllDang2(payload) {
  return {
    type: GET_ALL_DANG2,
    payload,
  };
}

export function saveAllDang2(payload) {
  return {
    type: SAVE_ALL_DANG2,
    payload,
  };
}

export const asyncGetDetailDang2 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_DANG2, payload, resolve });
  });

export const saveDetailDang2 = (payload) => ({
  type: SAVE_DETAIL_DANG2,
  payload,
});

export const asyncUpdateDang2 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_DANG2_REQUEST, payload, resolve });
  });

export const saveUpdateDang2 = (payload) => ({
  type: SAVE_UPDATE_DANG2,
  payload,
});

export const asyncCreateDang2 = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_DANG2_REQUEST, payload, resolve });
  });

export const deleteDang2Request = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_DANG2_REQUEST, payload, resolve });
  });
