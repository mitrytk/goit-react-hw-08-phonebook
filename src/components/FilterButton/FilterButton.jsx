import style from './filterButton.module.scss';
import PropTypes from 'prop-types';
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

FilterButton.propTypes = {
  toggleModal: PropTypes.func,
};

export default FilterButton;
