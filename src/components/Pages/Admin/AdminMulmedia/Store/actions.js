import {
  SET_LOADING_STEP,
  GET_ALL_ADMINMULMEDIA,
  SAVE_ALL_ADMINMULMEDIA,
  GET_DETAIL_ADMINMULMEDIA,
  SAVE_DETAIL_ADMINMULMEDIA,
  UPDATE_ADMINMULMEDIA_REQUEST,
  SAVE_UPDATE_ADMINMULMEDIA,
  CREATE_ADMINMULMEDIA_REQUEST,
  DELETE_ADMINMULMEDIA_REQUEST,
} from "./constants";

export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

// Action AdminMulmedia
export function getAllAdminMulmedia(payload) {
  return {
    type: GET_ALL_ADMINMULMEDIA,
    payload,
  };
}

export function saveAllAdminMulmedia(payload) {
  return {
    type: SAVE_ALL_ADMINMULMEDIA,
    payload,
  };
}

export const asyncGetDetailAdminMulmedia = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_ADMINMULMEDIA, payload, resolve });
  });

export const saveDetailAdminMulmedia = (payload) => ({
  type: SAVE_DETAIL_ADMINMULMEDIA,
  payload,
});

export const asyncUpdateAdminMulmedia = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_ADMINMULMEDIA_REQUEST, payload, resolve });
  });

export const saveUpdateAdminMulmedia = (payload) => ({
  type: SAVE_UPDATE_ADMINMULMEDIA,
  payload,
});

export const asyncCreateAdminMulmedia = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_ADMINMULMEDIA_REQUEST, payload, resolve });
  });

export const deleteAdminMulmediaRequest = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_ADMINMULMEDIA_REQUEST, payload, resolve });
  });
