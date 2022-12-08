import { combineReducers } from 'redux';
import actions from "./action"

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
    switch (action.type) {
        case actions.register:
            return state = { ...state, 
                users: [...state.users, action.payload]
            }
        case "userName": 
            return state = {...state, register: {userName: action.payload}}
        case "email": 
            return state = {...state, register: {email: action.payload}}
        case "password": 
            return state = {...state, register: {password: action.payload}}
        case "passwordConfirm": 
            return state = {...state, register: {passwordConfirm: action.payload}}
        default: return state;
    }
}


let rootReducer = combineReducers({
    reducer
})

export default rootReducer;