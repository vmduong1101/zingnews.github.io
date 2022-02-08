import { INIT_STATE_DANG2 } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_DANG2,
  SAVE_DETAIL_DANG2,
  SAVE_UPDATE_DANG2,
} from "./constants";

export default function dang2Reducers(state = INIT_STATE_DANG2, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;

      case SAVE_ALL_DANG2:
        draft.dang2.data = action.payload;
        break;
      case SAVE_DETAIL_DANG2:
        draft.detailDang2Data = action.payload;
        break;
      case SAVE_UPDATE_DANG2:
        draft.dang2UpdateData = action.payload;
        break;

      default:
        return state;
    }
  });
}
