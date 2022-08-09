import React, { useState, useEffect } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import "./style.css";
import { Menu } from "antd";
import DefaultComponent from "./../Default/DefaultComponent";
import * as actions from "../../../components/Pages/Admin/AdminDang1/Store/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import { selectDang1 } from "../../../components/Pages/Admin/AdminDang1/Store/selectors";
const { SubMenu } = Menu;
const HeaderComponent = (props) => {
  const { getAllDang1 } = props;
  const { listDang1 } = props;

  useEffect(() => {
    getAllDang1();
  }, []);

  const handleLogout = () => {
    var loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
  };
  const [isShowAdmin, setIsShowAdmin] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleShowAdmin = () => {
    setIsShowAdmin(!isShowAdmin);
  };
  const handleShowLogin = () => {
    setIsShowLogin(!isShowLogin);
  };
  const loggedInUser = localStorage.getItem("user");
  return (
    <>
      <div className="header">
        <label htmlFor="navMobileInput" className="navBarsBtn">
          <span className="dot">...</span>
        </label>

        <input
          type="checkbox"
          hidden
          className="navInput"
          id="navMobileInput"
        ></input>

        <label htmlFor="navMobileInput" className="navOverlay"></label>

        <div className="headerCategoryMobile">
          <label htmlFor="navMobileInput" className="navMobileClose">
            <i className="fas fa-times"></i>
          </label>
          <div className="headerCategoryItemMobile">
            <p className="navMobileLink">Xuất bản</p>
            <p className="navMobileLink">Sách</p>
            <p className="navMobileLink">Xã hội</p>
            <p className="navMobileLink">Thế giới</p>
            <p className="navMobileLink">Kinh doanh</p>
            <p className="navMobileLink">Công nghệ</p>
            <p className="navMobileLink">Sức khỏe</p>
            <p className="navMobileLink">Thể thao</p>
            <p className="navMobileLink">Giải trí</p>
            <p className="navMobileLink">Đời sống</p>
            <p className="navMobileLink">...</p>
          </div>
        </div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className="headerLogo">
            <img
              src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
              alt=""
            />
            <h4>TRI THỨC TRỰC TUYẾN</h4>
          </div>
        </NavLink>
        <div className="headerCategory">
          <div className="headerCategoryItem">
            <p>
              <NavLink
                to="/publish"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Xuất bản
              </NavLink>
              <NavLink
                to="/book"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  marginLeft: "25px",
                }}
              >
                Sách
              </NavLink>
            </p>
            {/* <p>Thế Giới</p>
            <p>Công Nghệ</p>
            <p>Thể Thao</p>
            <p>Kinh Doanh</p>
            <p>Xã hội</p>
            <p>Đời Sống</p>
            <p>Giải Trí</p> */}
            <p onClick={handleShowAdmin}>Admin</p>
            <p>...</p>
            {isShowAdmin && (
              <ul className="manageAdmin">
                <NavLink
                  to="/adminBook"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Sách</li>
                </NavLink>
                <NavLink
                  to="/adminDang1"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Dạng 1</li>
                </NavLink>
                <NavLink
                  to="/adminDang2"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Dạng 2</li>
                </NavLink>
                <NavLink
                  to="/adminDang3"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Dạng 3</li>
                </NavLink>
                <NavLink
                  to="/adminBookNew"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Sách Mới</li>
                </NavLink>
                <NavLink
                  to="/adminMultimedia"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Multi Media</li>
                </NavLink>
                <NavLink
                  to="/adminPublish"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Xuất Bản</li>
                </NavLink>
                <NavLink
                  to="/adminPublishNew"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <li onClick={handleShowAdmin}>Mới Xuất Bản</li>
                </NavLink>
              </ul>
            )}
          </div>
        </div>
        <div className="headerSearch">
          {/* <i className="fa fa-search" aria-hidden="true"></i> */}
          <img
            src="https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb?mode=scale&q=90&h=270&w=270&background=%230078D7"
            alt=""
            className="headerSearchImg"
            onClick={handleShowLogin}
          />
          {isShowLogin && (
            <div className="loginInfo">
              <div className="loginInforTop">
                <img
                  src="https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb?mode=scale&q=90&h=270&w=270&background=%230078D7"
                  alt=""
                />
                <div className="loginInfoRight">
                  {/* <h5>{JSON.parse(loggedInUser).res.data.result.username}</h5> */}
                  <h5>Minh Duong</h5>
                  <button onClick={() => handleLogout()}>Đăng xuất</button>
                </div>
              </div>
              <div className="loginInfoBottom">
                <h6>XEM GẦN ĐÂY</h6>
                <DefaultComponent data={listDang1} class="loginItemDefault" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  listDang1: selectDang1,
});

const mapDispatchToProps = (dispatch) => ({
  getAllDang1: (payload) => dispatch(actions.getAllDang1(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HeaderComponent);
