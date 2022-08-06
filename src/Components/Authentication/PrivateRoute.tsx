import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
};
