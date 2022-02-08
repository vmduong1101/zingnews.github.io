import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "./../../Admin/AdminPublishNew/Store/actions";
import { selectDetailAdminPublishNew } from "./../../Admin/AdminPublishNew/Store/selectors";
import { Spin } from "antd";

const PublishNewDetail = (props) => {
  const { asyncGetDetailAdminPublishNew } = props;
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemPublish(id);
  }, []);
  const getItemPublish = async (id) => {
    const response = await asyncGetDetailAdminPublishNew(id);
    setItemId(response);
    if (response) {
      setLoading(false);
    }
  };
  console.log(itemId);
  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="publishNewDetail">
          <h5 align="center">MỚI XUẤT BẢN</h5>
          <h1>{itemId.title}</h1>
          <div className="publishNewTime">
            <ul className="theArticleMetaPub">
              <li className="theArticleAuthor">
                <a href="https://zingnews.vn/Thu-Huệ-tim-kiem.html?type=3">
                  Đỗ Tấn
                </a>
              </li>
              <li>Thứ ba, 28/12/2021 14:21 (GMT+7)</li>
              <li>14:21 28/12/2021</li>
            </ul>
          </div>
          <div className="publishNewSumary">
            <p>{itemId.description}</p>
          </div>
          <div className="publishNewContent">
            <p>{itemId.content}</p>
          </div>
          <div className="publishNewImage">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailAdminPublishNew: selectDetailAdminPublishNew,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailAdminPublishNew: (payload) =>
    actions.asyncGetDetailAdminPublishNew(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PublishNewDetail);
