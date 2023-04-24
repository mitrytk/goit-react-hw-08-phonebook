import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import PropTypes from 'prop-types';

const PublicRoute = ({ component, redirectTo, restricted }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object,
  restricted: PropTypes.bool,
};

export default PublicRoute;
