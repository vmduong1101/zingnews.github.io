import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import * as actions from "./Store/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import { selectLoading, selectLogin } from "./Store/selectors";
import { notification } from "antd";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { loginRequest } = props;
  const { loginData } = props;
  console.log(loginData);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      Username: username,
      Password: password,
    };
    const res = await loginRequest(params);
    if (res) {
      navigate("/");
      notification.open({
        message: "Đăng Nhập Thành công",
        placement: "topRight",
        icon: <CheckOutlined style={{ color: "green" }} />,
      });
    } else {
      notification.open({
        message: "Đăng Nhập Thất Bại ",
        placement: "topRight",
        description: "Sai tên đăng nhập hoặc mật khẩu",
        icon: <CloseOutlined style={{ color: "red" }} />,
      });
    }
  };

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const loggedInUser = localStorage.getItem("user");

  if (loggedInUser !== null) {
    return <Navigate to={{ pathname: "/" }} />;
  }

  // const openNotificationFalse = (placement) => {
  //   return notification.info({
  //     message: `Đăng nhập thất bại `,
  //     description: "Sai tài khoản hoặc mật khẩu",
  //     placement,
  //     icon: <CloseOutlined style={{ color: "red" }} />,
  //   });
  // };

  return (
    <div className="loginBackground">
      <div className="loginContainer">
        <div className="loginContent">
          <form onSubmit={handleSubmit}>
            <div className="col-12 textLogin">Login</div>
            <div className="col-12 form-group loginInput ">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(event) => handleOnChangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group loginInput">
              <label className="fix">Password:</label>
              <div className="customInputPassword">
                <input
                  type={isShowPassword ? "text" : "password"}
                  required
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => handleOnChangePassword(event)}
                />
                <span onClick={() => handleShowHidePassword()}>
                  <i
                    className={
                      isShowPassword ? "far fa-eye-slash" : "far fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button className="btnLogin" type="submit">
                Login
              </button>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or login with:</span>
            </div>
            <div className="col-12 socialLogin">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  loginData: selectLogin,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => actions.loginRequest(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
