import { createSelector } from "reselect";
import { INIT_STATE_PUBLISH } from "./state";
const selectorPublish = (state) => state.publishsReducers || INIT_STATE_PUBLISH;

const selectLoading = createSelector(
  selectorPublish,
  (state) => state.isLoading
);
//Selector Publish
const selectPublishs = createSelector(
  selectorPublish,
  (state) => state.publishs.data
);

const selectPublishUpdate = createSelector(
  selectorPublish,
  (state) => state.publishUpdateData
);

const selectDetailPublish = createSelector(
  selectorPublish,
  (state) => state.detailPublishData
);
export {
  selectLoading,
  selectPublishs,
  selectPublishUpdate,
  selectDetailPublish,
};
