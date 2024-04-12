// actions.js
export const signIn = (username, password) => async dispatch => {
  try {
    const response = await fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    dispatch({ type: 'SIGN_IN', payload: data });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
};

