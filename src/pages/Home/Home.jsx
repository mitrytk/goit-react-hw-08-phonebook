import style from './home.module.scss';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <section className={style.section}>
      <div className={style.container}>
        {!isLoggedIn && (
          <p className={style.title}>
            <span>
            We help keep contacts.
            </span>
            <br />
            <Link to="/registration">Register</Link> or {' '}
            <Link to="/login">login</Link> to your account to use it.
          </p>
        )}
        {isLoggedIn && (
          <p className={style.title}>
            <span>
            We help keep contacts.
            </span>
            <br />
            <Link to="/contacts">Go to your contacts</Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default Home;
