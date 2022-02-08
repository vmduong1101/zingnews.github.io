import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "../../Admin/AdminDang1/Store/actions";
import { selectDetailDang1 } from "../../Admin/AdminDang1/Store/selectors";
import { Spin } from "antd";

const Dang1Detail = (props) => {
  const { asyncGetDetailDang1 } = props;
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemBook(id);
  }, []);
  const getItemBook = async (id) => {
    const response = await asyncGetDetailDang1(id);
    setItemId(response);
    if (response) {
      setLoading(false);
    }
  };
  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="dang1Detail">
          <h5 align="center">DẠNG 1</h5>
          <h1>{itemId.title}</h1>
          <div className="dang1Time">
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
          <div className="dang1Sumary">
            <p>{itemId.description}</p>
          </div>
          <div className="dang1Content">
            <p>{itemId.content}</p>
          </div>
          <div className="dang1Image">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailDang1: selectDetailDang1,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailDang1: (payload) =>
    actions.asyncGetDetailDang1(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Dang1Detail);
