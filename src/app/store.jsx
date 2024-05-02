// Importation de la fonction configureStore depuis la bibliothèque Redux Toolkit
import { configureStore } from "@reduxjs/toolkit"

// Définition de l'état initial de l'application
let preloadedState = { 
    auth: {
        token: null, // Token d'authentification initialisé à null
        email: null, // Email de l'utilisateur initialisé à null
        user: null, // Utilisateur initialisé à null
        username: null, // Nom d'utilisateur initialisé à null
    },
};

// Définition du réducteur qui gère les actions liées à l'authentification
const reducer = (currentState = preloadedState.auth, action ) => {
    switch (action.type) {
        case 'SIGN_IN': // En cas de connexion de l'utilisateur
            return { ...currentState, token: action.payload }; // Mettre à jour le token
        case 'SIGN_OUT': // En cas de déconnexion de l'utilisateur
            return {...currentState, token: null} // Réinitialiser le token à null
        case 'GET_USER_DETAILS': // En cas de récupération des détails de l'utilisateur
            return {...currentState, username: action.payload} // Mettre à jour le nom d'utilisateur            

        default: // Par défaut, retourner l'état actuel
            return currentState
    }
}

// Configuration du store Redux avec le réducteur et l'état initial
const store = configureStore({
  reducer: {
    auth: reducer, // Utilisation du réducteur d'authentification
  },
  preloadedState, // Utilisation de l'état initial
});

// Exportation du store pour être utilisé dans l'application
export default store;
