import style from './addContactButton.module.scss';
import { ReactComponent as AddIcon } from '../../img/addIcon.svg';

const AddContactButton = ({ toggleModal }) => {
  return (
    <button
      className={style.button}
      type="button"
      onClick={e => toggleModal(e)}
      name="addContact"
    >
      <AddIcon className={style.icon} />
      New contact
    </button>
  );
};

export default AddContactButton;
