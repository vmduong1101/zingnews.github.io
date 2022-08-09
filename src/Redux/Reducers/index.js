import { combineReducers } from "redux";

import booksReducers from "./../../components/Pages/Admin/AdminBook/Store/reducers";
import publishsReducers from "./../../components/Pages/Admin/AdminPublish/Store/reducers";
import dang1Reducers from "./../../components/Pages/Admin/AdminDang1/Store/reducers";
import dang2Reducers from "./../../components/Pages/Admin/AdminDang2/Store/reducers";
import dang3Reducers from "./../../components/Pages/Admin/AdminDang3/Store/reducers";
import loginReducers from "./../../components/Pages/Login/Store/reducers";
import adminbooknewReducers from "./../../components/Pages/Admin/AdminBookNew/Store/reducers";
import adminpublishnewReducers from "./../../components/Pages/Admin/AdminPublishNew/Store/reducers";
import adminmulmediaReducers from "./../../components/Pages/Admin/AdminMulmedia/Store/reducers";
export default function createReducer() {
  const rootReducer = combineReducers({
    booksReducers,
    dang1Reducers,
    dang2Reducers,
    dang3Reducers,
    // loginReducers,
    adminbooknewReducers,
    adminmulmediaReducers,
    publishsReducers,
    adminpublishnewReducers,
  });

  return rootReducer;
}
