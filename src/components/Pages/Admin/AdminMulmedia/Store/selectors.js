import { createSelector } from "reselect";
import { INIT_STATE_ADMINMULMEDIA } from "./state";
const selectorAdminMulmedia = (state) =>
  state.adminmulmediaReducers || INIT_STATE_ADMINMULMEDIA;

const selectLoading = createSelector(
  selectorAdminMulmedia,
  (state) => state.isLoading
);
//Selector AdminMulmedia

const selectAdminMulmedia = createSelector(
  selectorAdminMulmedia,
  (state) => state.adminmulmedia.data
);

const selectDetailAdminMulmedia = createSelector(
  selectorAdminMulmedia,
  (state) => state.detailAdminMulmediaData
);
const selectAdminMulmediaUpdate = createSelector(
  selectorAdminMulmedia,
  (state) => state.adminmulmediaUpdateData
);
export {
  selectLoading,
  selectAdminMulmedia,
  selectDetailAdminMulmedia,
  selectAdminMulmediaUpdate,
};
