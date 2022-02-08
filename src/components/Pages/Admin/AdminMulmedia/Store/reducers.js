import { INIT_STATE_ADMINMULMEDIA } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_ADMINMULMEDIA,
  SAVE_DETAIL_ADMINMULMEDIA,
  SAVE_UPDATE_ADMINMULMEDIA,
} from "./constants";

export default function adminmulmediaReducers(
  state = INIT_STATE_ADMINMULMEDIA,
  action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;
      case SAVE_ALL_ADMINMULMEDIA:
        draft.adminmulmedia.data = action.payload;
        break;
      case SAVE_DETAIL_ADMINMULMEDIA:
        draft.detailAdminMulmediaData = action.payload;
        break;
      case SAVE_UPDATE_ADMINMULMEDIA:
        draft.adminmulmediaUpdateData = action.payload;
        break;
      default:
        return state;
    }
  });
}
