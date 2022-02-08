import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "./../../Admin/AdminBookNew/Store/actions";
import { selectDetailAdminBookNew } from "./../../Admin/AdminBookNew/Store/selectors";
import { Spin } from "antd";

const BookNewDetail = (props) => {
  const { asyncGetDetailAdminBookNew } = props;
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemBook(id);
  }, []);
  const getItemBook = async (id) => {
    const response = await asyncGetDetailAdminBookNew(id);
    if (response) {
      setLoading(false);
    }
    setItemId(response);
  };
  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="bookNewDetail">
          <h5 align="center">SÁCH MỚI</h5>
          <h1>{itemId.title}</h1>
          <div className="bookNewTime">
            <ul className="theArticleMeta">
              <li className="theArticleAuthor">
                <a href="https://zingnews.vn/Thu-Huệ-tim-kiem.html?type=3">
                  Thu Huệ
                </a>
              </li>
              <li>Thứ ba, 28/12/2021 14:21 (GMT+7)</li>
              <li>14:21 28/12/2021</li>
            </ul>
          </div>
          <div className="bookNewSumary">
            <p>{itemId.description}</p>
          </div>
          <div className="bookNewContent">
            <p>{itemId.content}</p>
          </div>
          <div className="bookNewImage">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailAdminBookNew: selectDetailAdminBookNew,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailAdminBookNew: (payload) =>
    actions.asyncGetDetailAdminBookNew(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(BookNewDetail);
