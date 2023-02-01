import React, {useEffect} from "react";
import {CreateTaco} from "./CreateTaco";
import {connect} from "react-redux";
import {createTacoAC, getIngredientAC} from "../reducers/createTacoReducer";
import {api} from "../api/api";

const CreateTacoContainer = (props) => {

    useEffect(() => {loadIngredient()}, []);

    //необходимо перевести в thunk
    let  loadIngredient = () => {
            api.getIngredients().then(response => { props.getIngredient(response.data)})
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

