import style from './contacts.module.scss';

import { useState } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import AddContactButton from 'components/AddContactButton/AddContactButton';
import FilterButton from 'components/FilterButton/FilterButton';

const Contacts = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const toggleModal = e => {
    const buttonName = e.currentTarget.name;
    switch (buttonName) {
      case 'addContact':
        setIsAddModalOpen(!isAddModalOpen);
        break;
      case 'filterContact':
        setIsFilterModalOpen(!isFilterModalOpen);
        break;
      default:
        console.log(`no such state`);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.contact_bar}>
        <Filter isFilterModalOpen={isFilterModalOpen} />
        <div className={style.contact_bar_buttons}>
          <FilterButton toggleModal={toggleModal} />
          {isAddModalOpen && <ContactForm toggleModal={toggleModal} />}
          {!isAddModalOpen && <AddContactButton toggleModal={toggleModal} />}
        </div>
      </div>

      <ContactList />
    </div>
  );
};

export default Contacts;
