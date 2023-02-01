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

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NzUxOTkwMjEsImlhdCI6MTY3NTE4MTAyMX0.ZJz252CelaND4k0in3ro6-ojGbf9avfBw3Fs3YcyKYAM4K6bHxBnOsQEOz8ORCBros6FU202oMxjmlr1R-Ekzg'
    }})

export const api = {
    getIngredients(){
        return instance.get('design/showingredients' )
    }
}



