import { INIT_STATE_DANG1 } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_DANG1,
  SAVE_DETAIL_DANG1,
  SAVE_UPDATE_DANG1,
} from "./constants";

export default function dang1Reducers(state = INIT_STATE_DANG1, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;

      case SAVE_ALL_DANG1:
        draft.dang1.data = action.payload;
        break;
      case SAVE_DETAIL_DANG1:
        draft.detailDang1Data = action.payload;
        break;
      case SAVE_UPDATE_DANG1:
        draft.dang1UpdateData = action.payload;
        break;

      default:
        return state;
    }
  });
}
