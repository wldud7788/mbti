import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <div className="home_container">
      <h1>무료 성격테스트</h1>
      자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요
      <button onClick={() => nav("/testpage")}>내 성격 알아보러 가기</button>
    </div>
  );
};

export default Home;
