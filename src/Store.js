import {combineReducers, legacy_createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import {createTacoReducer} from "./reducers/createTacoReducer";


let reducers = combineReducers({
    createTacoPage: createTacoReducer,
    form: formReducer
})

export let store = legacy_createStore(reducers)
window.store = store;