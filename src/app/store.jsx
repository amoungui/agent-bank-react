import { configureStore } from "@reduxjs/toolkit"

let state = {
    value: null,
    list: []
};

const reducer = (currentState, action ) => {
    switch (action.type) {
        case 'SIGN_IN':
            const newData = [...currentState.list, action.payload]
            return {...currentState, list: newData}
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