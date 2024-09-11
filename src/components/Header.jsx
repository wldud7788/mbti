import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isUser, logout } = useContext(AuthContext);
  const nav = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      nav("/");
    }
  };
  return (
    <header>
      <nav>
        <Link to="/">홈</Link>
        <div className="nav_container">
          <Link to="/testpage">테스트하러가기</Link>
          <Link to="/results">테스트 결과보기</Link>
          {isUser ? (
            <>
              <Link to="/mypage">마이페이지</Link>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/login">로그인</Link>
              <Link to="/signup">회원가입</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
