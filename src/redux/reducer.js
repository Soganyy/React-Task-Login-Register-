import { combineReducers } from 'redux';

const intialValue = {
    users: [],
    register: {
        userName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    },
    loginInput: {
        email: "",
        password: ""
    },
    loggedIn: false,
    loggedOut: false
}

function reducer(state = intialValue, action) {
    return state;
}


let rootReducer = combineReducers({
    reducer
})

export default rootReducer;