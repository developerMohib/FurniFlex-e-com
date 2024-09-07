import Loader from "../components/Loader/Loader";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
