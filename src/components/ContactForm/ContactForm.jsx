import style from './contactForm.module.scss';

import PropTypes from 'prop-types';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { ReactComponent as AddIcon } from '../../img/addIcon.svg';

const ContactForm = ({ toggleModal }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items, isLoading } = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = evt => {
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        break;

      case 'number':
        setNumber(evt.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const foundName = items.find(contact => contact.name === name);

    if (foundName) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        name,
        number,
      })
    );
    reset();
    toggleModal(evt);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={evt => handleSubmit(evt)}>
        <label className={style.label}>
          {' '}
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={evt => handleChange(evt)}
          />
        </label>

        <label className={style.label}>
          {' '}
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={evt => handleChange(evt)}
          />
        </label>
        <button
          className={style.button}
          type="submit"
          disabled={isLoading === 'addContact'}
        >
          <div className={style.textButton}>
            <AddIcon className={style.icon} />
            <div className={style.buttonLoader}>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="13"
                visible={isLoading === 'addContact'}
              />
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  toggleModal: PropTypes.func,
};

export default ContactForm;
