import React, { useState, useEffect } from "react";
import { CheckOutlined } from "@ant-design/icons";
import * as actions from "./Store/actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";
import {
  selectDetailBook,
  selectLoading,
  selectBooks,
  selectBookUpdate,
} from "./Store/selectors";
import {
  Table,
  Space,
  Popconfirm,
  Modal,
  Button,
  Form,
  Input,
  notification,
} from "antd";

const { TextArea } = Input;
const AdminBook = (props) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
      width: 200,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    // {
    //   title: "Image",
    //   dataIndex: "image",
    //   key: "image",
    // },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => editData(record.id)}>Edit</Button>

          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        </Space>
      ),
      align: "center",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [formModal] = Form.useForm();
  const [searchValue, setSearchValue] = useState("");
  const [dataBooks, setDataBooks] = useState([]);
  console.log(props);
  const {
    getAllBooks,
    asynCreateBook,
    asyncUpdateBookData,
    asyncGetDetailBookData,
    deleteBook,
  } = props;
  const { loading, listBook, detailBook } = props;
  console.log(listBook);

  useEffect(() => {
    asyncGetDetailBookData(1);
    getAllBooks();
  }, []);

  const editData = async (id) => {
    const response = await asyncGetDetailBookData(id);
    setIsBase64(false);
    if (response) {
      formModal.setFieldsValue({
        id: response.id,
        title: response.title,
        content: response.content,
        description: response.description,
        // image: response.image,
      });
    }
    setVisible(true);
  };

  const createBook = () => {
    formModal.resetFields();

    formModal.setFieldsValue({
      id: listBook.length + 1,
    });
    setIsBase64(true);
    setVisible(true);
  };

  const onFinish = async (values) => {
    const index = listBook.findIndex((item) => item.id === values.id);
    if (index >= 0) {
      const data = await asyncUpdateBookData(values);
      if (data) {
        notification.info({
          message: `Chỉnh sửa thông tin sách thành công`,
          placement: "topRight",
          icon: <CheckOutlined style={{ color: "green" }} />,
          style: { zIndex: "10000" },
        });
        getAllBooks();
      }
    } else {
      const params = {
        id: values.id,
        title: values.title,
        content: values.content,
        description: values.description,
        image: baseImage,
      };
      const data = await asynCreateBook(params);
      if (data) {
        notification.info({
          message: `Thêm sách thành công`,
          placement: "topRight",
          icon: <CheckOutlined style={{ color: "green" }} />,
          style: { zIndex: "10000" },
        });
        getAllBooks();
      }
    }
    handleCancel();
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    notification.info({
      message: `Xóa sách thành công`,
      placement: "topRight",
      icon: <CheckOutlined style={{ color: "green" }} />,
      style: { zIndex: "10000" },
    });
    getAllBooks();
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const FindAll = (key) => {
    const rex = new RegExp(key, "i");
    return listBook.filter((ele) => ele.name.search(rex) >= 0);
  };
  const searchTable = (searchValue) => {
    setDataBooks(FindAll(searchValue));
    console.log(searchValue);
  };

  const [baseImage, setBaseImage] = useState("");
  const [isBase64, setIsBase64] = useState(true);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <>
      <div className="book">
        <div className="search">
          <Form.Item name="search" label="Search">
            <Input onChange={(e) => setSearchValue(e.target.value)} />
          </Form.Item>
          <Button type="primary" onClick={() => searchTable(searchValue)}>
            Tìm kiếm
          </Button>
        </div>

        <Table columns={columns} dataSource={listBook} loading={loading} />

        <Button type="primary" onClick={createBook}>
          Create
        </Button>
        <Modal
          title="Edit Book"
          visible={visible}
          onCancel={handleCancel}
          footer={
            <Button type="primary" htmlType="submit" form="formModal">
              Save
            </Button>
          }
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            form={formModal}
            name="formModal"
            onFinish={onFinish}
          >
            <Form.Item name="id" label="ID" rules={[{ required: true }]}>
              <Input disabled />
            </Form.Item>

            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input allowClear addonBefore />
            </Form.Item>

            <Form.Item name="content" label="Content">
              <TextArea style={{ height: 140 }} allowClear />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <TextArea style={{ height: 140 }} allowClear />
            </Form.Item>
            {isBase64 && (
              <>
                <Form.Item
                  name="image"
                  label="Image"
                  rules={[{ required: true }]}
                >
                  <Input
                    type="file"
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                  />
                </Form.Item>
                <img className="base64" src={baseImage} alt="" />
              </>
            )}
          </Form>
        </Modal>
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  listBook: selectBooks,
  bookUpdate: selectBookUpdate,
  detailBook: selectDetailBook,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBooks: (payload) => dispatch(actions.getAllBooks(payload)),
  asynCreateBook: (payload) => actions.asyncCreateBook(dispatch)(payload),
  asyncUpdateBookData: (payload) => actions.asyncUpdateBook(dispatch)(payload),
  asyncGetDetailBookData: (payload) =>
    actions.asyncGetDetailBook(dispatch)(payload),
  deleteBook: (payload) => actions.deleteBookRequest(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AdminBook);
