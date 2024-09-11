import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isUser } = useContext(AuthContext);
  if (!isUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
