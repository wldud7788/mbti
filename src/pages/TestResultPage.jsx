import React, { useEffect, useState } from "react";
import TestResultList from "../components/TestResultList";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTestResults } from "../api/testResult";

const TestResult = () => {
  const { userInfo } = useContext(AuthContext);
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  return (
    <div>
      <div className="mbti_result">
        <h1>모든 테스트 결과</h1>
        <TestResultList
          results={results}
          user={userInfo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResult;
