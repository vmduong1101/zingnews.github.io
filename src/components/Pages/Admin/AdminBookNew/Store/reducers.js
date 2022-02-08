import { INIT_STATE_ADMINBOOKNEW } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_ADMINBOOKNEW,
  SAVE_DETAIL_ADMINBOOKNEW,
  SAVE_UPDATE_ADMINBOOKNEW,
} from "./constants";

export default function adminbooknewReducers(
  state = INIT_STATE_ADMINBOOKNEW,
  action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;

      case SAVE_ALL_ADMINBOOKNEW:
        draft.adminbooknew.data = action.payload;
        break;
      case SAVE_DETAIL_ADMINBOOKNEW:
        draft.detailAdminBookNewData = action.payload;
        break;
      case SAVE_UPDATE_ADMINBOOKNEW:
        draft.adminbooknewUpdateData = action.payload;
        break;

      default:
        return state;
    }
  });
}
