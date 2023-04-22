import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';

const Navigation = () => {
    return <nav className={style.container}>
        <NavLink to="/" className={style.link}>Home</NavLink>
        <NavLink to="/contacts" className={style.link}>Contacts</NavLink>
    </nav>
};

export default Navigation;