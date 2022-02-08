import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "../../Admin/AdminDang2/Store/actions";
import { selectDetailDang2 } from "../../Admin/AdminDang2/Store/selectors";
import { Spin } from "antd";

const Dang2Detail = (props) => {
  const { asyncGetDetailDang2 } = props;
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemBook(id);
  }, []);
  const getItemBook = async (id) => {
    const response = await asyncGetDetailDang2(id);
    setItemId(response);
    if (response) {
      setLoading(false);
    }
  };
  console.log(itemId);
  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="dang2Detail">
          <h5 align="center">DẠNG 2</h5>
          <h1>{itemId.title}</h1>
          <div className="dang2Time">
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
          <div className="dang2Sumary">
            <p>{itemId.description}</p>
          </div>
          <div className="dang2Content">
            <p>{itemId.content}</p>
          </div>
          <div className="dang2Image">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailDang2: selectDetailDang2,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailDang2: (payload) =>
    actions.asyncGetDetailDang2(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Dang2Detail);
