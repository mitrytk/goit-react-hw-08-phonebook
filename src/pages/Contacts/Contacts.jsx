import style from './contacts.module.scss';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
