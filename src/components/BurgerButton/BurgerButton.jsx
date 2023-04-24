import style from './burgerButton.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const BurgerButton = ({ isMenuOpen, onClick }) => {
  return (
    <button className={style.button_burger} type="button" onClick={onClick}>
      <div
        className={clsx(style.line_top, isMenuOpen && style.rotate_left)}
      ></div>
      <div className={clsx(style.line_center, isMenuOpen && style.hide)}></div>
      <div
        className={clsx(style.line_bottom, isMenuOpen && style.rotate_right)}
      ></div>
    </button>
  );
};

BurgerButton.propTypes = {
  isMenuOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BurgerButton;
