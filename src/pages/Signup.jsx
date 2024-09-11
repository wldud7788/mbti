import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const { register } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  return (
    <div className="login_form_container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register(userData);
        }}
      >
        <div className="input_container">
          <h2>회원가입</h2>
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
          <input
            type="text"
            name="nickname"
            value={userData.nickname}
            onChange={(e) => {
              setUserData({ ...userData, nickname: e.target.value });
            }}
            placeholder="nickname"
          />
          <button>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
