import { createSelector } from "reselect";
import { INIT_STATE_DANG2 } from "./state";
const selectorDang2 = (state) => state.dang2Reducers || INIT_STATE_DANG2;

const selectLoading = createSelector(selectorDang2, (state) => state.isLoading);
//Selector Dang2

const selectDang2 = createSelector(selectorDang2, (state) => state.dang2.data);

const selectDetailDang2 = createSelector(
  selectorDang2,
  (state) => state.detailDang2Data
);
const selectDang2Update = createSelector(
  selectorDang2,
  (state) => state.dang2UpdateData
);
export { selectLoading, selectDang2, selectDetailDang2, selectDang2Update };
