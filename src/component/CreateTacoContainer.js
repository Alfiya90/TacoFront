import React, {useEffect} from "react";
import {CreateTaco} from "./CreateTaco";
import {connect} from "react-redux";
import {createTacoAC, getIngredientAC, getIngredientsThunk} from "../reducers/createTacoReducer";
import axios from "axios";

const CreateTacoContainer = (props) => {
    debugger;
    useEffect(() => {getIngredientsThunk()}, []);

 /*   useEffect(() => {loadIngredient()}, []);

    const authAxios = axios.create({
        baseURL: 'http://localhost:8080/',
        method: 'get',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NzQ4MTAyNjEsImlhdCI6MTY3NDc5MjI2MX0.tvwEbMa7hOCndtN67tGKVBP9-0M4lz3MEdpiKOu_foO_FzZ2LNGldVf-C736xLS9l3TUI184u9neuJsiYb1ywg',
            'Content-Type': 'application/json',
        },

    })
    let loadIngredient = () => {
        authAxios.get("http://localhost:8080/design/showingredients", ).then(data => {
            props.getIngredient(data.data);})

    }*/


    return(
        <div>
            <CreateTaco ingredients = {props.ingredients}
                        createTaco = {props.createTaco}
                        creatingTaco = {props.creatingTaco}
                        orderData = {props.orderData}
                        isAuth = {props.isAuth}
            />
        </div>
    )
}

let mapStateToProps = (state) => {return {
    ingredients: state.createTacoPage.ingredients,
    creatingTaco: state.createTacoPage.creatingTaco,
    orderData: state.createTacoPage.orderData,
    isAuth: state.auth.isAuth
}
}
let mapDispatchToProps = (dispatch) => {
    return{
        getIngredient: (ingredients) => {dispatch (getIngredientAC(ingredients))},
        createTaco: (taco) => {dispatch(createTacoAC(taco))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(CreateTacoContainer)

