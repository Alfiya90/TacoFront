import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NzQ4MTAyNjEsImlhdCI6MTY3NDc5MjI2MX0.tvwEbMa7hOCndtN67tGKVBP9-0M4lz3MEdpiKOu_foO_FzZ2LNGldVf-C736xLS9l3TUI184u9neuJsiYb1ywg`,
    }})

export const api = {
    getIngredients(){
        return instance.get('design/showingredients' ).then((response) =>
        {return response.data})
    }
}
