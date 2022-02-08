import { createSelector } from "reselect";
import { INIT_STATE_BOOK } from "./state";
const selectorBook = (state) => state.booksReducers || INIT_STATE_BOOK;

const selectLoading = createSelector(selectorBook, (state) => state.isLoading);
//Selector Book
const selectBooks = createSelector(selectorBook, (state) => state.books.data);

const selectBookUpdate = createSelector(
  selectorBook,
  (state) => state.bookUpdateData
);

const selectDetailBook = createSelector(
  selectorBook,
  (state) => state.detailBookData
);
export { selectLoading, selectBooks, selectBookUpdate, selectDetailBook };
