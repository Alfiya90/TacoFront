import axios from "axios";


const baseURL = 'https://localhost:8080'

export const api = {
    createTaco(){
        return axios.get(`${baseURL}/design/ingredients` )
            .then(response => {return response.data})
    }
}
