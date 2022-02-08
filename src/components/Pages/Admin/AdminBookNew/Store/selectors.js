import { createSelector } from "reselect";
import { INIT_STATE_ADMINBOOKNEW } from "./state";
const selectorAdminBookNew = (state) =>
  state.adminbooknewReducers || INIT_STATE_ADMINBOOKNEW;

const selectLoading = createSelector(
  selectorAdminBookNew,
  (state) => state.isLoading
);
//Selector AdminBookNew

const selectAdminBookNew = createSelector(
  selectorAdminBookNew,
  (state) => state.adminbooknew.data
);

const selectDetailAdminBookNew = createSelector(
  selectorAdminBookNew,
  (state) => state.detailAdminBookNewData
);
const selectAdminBookNewUpdate = createSelector(
  selectorAdminBookNew,
  (state) => state.adminbooknewUpdateData
);

export {
  selectLoading,
  selectAdminBookNew,
  selectDetailAdminBookNew,
  selectAdminBookNewUpdate,
};
