import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token && token === null) {
    return <Navigate to="/Login" />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoutes;
