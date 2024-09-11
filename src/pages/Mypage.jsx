import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";

const Mypage = () => {
  const { updateProfile, userInfo } = useContext(AuthContext);
  const [newNickName, setNewNickName] = useState("");

  return (
    <div className="mypage-container">
      <div className="mypage_text_area">
        <h2>회원정보</h2>
        <div></div>
        <p>아이디: {userInfo?.id}</p>
        <p>닉네임: {userInfo?.nickname}</p>
        <input
          type="text"
          value={newNickName}
          onChange={(e) => setNewNickName(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            updateProfile(newNickName);
          }}
        >
          닉네임 변경
        </button>
      </div>
    </div>
  );
};

export default Mypage;
