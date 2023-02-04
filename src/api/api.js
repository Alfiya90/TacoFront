import axios from "axios";
import {store} from "../Store"


/*(function (){
    let token = store.getState().auth.token;
    let tokenT = ""
    if(token){
        axios.defaults.headers.common['Authorization'] = tokenT;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }
}())*/

let token = store.getState().auth.token;
let baseURL = 'http://localhost:8080'
export const setToken = () => {
    debugger
     token = store.getState().auth.token;
/*    if(token){
        axios.defaults.headers.common['Authorization'] = token.token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }*/
}


const instance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token?.token}`
    }})



export const api = {
    getIngredients() {
        return axios({
            method: 'get',
            url: `${baseURL}/design/showingredients`,
            headers: {
                Authorization: `Bearer ${token?.token}`
                }
        })
    },
    sendTaco(dataOrder) {
        return axios({
            method: 'post',
            url: `${baseURL}/orders`,
            headers: {
                Authorization: `Bearer ${token?.token}`
            },
            data: dataOrder
        })

    }
}

const authInstance = axios.create({
    baseURL: 'http://localhost:8080/'
   })

export const auth = {
    authenticate(payload){
      authInstance.post('authenticate',payload)
    },
    registration(payload){
        authInstance.post('registration', payload)
    }

}





