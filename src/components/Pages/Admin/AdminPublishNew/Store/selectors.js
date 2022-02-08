import { createSelector } from "reselect";
import { INIT_STATE_ADMINPUBLISHNEW } from "./state";
const selectorAdminPublishNew = (state) =>
  state.adminpublishnewReducers || INIT_STATE_ADMINPUBLISHNEW;

const selectLoading = createSelector(
  selectorAdminPublishNew,
  (state) => state.isLoading
);
//Selector AdminPublishNew

const selectAdminPublishNew = createSelector(
  selectorAdminPublishNew,
  (state) => state.adminpublishnew.data
);

const selectDetailAdminPublishNew = createSelector(
  selectorAdminPublishNew,
  (state) => state.detailAdminPublishNewData
);
const selectAdminPublishNewUpdate = createSelector(
  selectorAdminPublishNew,
  (state) => state.adminpublishnewUpdateData
);

export {
  selectLoading,
  selectAdminPublishNew,
  selectDetailAdminPublishNew,
  selectAdminPublishNewUpdate,
};
