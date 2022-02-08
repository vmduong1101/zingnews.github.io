import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "./../../Admin/AdminBook/Store/actions";
import { selectDetailBook } from "./../../Admin/AdminBook/Store/selectors";
import { Spin } from "antd";
const BookDetail = (props) => {
  const { asyncGetDetailBookData } = props;
  const [itemId, setItemId] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    getItemBook(id);
  }, []);
  const getItemBook = async (id) => {
    const response = await asyncGetDetailBookData(id);
    if (response) {
      setLoading(false);
    }
    setItemId(response);
  };

  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="bookDetail">
          <h5 align="center">SÁCH</h5>
          <h1>{itemId.title}</h1>
          <div className="bookTime">
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
          <div className="bookSumary">
            <p>{itemId.description}</p>
          </div>
          <div className="bookContent">
            <p>{itemId.content}</p>
          </div>
          <div className="bookImage">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailBook: selectDetailBook,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailBookData: (payload) =>
    actions.asyncGetDetailBook(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(BookDetail);
