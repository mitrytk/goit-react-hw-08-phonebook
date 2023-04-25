import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/operations';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/selectors';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Login from 'pages/Login/Login';
import Registartion from 'pages/Registration/Registration';
import Home from 'pages/Home/Home';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  restricted
                  component={<Login />}
                />
              }
            />
            <Route
              path="registration"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  restricted
                  component={<Registartion />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
