import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Layout = ({ chidlren }) => {
  const { isUser, userInfo } = useContext(AuthContext);
  const nav = useNavigate();
  const handleLogout = () => {
    alert("정말로 로그아웃 하시겠습니까?");
    nav("/");
  };
  return (
    <>
      <Header />
    </>
  );
};

export default Layout;
