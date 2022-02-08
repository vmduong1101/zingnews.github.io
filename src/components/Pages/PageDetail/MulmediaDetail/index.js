import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "../../Admin/AdminMulmedia/Store/actions";
import { selectDetailAdminMulmedia } from "../../Admin/AdminMulmedia/Store/selectors";
import { Spin } from "antd";

const MulmediaDetail = (props) => {
  const { asyncGetDetailAdminMulmedia } = props;
  const [itemId, setItemId] = useState([]);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemMul(id);
  }, []);
  const getItemMul = async (id) => {
    const response = await asyncGetDetailAdminMulmedia(id);
    setItemId(response);
    if (response) {
      setLoading(false);
    }
  };
  console.log(itemId);
  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="mulDetail">
          <h5 align="center">MULTIMEDIA</h5>
          <h1>{itemId.title}</h1>
          <div className="mulTime">
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
          <div className="mulSumary">
            <p>{itemId.description}</p>
          </div>
          <div className="mulContent">
            <p>{itemId.content}</p>
          </div>
          <div className="mulImage">
            <img src={itemId.image} alt="" />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  detailMulmedia: selectDetailAdminMulmedia,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetDetailAdminMulmedia: (payload) =>
    actions.asyncGetDetailAdminMulmedia(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(MulmediaDetail);
