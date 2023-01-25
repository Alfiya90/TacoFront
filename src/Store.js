import {combineReducers, legacy_createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import {createTacoReducer} from "./reducers/createTacoReducer";
import {authReducer} from "./reducers/authReduscer";


let reducers = combineReducers({
    createTacoPage: createTacoReducer,
    form: formReducer,
    auth: authReducer
})

export let store = legacy_createStore(reducers)
window.store = store;