import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const AuthProvider = ({ children }) => {
  // 로그인 했는지 안했는지 확인
  const [isUser, setIsUser] = useState(!!localStorage.getItem("accessToken"));

  // 유저 정보 저장
  const [userInfo, setUserInfo] = useState(null);
  const token = localStorage.getItem("accessToken");
  // 유저 정보 패치
  const fetchUserInfo = async () => {
    if (!token) {
      console.log("토큰 없는듯");
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error(
        "userInfo 가져오는 부분의 에러",
        error.response ? error.response.data : error.message
      );
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  // userData를 가져와서 등록하는 부분
  const register = async (userData) => {
    const { data } = await axios.post(`${API_URL}/register`, userData);
    return data;
  };

  const login = async (userData) => {
    const { data } = await axios.post(`${API_URL}/login`, userData);
    if (data.accessToken) {
      // 응답에서 accessToken 확인
      localStorage.setItem("accessToken", data.accessToken); // 토큰 저장
      setIsUser(true); // 로그인 상태 업데이트
      await fetchUserInfo(); // 사용자 정보 패치 함수 호출
    }
    return data;
  };

  const logout = () => {
    localStorage.removeItem("accessToken"); // 토큰 삭제
    setIsUser(false); // 로그인 상태 업데이트
    setUserInfo(null); // 사용자 정보 초기화
  };

  const getUserProfile = async (token) => {
    const { data } = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };
  const updateProfile = async (nickname) => {
    const { data } = await axios.patch(
      `${API_URL}/profile`,
      { nickname },
      {
        headers: {
          Authorization: `Bearer ${token}`, // 최신 토큰 사용
        },
      }
    );
    console.log("어떤데이터?", data);
    setUserInfo({ ...userInfo, nickname: data.nickname });
    return data;
  };
  return (
    <AuthContext.Provider
      value={{
        isUser,
        setIsUser,
        userInfo,
        setUserInfo,
        register,
        login,
        getUserProfile,
        updateProfile,
        logout,
        fetchUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
