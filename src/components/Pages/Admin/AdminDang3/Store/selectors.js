import { createSelector } from "reselect";
import { INIT_STATE_DANG3 } from "./state";
const selectorDang3 = (state) => state.dang3Reducers || INIT_STATE_DANG3;

const selectLoading = createSelector(selectorDang3, (state) => state.isLoading);
//Selector Dang3

const selectDang3 = createSelector(selectorDang3, (state) => state.dang3.data);

const selectDetailDang3 = createSelector(
  selectorDang3,
  (state) => state.detailDang3Data
);
const selectDang3Update = createSelector(
  selectorDang3,
  (state) => state.dang3UpdateData
);
export { selectLoading, selectDang3, selectDetailDang3, selectDang3Update };
