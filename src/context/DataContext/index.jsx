export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';

export const signIn = (token) => ({
  type: SIGN_IN,
  payload: token,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const getUserDetails = (user) => ({
  type: GET_USER_DETAILS,
  payload: user,
});
