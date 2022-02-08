import { createSelector } from "reselect";
import { INIT_STATE_LOGIN } from "./state";
const selectorLogin = (state) => state.loginReducers || INIT_STATE_LOGIN;

const selectLoading = createSelector(selectorLogin, (state) => state.isLoading);
//Selector Dang3

const selectLogin = createSelector(selectorLogin, (state) => state.userProfile);

export { selectLoading, selectLogin };
