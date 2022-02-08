import { INIT_STATE_LOGIN } from "./state";
import produce from "immer";
import { SET_LOADING_STEP, SAVE_LOGIN } from "./constants";

export default function loginReducers(state = INIT_STATE_LOGIN, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;
      case SAVE_LOGIN:
        draft.userProfile = action.payload;
        break;
      default:
        return state;
    }
  });
}
