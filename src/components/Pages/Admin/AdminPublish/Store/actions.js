import {
  SET_LOADING_STEP,
  GET_ALL_PUBLISHS,
  SAVE_ALL_PUBLISHS,
  CREATE_PUBLISH_REQUEST,
  UPDATE_PUBLISH_REQUEST,
  SAVE_UPDATE_PUBLISH,
  GET_DETAIL_PUBLISH,
  SAVE_DETAIL_PUBLISH,
  DELETE_PUBLISH_REQUEST,
} from "./constants";
// Action Publish
export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

export function getAllPublishs(payload) {
  return {
    type: GET_ALL_PUBLISHS,
    payload,
  };
}

export function saveAllPublishs(payload) {
  return {
    type: SAVE_ALL_PUBLISHS,
    payload,
  };
}

// export function createPublish(payload, resolve) {
//   return {
//     type: CREATE_PUBLISH_REQUEST,
//     payload,
//     resolve,
//   };
// }

// export function asyncCreatePublish(dispatch) {
//   return function returnAsync(payload) {
//     return new Promise((resolve) => dispatch(createPublish(payload, resolve)));
//   };
// }

export const asyncCreatePublish = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: CREATE_PUBLISH_REQUEST, payload, resolve });
  });

export const asyncUpdatePublish = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: UPDATE_PUBLISH_REQUEST, payload, resolve });
  });

export const saveUpdatePublish = (payload) => ({
  type: SAVE_UPDATE_PUBLISH,
  payload,
});

export const asyncGetDetailPublish = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: GET_DETAIL_PUBLISH, payload, resolve });
  });

export const saveDetailPublish = (payload) => ({
  type: SAVE_DETAIL_PUBLISH,
  payload,
});

export const deletePublishRequest = (dispatch) => (payload) =>
  new Promise((resolve) => {
    dispatch({ type: DELETE_PUBLISH_REQUEST, payload, resolve });
  });
