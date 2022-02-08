import * as mySaga from "./../../components/Pages/Admin/AdminBook/Store/sagas";
import * as mySagaPublish from "./../../components/Pages/Admin/AdminPublish/Store/sagas";
import * as mySagaDang1 from "./../../components/Pages/Admin/AdminDang1/Store/sagas";
import * as mySagaDang2 from "./../../components/Pages/Admin/AdminDang2/Store/sagas";
import * as mySagaDang3 from "./../../components/Pages/Admin/AdminDang3/Store/sagas";
import * as mySagaLogin from "./../../components/Pages/Login/Store/sagas";
import * as mySagaAdminBookNew from "./../../components/Pages/Admin/AdminBookNew/Store/sagas";
import * as mySagaAdminPublishNew from "./../../components/Pages/Admin/AdminPublishNew/Store/sagas";
import * as mySagaAdminMulmedia from "./../../components/Pages/Admin/AdminMulmedia/Store/sagas";
import { all } from "redux-saga/effects";

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    // Admin Book
    mySaga.mySaga(),
    // Admin Dang1

    mySagaDang1.mySagaDang1(),
    //Admin Dang2

    mySagaDang2.mySagaDang2(),
    //Admin Dang3

    mySagaDang3.mySagaDang3(),
    //Admin Login
    mySagaLogin.mySagaLogin(),
    //BookNew
    mySagaAdminBookNew.mySagaAdminBookNew(),
    //Admin Mulmedia
    mySagaAdminMulmedia.mySagaAdminMulmedia(),
    //Admin Publish
    mySagaPublish.mySagaPublish(),
    //Admin Publish New
    mySagaAdminPublishNew.mySagaAdminPublishNew(),
  ]);
}
