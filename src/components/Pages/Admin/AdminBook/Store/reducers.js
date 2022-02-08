import { INIT_STATE_BOOK } from "./state";
import produce from "immer";
import {
  SET_LOADING_STEP,
  SAVE_ALL_BOOKS,
  SAVE_UPDATE_BOOK,
  SAVE_DETAIL_BOOK,
} from "./constants";

export default function booksReducers(state = INIT_STATE_BOOK, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;
      case SAVE_ALL_BOOKS:
        draft.books.data = action.payload;
        break;
      case SAVE_UPDATE_BOOK:
        draft.bookUpdateData = action.payload;
        break;
      case SAVE_DETAIL_BOOK:
        draft.detailBookData = action.payload;
        break;
      default:
        return state;
    }
  });
}
