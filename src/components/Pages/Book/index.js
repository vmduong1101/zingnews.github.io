import React, { useState, useEffect } from "react";
import DefaultComponent from "./../../Common/Default/DefaultComponent";
import "./style.css";
import * as actions from "./../Admin/AdminBook/Store/actions";
import * as actionsAdminBookNew from "../Admin/AdminBookNew/Store/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import {
  selectDetailBook,
  selectBooks,
  selectLoading,
} from "./../Admin/AdminBook/Store/selectors";
import { selectAdminBookNew } from "./../Admin/AdminBookNew/Store/selectors";
import DefaultBookNew from "../../Common/Default/DefaultBookNew";
import { Spin } from "antd";

const BookComponent = (props) => {
  const { getAllBooks, asyncGetDetailBookData, getAllBookNews } = props;
  const { loading, listBook, listBookNew } = props;

  const [itemId, setItemId] = useState([]);
  useEffect(() => {
    getAllBookNews();
    getDetailBook(1);
    getAllBooks();
  }, []);

  const getDetailBook = async (id) => {
    const response = await asyncGetDetailBookData(id);
    console.log(response);
    setItemId(response);
  };

  return (
    <>
      <Spin spinning={loading ? true : false}>
        <div className="bookHeader">
          <h1>SÁCH HAY</h1>
          <hr />
          <div className="contentBook">
            <DefaultComponent
              item={itemId}
              showDes={true}
              hide={false}
              class="bookCustom"
            />
            <div className="sectionContent">
              <DefaultComponent
                data={listBook}
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
            <DefaultBookNew
              data={listBookNew}
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
  listBook: selectBooks,
  listBookNew: selectAdminBookNew,
  detailBook: selectDetailBook,
  loading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBooks: (payload) => dispatch(actions.getAllBooks(payload)),
  getAllBookNews: (payload) =>
    dispatch(actionsAdminBookNew.getAllAdminBookNew(payload)),
  asyncGetDetailBookData: (payload) =>
    actions.asyncGetDetailBook(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(BookComponent);
