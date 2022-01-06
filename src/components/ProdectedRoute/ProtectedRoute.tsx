import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactChild | any
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation()
  const auth: any = useSelector<any>(state => state.auth)
  if (!auth.isLoggedIn) {
      return <Navigate to="/sign-in" state={{ from: location.pathname }} />
  }
  
  return children
}
export default ProtectedRoute;