export const getContacts = state => state.contacts;
export const getToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getFilter = state => state.filter;
export const getIsRefreshing = state => state.auth.isRefreshing;
