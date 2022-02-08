import {
  SET_LOADING_STEP,
  GET_ALL_ADMINBOOKNEW,
  SAVE_ALL_ADMINBOOKNEW,
  GET_DETAIL_ADMINBOOKNEW,
  SAVE_DETAIL_ADMINBOOKNEW,
  UPDATE_ADMINBOOKNEW_REQUEST,
  SAVE_UPDATE_ADMINBOOKNEW,
  CREATE_ADMINBOOKNEW_REQUEST,
  DELETE_ADMINBOOKNEW_REQUEST,
} from "./constants";

export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

// Action AdminBookNew
export function getAllAdminBookNew(payload) {
  return {
    type: GET_ALL_ADMINBOOKNEW,
    payload,
  };
}

export function saveAllAdminBookNew(payload) {
  return {
    type: SAVE_ALL_ADMINBOOKNEW,
    payload,
  };
}

export const asyncGetDetailAdminBookNew = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_ADMINBOOKNEW, payload, resolve });
  });

export const saveDetailAdminBookNew = (payload) => ({
  type: SAVE_DETAIL_ADMINBOOKNEW,
  payload,
});

export const asyncUpdateAdminBookNew = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_ADMINBOOKNEW_REQUEST, payload, resolve });
  });

export const saveUpdateAdminBookNew = (payload) => ({
  type: SAVE_UPDATE_ADMINBOOKNEW,
  payload,
});

export const asyncCreateAdminBookNew = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_ADMINBOOKNEW_REQUEST, payload, resolve });
  });

export const deleteAdminBookNewRequest = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_ADMINBOOKNEW_REQUEST, payload, resolve });
  });
