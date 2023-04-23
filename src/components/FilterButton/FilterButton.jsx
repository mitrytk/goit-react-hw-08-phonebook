import style from './filterButton.module.scss';
import { ReactComponent as FilterIcon } from '../../img/filterIcon.svg';

const FilterButton = ({ toggleModal }) => {
  return (
    <button
      className={style.button}
      type="button"
      onClick={e => toggleModal(e)}
      name="filterContact"
    >
      <FilterIcon />
    </button>
  );
};

export default FilterButton;
