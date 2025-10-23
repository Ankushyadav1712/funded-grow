import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  // if no user in localStorage → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // if user is logged in → show requested page
  return children;
};

export default ProtectedRoute;
