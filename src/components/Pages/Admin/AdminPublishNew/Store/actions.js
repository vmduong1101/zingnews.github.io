import {
  SET_LOADING_STEP,
  GET_ALL_ADMINPUBLISHNEW,
  SAVE_ALL_ADMINPUBLISHNEW,
  GET_DETAIL_ADMINPUBLISHNEW,
  SAVE_DETAIL_ADMINPUBLISHNEW,
  UPDATE_ADMINPUBLISHNEW_REQUEST,
  SAVE_UPDATE_ADMINPUBLISHNEW,
  CREATE_ADMINPUBLISHNEW_REQUEST,
  DELETE_ADMINPUBLISHNEW_REQUEST,
} from "./constants";

export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

// Action AdminPublishNew
export function getAllAdminPublishNew(payload) {
  return {
    type: GET_ALL_ADMINPUBLISHNEW,
    payload,
  };
}

export function saveAllAdminPublishNew(payload) {
  return {
    type: SAVE_ALL_ADMINPUBLISHNEW,
    payload,
  };
}

export const asyncGetDetailAdminPublishNew = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_ADMINPUBLISHNEW, payload, resolve });
  });

export const saveDetailAdminPublishNew = (payload) => ({
  type: SAVE_DETAIL_ADMINPUBLISHNEW,
  payload,
});

export const asyncUpdateAdminPublishNew = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_ADMINPUBLISHNEW_REQUEST, payload, resolve });
  });

export const saveUpdateAdminPublishNew = (payload) => ({
  type: SAVE_UPDATE_ADMINPUBLISHNEW,
  payload,
});

export const asyncCreateAdminPublishNew = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_ADMINPUBLISHNEW_REQUEST, payload, resolve });
  });

export const deleteAdminPublishNewRequest = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_ADMINPUBLISHNEW_REQUEST, payload, resolve });
  });
