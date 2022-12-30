import React, {useEffect} from "react";
import {CreateTaco} from "./CreateTaco";
import {connect} from "react-redux";
import {createTacoAC, getIngredientAC} from "../reducers/createTacoReducer";
import axios from "axios";

const CreateTacoContainer = (props) => {
    useEffect(() => {loadIngredient()}, []);
    let loadIngredient = () => {
         axios.get("http://localhost:8080/design/showingredients", ).then(data => {
            props.getIngredient(data.data);})

    }


    return(
        <div>
            <CreateTaco ingredients = {props.ingredients}
                        createTaco = {props.createTaco}
                        creatingTaco = {props.creatingTaco}
                        orderData = {props.orderData}
            />
        </div>
    )
}

let mapStateToProps = (state) => {return {
    ingredients: state.createTacoPage.ingredients,
    creatingTaco: state.createTacoPage.creatingTaco,
    orderData: state.createTacoPage.orderData,
}
}
let mapDispatchToProps = (dispatch) => {
    return{
        getIngredient: (ingredients) => {dispatch (getIngredientAC(ingredients))},
        createTaco: (taco) => {dispatch(createTacoAC(taco))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(CreateTacoContainer)

