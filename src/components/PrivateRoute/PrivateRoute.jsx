import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

const PrivateRoute = ({component, redirectTo}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? component : <Navigate to={redirectTo}/>;
}
export default PrivateRoute;