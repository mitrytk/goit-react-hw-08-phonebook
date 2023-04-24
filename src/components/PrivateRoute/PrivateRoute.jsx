import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object,
};

export default PrivateRoute;
