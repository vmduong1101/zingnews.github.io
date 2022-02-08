import { INIT_STATE_DANG3 } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_DANG3,
  SAVE_DETAIL_DANG3,
  SAVE_UPDATE_DANG3,
} from "./constants";

export default function dang3Reducers(state = INIT_STATE_DANG3, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;
      case SAVE_ALL_DANG3:
        draft.dang3.data = action.payload;
        break;
      case SAVE_DETAIL_DANG3:
        draft.detailDang3Data = action.payload;
        break;
      case SAVE_UPDATE_DANG3:
        draft.dang3UpdateData = action.payload;
        break;
      default:
        return state;
    }
  });
}
