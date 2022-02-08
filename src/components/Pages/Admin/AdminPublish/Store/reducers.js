import { INIT_STATE_PUBLISH } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_PUBLISHS,
  SAVE_UPDATE_PUBLISH,
  SAVE_DETAIL_PUBLISH,
} from "./constants";

export default function publishsReducers(state = INIT_STATE_PUBLISH, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;
      case SAVE_ALL_PUBLISHS:
        draft.publishs.data = action.payload;
        break;
      case SAVE_UPDATE_PUBLISH:
        draft.publishUpdateData = action.payload;
        break;
      case SAVE_DETAIL_PUBLISH:
        draft.detailPublishData = action.payload;
        break;
      default:
        return state;
    }
  });
}
