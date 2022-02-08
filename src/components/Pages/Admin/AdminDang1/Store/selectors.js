import { createSelector } from "reselect";
import { INIT_STATE_DANG1 } from "./state";
const selectorDang1 = (state) => state.dang1Reducers || INIT_STATE_DANG1;

const selectLoading = createSelector(selectorDang1, (state) => state.isLoading);
//Selector Dang1

const selectDang1 = createSelector(selectorDang1, (state) => state.dang1.data);

const selectDetailDang1 = createSelector(
  selectorDang1,
  (state) => state.detailDang1Data
);
const selectDang1Update = createSelector(
  selectorDang1,
  (state) => state.dang1UpdateData
);

export { selectLoading, selectDang1, selectDetailDang1, selectDang1Update };
