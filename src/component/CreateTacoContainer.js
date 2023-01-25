import React, {useEffect} from "react";
import {CreateTaco} from "./CreateTaco";
import {connect} from "react-redux";
import {createTacoAC, getIngredientAC} from "../reducers/createTacoReducer";
import axios from "axios";

const CreateTacoContainer = (props) => {
    useEffect(() => {loadIngredient()}, []);

    const authAxios = axios.create({
        baseURL: 'http://localhost:8080/',
        method: 'get',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NzQ1OTg0MDMsImlhdCI6MTY3NDU4MDQwM30.yVP0eFvTG0sq804cBjbKIsTCvS0T7ncl5CWMisom9kzbIzIcC5dgrQyWRQKOu3K-WCzmGbRZ3Iz8RNKxispzpw',
            'Content-Type': 'application/json',
        },

    })
    let loadIngredient = () => {
        authAxios.get("http://localhost:8080/design/showingredients", ).then(data => {
            props.getIngredient(data.data);})

    }


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

