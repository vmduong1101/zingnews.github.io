import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "../../Admin/AdminDang3/Store/actions";
import { selectDetailDang3 } from "../../Admin/AdminDang3/Store/selectors";
import { Spin } from "antd";

const Dang3Detail = (props) => {
  const { asyncGetDetailDang3 } = props;
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemBook(id);
  }, []);
  const getItemBook = async (id) => {
    const response = await asyncGetDetailDang3(id);
    setItemId(response);
    if (response) {
      setLoading(false);
    }
  };
  console.log(itemId);
  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="dang3Detail">
          <h5 align="center">DẠNG 3</h5>
          <h1>{itemId.title}</h1>
          <div className="dang3Time">
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
          <div className="dang3Sumary">
            <p>{itemId.description}</p>
          </div>
          <div className="dang3Content">
            <p>{itemId.content}</p>
          </div>
          <div className="dang3Image">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailDang3: selectDetailDang3,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailDang3: (payload) =>
    actions.asyncGetDetailDang3(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Dang3Detail);
