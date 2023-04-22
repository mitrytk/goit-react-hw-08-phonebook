import style from './userMenu.module.scss';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { useSelector } from 'react-redux';
import { getName } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getName);
  const handleClick = e => {
    dispatch(logOut());
  };
  return (
    <div className={style.container}>
      <p className={style.mail}>{`user: ${userName}`}</p>
      <button onClick={e => handleClick(e)} className={style.login_Button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
