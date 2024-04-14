import { configureStore } from "@reduxjs/toolkit"

let state = { 
    value: null,
};

const reducer = (currentState = state, action ) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...currentState, token: action.payload };
        case 'SIGN_OUT':
            return {...currentState, token: action.payload}
        case 'GET_USER_DETAILS':
            return {...currentState, user: action.payload}            

        default:
            return currentState
    }
}

const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)

export default store