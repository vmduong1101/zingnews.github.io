import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <img
          src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
          alt=""
        />
        <div className="info">
          <p>
            Tạp chí điện tử trực tuyến <br />
            Cơ quan chủ quản: Hội xuất bản Việt Nam <br />
            Giấy phép báo chí: số 75/GP-BTTTT do Bộ Thông tin và Truyền thông
            cấp ngày 26/02/2020
            <br />
            Phụ trách điều hành: Trần Ngọc Hiếu
            <br />
            Tổng thư kí Tòa soạn: Võ Minh Đương <br />
            © 2021 Toàn bộ bản quyền thuộc Tri thức trực tuyến <br />
          </p>
        </div>
      </div>
      <div className="footerRight">
        <p>
          Tòa soạn: An Hòa, D29 Nguyễn Văn Cừ, Quận Ninh Kiều, Cần Thơ <br />
          Hotline: 0931.222.666 - Email: toasoan@zing.vn <br />
          Liên hệ | Tuyển dụng | Quảng cáo
        </p>
      </div>
    </div>
  );
};
export default Footer;
