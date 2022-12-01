import React from "react";

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

/*
export const getIngredientTC = () => {
    debugger
    return async (dispatch) => {
    let data = await axios.get("http://localhost:8080/design/ingredients")
    console.log(data)
    dispatch(getIngredientAC(data));
    }
}*/
