import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../util/auth";

const ProtectedRoute = ({ children }) => {
  const auth = isAuthenticated();
  return auth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
