import React from   "react";
import axios from "axios";

let GET_AUTHENTICATION = "GET_AUTHENTICATION"
let GET_TOKEN = "GET_TOKEN"
let SET_AUTH_PARAM = "SET_AUTH_PARAM"

let initialState =  {
        payload: null,
        token: null,
        isAuth: false
}


    export let authReducer = (state = initialState, action) => {
        switch (action.type) {

            case GET_AUTHENTICATION: {
                return {
                    ...state,
                    payload: {...action.payload}
                }
            };
            case GET_TOKEN: {
                debugger;
                return {
                    ...state,
                    token: {...action.token}
                }
            };
            case SET_AUTH_PARAM: {
                let token = state.token
                    if(token){
                        return{
                            ...state,
                            isAuth: true
                        }
                       /* return {
                            ...state,
                            isAuth: false
                        }*/
                        }
            }

            default: return  state;
        }
        return state;
    }




export let authenticationAC = (payload) => {
    return {
        type: GET_AUTHENTICATION,
        payload
    }
}

export let getToken = (token) => {
    return {
        type: GET_TOKEN,
        token
    }
}
export let setAuthParam = () => {
    return {
        type: SET_AUTH_PARAM,
    }
}


/*export const login = (payload) => {
    return async (dispatch) => {
        let data = await  axios.post("http://localhost:8080/register", payload)
        if (data) {
            console.log(data)
            dispatch(getToken(data));
        }
    }
}*/




