import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeComponent from "./../Pages/Home";
import BookComponent from "./../Pages/Book";
import PublishComponent from "./../Pages/Publish";
import BookDetail from "./../Pages/PageDetail/BookDetail";
import PublishDetail from "./../Pages/PageDetail/PubishDetail";
import AdminBook from "./../Pages/Admin/AdminBook";
import AdminPublish from "./../Pages/Admin/AdminPublish";
import HeaderComponent from "./../Common/Header";
// import Login from './../Pages/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminDang1 from "../Pages/Admin/AdminDang1";
import AdminDang2 from "../Pages/Admin/AdminDang2";
import AdminDang3 from "../Pages/Admin/AdminDang3";
import AdminBookNew from "../Pages/Admin/AdminBookNew";
import AdminPublishNew from "../Pages/Admin/AdminPublishNew";
import BookNewDetail from "../Pages/PageDetail/BookNewDetail";
import PublishNewDetail from "./../Pages/PageDetail/PubishNewDetail";
import Dang1Detail from "../Pages/PageDetail/Dang1Detail";
import Dang2Detail from "../Pages/PageDetail/Dang2Detail";
import Dang3Detail from "../Pages/PageDetail/Dang3Detail";
import AdminMulmedia from "../Pages/Admin/AdminMulmedia";
import MulmediaDetail from "../Pages/PageDetail/MulmediaDetail";
import Footer from "../Common/Footer";

const DefaultLayout = () => {
  // const loggedInUser = localStorage.getItem("user");

  // if (loggedInUser === null) {
  //   return (
  //     <Navigate
  //       to={{
  //         pathname: "/login",
  //       }}
  //     />
  //   );
  // }
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />{" "}
        <Route path="/book" element={<BookComponent />} />{" "}
        <Route path="/publish" element={<PublishComponent />} />{" "}
        <Route path="/book/:id" element={<BookDetail />} />{" "}
        <Route path="/publish/:id" element={<PublishDetail />} />{" "}
        <Route path="/booknew/:id" element={<BookNewDetail />} />{" "}
        <Route path="/publishNew/:id" element={<PublishNewDetail />} />{" "}
        <Route path="/dang1/:id" element={<Dang1Detail />} />{" "}
        <Route path="/dang2/:id" element={<Dang2Detail />} />{" "}
        <Route path="/dang3/:id" element={<Dang3Detail />} />{" "}
        <Route path="/multimedia/:id" element={<MulmediaDetail />} />{" "}
        <Route path="/adminBook" element={<AdminBook />} />{" "}
        <Route path="/adminPublish" element={<AdminPublish />} />{" "}
        <Route path="/adminDang1" element={<AdminDang1 />} />{" "}
        <Route path="/adminDang2" element={<AdminDang2 />} />{" "}
        <Route path="/adminDang3" element={<AdminDang3 />} />{" "}
        <Route path="/adminBookNew" element={<AdminBookNew />} />{" "}
        <Route path="/adminPublishNew" element={<AdminPublishNew />} />{" "}
        <Route path="/adminMultimedia" element={<AdminMulmedia />} />{" "}
      </Routes>{" "}
      <Footer />
    </>
  );
};

export default DefaultLayout;
