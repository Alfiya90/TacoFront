import React from "react";
import {api} from "../api/api";
import axios from "axios";

const GET_INGREDIENT = "GET_INGREDIENT";
const CREATE_TACO_SUCCESS = "CREATE_TACO_SUCCESS";
const SET_ORDER_DATA = "SET_ORDER_DATA";

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

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NzQ4MTAyNjEsImlhdCI6MTY3NDc5MjI2MX0.tvwEbMa7hOCndtN67tGKVBP9-0M4lz3MEdpiKOu_foO_FzZ2LNGldVf-C736xLS9l3TUI184u9neuJsiYb1ywg`,
    }})

export const getIngredientsThunk =(dispatch) => {
    let data = instance.get('design/showingredients' ).then((response) =>
    {return response.data})
    /*let data = api.getIngredients();*/
    dispatch(getIngredientAC(data))

}

/*
export const getIngredientTC = () => {
    debugger
    return async (dispatch) => {
    let data = await axios.get("http://localhost:8080/design/ingredients")
    console.log(data)
    dispatch(getIngredientAC(data));
    }
}*/
