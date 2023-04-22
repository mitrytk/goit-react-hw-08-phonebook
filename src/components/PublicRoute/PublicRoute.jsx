import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({component, redirectTo, restricted}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo}/> : component;
}
export default PublicRoute;