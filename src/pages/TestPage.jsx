import React from "react";
import TestForm from "../components/TestForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { calculateMBTI } from "../utils/calculateMBTI";
import { createTestResult } from "../api/testResult";

const Test = () => {
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: userInfo.id,
      nickname: userInfo.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <div className="mbti_test_container">
      <h1>MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
