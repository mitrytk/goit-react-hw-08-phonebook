import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, { payload }) {
      return state;
    },
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, { payload }) {
      return state;
    },
    [logOut.pending](state) {
      return state;
    },
    [logOut.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state) {
      state.isLoggedIn = false;
      return state;
    },
    [login.pending](state, { payload }) {
      return state;
    },
    [login.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, { payload }) {
      return state;
    },
  },
});

export const { setAuth } = authSlice.actions;
