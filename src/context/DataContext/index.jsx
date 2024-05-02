// Définition des types d'actions
export const SIGN_IN = 'SIGN_IN'; // Action pour se connecter
export const SIGN_OUT = 'SIGN_OUT'; // Action pour se déconnecter
export const GET_USER_DETAILS = 'GET_USER_DETAILS'; // Action pour obtenir les détails de l'utilisateur

// Définition de l'action signIn qui prend un token en paramètre
export const signIn = (token) => ({
  type: SIGN_IN, // Le type de l'action est SIGN_IN
  payload: token, // Le payload de l'action est le token
});

// Définition de l'action signOut qui ne prend pas de paramètre
export const signOut = () => ({
  type: SIGN_OUT, // Le type de l'action est SIGN_OUT
});

// Définition de l'action getUserDetails qui prend un utilisateur en paramètre
export const getUserDetails = (user) => ({
  type: GET_USER_DETAILS, // Le type de l'action est GET_USER_DETAILS
  payload: user, // Le payload de l'action est l'utilisateur
});
