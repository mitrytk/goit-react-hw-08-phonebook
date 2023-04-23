import { NavLink } from 'react-router-dom';
import style from './authNav.module.scss';

const AuthNav = () => {
  return (
    <nav className={style.container}>
      <NavLink to="/login" className={style.login_button}>
        {' '}
        LogIn
      </NavLink>
      <span>{'/'}</span>
      <NavLink to="/registration" className={style.reg_button}>
        {' '}
        Sign Up{' '}
      </NavLink>
    </nav>
  );
};

export default AuthNav;
