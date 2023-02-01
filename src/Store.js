import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import {createTacoReducer} from "./reducers/createTacoReducer";
import {authReducer} from "./reducers/authReduscer";
import thunkMiddleware from 'redux-thunk'
import thunk from "redux-thunk";


let reducers = combineReducers({
    createTacoPage: createTacoReducer,
    form: formReducer,
    auth: authReducer
})

export let store = legacy_createStore(reducers, applyMiddleware(thunk))
window.store = store;