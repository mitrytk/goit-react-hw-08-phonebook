import style from './filter.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = ({ isFilterModalOpen }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <label className={clsx(style.label, isFilterModalOpen && style.open)}>
      {' '}
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filter}
        onChange={evt => handleChange(evt)}
      />
    </label>
  );
};

Filter.propTypes = {
  isFilterModalOpen: PropTypes.bool,
};

export default Filter;
