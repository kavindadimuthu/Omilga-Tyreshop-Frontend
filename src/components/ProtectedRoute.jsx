import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // Prevent premature redirects
  }

  if (!user) {
    console.log("User is not authenticated, redirecting to login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    console.log("User role is not allowed, redirecting");
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return element;
};

export default ProtectedRoute;
