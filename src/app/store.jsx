import { configureStore } from "@reduxjs/toolkit"

let preloadedState = { 
    auth: {
        token: null,
        email: null,
        user: null,
    },
};

const reducer = (currentState = preloadedState.auth, action ) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...currentState, token: action.payload };
        case 'SIGN_OUT':
            return {...currentState, token: null}
        case 'GET_USER_DETAILS':
            return {...currentState, user: action.payload}            

        default:
            return currentState
    }
}

const store = configureStore({
  reducer: {
    auth: reducer,
  },
  preloadedState,
});

export default store;