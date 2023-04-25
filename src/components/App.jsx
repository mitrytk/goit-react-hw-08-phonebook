import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Login from 'pages/Login/Login';
import Registartion from 'pages/Registration/Registration';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
};
