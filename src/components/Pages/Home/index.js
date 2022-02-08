import React, { useEffect, useState } from "react";
import DefaultDang1 from "./../../../components/Common/Default/DefaultDang1";
import "./style.css";
import * as actions1 from "../../../components/Pages/Admin/AdminDang1/Store/actions";
import * as actions2 from "../../../components/Pages/Admin/AdminDang2/Store/actions";
import * as actions3 from "../../../components/Pages/Admin/AdminDang3/Store/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import { selectDang1 } from "../../../components/Pages/Admin/AdminDang1/Store/selectors";
import { selectDang2 } from "../../../components/Pages/Admin/AdminDang2/Store/selectors";
import { selectDang3 } from "../../../components/Pages/Admin/AdminDang3/Store/selectors";
import Multimedia from "./../../Common/Multimedia";
import DefaultDang2 from "../../Common/Default/DefaultDang2";
import DefaultDang3 from "../../Common/Default/DefaultDang3";
import { selectLoading } from "./../Admin/AdminDang3/Store/selectors";
import { Spin } from "antd";
const HomeComponent = (props) => {
  const { getAllDang1, getAllDang2, getAllDang3 } = props;
  const { loading, listDang1, listDang2, listDang3 } = props;
  useEffect(() => {
    getAllDang1();
    getAllDang2();
    getAllDang3();
  }, []);

  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="nav">
          <div className="navLeft">
            <img src="https://static-znews.zadn.vn/images/stat.svg" alt="" />
            <a href="">
              <span>#</span>Số liệu Covid-19
            </a>
            <a className="mid" href="">
              <span>#</span>Biến chủng Omicron
            </a>
            <a href="">
              <span>#</span>Khởi nghiệp 4.0
            </a>
          </div>
          <div className="navRight">
            <p>
              <span>Hà Nội</span> 23°C / 13-25°C
            </p>
            <img
              src="https://static-znews.zadn.vn/images/icons/weather/v2/clear.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="containerLeft">
            <DefaultDang1
              data={listDang1}
              class="containerLeftItem"
              showDes={false}
            />
          </div>
          <div className="containerRightx2">
            <div className="containerMid">
              <DefaultDang2 data={listDang2} showDes={true} />
            </div>
            <div className="containerRight">
              <DefaultDang3 data={listDang3} class="containerRightItem" />
            </div>
          </div>
        </div>
        <Multimedia />
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  listDang1: selectDang1,
  listDang2: selectDang2,
  listDang3: selectDang3,
  loading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllDang1: (payload) => dispatch(actions1.getAllDang1(payload)),
  getAllDang2: (payload) => dispatch(actions2.getAllDang2(payload)),
  getAllDang3: (payload) => dispatch(actions3.getAllDang3(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeComponent);
