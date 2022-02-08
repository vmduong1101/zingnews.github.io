import React, { useState, useEffect } from "react";
import "./style.css";
import DefaultMul from "./../Default/DefaultMul";
import * as actions from "./../../Pages/Admin/AdminMulmedia/Store/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import {
  selectAdminMulmedia,
  selectDetailAdminMulmedia,
} from "./../../Pages/Admin/AdminMulmedia/Store/selectors";

const Multimedia = (props) => {
  const { getAllAdminMulmedia, asyncGetDetailAdminMulmedia } = props;
  const { listAdminMulmedia } = props;

  const [itemId, setItemId] = useState([]);
  console.log();
  useEffect(() => {
    getAllAdminMulmedia();
    getDetailMul(1);
  }, []);

  const getDetailMul = async (id) => {
    const response = await asyncGetDetailAdminMulmedia(id);
    console.log(response);
    setItemId(response);
  };

  return (
    <div className="multimedia">
      <div className="headerMul">
        <div className="headerCategoryMul">
          <div className="headerLogoMul">
            <h1>MULTIMEDIA</h1>
          </div>
          <a href="#">VIDEO</a>
          <a href="#">LONGFORM</a>
          <a href="#">VOICES</a>
          <a href="#">LENS</a>
          <a href="#">STORY</a>
          <a href="#">QUIZZ</a>
        </div>
      </div>
      <div className="containerMul">
        <div className="containerLeftMul">
          {/* <img
            src="https://znews-photo.zadn.vn/w860/Uploaded/neg_yslewlx/2022_01_15/thu_1.jpg"
            alt=""
          />
          <div className="containerLeftTitleMul">
            <p>
              <i className="fa fa-picture-o" aria-hidden="true"></i>
              Vợ siêu mẫu xinh đẹp đi cùng Alves trong lễ ra mắt Barca
            </p>
          </div>
          <p>
            Tối 17/11 ( giờ Hà Nội ), Baccelona tổ chức lễ ra mắt cho Dani
            Alves, tân binh đầu tiên dưới thời HLV Xavi Hanmendez
          </p> */}

          <DefaultMul item={itemId} showDes={true} />
        </div>
        <div className="containerRightMul">
          <DefaultMul
            data={listAdminMulmedia}
            class="containerRightItemTitleMul"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listAdminMulmedia: selectAdminMulmedia,
  detailAdminMulmediaData: selectDetailAdminMulmedia,
});

const mapDispatchToProps = (dispatch) => ({
  getAllAdminMulmedia: (payload) =>
    dispatch(actions.getAllAdminMulmedia(payload)),
  asyncGetDetailAdminMulmedia: (payload) =>
    actions.asyncGetDetailAdminMulmedia(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Multimedia);
