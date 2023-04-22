import { NavLink } from 'react-router-dom';
// import style from './authNav.module.scss';

const AuthNav = () => {
    return <nav>
        <NavLink to="/login"> LogIn</NavLink>/
        <NavLink to="/registration"> Registration </NavLink>
    </nav>
};

export default AuthNav;