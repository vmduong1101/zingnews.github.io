import { INIT_STATE_ADMINPUBLISHNEW } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_ADMINPUBLISHNEW,
  SAVE_DETAIL_ADMINPUBLISHNEW,
  SAVE_UPDATE_ADMINPUBLISHNEW,
} from "./constants";

export default function adminpublishnewReducers(
  state = INIT_STATE_ADMINPUBLISHNEW,
  action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;

      case SAVE_ALL_ADMINPUBLISHNEW:
        draft.adminpublishnew.data = action.payload;
        break;
      case SAVE_DETAIL_ADMINPUBLISHNEW:
        draft.detailAdminPublishNewData = action.payload;
        break;
      case SAVE_UPDATE_ADMINPUBLISHNEW:
        draft.adminpublishnewUpdateData = action.payload;
        break;

      default:
        return state;
    }
  });
}
