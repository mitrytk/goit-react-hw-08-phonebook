import style from './sharedLayout.module.scss';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import BurgerButton from 'components/BurgerButton/BurgerButton';

const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    blockScroll();
  };

  const blockScroll = () => {
    const bodyEl = document.querySelector('body');
    bodyEl.classList.toggle('block_scroll');
  }

  return (
    <>
      <header className={style.header}>
        <BurgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
        <div
          className={clsx(style.container, !isMenuOpen && style.hide)}
          onClick={toggleMenu}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
