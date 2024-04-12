import { configureStore } from "@reduxjs/toolkit"

let state = { user: null };

const reducer = (currentState = state, action ) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, user: action.payload };
        case 'SIGN_OUT':
            const list = []
            return {...currentState, list: list}

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