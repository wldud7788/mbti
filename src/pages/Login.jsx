import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const { login } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("로그인!");
    try {
      await login(userData); // 로그인 요청이 완료될 때까지 기다림
      nav("/"); // 로그인 성공 후 페이지 이동
    } catch (error) {
      alert(
        "로그인 실패: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };
  return (
    <div className="login_form_container">
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <h2>로그인</h2>
          <input
            type="text"
            name="id"
            value={userData.id}
            onChange={(e) => {
              setUserData({ ...userData, id: e.target.value });
            }}
            placeholder="id"
          />
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            placeholder="password"
          />
          <button>로그인</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
