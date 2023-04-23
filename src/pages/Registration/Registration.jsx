import style from './registration.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/operations';

const Registartion = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));

    reset();
  };

  const reset = () => {
    setName('');
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

      case 'name':
        setName(evt.currentTarget.value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Sign up to own <br /> your contact list
      </h1>
      <form onSubmit={evt => handleSubmit(evt)} className={style.form}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            onChange={evt => handleChange(evt)}
          />
        </label>
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
        <button className={style.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registartion;
