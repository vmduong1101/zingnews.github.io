import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "./../../Admin/AdminPublish/Store/actions";
import { selectDetailPublish } from "./../../Admin/AdminPublish/Store/selectors";
import { Spin } from "antd";

const PublishDetail = (props) => {
  const { asyncGetDetailAdminPublish } = props;
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemPublish(id);
  }, []);
  const getItemPublish = async (id) => {
    const response = await asyncGetDetailAdminPublish(id);
    setItemId(response);
    if (response) {
      setLoading(false);
    }
  };
  console.log(itemId);
  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="publishDetail">
          <h5 align="center">XUẤT BẢN</h5>
          <h1>{itemId.title}</h1>
          <div className="publishTime">
            <ul className="theArticleMetaWhite">
              <li className="theArticleAuthor">
                <a href="https://zingnews.vn/Thu-Huệ-tim-kiem.html?type=3">
                  Thu Huệ
                </a>
              </li>
              <li>Thứ ba, 28/12/2021 14:21 (GMT+7)</li>
              <li>14:21 28/12/2021</li>
            </ul>
          </div>
          <div className="publishSumary">
            <p>{itemId.description}</p>
          </div>
          <div className="publishContent">
            <p>{itemId.content}</p>
          </div>
          <div className="publishImage">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailAdminPublish: selectDetailPublish,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailAdminPublish: (payload) =>
    actions.asyncGetDetailPublish(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PublishDetail);
