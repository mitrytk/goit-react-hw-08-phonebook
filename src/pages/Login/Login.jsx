import style from './login.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'redux/operations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(login({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = evt => {
    switch (evt.currentTarget.name) {
      case 'email':
        setEmail(evt.currentTarget.value);
        break;

      case 'password':
        setPassword(evt.currentTarget.value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Login to your account</h1>
      <form onSubmit={evt => handleSubmit(evt)} className={style.form}>
        <label className={style.label}>
          Mail
          <input
            className={style.input}
            type="email"
            name="email"
            value={email}
            onChange={evt => handleChange(evt)}
          />
        </label>
        <label className={style.label}>
          Password
          <input
            className={style.input}
            type="password"
            name="password"
            value={password}
            onChange={evt => handleChange(evt)}
          />
        </label>
        <div className={style.registration_message}>
          <p>Don't have an account yet?</p>
          <Link className={style.registration_link} to="/registration">
            Registration
          </Link>
        </div>
        <button className={style.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
