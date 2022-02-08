import React, { useState, useEffect } from "react";
import "./style.css";
import * as actions from "./../Admin/AdminPublish/Store/actions";
import * as actionsAdminPublishNew from "./../Admin/AdminPublishNew/Store/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import {
  selectDetailPublish,
  selectPublishs,
  selectLoading,
} from "./../Admin/AdminPublish/Store/selectors";
import { selectAdminPublishNew } from "./../Admin/AdminPublishNew/Store/selectors";
import DefaultPublishNew from "./../../Common/Default/DefaultPublishNew";
import DefaultPublish from "../../Common/Default/DefaultPublish";
import { Spin } from "antd";

const PublishComponent = (props) => {
  const { getAllPublishs, asyncGetDetailPublishData, getAllPublishNews } =
    props;
  const { loading, listPublish, listPublishNew } = props;

  const [itemId, setItemId] = useState([]);
  useEffect(() => {
    getAllPublishNews();
    getDetailPublish(1);
    getAllPublishs();
  }, []);

  const getDetailPublish = async (id) => {
    const response = await asyncGetDetailPublishData(id);
    console.log(response);
    setItemId(response);
  };

  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="bookHeader">
          <h1>XUẤT BẢN</h1>
          <hr />
          <div className="contentBook">
            <DefaultPublish
              item={itemId}
              showDes={true}
              hide={false}
              class="bookCustom"
            />
            <div className="sectionContent">
              <DefaultPublish
                data={listPublish}
                showDes={false}
                class="itemSection"
              />
            </div>
          </div>
        </div>
        <div className="bookNew">
          <h2>
            {" "}
            <span>/</span> MỚI NHẤT
          </h2>
          <hr />
          <div className="bookNewItem">
            <DefaultPublishNew
              data={listPublishNew}
              showDes={true}
              hide={false}
              class="bookItemNew"
            />
          </div>
        </div>
      </Spin>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  listPublish: selectPublishs,
  listPublishNew: selectAdminPublishNew,
  detailPublish: selectDetailPublish,
  loading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPublishs: (payload) => dispatch(actions.getAllPublishs(payload)),
  getAllPublishNews: (payload) =>
    dispatch(actionsAdminPublishNew.getAllAdminPublishNew(payload)),
  asyncGetDetailPublishData: (payload) =>
    actions.asyncGetDetailPublish(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PublishComponent);
