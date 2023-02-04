import React from "react";

const GET_INGREDIENT = "GET_INGREDIENT";
const CREATE_TACO_SUCCESS = "CREATE_TACO_SUCCESS";
const SET_ORDER_DATA = "SET_ORDER_DATA";

export let getIngredientAC = (ingredients) => {
    return {
        type: GET_INGREDIENT,
        ingredients
    }
}

export let createTacoAC = (taco) => {
    return {
        type: CREATE_TACO_SUCCESS,
        taco
    }
}

export let orderDataAC = (orderData) => {
    return{
        type: SET_ORDER_DATA,
        orderData
    }
}

let initialState =  {
    ingredients: [],
    creatingTaco: {},
    orderData:{}
}


export let createTacoReducer = (state = initialState, action) => {
   switch (action.type) {
       case GET_INGREDIENT: {
           return {
               ...state,
               ingredients: [... action.ingredients]
           }
       };
       case CREATE_TACO_SUCCESS: {
         return {
             ...state,
             creatingTaco: {...action.taco}
         }
       };
       case SET_ORDER_DATA: {
           return {
              ...state,
               orderData: {...action.orderData}
           }
       }
       default: return  state;
   }

    return state;
}



/*
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NzUxOTkwMjEsImlhdCI6MTY3NTE4MTAyMX0.ZJz252CelaND4k0in3ro6-ojGbf9avfBw3Fs3YcyKYAM4K6bHxBnOsQEOz8ORCBros6FU202oMxjmlr1R-Ekzg'
    }})



export const url = {
    getIngredients() {
        return instance.get('design/showingredients').then(response => {
            return response.data
        })
    }
}
export let loadIngredient = () => {
    debugger
    return dispatch => {
        instance.get('design/showingredients' ).then(data => {
            dispatch(getIngredientAC(data.data))})}
    }



export const getIngredientsThunk = () =>
    async (dispatch) => {
        let data = await url.getIngredients();
        dispatch(getIngredientAC(data))
        debugger;

    }
*/



